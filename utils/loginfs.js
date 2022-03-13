import { initializeApp } from "firebase/app";
import { getFirestore,collection, query,where,limit,getDocs} from "firebase/firestore";
import cookies from 'js-cookie';
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


async function loginfs({username,password}){
    const userRef = collection(db,"players");
    const q = query(userRef,where("username","==",username),where("password","==",password),limit(1));
    const res = await getDocs(q);
    const data = res.docs.map((d)=>{
        return({
            username:d.data().username,
            password:d.data().password,
            team:d.data().team || "free",
            mod:d.data().mod||false,
            admin:d.data().mod||false,
            streamer:d.data().streamer||false
        }
        )
    })
    cookies.set("login","true",{expires:24*90});
    cookies.set("username",data.map(d=>d.username).toString(),{expires:24*90});
    cookies.set("password",data.map(d=>d.password).toString(),{expires:24*90});
    cookies.set("team",data.map(d=>d.team),{expires:24*90});
    window.location.href="/";
}
export {loginfs}