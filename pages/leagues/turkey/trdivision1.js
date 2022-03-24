import styles from '../../../components/styles/leagues.module.css';
import { useState, useEffect } from 'react';

export default function TRDivision1(){
    const [point,setpoint]=useState([]);
    const [getpoint,setgetpoint]=useState(false)
    const [goals,setgoals]=useState([])
    const [getgoals,setgetgoals]=useState(false)
    const [assists,setassists]=useState([])
    const [getassists,setgetassists]=useState(false)
    const [saves,setsaves]=useState([])
    const [getsaves,setgetsaves]=useState(false)
    const [schedule,setschedule]=useState([])
    const [getschedule,setgetschedule]=useState(false)
    useEffect(()=>{
        if(!getpoint){
            getpoints()
        }
        if(!getgoals){
            getgoalkings()
        }
        if(!getassists){
            getassistkings()
        }
        if(!getsaves){
            getsavekings()
        }
        if(!getschedule){
            getschedules()
        }
    },[])
    return(
        <div className="main">
            <div className={styles.content2}>
                <h2 className={styles.h2}>Point Table</h2>
                <div className={styles.pointtable}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>#</h3>
                        </div>
                        <div className={styles.colname}>
                            <h3 className={styles.h44}>Team Name</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>PL</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>P</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>W</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>D</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>L</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>GF</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>GA</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>GD</h3>
                        </div>
                    </div>
                    
                    {point.map((p)=>{
                        var i = point.findIndex(x=>x.team===p.team)
                        return(
                            <div className={styles.row} key={i+"tables"}>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{i+1}</h3>
                                </div>
                                <div className={styles.colname}>
                                    <h3 className={styles.h333}>{p.team}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.played}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.point}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.win}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.draw}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.lose}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.gf}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.ga}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{p.gd}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.content2}>
                <h2 className={styles.h2}>Goal Kings</h2>
                <div className={styles.pointtable}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>#</h3>
                        </div>
                        <div className={styles.colname}>
                            <h3 className={styles.h44}>Player</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>G</h3>
                        </div>
                    </div>
                    {goals.map((g)=>{
                        var i =goals.findIndex(x=>x.name===g.name);
                        return(
                            <div className={styles.row} key={i+"goals"}>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{i+1}</h3>
                                </div>
                                <div className={styles.colname}>
                                    <h3 className={styles.h444}>{g.name}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{g.goals}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.content2}>
                <h2 className={styles.h2}>Assist Kings</h2>
                <div className={styles.pointtable}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>#</h3>
                        </div>
                        <div className={styles.colname}>
                            <h3 className={styles.h44}>Player</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>A</h3>
                        </div>
                    </div>
                    {assists.map((g)=>{
                        var i =assists.findIndex(x=>x.name===g.name);
                        return(
                            <div className={styles.row} key={i+"assists"}>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{i+1}</h3>
                                </div>
                                <div className={styles.colname}>
                                    <h3 className={styles.h444}>{g.name}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{g.assists}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.content2}>
                <h2 className={styles.h2}>Save Kings</h2>
                <div className={styles.pointtable}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>#</h3>
                        </div>
                        <div className={styles.colname}>
                            <h3 className={styles.h44}>Player</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>S</h3>
                        </div>
                    </div>
                    {saves.map((g)=>{
                        var i =saves.findIndex(x=>x.name===g.name);
                        return(
                            <div className={styles.row} key={i+"saves"}>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{i+1}</h3>
                                </div>
                                <div className={styles.colname}>
                                    <h3 className={styles.h444}>{g.name}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{g.saves}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.content2}>
                <h2 className={styles.h2}>Schedule</h2>
                <div className={styles.pointtable}>
                    <div className={styles.row}>
                        <div className={styles.colname2}>
                            <h3 className={styles.h44}>Home</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>S</h3>
                        </div>
                        <div className={styles.col}>
                            <h3 className={styles.h44}>S</h3>
                        </div>
                        <div className={styles.colname2}>
                            <h3 className={styles.h44}>Away</h3>
                        </div>
                        <div className={styles.colname2}>
                            <h3 className={styles.h44}>Date</h3>
                        </div>
                    </div>
                    {schedule.map((s)=>{
                        return(
                            <div className={styles.row} key={s.home+s.away}>
                                <div className={styles.colname2}>
                                    <h3 className={styles.h444}>{s.home}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{s.scoreh}</h3>
                                </div>
                                <div className={styles.col}>
                                    <h3 className={styles.h444}>{s.scorea}</h3>
                                </div>
                                <div className={styles.colname2}>
                                    <h3 className={styles.h444}>{s.away}</h3>
                                </div>
                                <div className={styles.colname2}>
                                    <h3 className={styles.h444}>{s.date}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
    async function getpoints(){
        const response = await fetch("../../api/trd1",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({request:"points"})
        })
        const res= await response.json();
        setpoint(res);
        setgetpoint(true)
    }
    async function getgoalkings(){
        const response = await fetch("../../api/trd1",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({request:"goals"})
        })
        const res= await response.json()
        setgoals(res)
        setgetgoals(true)
    }
    async function getassistkings(){
        const response = await fetch("../../api/trd1",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({request:"assists"})
        })
        const res= await response.json()
        setassists(res)
        setgetassists(true)
    }
    async function getsavekings(){
        const response = await fetch("../../api/trd1",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({request:"saves"})
        })
        const res= await response.json()
        setsaves(res)
        setgetsaves(true)
    }
    async function getschedules(){
        const response = await fetch("../../api/trd1",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({request:"schedule"})
        })
        const res= await response.json()
        setschedule(res)
        setgetschedule(true)
    }
}