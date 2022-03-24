import styles from '../components/styles/menu.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import en from '../lang/en';
import tr from '../lang/tr'
import Flags from 'country-flag-icons/react/3x2'
import cookies from 'js-cookie';

export default function Menu({lang,log}){
    const [l,setl]=useState(en);
    const [lc,setlc]=useState(false);
    useEffect(()=>{
        if(!lc){
        if(lang=="en"){
        setl(en)
        }else if(lang=="tr"){
        setl(tr)
        }
        setlc(true);
        }
    },[])
return(
    <div className={styles.menu}>
        <div className={styles.inmenu}>
            <div className={styles.nav}>
                <div className={styles.menunav} onClick={()=>{window.location.href="/leagues"}}>
                    <img src='/icons/league.svg' className={styles.icon}></img>
                    <h1 className={styles.h1}>{l.leagues}</h1>
                </div>
                <div className={styles.menunav}>
                    <img src='/icons/teams.svg' className={styles.icon}></img>
                    <h1 className={styles.h1}>{l.teams}</h1>
                </div>
                <div className={styles.menunav}>
                    <img src='/icons/players.svg' className={styles.icon}></img>
                    <h1 className={styles.h1}>{l.players}</h1>
                </div>
                <div className={styles.menunav}>
                    <img src='/icons/prizes.svg' className={styles.icon}></img>
                    <h1 className={styles.h1}>{l.prizes}</h1>
                </div>
                <div className={styles.menunav}>
                    <img src='/icons/matches.svg' className={styles.icon}></img>
                    <h1 className={styles.h1}>{l.matches}</h1>
                </div>
            </div>
            <div className={styles.nav2}>
                {log=="true"&&
                    <div className={styles.topnav}>
                        <div className={styles.menunav} onClick={()=>{window.location.href="/account"}}>
                            <img src='/icons/account.svg'  className={styles.icon} ></img>
                            <h1 className={styles.h1}>{l.account}</h1>
                        </div>
                        <div className={styles.menunav} onClick={logoutclick}>
                            <img src='/icons/logout.svg' className={styles.icon} ></img>
                            <h1 className={styles.h1}>{l.logout}</h1>
                        </div>
                    </div>
                }
                {log=="false"&&
                    <div className={styles.topnav}>
                        <div className={styles.menunav} onClick={()=>{window.location.href="/signup"}}>
                            <img src='/icons/signup.svg' className={styles.icon}></img>
                            <h1 className={styles.h1}>{l.signup}</h1>
                        </div>
                        <div className={styles.menunav} onClick={()=>{window.location.href="/login"}}>
                            <img src='/icons/login.svg' className={styles.icon}></img>
                            <h1 className={styles.h1}>{l.login}</h1>
                        </div>
                    </div>
                }
                <div className={styles.disnav}>
                    <div className={styles.menunav2}>
                        <img src='/icons/discord.svg' className={styles.icon}></img>
                        <h1 className={styles.h1}>{l.prosocceronline}</h1>
                    </div>
                    <div className={styles.menunav2}>
                        <img src='/icons/discord.svg' className={styles.icon}></img>
                        <h1 className={styles.h1}>{l.southamerica}</h1>
                    </div>
                    <div className={styles.menunav2}>
                        <img src='/icons/discord.svg' className={styles.icon}></img>
                        <h1 className={styles.h1}>{l.europe}</h1>
                    </div>
                    <div className={styles.menunav2}>
                        <img src='/icons/discord.svg' className={styles.icon}></img>
                        <h1 className={styles.h1}>{l.korea}</h1>
                    </div>
                    <div className={styles.menunav2}>
                        <img src='/icons/discord.svg' className={styles.icon}></img>
                        <h1 className={styles.h1}>{l.turkey}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.navmenu}>
            <div className={styles.btn} onClick={()=>{window.location.href="/"}}>
            Pro Soccer Online
            </div>
            <div className={styles.btn}>
            {l.buygame}
            </div>
            <div className={styles.btn}>
            {l.aboutus}
            </div>
        </div>
        <div className={styles.flags}>
            <Flags.US title="United States" className={styles.flag} onClick={enlang}/>
            <Flags.TR title="Turkey" className={styles.flag} onClick={trlang}/>
        </div>
            <div className={styles.socials}>
                <img className={styles.socialicon} src="/icons/social.svg"></img>
                <div className={styles.list}>
                    <img className={styles.socialicon} src="/icons/twitch.svg"></img>
                    <img className={styles.socialicon} src="/icons/youtube.svg"></img>
                    <img className={styles.socialicon} src="/icons/instagram.svg"></img>
                    <img className={styles.socialicon} src="/icons/twitter.svg"></img>
                </div>
            </div>
    </div>
)
    function enlang(){
    cookies.set("lang","en",{expires:24*90})
    window.location.href="/";
    }
    function trlang(){
    cookies.set("lang","tr",{expires:24*90})
    window.location.href="/";
    }
    function logoutclick(){
        cookies.remove("login")
        cookies.remove("username")
        cookies.remove("password")
        cookies.remove("team")
        window.location.href="/";
    }
}
