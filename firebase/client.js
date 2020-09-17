import * as firebase from 'firebase'
import UserContext from '../context/user'
import {useContext} from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyAkwS44uFKqN5p59aBT5KMFA6IzqOVLp-8",
  authDomain: "anime-info-c7d1a.firebaseapp.com",
  databaseURL: "https://anime-info-c7d1a.firebaseio.com",
  projectId: "anime-info-c7d1a",
  storageBucket: "anime-info-c7d1a.appspot.com",
  messagingSenderId: "547338888987",
  appId: "1:547338888987:web:4b5882ec427a0fc33b95be",
  measurementId: "G-6SVG62W80C"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Login y sing up
export const singupWithEmail = (email, password)=>{
	CreateColection
	return firebase.auth().createUserWithEmailAndPassword(email, password)
	.then(userCredentials=> {
		CreateColection(email);
		if(userCredentials) return {userCredentials}
	})
	.catch(err=>{console.log(err); return {error: err}})
}

export const loginWithEmail = (email, password)=>{
	return firebase.auth().signInWithEmailAndPassword(email, password)
	.catch(err=>{console.log(err); return {error: err}})
}

export const loginWithGoogle = ()=>{
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider).then(res=>{

		db.collection("users").doc(res.user.email).get().then(doc=>{
			if (!doc.exists) {
		        // doc.data() will be undefined in this case
		        CreateColection(res.user.email);
		        console.log("No such document!");
		    }
		}).catch(err=>{
			console.log("No hay nada", err);
		})
	})
	.catch(err=>{console.log(err); return {error: err}})
}

export const logout = async()=>{
	await firebase.auth().signOut();
}

//No tocar, esto es para verificar si el usuario esta autenticado
export const verify = ()=>{

	const {setUser, setImg} = useContext(UserContext);

	firebase.auth().onAuthStateChanged(userCredentials=>{
		if(userCredentials) {
			setImg(userCredentials.photoURL);
			setUser(userCredentials.email);
		}else{
			setUser("Nada")
			setImg("Nada")
		}
	});
}


//Firestore


export const CreateColection = (email)=>{
	db.collection("users").doc(email).set({
	    fav: [],
	    reading: [],
	    saved: [],
	    lists: [],
	    categories: [],
	    followers: []
	})
}

//Actualizaciones del usuario
export const UpdateFav = (email, name, img,id, bool, type)=>{
	const up = db.collection("users").doc(email);
	const serie = {
		id: id,
		name: name,
		poster: img,
		type: `${type}`
	}

	if(bool){
		up.update({
			fav: firebase.firestore.FieldValue.arrayRemove(serie)
		});
	}else{
		up.update({
			fav: firebase.firestore.FieldValue.arrayUnion(serie)
		});
	}
}
export const UpdateReading = (email, name, img,id, bool, type)=>{
	const up = db.collection("users").doc(email);
	const serie = {
		id: id,
		name: name,
		poster: img,
		type: `${type}`
	}

	if(bool){
		up.update({
			reading: firebase.firestore.FieldValue.arrayRemove(serie)
		});
	}else{
		up.update({
			reading: firebase.firestore.FieldValue.arrayUnion(serie)
		});
	}
}
export const UpdateSaved = (email, name, img,id, bool, type)=>{
	const up = db.collection("users").doc(email);
	const serie = {
		id: id,
		name: name,
		poster: img,
		type: `${type}`
	}

	if(bool){
		up.update({
			saved: firebase.firestore.FieldValue.arrayRemove(serie)
		});
	}else{
		up.update({
			saved: firebase.firestore.FieldValue.arrayUnion(serie)
		});
	}
}


//Obtener Datos fav,reading,saved

export const GetData = async (user)=>{
	
	if(user !="Nada"){

		return await db.collection("users").doc(user)
		.get().then(doc=>{
			return doc.data();
		})
	}
	else return {error:"Nada"};
}