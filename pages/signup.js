import styles from '../components/styles/singup.module.css';
import { useEffect, useState } from 'react';
import en from '../lang/en';
import tr from '../lang/tr'
import cookies from 'js-cookie';
import { singupfs } from '../utils/singup';
import Flags from 'country-flag-icons/react/3x2'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const lang = cookies.get("lang")||"en";

export default function SingUp() {
    const [l,setl]=useState(en);
    const [lc,setlc]=useState(false);
    const [country,setcountry]=useState();
    useEffect(()=>{
        if (!lc) {
            if (lang == "en") {
                setl(en)
            } else if (lang == "tr") {
                setl(tr)
            }
            setlc(true);
        }
    },[])
    return(
        <div className="main">
            <div className={styles.content}>
                <div className={styles.container}>
                    <input id='inputemail' className={styles.input} style={{textTransform:"lowercase"}} placeholder={l.email} type="email"></input>
                </div>
                <div className={styles.container}>
                    <input id='inputpass' className={styles.input} placeholder={l.password} type="password"></input>
                </div>
                <div className={styles.container}>
                    <input id='inputrpass' className={styles.input} placeholder={l.repassword} type="password"></input>
                </div>
                <div className={styles.container}>
                    <input id='inputusername' className={styles.input} placeholder={l.username} type="text"></input>
                </div>
                <div className={styles.container}>
                    <CountryDropdown id='inputcountry' value={country} className={styles.dropdown} onChange={(val)=>setcountry(val)}></CountryDropdown>
                </div>
                <div className={styles.container}>
                    <select id='input1pos' className={styles.select}>
                        <option value="x">{l.mainposition}</option>
                        <option value="gk">GK</option>
                        <option value="lb">LB</option>
                        <option value="cb">CB</option>
                        <option value="rb">RB</option>
                        <option value="cm">CM</option>
                        <option value="lw">LW</option>
                        <option value="rw">RW</option>
                    </select>
                </div>
                <div className={styles.container}>
                    <select id='input2pos' className={styles.select}>
                        <option value="x">{l.secondposition}</option>
                        <option value="gk">GK</option>
                        <option value="lb">LB</option>
                        <option value="cb">CB</option>
                        <option value="rb">RB</option>
                        <option value="cm">CM</option>
                        <option value="lw">LW</option>
                        <option value="rw">RW</option>
                    </select>
                </div>
                <button className={styles.button} onClick={singup}>{l.signup}</button>
            </div>
        </div>
    )
    function singup(){
        let username,email,pass,rpass,country,pos1,pos2;
        username=document.getElementById("inputusername").value;
        email=document.getElementById("inputemail").value;
        pass=document.getElementById("inputpass").value;
        rpass=document.getElementsByName("inputrpass").value;
        country=document.getElementById("inputcountry").value;
        pos1=document.getElementById("input1pos").value;
        pos2=document.getElementById("input2pos").value;
        singupfs({username,email,pass,rpass,country,pos1,pos2});
    }
}