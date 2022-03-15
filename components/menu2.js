import styles from './styles/menu2.module.css'
import cookies from 'js-cookie'
export default function Menu2({lang, log}){
    return(
        <div className={styles.ustmenu}>
            <div className={styles.menubtn} onClick={()=>{window.location.href="/"}}>
                <img className={styles.icon} src="/icons/menu/home.svg"></img>
            </div>
            <div className={styles.menubtn}>
                <img className={styles.icon} src="/icons/menu/hub.svg"></img>
            </div>
            <div className={styles.menubtn}>
                <img className={styles.icon} src="/icons/menu/profile.svg"></img>
                {log=="true" &&
                <div className={styles.submenu}>
                    <div className={styles.subbtn} onClick={()=>{window.location.href="/account"}}>
                        Profile
                    </div>
                    <div className={styles.subbtn} onClick={logoutclick}>
                        Logout
                    </div>
                </div>
                }
                {log=="false" &&
                <div className={styles.submenu}>
                    <div className={styles.subbtn} onClick={()=>{window.location.href="/login"}}>
                        Login
                    </div>
                    <div className={styles.subbtn} onClick={()=>{window.location.href="/signup"}}>
                        Sign Up
                    </div>
                </div>
                }
            </div>
        </div>
    )
    function logoutclick(){
        cookies.remove("login")
        cookies.remove("username")
        cookies.remove("password")
        cookies.remove("team")
        window.location.href="/";
    }
}