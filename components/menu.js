import en from '../lang/en';
import tr from '../lang/tr'
import { useState } from 'react';


export default function Menu({lang}){
    const[l,setl]=useState(en);
    return(
        <div>
            <div >
                <div >
                    <div >
                        <img src='/icons/league.svg' ></img>
                        <h1>{l.leagues}</h1>
                    </div>
                    <div>
                        <img src='/icons/teams.svg'></img>
                        <h1>{l.teams}</h1>
                    </div>
                    <div>
                        <img src='/icons/players.svg'></img>
                        <h1 >{l.players}</h1>
                    </div>
                    <div>
                        <img src='/icons/prizes.svg'></img>
                        <h1>{l.prizes}</h1>
                    </div>
                    <div>
                        <img src='/icons/matches.svg'></img>
                        <h1>{l.matches}</h1>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img src='/icons/account.svg'></img>
                            <h1>{l.account}</h1>
                        </div>
                        <div>
                            <img src='/icons/login.svg'></img>
                            <h1>{l.logout}</h1>
                        </div>
                    </div>
                    <div >
                        <div>
                            <img src='/icons/discord.svg'></img>
                            <h1>{l.prosocceronline}</h1>
                        </div>
                        <div>
                            <img src='/icons/discord.svg'></img>
                            <h1>{l.southamerica}</h1>
                        </div>
                        <div>
                            <img src='/icons/discord.svg'></img>
                            <h1>{l.europe}</h1>
                        </div>
                        <div>
                            <img src='/icons/discord.svg'></img>
                            <h1>{l.korea}</h1>
                        </div>
                        <div>
                            <img src='/icons/discord.svg'></img>
                            <h1>{l.turkey}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Pro Soccer Online
                </div>
                <div>
                    {l.buygame}
                </div>
                <div>
                    {l.aboutus}
                </div>
            </div>
            <div>
                <img src="/icons/social.svg"></img>
                <div>
                    <img src="/icons/twitch.svg"></img>
                    <img src="/icons/youtube.svg"></img>
                    <img src="/icons/instagram.svg"></img>
                    <img src="/icons/twitter.svg"></img>
                </div>
            </div>
        </div>
    )
}