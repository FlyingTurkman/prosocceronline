import en from '../lang/en';
import tr from '../lang/tr'
import { useState } from 'react';

export default function Home() {
  const[l,setl]=useState(en);
  return (
    <div>
      <div>
        <div>
          <img src='/icons/arrow.svg'></img>
          <img src='/icons/arrow.svg'></img>
        </div>
        <img src={`/img/main/1.jpg`}></img>
        <div>
          <h1>{l.info1}</h1>
          <div>
            <button>{l.buynow}</button>
            <button>{l.trailer}</button>
          </div>

        </div>
        <iframe src="https://store.steampowered.com/widget/1583320/" frameborder="0" height="200"></iframe>
      </div>
      <div>
        <div>
          <h1>{l.whypso}</h1>
          <h2>{l.info1}</h2>
        </div>
        <div>
          <div>
            <h3>{l.competitive}</h3>
            <img src='/icons/leaderboard.svg'></img>
          </div>
          <div>
            <h3>{l.customize}</h3>
            <img  src='/icons/customize.svg'></img>
          </div>
          <div>
            <h3>{l.fairplay}</h3>
            <img src='/icons/fairplay.svg'></img>
          </div>
          <div>
            <h3>{l.funny}</h3>
            <img src='/icons/funny.svg'></img>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src='/icons/group.svg'></img>
          <h1>{l.createteam}</h1>
        </div>
        <div>
          <h1>{l.editteam}</h1>
          <img src='/icons/edit.svg'></img>
        </div>
        <div>
          <img src='/icons/table.svg'></img>
          <h1>{l.joinleague}</h1>
        </div>
        <div>
          <h1>{l.becomestar}</h1>
          <img src='/icons/graph.svg'></img>
        </div>
      </div>
    </div>
  )
}
