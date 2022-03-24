
import { initializeApp } from "firebase/app";
import { getFirestore,collection, setDoc,doc, getDoc } from "firebase/firestore";
import en from '../lang/en';

const firebaseConfig = {
    apiKey: "AIzaSyCoQYqwy-Nw52SR0hasw52ldPgOBr8rpMo",
    authDomain: "psoleague-88e20.firebaseapp.com",
    projectId: "psoleague-88e20",
    storageBucket: "psoleague-88e20.appspot.com",
    messagingSenderId: "319131661382",
    appId: "1:319131661382:web:836be7de76bc6474960647",
    measurementId: "G-X61NXPCC5H"
};

const app=initializeApp(firebaseConfig);

const db = getFirestore(app);


async function singupfs({username,email,pass,country,pos1,pos2}){
    usernamecheck({username,email,pass,country,pos1,pos2});
}

async function usernamecheck({username,email,pass,country,pos1,pos2}){

    const docRef=doc(db,"players",username);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        alert(en.unat);
    }else{
        newuser({username,email,pass,country,pos1,pos2});
    }

}

async function newuser({username,email,pass,country,pos1,pos2}){
    const res = await setDoc(doc(db,"players",username),{
        username,
        email,
        password:pass,
        firstpos:pos1,
        secondpos:pos2,
        country,
        captain:false,
        mod:false,
        price:100000
    });
    alert(en.usc);
    window.location.href="/"
}

export {singupfs}