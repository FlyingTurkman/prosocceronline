import styles from '../../components/styles/leagues.module.css';

export default function Leagues (){
    return(
        <div className="main">
            <div className={styles.content}>
                <div className={styles.on}>
                    <div className={styles.logo} >
                        <img className={styles.img} src="/discordicons/turkey.png"></img>
                    </div>
                </div>
                <div className={styles.arka}>
                    <div className={styles.logo} onClick={()=>{window.location.href="leagues/turkey"}}>
                        <img className={styles.img} src="/discordicons/turkey.png"></img>
                    </div>
                    <div className={styles.division} onClick={()=>{window.location.href="leagues/turkey/trdivision1"}}>
                        <img className={styles.img} src="/icons/cupblack.svg"></img>
                        <h3 className={styles.h3}>Turkish 1st Division</h3>
                    </div>
                    <div className={styles.division}>
                        <img className={styles.img} src="/icons/cupblack.svg"></img>
                        <h3 className={styles.h3}>Turkish 2nd Division</h3>
                    </div>
                </div>
            </div>
            <div style={{height:'20px',width:'100%'}}>

            </div>
            <div className={styles.content}>
                <div className={styles.on}>
                    <div className={styles.logo}>
                        <img className={styles.img} src="/discordicons/europe.webp"></img>
                    </div>
                </div>
                <div className={styles.arka}>
                    <div className={styles.logo}>
                        <img className={styles.img} src="/discordicons/europe.webp"></img>
                    </div>
                    <div className={styles.division}>
                        <img className={styles.img} src="/icons/cupblack.svg"></img>
                        <h3 className={styles.h3}>Europe 1st Division</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}