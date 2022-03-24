import styles from '../../components/styles/leagues.module.css';

export default function Leagues (){
    return(
        <div className="main">
            <div className={styles.map}>
                <h1>Europe</h1>
                <img className={styles.imgmap} src="/maps/europe.png"></img>
                <div className={styles.pins}>
                    <div className={styles.pineu}>
                        <img className={styles.pinimgeu} src="/discordicons/europe.png"></img>
                    </div>
                    <div className={styles.pintr} onClick={()=>{window.location.href="/leagues/turkey"}}>
                        <img className={styles.pinimgtr} src="/discordicons/turkey.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}