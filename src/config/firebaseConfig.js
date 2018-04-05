import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyB0O9ypAXyN73CjfUluYQJyWHUxbYRJ_mw",
	authDomain: "adminpanel-9cf49.firebaseapp.com",
	databaseURL: "https://adminpanel-9cf49.firebaseio.com",
	projectId: "adminpanel-9cf49",
	storageBucket: "adminpanel-9cf49.appspot.com",
	messagingSenderId: "875414261654"
}

firebase.initializeApp(config);

export function firebaseListener(func) {
	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	  	console.log("User log in success", user);
	    func(true, user)
	  } else {
	  	console.log("User log in failed", user);
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	});
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
