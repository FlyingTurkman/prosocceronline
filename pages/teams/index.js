import styles from '../../components/styles/teams.module.css'
import Pos7 from '../../components/pos7'
export default function Teams (){
    return(
        <div className="main">
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <div className={styles.front}>
                            <img className={styles.imglogo} src="/lasisx.png" ></img>
                        </div>
                        <div className={styles.back}>
                            <div className={styles.color1}>

                            </div>
                            <div className={styles.color2}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.header}>
                        LaSisX
                    </div>
                    <div className={styles.pos}>
                        <Pos7>
                        </Pos7>
                    </div>
                    <div className={styles.trophy}> 
                        <div className={styles.card}>
                            <div className={styles.imgcup}>
                                <img className={styles.cupimg} src="/icons/cup1.png"></img>
                            </div>
                            <div className={styles.title}>
                                Europe Winter League 2022
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgcup}>
                                <img className={styles.cupimg} src="/icons/cup2.png"></img>
                            </div>
                            <div className={styles.title}>
                                Turkish 1st Division 2022
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgcup}>
                                <img className={styles.cupimg} src="/icons/cup3.png"></img>
                            </div>
                            <div className={styles.title}>
                                Turkish Cup 2022
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgcup}>
                                <img className={styles.cupimg} src="/icons/cup2.png"></img>
                            </div>
                            <div className={styles.title}>
                                Turkish 1st Division 2021
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.imgcup}>
                                <img className={styles.cupimg} src="/icons/cup2.png"></img>
                            </div>
                            <div className={styles.title}>
                                Turkish 1st Division 2020
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}