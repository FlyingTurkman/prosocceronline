import styles from '../components/styles/index.module.css';
import { useEffect, useState } from 'react';
import en from '../lang/en';
import tr from '../lang/tr'
import cookies from 'js-cookie';
import Twitch from '../components/twitch';
import Match from '../components/match';

const lang = cookies.get("lang")||"en";
const log=cookies.get("login")||"false";
export default function Home() {
  const [i,seti]=useState(1);
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
return (
  <div className="main">
    {!login&&
    <>
    <div className={styles.content}>
      <div className={styles.navbar}>
        <img className={styles.arrowp} src='/icons/arrow.svg' onClick={navp}></img>
        <img className={styles.arrown} src='/icons/arrow.svg' onClick={navn}></img>
      </div>
      <img className={styles.img} src={`/img/main/${i}.jpg`}></img>
      <div className={styles.info} style={{display:'none'}}>
        <h1 className={styles.h1}>{l.info1}</h1>
        <div className={styles.buttons}>
          <button className={styles.buttonbuy}>{l.buynow}</button>
          <button className={styles.buttonwatch}>{l.trailer}</button>
        </div>
      </div>
      <iframe className={styles.info} src="https://store.steampowered.com/widget/1583320/" frameBorder="0" height="200"></iframe>
    </div>
    <div className={styles.content}>
      <div className={styles.container1}>
        <h1 className={styles.h11}>{l.whypso}</h1>
        <h2 className={styles.h2}>{l.info1}</h2>
      </div>
      <div className={styles.container2}>
        <div className={styles.card}>
          <h3 className={styles.h3}>{l.competitive}</h3>
          <img className={styles.cardimage} src='/icons/leaderboard.svg'></img>
        </div>
        <div className={styles.card}>
          <h3 className={styles.h3}>{l.customize}</h3>
          <img className={styles.cardimage} src='/icons/customize.svg'></img>
        </div>
        <div className={styles.card}>
          <h3 className={styles.h3}>{l.fairplay}</h3>
          <img className={styles.cardimage} src='/icons/fairplay.svg'></img>
        </div>
        <div className={styles.card}>
          <h3 className={styles.h3}>{l.funny}</h3>
          <img className={styles.cardimage} src='/icons/funny.svg'></img>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <div className={styles.container3}>
        <img src='/icons/group.svg' className={styles.contimg}></img>
        <h1 className={styles.h12}>{l.createteam}</h1>
      </div>
      <div className={styles.container3}>
        <h1 className={styles.h12}>{l.editteam}</h1>
        <img src='/icons/edit.svg' className={styles.contimg}></img>
      </div>
      <div className={styles.container3}>
        <img src='/icons/table.svg' className={styles.contimg}></img>
        <h1 className={styles.h12}>{l.joinleague}</h1>
      </div>
      <div className={styles.container3}>
        <h1 className={styles.h12}>{l.becomestar}</h1>
        <img src='/icons/graph.svg' className={styles.contimg}></img>
      </div>
    </div>
    </>
    }
    {login&&
    <>
    <Twitch>
      
    </Twitch>
    <Match>
      
    </Match>
    </>
    }
  </div>
)
  function navp(){
    if(i!=1){
    seti(i-1);
    }else if(i==1){
    seti(4);
    }
  }
  function navn(){
    if(i!=4){
    seti(i+1);
    }else if(i==4){
    seti(1);
    }
  }
}

