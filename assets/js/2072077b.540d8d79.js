"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[9746],{5500:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var s=i(4848),a=i(8453);const t={sidebar_position:2},l="Level Data",o={id:"game-play/level-data",title:"Level Data",description:"game_info",source:"@site/docs/game-play/level-data.md",sourceDirName:"game-play",slug:"/game-play/level-data",permalink:"/Botomy/docs/game-play/level-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Gameplay",permalink:"/Botomy/docs/game-play/basic-gameplay"},next:{title:"Fight World",permalink:"/Botomy/docs/game-play/maps/fight-world"}},d={},r=[{value:"game_info",id:"game_info",level:2},{value:"items",id:"items",level:2},{value:"own_player",id:"own_player",level:2},{value:"players",id:"players",level:2},{value:"enemies",id:"enemies",level:2},{value:"obstacles",id:"obstacles",level:2},{value:"hazards",id:"hazards",level:2},{value:"stats",id:"stats",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"level-data",children:"Level Data"}),"\n",(0,s.jsx)(n.h2,{id:"game_info",children:"game_info"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  game_info: {\n    map: <name>,\n    game_type: <rpg/racing>,\n    state: <STARTING/STARTED/ENDING/ENDED/MATCH_COMPLETED>,\n    time_left_s, // time left in the round in secs\n  }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"items",children:"items"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  items: [\n    {\n      type: "coin",\n      id,\n      position: {x, y},\n      value,\n      points,\n    },\n    {\n      type: "feather",\n      id,\n      position: {x, y},\n      value, // speed boost percentage\n      duration, // in seconds\n    },\n    {\n      type: "big_potion",\n      id,\n      position: {x, y},\n      value, // not used\n    },\n    {\n      type: "speed_zapper",\n      id,\n      position: {x, y},\n      value, // speed zap percentage\n      duration, // in seconds\n    },\n    {\n      type: "ring",\n      id,\n      position: {x, y},\n      duration, // in seconds\n    },\n  ]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"own_player",children:"own_player"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  own_player: {\n    id,\n    type: "player",\n    display_name,\n    position: {x, y},\n    items: [\n      big_potions: [ {value} ],\n      feathers: [ {value, duration }],\n      speed_zappers: [ { value, duration }],\n      rings: [ { duration }],\n    ],\n    max_health,\n    health,\n    attack_damage,\n    is_cloaked,\n    is_shield_ready,\n    shield_raised,\n    direction: <"left"/"right">,\n    is_zapping,\n    is_attacking,\n    is_zapped,\n    is_boosted,\n    is_dashing,\n    is_dash_ready,\n    is_colliding,\n    is_frozen,\n    is_pushed,\n    unleashing_shockwave,\n    is_special_ready,\n    speech,\n    score,\n    levelling: { // only in fight world\n      level,\n      available_skill_points,\n      attack, // redeemed attack points\n      speed, // redeemed speed points\n      health, // redeemed health points\n    }\n  }\n'})}),"\n",(0,s.jsx)(n.h2,{id:"players",children:"players"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  players: [\n    {\n      id,\n      type: "player",\n      display_name,\n      position: {x, y},\n      health,\n      attack_damage,\n      shield_raised,\n      direction: <"left"/"right">,\n      is_attacking,\n      is_zapping,\n      is_zapped,\n      is_boosted,\n      is_dashing,\n      is_frozen,\n      is_pushed,\n      unleashing_shockwave,\n      speech,\n      score,\n      levelling: { // only in fight world\n        level,\n      },\n    }\n  ]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"enemies",children:"enemies"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  enemies: [\n    {\n      type: <wolf/ghoul/minotaur/tiny>\n      id,\n      position: {x, y},\n      health,\n      attack_damage,\n      is_zapped,\n      is_frozen,\n      is_pushed,\n      direction: <left/right>,\n    }\n  ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"obstacles",children:"obstacles"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"x,y"})," coordinates of tiles that are obstacles on the map.\nEach object is 48x48."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  obstacles: [\n    {\n      x,\n      y,\n    },\n    {\n      x,\n      y,\n    },\n    ...\n  ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hazards",children:"hazards"}),"\n",(0,s.jsx)(n.p,{children:"Hazards are things that can hurt you - bombs, icicles, etc."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  hazards: [\n    {\n      position,\n      status,\n      type,\n    },\n    ...\n  ]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"stats",children:"stats"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  stats: {\n    "<player_id_1>": {\n      score,\n      kills,\n      deaths,\n      kd_ratio,\n    }\n    "<player_id_2>": {\n      score,\n      kills,\n      deaths,\n      kd_ratio,\n    }\n  }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const a={},t=s.createContext(a);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);