import Navbar from '../Components/Navbar';
import Head from 'next/head';
export default function Home() {
  return (
  	<div style={{minHeight:"100vh"}}>
  		<Head>
  			<title>Index</title>
  		</Head>
  		<Navbar/>

  		<h1>Hola Mundo XD</h1>
  	</div>

  )
}