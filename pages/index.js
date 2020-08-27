import Navbar from '../Components/Navbar';
import Head from 'next/head';
export default function Home() {
  return (
  	<div style={{minHeight:"100vh"}}>
  		<Head>
  			<title>Index</title>
  		</Head>
  		<Navbar/>
  		<header className="header">
  			<div className="Options col-xl-10">
  				<div className="option">
	  				<img src="/images/SoloLevelin.png" alt="SoloLevelin Img" />
	  				<h2>MANGA</h2>
	  			</div>
	  			<div className="option">
	  				<img src="/images/KimetsuNoYaiba.png" alt="KimetsuNoYaiba Img" />
	  				<h2>ANIME</h2>
	  			</div>
	  			</div>
  		</header>
  		<style jsx>{`
  			header{
  				position: relative;
  				height: 90vh;
  				display: flex;
  				justify-content: center;
  				background-size: cover;
  				background-position: bottom; 
  				background-image: url('/images/Group 21.png');
  			}
  			.Options{
  				position: absolute;
  				bottom: 0;
  				display: flex;
  				flex-wrap:wrap;
  				justify-content: space-around;
  				transform: translateY(50%);
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
  				header{
  					height: 70vh;
  				}
  			}
  		`}</style>
  	</div>
  )
}