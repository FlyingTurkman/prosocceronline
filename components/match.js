import styles from './styles/match.module.css';
import Pos7 from './pos7';
export default function Match(){
    return(
        <div className={styles.content}>
            <div className={styles.header}>
                <img className={styles.logo} src='lasisx.png'></img>
                <div className={styles.head}>
                    <h1 className={styles.h1}>Turkish First Division</h1>
                    <h2 className={styles.h2}>LaSisX-Aedern</h2>
                    <h2 className={styles.h2}>13th March</h2>
                    <h2 className={styles.h2}>20:30 GMT+3</h2>
                </div>
                <img className={styles.logo} src='aedern.png'></img>
            </div>
            <div className={styles.body}>
                <div className={styles.pos}>
                    <Pos7></Pos7>
                </div>
                <div className={styles.pos}>
                <Pos7></Pos7>
                </div>
            </div>
        </div>
    )
}