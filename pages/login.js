import styles from '../components/styles/singup.module.css';
import { useEffect, useState } from 'react';
import en from '../lang/en';
import tr from '../lang/tr'
import cookies from 'js-cookie';
import { loginfs } from '../utils/loginfs';

const lang = cookies.get("lang")||"en";


export default function Login(){
    const [l,setl]=useState(en);
    const [lc,setlc]=useState(false);
    useEffect(()=>{
        if (!lc) {
            if (lang == "en") {
                setl(en)
            } else if (lang == "tr") {
                setl(tr)
            }
            setlc(true);
        }
    },[])
    return(
        <div className="main">
            <div className={styles.content}>
                <div className={styles.container}>
                    <input id='inputusername' className={styles.input} placeholder={l.username} type="text"></input>
                </div>
                <div className={styles.container}>
                    <input id='inputpass' className={styles.input} placeholder={l.password} type="password"></input>
                </div>
            </div>
            <button className={styles.button} onClick={login}>{l.login}</button>
            <div className={styles.content}>
                <a className={styles.a}>{l.fmp}</a>
                <a className={styles.a} style={{float:'right'}}>{l.signup}</a>
            </div>
        </div>
    )
    async function login(){
        let username,password;
        username=document.getElementById("inputusername").value
        password=document.getElementById("inputpass").value
        loginfs({username,password});
    }
}