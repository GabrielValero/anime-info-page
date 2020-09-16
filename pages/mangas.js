import {useState, useEffect, useRef} from 'react'
import debounce from 'just-debounce-it';

import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../Components/Navbar';
import List from '../Components/Series/List';

//Provider
import {UserProvider} from '../context/user'

export default function Home({mangas}) {
	const [page, setPage] = useState(0);
	const [search, setSearch] = useState('');
	const [series, setSeries] = useState(mangas)
	const [seriesFetch, setSeriesFetch] = useState([])
	const myRef = useRef();
	const debounceGetSeries = useRef();
	const mySearch = useRef();

	const getSeries = async()=>{
		const limit = 20;
		console.log("Toy aqui", page)
		await fetch(`https://kitsu.io/api/edge/manga?page%5Blimit%5D=${limit}&page%5Boffset%5D=${page*limit}`,{
		    headers:{
		      "Accept": "application/vnd.api+json",
		      "Content-Type": "application/vnd.api+json"
		    }
		  })
		  .then(res=>{
		     return res.json();
		  })
		  .then(response=> {
		      const {data} = response;

		      setSeries(series => series.concat(data));
		    }
		  );
	}

	const getSearch = async ()=>{
		console.log("Ola ke ace")
		await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${search}&page%5Blimit%5D=20&page%5Boffset%5D=0`,{
	    headers:{
	      "Accept": "application/vnd.api+json",
	      "Content-Type": "application/vnd.api+json"
	    }
	  })
	  .then(res=>{
	     return res.json();
	  })
	  .then(response=> {
	      const {data} = response;
	      if(data != search){
	       setSeriesFetch(data);
	       console.log(search);
	     }
	    }
	  );
	}

	debounceGetSeries.current = debounce(()=>{setPage(page+1)}, 500);

	const handleSubmit = (e)=>{
		e.preventDefault();
		setSearch(mySearch.current.value);

	}
	
	useEffect(()=>{
		const onChange = (entries)=>{
			const el = entries[0];
			setTimeout(()=>{
				if(el.isIntersecting){
					console.log(el.isIntersecting);
					debounceGetSeries.current();
				}
			}, 1000)
		}
		const observer = new IntersectionObserver(onChange, {
			rootMargin: '1300px'
		})

		observer.observe(myRef.current);

	}, [])

	useEffect(()=>{
		if(page>0) getSeries();
	}, [page])
	
	useEffect(()=>{
		if(search!=="")getSearch();
		else setSeriesFetch([]);
	}, [search])


  return (
    <UserProvider>
    	<div style={{minHeight:"100vh", marginTop: "150px"}}>
    		<Navbar/>

    		<form action="" method="POST" onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center"> <input type="text" placeholder="¿Qué buscas?" ref={mySearch}/> 
	    		<button type="submit">
	    			<svg width="80%" height="80%" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
						  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
						</svg>
					</button>
				</form>
	        
					{seriesFetch.length > 0 ? 
						<div className="mx-md-5">
							<h2>Busqueda de {search}</h2>
							<List series={seriesFetch} id={"id"}/>
						</div>: null
					}
	        <div className="container" >
	          	<h2 className="font-weight-bold">Mangas</h2>
	        		<List series={series} id={"nombre"}/> 
	        </div>
	        <footer ref={myRef}>Aplicacion desarrollada con la Api de <Link href="https://kitsu.io/"><a>Kitsu.io</a></Link></footer>
    		<style jsx>{`
					input{
						width: 300px;
						height: 50px;
						padding: 0 20px;
						font-weight: bold;
						color: rgba(0,0,0,0.7);
						border: none;
						border-radius: 5px;
						box-shadow: 0 30px 80px #A2A1A1;
					}
					button{
						width: 50px;
						height: 50px;
						margin-left: 20px;
						background: #6100FF;
						color: white;
						border: none;
						border-radius: 5px;
						box-shadow: 0 30px 80px #A2A1A1;
					}
          .container{
            max-width: 960px;
          }
    			
    		`}</style>
    	</div>
    </UserProvider>
  )
}
Home.getInitialProps = async ()=>{
  const mangas = await fetch('https://kitsu.io/api/edge/manga?page%5Blimit%5D=20&page%5Boffset%5D=0',{
    headers:{
      "Accept": "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json"
    }
  })
  .then(res=>{
     return res.json();
  })
  .then(response=> {
      const {data} = response;

      return data;
    }
  );
  return {mangas: mangas}
}
