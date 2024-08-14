"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[316],{3558:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=i(4848),l=i(8453);const o={sidebar_position:1},r="Fight World",d={id:"game-play/maps/fight-world",title:"Fight World",description:"The player with the most xp at the end of the round wins.",source:"@site/docs/game-play/maps/fight-world.md",sourceDirName:"game-play/maps",slug:"/game-play/maps/fight-world",permalink:"/Botomy/docs/game-play/maps/fight-world",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Basic Gameplay",permalink:"/Botomy/docs/game-play/basic-gameplay"},next:{title:"Coin World",permalink:"/Botomy/docs/game-play/maps/coin-world"}},t={},a=[{value:"Important data",id:"important-data",level:2},{value:"Round Time",id:"round-time",level:3},{value:"Player",id:"player",level:3},{value:"Coins",id:"coins",level:3},{value:"Feathers",id:"feathers",level:3},{value:"Big Potions",id:"big-potions",level:3},{value:"Speed Zappers",id:"speed-zappers",level:3},{value:"Rings",id:"rings",level:3},{value:"Shield",id:"shield",level:3},{value:"Levelling",id:"levelling",level:3},{value:"Wolves",id:"wolves",level:3},{value:"Ghouls",id:"ghouls",level:3},{value:"Tiny&#39;s",id:"tinys",level:3},{value:"Minotaurs",id:"minotaurs",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fight-world",children:"Fight World"}),"\n",(0,s.jsx)(n.p,{children:"The player with the most xp at the end of the round wins."}),"\n",(0,s.jsx)(n.p,{children:"Increase your xp by killing things and collecting coins."}),"\n",(0,s.jsx)(n.p,{children:"As your xp increases, you reach new levels. Each new level comes with a skill point you can redeem for - attack, speed, or health."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"There are limits to how much you can max each skill tree"})}),"\n",(0,s.jsx)(n.p,{children:"If you are killed, you will not lose xp."}),"\n",(0,s.jsx)(n.h2,{id:"important-data",children:"Important data"}),"\n",(0,s.jsx)(n.h3,{id:"round-time",children:"Round Time"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  duration: 30, //mins\n"})}),"\n",(0,s.jsx)(n.h3,{id:"player",children:"Player"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  kill: { xp_points: 120 }\n  death: { xp_points: 0 }\n  damage: 15\n  starting_hp: 100\n  starting_speed: 15000\n  attack_slowdown: 0.6, // move at 60% speed while attacking\n"})}),"\n",(0,s.jsx)(n.h3,{id:"coins",children:"Coins"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  gold: {\n    xp_points: 200\n  },\n"})}),"\n",(0,s.jsx)(n.h3,{id:"feathers",children:"Feathers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  duration: 2.0, // secs\n  boost: 1.0, // 100% of your current speed (i.e. double speed)\n  max_carry: 5,\n  xp_points: 12,\n"})}),"\n",(0,s.jsx)(n.h3,{id:"big-potions",children:"Big Potions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  heal: 1.0, // 100% of health\n  max_carry: 6,\n  xp_points: 12,\n"})}),"\n",(0,s.jsx)(n.h3,{id:"speed-zappers",children:"Speed Zappers"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  duration: 2.0, // secs\n  slowdown: 0.3, // 30% of speed (i.e. movement is 70% of speed)\n  max_slowdown: 0.9, // 90% of speed (i.e. movement is 10% of speed)\n  max_carry: 5,\n  xp_points: 12,\n"})}),"\n",(0,s.jsx)(n.h3,{id:"rings",children:"Rings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  duration: 1.0, // secs\n  max_carry: 5,\n  xp_points: 12,\n"})}),"\n",(0,s.jsx)(n.h3,{id:"shield",children:"Shield"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  duration: 1.0, // secs\n  drain: 0.4, // secs (triggered on hit or after `duration`)\n  cooldown: 5.0, // secs\n"})}),"\n",(0,s.jsx)(n.h3,{id:"levelling",children:"Levelling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  "max_levels": 20,\n  "max_xp": 70000,\n  "max_attack_level": 10,\n  "max_speed_level": 5,\n  "max_health_level": 8,\n  "attack_increase": 7,\n  "speed_increase": 2000,\n  "health_increase": 30,\n  "bands": {\n    "1":0,\n    "2":700,\n    "3":1575,\n    "4":2800,\n    "5":4375,\n    "6":6300,\n    "7":8575,\n    "8":11200,\n    "9":14175,\n    "10":17500,\n    "11":21175,\n    "12":25200,\n    "13":29575,\n    "14":34300,\n    "15":39375,\n    "16":44800,\n    "17":50575,\n    "18":56700,\n    "19":63175,\n    "20":70000,\n  }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"wolves",children:"Wolves"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  weapon: 10\n  hp: 65\n  speed: 20000\n  xp_points: 80\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ghouls",children:"Ghouls"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  weapon: 30\n  hp: 100\n  speed: 15000\n  xp_points: 100\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tinys",children:"Tiny's"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  weapon: 50\n  hp: 50\n  speed: 50000\n  xp_points: 300\n"})}),"\n",(0,s.jsx)(n.h3,{id:"minotaurs",children:"Minotaurs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  weapon: 50\n  hp: 400\n  speed: 10000\n  xp_points: 600\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(6540);const l={},o=s.createContext(l);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);