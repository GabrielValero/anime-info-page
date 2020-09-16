import {useState, useEffect, useContext} from 'react';
import {useRouter} from 'next/router';
import UserContext from '../../context/user'
import {UpdateFav, UpdateReading, UpdateSaved, GetData} from '../../firebase/client';

export default function Botons({attributes, id, type}){

	const {user} = useContext(UserContext);

	const [fav, setFav] = useState(false);
	const [reading, setReading] = useState(false);
	const [saved, setSaved] = useState(false);


	const router = useRouter();

	useEffect(()=>{
		let mounted = true

		if(user !== "Nada"){
			GetData(user).then(res=>{
				let i=0;
				if (mounted) {

					if(res.fav.length != 0 ){	
						do{
							if(res.fav[i].id == id) {
								setFav(true)
							}
							i++;
						}while(res.fav[i-1].id != id && i<res.fav.length);
					}
					i=0;
					if(res.reading.length != 0 ){	
						do{
							if(res.reading[i].id == id) {
								setReading(true)
							}
							i++;
						}while(res.reading[i-1].id != id && i<res.reading.length)
					}
					i=0;
					if(res.saved.length != 0 ){	
						do{
							if(res.saved[i].id == id) {
								setSaved(true)
							}
							i++;
						}while(res.saved[i-1].id != id && i<res.saved.length)
					}
				}
			})
		}else{
			if (mounted) {
				setFav(false)
				setReading(false)
				setSaved(false)
			}
		}
		return function cleanup() {
            mounted = false
        }
	}, [user])


	const handlerFav = ()=>{
		if(user == 'Nada') router.push('/login');
		else if(fav == false){
		 setFav(true);
		 UpdateFav(user, attributes.canonicalTitle,attributes.posterImage.small, id, fav, type) 
		}
		else{
		 	setFav(false);
		 	UpdateFav(user, attributes.canonicalTitle,attributes.posterImage.small, id, fav, type) 
		}
	}
	const handlerReading = ()=>{
		if(user == 'Nada') router.push('/login');
		else if(reading == false){
		 	setReading(true);
		 	UpdateReading(user, attributes.canonicalTitle, attributes.posterImage.small,id, reading, type)
		}
		else{
		 setReading(false);
		 UpdateReading(user, attributes.canonicalTitle, attributes.posterImage.small,id, reading, type)
		}
	}
	const handlerSaved= ()=>{
		if(user == 'Nada') router.push('/login');
		else if(saved == false){
		 	setSaved(true);
		 	UpdateSaved(user, attributes.canonicalTitle, attributes.posterImage.small,id, saved, type) 
		}
		else{
		 	setSaved(false);
		 	UpdateSaved(user, attributes.canonicalTitle, attributes.posterImage.small,id, saved, type) 
		}
	}

	return(
		<div className="botons">
			<div className="heart" onClick={handlerFav}>
				<svg width="50%" height="50%" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				  	<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
				</svg>
			</div>
			<div className="book" onClick={handlerReading}>
				<svg width="50%" height="50%" viewBox="0 0 16 16" className="bi bi-book-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				  <path fillRule="evenodd" d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
				</svg>
			</div>
			<div className="bookmark" onClick={handlerSaved}>
				<svg width="50%" height="50%" viewBox="0 0 16 16" className="bi bi-bookmark-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				  <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4.5 4.5a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5V4.5z"/>
				</svg>
			</div>
			<style jsx>{`
				.botons{
					width: 100%;

					display: flex;
					justify-content: space-around;
				}
				.botons div{
					width: 60px;
					height: 60px;
					margin-top: 30px;
					display: flex;
					justify-content: center;
					align-items: center;
					position: relative;
					border-radius: 100px;
					box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
				}
				.heart{
					transition-duration: 500ms;
					color: ${fav==false ? "#FF002E" : "white" };
					background: ${fav==false ? "white" : "#FF002E"};
				}
				.heart:after{
					content: 'Favorito';
					color: #323232;
					font-weight: bold;
					bottom: -50%;
					position: absolute;
				}
				.book{
					transition-duration: 500ms;
					color: ${ reading == false ? "#0ABD27" : "white" };
					background:${ reading == false ? "white" : "#0ABD27"} ;
				}
				.book:after{
					content: 'Viendo';
					color: #323232;
					font-weight: bold;
					bottom: -50%;
					position: absolute;
				}
				.bookmark{
					transition-duration: 500ms;
					color: ${ saved == false ? "#6100FF" : "white" };
					background: ${ saved == false ? "white" :"#6100FF"};
				}
				.bookmark:after{
					content: 'Guardar';
					color: #323232;
					font-weight: bold;
					bottom: -50%;
					position: absolute;
				}
				@media(max-width: 765px){
					.botons div{
						margin-top: 10px;
					}
				}
			`}</style>
		</div>
	)
}