import styles from '../../components/styles/teams.module.css'
import Pos7 from '../../components/pos7'

const list =[
    {name:"Alper"},
    {name:"Vali"},
    {name:"DarkSeeker"},
    {name:"Opel Astra"},
    {name:"Recarmon"},
    {name:"Sharkman"},
    {name:"Geralt"},
    {name:"KafirZeus"},
    {name:"AdamC"}
]

export default function Team({team}){
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
                                Winter League 2022
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

            <div className={styles.content2}>
                <h2 className={styles.h2}>Players</h2>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Alper</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Vali</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Darkseeker</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Opel Astra</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Recarmon</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Sharkman</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>Geralt</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>KafirZeus</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
                <div className={styles.playerrow}>
                    <h3 className={styles.h3}>AdamC</h3>
                    <img className={styles.icon} src='/icons/cancelblack.svg'></img>
                </div>
            </div>

            <div className={styles.content2}>
                <h2 className={styles.h2}>Positions</h2>
                <div className={styles.playerrow}>
                    <div className={styles.posicongk}>
                        GK
                    </div>
                    <select className={styles.select} defaultValue="Alper" >
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posicon}>
                        LB
                    </div>
                    <select className={styles.select} defaultValue="Vali">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posicon}>
                        CB
                    </div>
                    <select className={styles.select} defaultValue="DarkSeeker">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posicon}>
                        RB
                    </div>
                    <select className={styles.select} defaultValue="Opel Astra">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posicon}>
                        CM
                    </div>
                    <select className={styles.select} defaultValue="Recarmon">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posicon}>
                        LW
                    </div>
                    <select className={styles.select} defaultValue="Geralt">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posicon}>
                        RW
                    </div>
                    <select className={styles.select} defaultValue="KafirZeus">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posiconsub}>
                        S1
                    </div>
                    <select className={styles.select} defaultValue="Sharkman">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posiconsub}>
                        S2
                    </div>
                    <select className={styles.select} defaultValue="AdamC">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>    
        </div>
    )
}
export async function getStaticPaths(){
    return{
        paths:[],
        fallback:true
    }
}
export async function getStaticProps(context){
    const {params}=context
    const team=params.team
    return{
        props:{team}
    }
}