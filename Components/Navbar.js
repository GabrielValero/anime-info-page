import {useContext} from 'react';
import Head from 'next/head';
import Link from 'next/link';


//Components
import Toggle from './navbar/buttons';
import PrincipalOptions from './navbar/barraNavbar';
import BarraToggle from './navbar/barraToggle';

//Context
import UserContext from '../context/user'

export default function Navbar(){
	const {user, imgUser} = useContext(UserContext);
	
	return(
		<nav className="navbar">
			<Head>
	          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous"/>
	          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
	          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossOrigin="anonymous"></script>
	          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
	          
	          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

	          <link href="/images/Mini bear.png?24" rel="icon" alt="Logo"/> 
	          
	        </Head>
				
			<Toggle/>
			<PrincipalOptions user={user}/>
			<BarraToggle user={user} imgUser={imgUser}/>
			
			<style jsx>{`
				nav{
					width: 100%;
					height: 90px;
					background: #30273F;
					padding: 0;
					position: fixed;
					z-index: 1024;
					top:0;
				}
				
			`}</style>
			<style jsx global>{`
				html{
					max-width: 100vw;
					overflow-x: hidden;
				}
				body{
					min-height: 100%;
					max-width: 100vw;
					overflow-x: hidden;
					padding: 0;
					margin: 0;
					background: #EDF1F5;
				}
			`}</style>
		</nav>
	);
}