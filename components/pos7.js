import styles from './styles/pos7.module.css';
import Shirt from './shirt';
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
                        <div className={styles.form}>
                            1
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            Alper
                        </div>
                    </div>
                    <div className={styles.lb}>
                        <div className={styles.form}>
                            2
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            Vali
                        </div>
                    </div>
                    <div className={styles.cb}>
                        <div className={styles.form}>
                            3
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            DARKSEEKER
                        </div>
                    </div>
                    <div className={styles.rb}>
                        <div className={styles.form}>
                            4
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            Opel Astra
                        </div>
                    </div>
                    <div className={styles.cm}>
                        <div className={styles.form}>
                            5
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            Recarmon
                        </div>
                    </div>
                    <div className={styles.lw}>
                        <div className={styles.form}>
                            6
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            Geralt
                        </div>
                    </div>
                    <div className={styles.rw}>
                        <div className={styles.form}>
                            7
                        </div>
                        <Shirt></Shirt>
                        <div className={styles.name}>
                            KafirZeus
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}