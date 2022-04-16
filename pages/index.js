import styles from '../components/styles/index2.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Index(){
    return(
        <div className='content1'>
            <div className={styles.sec}>
                <div className={styles.header}>
                    Pro Soccer Online
                </div>
                <div className={styles.subhead}>
                    <div className={styles.head}  onClick={jalclick}>
                        Join A League
                    </div>
                </div>
            </div>
            <div className={styles.join} id="join" >
                <div className={styles.left} >
                    <Image className={styles.img} src="/img/fig1.svg" width={300} height={300}></Image>
                    <div className={styles.info}>
                        Play Game
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>
                        Join Team
                    </div>
                    <Image className={styles.img} src="/img/fig2.svg" width={300} height={300}></Image>
                </div>
                <div className={styles.left}>
                    <Image className={styles.img} src="/img/fig3.svg" width={300} height={300}></Image>
                    <div className={styles.info}>
                        Win Cup
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.info}>
                        Become Star
                    </div>
                    <Image className={styles.img} src="/img/fig4.svg" width={300} height={300}></Image>
                </div>
            </div>
        </div>
    )
    function jalclick(){
        const element = document.getElementById("join")
        element.scrollIntoView({behavior:'smooth'})
    }
}