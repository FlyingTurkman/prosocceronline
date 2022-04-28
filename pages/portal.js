import styles from '../components/styles/portal.module.css'
import Image from 'next/image'

export default function Portal(){
    return(
        <div className="content">
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.left1}>
                        <div className={styles.info}>
                        About leagues information <br></br>
                        Ad est commodo ex deserunt labore quis tempor irure. Do commodo deserunt sit amet id velit ex occaecat velit irure quis tempor dolor sint. Dolor aliquip magna consequat adipisicing irure culpa nisi esse consectetur dolore magna. Ut dolore sint do tempor qui elit nostrud ullamco aliquip ea ullamco.

In fugiat ea duis occaecat anim labore fugiat cillum. Dolore fugiat dolore excepteur elit. Deserunt do id non Lorem ad fugiat duis est mollit occaecat. In mollit pariatur ea Lorem eiusmod labore anim tempor officia nostrud sint non veniam. Aute consectetur dolore incididunt commodo. Cupidatat laboris minim voluptate laborum. Veniam quis sunt nostrud do quis sunt.
                        </div>

                    </div>
                    <div className={styles.right1}>
                        <div className={styles.title}>
                            Leagues
                        </div>
                        <Image width={120} height={120} src="/icons/cupblue.svg"></Image>
                    </div>
                    <button className={styles.button}>Leagues</button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.left2}>
                        <div className={styles.info}>
                        About Teams information <br></br>
                        Ad est commodo ex deserunt labore quis tempor irure. Do commodo deserunt sit amet id velit ex occaecat velit irure quis tempor dolor sint. Dolor aliquip magna consequat adipisicing irure culpa nisi esse consectetur dolore magna. Ut dolore sint do tempor qui elit nostrud ullamco aliquip ea ullamco.

In fugiat ea duis occaecat anim labore fugiat cillum. Dolore fugiat dolore excepteur elit. Deserunt do id non Lorem ad fugiat duis est mollit occaecat. In mollit pariatur ea Lorem eiusmod labore anim tempor officia nostrud sint non veniam. Aute consectetur dolore incididunt commodo. Cupidatat laboris minim voluptate laborum. Veniam quis sunt nostrud do quis sunt.
                        </div>
                    </div>
                    <div className={styles.right2}>
                        <div className={styles.title}>
                            Teams
                        </div>
                        <Image width={120} height={120} src="/icons/groupblue.svg"></Image>
                    </div>
                    <button className={styles.button}>Teams</button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.left1}>
                        <div className={styles.info}>
                        About Players information <br></br>
                        Ad est commodo ex deserunt labore quis tempor irure. Do commodo deserunt sit amet id velit ex occaecat velit irure quis tempor dolor sint. Dolor aliquip magna consequat adipisicing irure culpa nisi esse consectetur dolore magna. Ut dolore sint do tempor qui elit nostrud ullamco aliquip ea ullamco.

In fugiat ea duis occaecat anim labore fugiat cillum. Dolore fugiat dolore excepteur elit. Deserunt do id non Lorem ad fugiat duis est mollit occaecat. In mollit pariatur ea Lorem eiusmod labore anim tempor officia nostrud sint non veniam. Aute consectetur dolore incididunt commodo. Cupidatat laboris minim voluptate laborum. Veniam quis sunt nostrud do quis sunt.
                        </div>

                    </div>
                    <div className={styles.right1}>
                        <div className={styles.title}>
                            Players
                        </div>
                        <Image width={120} height={120} src="/icons/playersblue.svg"></Image>
                    </div>
                    <button className={styles.button}>Players</button>
                </div>
            </div>
        </div>
    )
}