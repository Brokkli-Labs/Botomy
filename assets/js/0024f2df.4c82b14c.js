"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[5359],{774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var i=t(4848),s=t(8453);const l={sidebar_position:1},o="RPG",d={id:"game-play/maps/rpg",title:"RPG",description:"The player with the most xp at the end of the round wins.",source:"@site/docs/game-play/maps/rpg.md",sourceDirName:"game-play/maps",slug:"/game-play/maps/rpg",permalink:"/Botomy/docs/game-play/maps/rpg",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Level Data",permalink:"/Botomy/docs/game-play/level-data"},next:{title:"Survial",permalink:"/Botomy/docs/game-play/maps/survival"}},r={},a=[{value:"Important data",id:"important-data",level:2},{value:"Round Time",id:"round-time",level:3},{value:"Map",id:"map",level:3},{value:"Player",id:"player",level:3},{value:"Coins",id:"coins",level:3},{value:"Big Potions",id:"big-potions",level:3},{value:"Speed Zappers",id:"speed-zappers",level:3},{value:"Rings",id:"rings",level:3},{value:"Shield",id:"shield",level:3},{value:"Levelling",id:"levelling",level:3},{value:"Wolves",id:"wolves",level:3},{value:"Ghouls",id:"ghouls",level:3},{value:"Tiny&#39;s",id:"tinys",level:3},{value:"Minotaurs",id:"minotaurs",level:3}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"rpg",children:"RPG"}),"\n",(0,i.jsx)(n.p,{children:"The player with the most xp at the end of the round wins."}),"\n",(0,i.jsx)(n.p,{children:"Increase your xp by killing things and collecting coins."}),"\n",(0,i.jsx)(n.p,{children:"As your xp increases, you reach new levels. Each new level comes with a skill point you can redeem for - attack, speed, or health."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"There are limits to how much you can max each skill tree"})}),"\n",(0,i.jsx)(n.p,{children:"If you are killed, you will not lose xp."}),"\n",(0,i.jsx)(n.h2,{id:"important-data",children:"Important data"}),"\n",(0,i.jsx)(n.h3,{id:"round-time",children:"Round Time"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  duration: 30, //mins\n"})}),"\n",(0,i.jsx)(n.h3,{id:"map",children:"Map"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"size: varies\n"})}),"\n",(0,i.jsx)(n.h3,{id:"player",children:"Player"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  kill: { xp_points: 60 * (some complicated multiplier based on the level of the player that was killed - 6x at level 20) }\n  death: { xp_points: 0 }\n  damage: 15\n  starting_hp: 100\n  starting_speed: 15000\n  attack_slowdown: 0.6, // move at 60% speed while attacking\n  dash_speed: 50000,\n  dash_duration: 0.1s,\n  dash_cooldown: 1s,\n"})}),"\n",(0,i.jsx)(n.h3,{id:"coins",children:"Coins"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  gold: {\n    xp_points: 200\n  },\n"})}),"\n",(0,i.jsx)(n.h3,{id:"big-potions",children:"Big Potions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  heal: 1.0, // 100% of health\n  max_carry: 6,\n  xp_points: 12,\n"})}),"\n",(0,i.jsx)(n.h3,{id:"speed-zappers",children:"Speed Zappers"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  duration: 2.0, // secs\n  slowdown: 0.3, // 30% of speed (i.e. movement is 70% of speed)\n  max_slowdown: 0.9, // 90% of speed (i.e. movement is 10% of speed)\n  max_carry: 5,\n  xp_points: 12,\n"})}),"\n",(0,i.jsx)(n.h3,{id:"rings",children:"Rings"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  duration: 1.0, // secs\n  max_carry: 5,\n  xp_points: 12,\n"})}),"\n",(0,i.jsx)(n.h3,{id:"shield",children:"Shield"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  duration: 1.0, // secs\n  drain: 0.4, // secs (triggered on hit or after `duration`)\n  cooldown: 5.0, // secs\n"})}),"\n",(0,i.jsx)(n.h3,{id:"levelling",children:"Levelling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  "max_levels": 20,\n  "max_xp": 150000,\n  "max_attack_level": 10,\n  "max_speed_level": 5,\n  "max_health_level": 8,\n  "attack_increase": 7,\n  "speed_increase": 500,\n  "health_increase": 30,\n  "bands": {\n\t\t\t"1":0,\n\t\t\t"2":1500,\n\t\t\t"3":3375,\n\t\t\t"4":6000,\n\t\t\t"5":9375,\n\t\t\t"6":13500,\n\t\t\t"7":18375,\n\t\t\t"8":24000,\n\t\t\t"9":30375,\n\t\t\t"10":37500,\n\t\t\t"11":45375,\n\t\t\t"12":54000,\n\t\t\t"13":63375,\n\t\t\t"14":73500,\n\t\t\t"15":84375,\n\t\t\t"16":96000,\n\t\t\t"17":108375,\n\t\t\t"18":121500,\n\t\t\t"19":135375,\n\t\t\t"20":150000\n  }\n'})}),"\n",(0,i.jsx)(n.h3,{id:"wolves",children:"Wolves"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  weapon: 10\n  hp: 65\n  speed: 20000\n  xp_points: 80\n"})}),"\n",(0,i.jsx)(n.h3,{id:"ghouls",children:"Ghouls"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  weapon: 30\n  hp: 100\n  speed: 15000\n  xp_points: 100\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tinys",children:"Tiny's"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  weapon: 50\n  hp: 50\n  speed: 50000\n  xp_points: 300\n"})}),"\n",(0,i.jsx)(n.h3,{id:"minotaurs",children:"Minotaurs"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  weapon: 50\n  hp: 400\n  speed: 10000\n  xp_points: 600\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var i=t(6540);const s={},l=i.createContext(s);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);