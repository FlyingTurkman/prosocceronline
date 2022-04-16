import styles from '../components/styles/menu3.module.css'

export default function Menu3() {
    return(
        <div className={styles.menu}>
            <div className={styles.sec}>
                <div className={styles.menubtn}>
                    Portal
                </div>
                <div className={styles.hr}>
                </div>
                <div className={styles.menubtn}>
                    About
                </div>
                <div className={styles.hr}>
                </div>
                <div className={styles.menubtn}>
                    Contact
                </div>
            </div>
        </div>
    )
}