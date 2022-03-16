import styles from '../../components/styles/players.module.css'

export default function Players(){
    return(
        <div className="main">
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <div className={styles.pos}>
                            LW
                        </div>
                        <div className={styles.plate}>
                            Sharkman
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.plate}>
                            <b>Steam</b> <br></br>
                            Sharkman005
                        </div>
                        <div className={styles.plate}>
                            <b>Team</b> <br></br>
                            LaSisX
                        </div>
                        <div className={styles.plate}>
                            <b>Discord</b> <br></br>
                            Sharkman#5242
                        </div>
                        <button className={styles.btn}>Profile</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <div className={styles.pos}>
                            RW
                        </div>
                        <div className={styles.plate}>
                            KafirZeus
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.plate}>
                            <b>Steam</b> <br></br>
                            KafirZeus
                        </div>
                        <div className={styles.plate}>
                            <b>Team</b> <br></br>
                            LaSisX
                        </div>
                        <div className={styles.plate}>
                            <b>Discord</b> <br></br>
                            KafirZeus#3324
                        </div>
                        <button className={styles.btn}>Profile</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <div className={styles.pos}>
                            CM
                        </div>
                        <div className={styles.plate}>
                            Recarmon
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.plate}>
                            <b>Steam</b> <br></br>
                            Recarmon
                        </div>
                        <div className={styles.plate}>
                            <b>Team</b> <br></br>
                            LaSisX
                        </div>
                        <div className={styles.plate}>
                            <b>Discord</b> <br></br>
                            Recarmon#3344
                        </div>
                        <button className={styles.btn}>Profile</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <div className={styles.pos} style={{boxShadow:"0 0 20px 5px #FFD700",color:"#ffd700"}}>
                            RW
                        </div>
                        <div className={styles.plate}>
                            Geralt
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.plate}>
                            <b>Steam</b> <br></br>
                            Geralt
                        </div>
                        <div className={styles.plate}>
                            <b>Team</b> <br></br>
                            LaSisX
                        </div>
                        <div className={styles.plate}>
                            <b>Discord</b> <br></br>
                            VictoriaX#5242
                        </div>
                        <div className={styles.plate}>
                            <b>Title</b> <br></br>
                                Goal King
                        </div>
                        <button className={styles.btn}>Profile</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <div className={styles.pos}>
                            GK
                        </div>
                        <div className={styles.plate}>
                            Alper
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className={styles.plate}>
                            <b>Steam</b> <br></br>
                            Alper
                        </div>
                        <div className={styles.plate}>
                            <b>Team</b> <br></br>
                            LaSisX
                        </div>
                        <div className={styles.plate}>
                            <b>Discord</b> <br></br>
                            Alper#5242
                        </div>
                        <button className={styles.btn}>Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}