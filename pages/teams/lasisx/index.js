import styles from '../../../components/styles/teams.module.css'
import Pos7 from '../../../components/pos7'

const list =[
    {name:"Alper"},
    {name:"Vali"},
    {name:"DarkSeeker"},
    {name:"Opel Astra"},
    {name:"Recarmon"},
    {name:"Sharkman"},
    {name:"Geralt"},
    {name:"KafirZeus"},
    {name:"AdamC"},
    {name:"Beckenbauer"}
]

export default function Team({team}){
    return(
        <div className="main">
            <div className={styles.content3}>
                <Pos7></Pos7>
                <div className={styles.possec}>
                <h2 className={styles.h2}>Positions</h2>
                <div className={styles.playerrow}>
                    <div className={styles.posicongk}>
                        GK
                    </div>
                    <select className={styles.select} defaultValue="Alper" >
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option key={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
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
                                <option key={l.name} value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
                </div>
                <div className={styles.playerrow}>
                    <div className={styles.posiconsub}>
                        S3
                    </div>
                    <select className={styles.select} defaultValue="Beckenbauer">
                        <option className={styles.option}>Select Player</option>
                        {list.map((l)=>{
                            return(
                                <option key={l.name} value={l.name} className={styles.option}>
                                    {l.name}
                                </option>
                            )
                        })}
                    </select>
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
        </div>
    )
}