import {useState, useEffect, useRef} from 'react'
import debounce from 'just-debounce-it';

import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../Components/Navbar';
import List from '../Components/Series/List';

//Provider
import {UserProvider} from '../context/user'

export default function Home({animes}) {
	const [page, setPage] = useState(0);
	const [series, setSeries] = useState(animes)
	const myRef = useRef();
	const debounceGetSeries = useRef();

	const getSeries = async()=>{
		const limit = 20;
		console.log("Toy aqui", page)
		await fetch(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=${limit}&page%5Boffset%5D=${page*limit}`,{
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
	debounceGetSeries.current = debounce(()=>{setPage(page+1)}, 500);

	useEffect(function () {

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
			rootMargin: '1500px'
		})
		observer.observe(myRef.current)
	},[])

	useEffect(()=>{
		if(page>0) getSeries();
	}, [page])

  return (
    <UserProvider>
    	<div style={{minHeight:"100vh", marginTop: "150px"}}>
    		<Navbar/>

	        <div className="container" >
	          	<h2 className="font-weight-bold">Animes</h2>
	        	<List series={series}/>
	        </div>
	        <footer ref={myRef}>Aplicacion desarrollada con la Api de <Link href="https://kitsu.io/"><a>Kitsu.io</a></Link></footer>
    		<style jsx>{`
    			
		          .container{
		            max-width: 960px;
		          }
    			
    		`}</style>
    	</div>
    </UserProvider>
  )
}
Home.getInitialProps = async ()=>{
  const animes = await fetch('https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0',{
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
  return {animes: animes}
}
