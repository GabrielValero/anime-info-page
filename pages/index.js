import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../Components/Navbar';
import List from '../Components/Series/List';

//Provider
import {UserProvider} from '../context/user'

export default function Home({animes, mangas}) {
  return (
    <UserProvider>
    	<div style={{minHeight:"100vh"}}>
    		<Navbar/>
    		<header className="d-flex flex-column align-items-center">
    		  <div className="header">

          </div>

          <div className="Options col-xl-10">
            <Link href="/mangas">
              <a className="option">
                <img src="/images/SoloLevelin.png" alt="SoloLeveling Img" />
                <h2>MANGA</h2>
              </a>
            </Link>
            <Link href="/animes">
              <a className="option">
                <img src="/images/kimetsuNoYaiba.png" alt="KimetsuNoYaiba Img" />
                <h2>ANIME</h2>
              </a>
            </Link>
          </div>
        </header>
        <div className="container">
          <h2 className="font-weight-bold">Anime Trending</h2>
        <List series={animes}/>
        </div>
        <div className="container mt-5">
          <h2 className="font-weight-bold">Manga Trending</h2>
          <List series={mangas}/>
        </div>
    		<style jsx>{`
    			header{
    				position: relative;
    			}
          .header{
            width: 100%;
            height: 90vh;
            background-size: cover;
            background-position: bottom; 
            background-image: url('/images/Group 21.png');
          }
    			.Options{
    				position: relative;
    				bottom: 0;
    				display: flex;
    				flex-wrap:wrap;
    				justify-content: space-around;
    				transform: translateY(-50%);
    			}

    			.option{
    				display: flex;
    				align-items: center;
    				justify-content: center;
    				position: relative;
    			}
    			.option img{
    				width: 400px;
    				margin: 30px;
    				border-radius: 15px;
    			}
    			.option h2{
    				position: absolute;
    				color: white;
    				font-weight: 700;
    				padding:0;
    				margin:0;
    				z-index: 2;
    			}
          .container{
            max-width: 960px;
          }
    			@media(max-width:950px){
    				.option img{
    					width: 60%; 
    				}
    			}
    			@media(max-width:650px){
    				.option{
    					margin: 10px;
    				}
    				.option img{
    					width: 70%;
    					margin: 10px;
    				}
    			}
    			@media(max-width:450px){
    				.option{
    					margin: 10px;
    				}
    				.option img{
    					width: 80%;
    				}
            .header{
              height: 70vh;
            }
    			}
    		`}</style>
    	</div>
    </UserProvider>
  )
}
Home.getInitialProps = async ()=>{
  const animes = await fetch('https://kitsu.io/api/edge/trending/anime',{
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

  const mangas = await fetch('https://kitsu.io/api/edge/trending/manga',{
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
  )
  return {animes: animes, mangas:mangas}
}
