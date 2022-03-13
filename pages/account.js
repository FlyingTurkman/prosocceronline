import styles from '../components/styles/account.module.css';
import { useEffect, useReducer, useState } from 'react';
import en from '../lang/en';
import tr from '../lang/tr'
import cookies from 'js-cookie';


const SteamAuth = require("node-steam-openid");

const lang = cookies.get("lang")||"en";
const log=cookies.get("login")||"false";

const link="https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7BE2E2121FC86CF74C07DF00A5AFF187&steamids=76561198408128994";
const apis="7BE2E2121FC86CF74C07DF00A5AFF187";

export default function Account (){
    const [l,setl]=useState(en);
    const [lc,setlc]=useState(false);
    const [login,setlogin]=useState();
    useEffect(()=>{
        if(!lc){
          if(lang=="en"){
          setl(en)
          }else if(lang=="tr"){
          setl(tr)
          }
          setlc(true);
        }
        if(log=="true"){
          setlogin(true);
        }else{
          setlogin(false);
        }
      },[])
    return(
        <div className="main">
            <div className={styles.content}>
              <div className={styles.container}>
                <img className={styles.img} src='/icons/accountblack.svg'></img>
                <h2 className={styles.h2}>Sharkman</h2>
              </div>
              <div className={styles.container}>
                <img className={styles.img} src='/icons/teamblack.svg'></img>
                <h2 className={styles.h2}>LaSisX</h2>
              </div>
              <div className={styles.container}>
                <div className={styles.pos}>
                  LW
                </div>
                <h2 className={styles.h2}>LW, RW</h2>
              </div>
              <div className={styles.container}>
                <img className={styles.img} src='/icons/price.svg'></img>
                <h2 className={styles.h2}>100.000</h2>
              </div>
              <div className={styles.container}>
                <img className={styles.img} src='/icons/steamblack.svg'></img>
                <h2 className={styles.h2}>Sharkman005</h2>
              </div>
              <div className={styles.container}>
                <img className={styles.img} src='/icons/discordblack.svg'></img>
                <h2 className={styles.h2}>Sharkman#5242</h2>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.sec}>
                <img className={styles.img2} src="/icons/emailblack.svg"></img>
                <h3 className={styles.h3}>asdasdasdsad@hotmail.com</h3>
                <img className={styles.img3} src="/icons/settingsblack.svg"></img>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.sec}>
                <img className={styles.img2} src="/icons/teamblack.svg"></img>
                <h3 className={styles.h3}>LaSisX</h3>
                <img className={styles.img3} src="/icons/cancelblack.svg" alt='Leave Team'></img>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.sec}>
                <div className={styles.pos2}>
                  LW
                </div>
                <h3 className={styles.h3}>LW, RW</h3>
                <img className={styles.img3} src="/icons/settingsblack.svg"></img>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.sec}>
                <img className={styles.img2} src="/icons/steamblack.svg"></img>
                <h3 className={styles.h3}>Sharkman005</h3>
                <img className={styles.img3} src="/icons/linkblack.svg" alt='Leave Team'></img>
              </div>
            </div>
            <div className={styles.content2}>
              <div className={styles.sec}>
                <img className={styles.img2} src="/icons/discordblack.svg"></img>
                <h3 className={styles.h3}>Sharkman#5242</h3>
                <img className={styles.img3} src="/icons/linkblack.svg" alt='Leave Team'></img>
              </div>
            </div>
        </div>
    )
}