import styles from '../../../components/styles/leagues.module.css';

export default function Turkey(){
    return(
        <div className="main">
            <div className={styles.container} onClick={()=>window.location.href="turkey/trdivision1"}>
                <img className={styles.imglogo} src='/icons/cupblack.svg'></img>
                <h2 className={styles.h22}>Turkey 1st Division</h2>
            </div>
            <div className={styles.container}>
                <img className={styles.imglogo} src='/icons/cupblack.svg'></img>
                <h2 className={styles.h22}>Turkey 2nd Division</h2>
            </div>
        </div>
    )
}