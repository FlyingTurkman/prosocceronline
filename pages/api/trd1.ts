import { NextApiRequest, NextApiResponse } from "next";

const team1="LaSisX";
const team3="Aedern";
const team4="BüyükBölcek";
const team2="Zonguldakspor";
const team5="Ronins";
const team6="RedDevils";
const team7="Nerovent";
const team8="Blacksenal";
const team9="Soccer Soldiers";
const team10="Kul City";
const team11="İnegölspor";
const team12="DarkWeb Killers";

const table=[
    {team:team1,win:7,draw:0,lose:0,gf:26,ga:3},
    {team:team2,win:5,draw:0,lose:2,gf:12,ga:12},
    {team:team3,win:6,draw:1,lose:0,gf:47,ga:8},
    {team:team4,win:5,draw:0,lose:2,gf:26,ga:5},
    {team:team5,win:4,draw:1,lose:2,gf:19,ga:17},
    {team:team6,win:4,draw:0,lose:3,gf:18,ga:12},
    {team:team7,win:3,draw:0,lose:4,gf:12,ga:19},
    {team:team8,win:3,draw:0,lose:4,gf:14,ga:29},
    {team:team9,win:2,draw:1,lose:4,gf:13,ga:25},
    {team:team10,win:2,draw:0,lose:5,gf:15,ga:34},
    {team:team11,win:1,draw:1,lose:5,gf:7,ga:11},
    {team:team12,win:0,draw:1,lose:6,gf:3,ga:18}
]
const goalking=[
    {name:"Kenan GOAT Karaman",goal:8},
    {name:"!YiğiD0 !",goal:4},
    {name:"Styluser",goal:9},
    {name:"Xabo.none*",goal:2},
    {name:"twitch.tv/troulax",goal:2},
    {name:"The Captain",goal:7},
    {name:"Denizhan",goal:8},
    {name:"slaveNN",goal:2},
    {name:"meliodas",goal:2},
    {name:"Dizzy",goal:1},
    {name:"Ömer Bayram",goal:1},
    {name:"Hydraxs",goal:11},
    {name:"Avexez",goal:9},
    {name:"Rale",goal:1},
    {name:"slatra senpai",goal:3},
    {name:"8 İniesta",goal:0},
    {name:"sosisbey",goal:1},
    {name:"Recarmon",goal:4},
    {name:"Geralt",goal:15},
    {name:"Valentin Rosier",goal:2},
    {name:"SinaN EngiN",goal:0},
    {name:"Casa ^^",goal:3},
    {name:"Jom",goal:4},
    {name:"Zealtix",goal:13},
    {name:"lowel",goal:3},
    {name:"alkN",goal:4},
    {name:"flow?",goal:1},
    {name:"iota",goal:2},
    {name:"rakukan-teki",goal:3},
    {name:"KafirZeus",goal:7},
    {name:"SentinusTE",goal:5},
    {name:"martens",goal:3},
    {name:"ArdajR",goal:4},
    {name:"Drogba",goal:1},
    {name:"Fakir Viniciusu",goal:1},
    {name:"Birol Koçovalı",goal:2},
    {name:"Neuer",goal:6},
    {name:"Lychonse",goal:3},
    {name:"erdaltopalkara79",goal:2},
    {name:"Zetavack",goal:7},
    {name:"RustyStormy",goal:3},
    {name:"Grayson",goal:5},
    {name:"Flaes",goal:1},
    {name:"gamyefire",goal:3},
    {name:"Yattara",goal:2},
    {name:"C Yaya",goal:1},
    {name:"V Boi",goal:3},
    {name:"Dua Lipa",goal:3},
    {name:"Kleral",goal:0},
    {name:"La Voie Lactee",goal:1},
    {name:"quedrA",goal:1},
    {name:"VuemX",goal:2},
    {name:"MuhammedWithD",goal:1},
    {name:"Boris",goal:1},
    {name:"Essahel",goal:1},
    {name:"Zade",goal:3},
    {name:"Dreads",goal:3},
    {name:"jULES",goal:1},
    {name:"Michigan",goal:2}
]

const assistking=[
    {name:"Kenan GOAT Karaman",assist:2},
    {name:"!YiğiD0 !",assist:5},
    {name:"Styluser",assist:3},
    {name:"Xabo.none*",assist:1},
    {name:"twitch.tv/troulax",assist:2},
    {name:"Genco",assist:1},
    {name:"Camel",assist:1},
    {name:"Martens",assist:5},
    {name:"Denizhan",assist:3},
    {name:"slaveNN",assist:5},
    {name:"xRqge",assist:1},
    {name:"astro",assist:1},
    {name:"Aday",assist:2},
    {name:"Hydraxs",assist:11},
    {name:"Zealtix",assist:5},
    {name:"8 İniesta",assist:0},
    {name:"Rale",assist:0},
    {name:"emirsoydas",assist:1},
    {name:"Recarmon",assist:7},
    {name:"SinaN EngiN",assist:4},
    {name:"Frox",assist:0},
    {name:"Jom",assist:4},
    {name:"VuemX",assist:3},
    {name:"Denizhan",assist:1},
    {name:"flow?",assist:2},
    {name:"Divactio",assist:2},
    {name:"iota",assist:1},
    {name:"Slacker",assist:1},
    {name:"Geralt",assist:3},
    {name:"DARKSEEKER",assist:1},
    {name:"Vali",assist:1},
    {name:"KafirZeus",assist:7},
    {name:"Supzz",assist:1},
    {name:"mudukfurkan1",assist:3},
    {name:"JozeLuyh",assist:1},
    {name:"Beckenbauer",assist:4},
    {name:"İnsomia",assist:2},
    {name:"B4TU",assist:2},
    {name:"Avexez",assist:1},
    {name:"Miguel Crespo",assist:0},
    {name:"Batu",assist:3},
    {name:"z0diac",assist:1},
    {name:"Zetavack",assist:3},
    {name:"The Captain",assist:2},
    {name:"meliodas",assist:1},
    {name:"Charmendr",assist:1},
    {name:"Flaes",assist:1},
    {name:"insaneplayer4",assist:1},
    {name:"Yattara",assist:1},
    {name:"Casa ^^",assist:2},
    {name:"Wromthrax",assist:1},
    {name:"Lychonse",assist:0},
    {name:"Boris",assist:2},
    {name:"SentinusTE",assist:2},
    {name:"La Voie Lactee",assist:1}    
]
const saveking=[
    {name:"pobia",save:10},
    {name:"Sparkley",save:19},
    {name:"lupe",save:7},
    {name:"exreil",save:41-7},
    {name:"İsmail Çipe",save:12},
    {name:"Barolife",save:1},
    {name:"xRqge",save:28},
    {name:"astro",save:17},
    {name:"Neuer",save:14-3},
    {name:"DARKSEEKER",save:12},
    {name:"Alper",save:15},
    {name:"Zuko",save:0},
    {name:"H4KO.",save:11},
    {name:"Mad Shinobu",save:33},
    {name:"Rei Shiva",save:2},
    {name:"shirokusha",save:7},
    {name:"JozeLuyh",save:16},
    {name:"AHMED",save:11},
    {name:"xearann",save:26},
    {name:"Zuko",save:2},
    {name:"NubeL",save:3},
    {name:"Donpatchi",save:14},
    {name:"yoko^^",save:1}
]
const schedule =[
    {home:team12,away:team6,scoreh:6,scorea:0,date:"24th April 20.30"},
    {home:team1,away:team2,scoreh:3,scorea:1,date:"24th April 21.00"},
    {home:team3,away:team4,scoreh:2,scorea:1,date:"25th April 20.30"},
    {home:team9,away:team5,scoreh:9,scorea:1,date:"25th April 21.00"},
    {home:team10,away:team8,scoreh:3,scorea:0,date:"25th April 21.30"}
]
export default function (req:NextApiRequest,res:NextApiResponse) {
    if(req.method=="POST"){
        const {request}=req.body
        if(request=="points"){
            const response = table.map((t)=>{
                return(
                    {
                        team:t.team,
                        played:t.win+t.draw+t.lose,
                        win:t.win,
                        draw:t.draw,
                        lose:t.lose,
                        point:(t.win*3)+(t.draw*1),
                        gf:t.gf,
                        ga:t.ga,
                        gd:t.gf-t.ga
                    }
                )
            })
            res.json(response.sort((a,b)=>{
                var n = b.point-a.point
                if(n!=0){
                    return n
                }
                return b.gd-a.gd
            }))
        }else if(request=="goals"){
            const response = goalking.map((g)=>{
                return(
                    {
                        name:g.name,
                        goals:g.goal
                    }
                )
            })
            res.json(response.sort((a,b)=>b.goals-a.goals).slice(0,10))
        }else if (request=="assists"){
            const response = assistking.map((g)=>{
                return(
                    {
                        name:g.name,
                        assists:g.assist
                    }
                )
            })
            res.json(response.sort((a,b)=>b.assists-a.assists).slice(0,10))
        }else if (request=="saves"){
            const response = saveking.map((g)=>{
                return(
                    {
                        name:g.name,
                        saves:g.save
                    }
                )
            })
            res.json(response.sort((a,b)=>b.saves-a.saves).slice(0,10))
        }else if(request=="schedule"){
            const response=schedule
            res.json(response)
        }
    }
}