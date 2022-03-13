import styles from './styles/pos7.module.css';

export default function Pos7(){
    return(
        <div className={styles.content}>
            <div className={styles.stadium}>
                <div className={styles.lines}>
                    <div className={styles.gkl1}>
                        .
                    </div>
                    <div className={styles.center}>
                        
                    </div>
                    <div className={styles.half}>

                    </div>
                    <div className={styles.gk2}>
                        .
                    </div>
                </div>
                <div className={styles.players}>
                    <div className={styles.gk}>
                        GK
                        <div className={styles.name}>
                            Alper
                        </div>
                    </div>
                    <div className={styles.lb}>
                        LB
                        <div className={styles.name}>
                            Vali
                        </div>
                    </div>
                    <div className={styles.cb}>
                        CB
                        <div className={styles.name}>
                            DARKSEEKER
                        </div>
                    </div>
                    <div className={styles.rb}>
                        RB
                        <div className={styles.name}>
                            Opel Astra
                        </div>
                    </div>
                    <div className={styles.cm}>
                        CM
                        <div className={styles.name}>
                            Recarmon
                        </div>
                    </div>
                    <div className={styles.lw}>
                        LW
                        <div className={styles.name}>
                            Geralt
                        </div>
                    </div>
                    <div className={styles.rw}>
                        RW
                        <div className={styles.name}>
                            KafirZeus
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}