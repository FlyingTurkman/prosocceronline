import styles from '../components/styles/twitch.module.css';

export default function Twitch(){
    return(
        <div className={styles.content}>
            <div className={styles.head}>
                <div className={styles.img}>
                    <img className={styles.icon} src="/icons/twitch2.svg"></img>
                </div>
                <div className={styles.header}>
                    <div className={styles.h1}>Turkish First Division</div>
                    <div className={styles.h2}>LaSisX-Aedern</div>
                </div>
                <div className={styles.img}>
                    <img className={styles.icon2} src="/streamers/leblebici.png"></img>
                </div>
            </div>
            <div className={styles.body}>
                <iframe
                    src="https://player.twitch.tv/?channel=leeblebici&parent=https://prosocceronline.vercel.app&autoplay=false"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true"
                    height="100%"
                    width="100%">
                </iframe>
            </div>
        </div>
    )
}