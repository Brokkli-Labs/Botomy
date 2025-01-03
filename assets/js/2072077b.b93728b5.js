"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[9746],{5500:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(4848),a=s(8453);const t={sidebar_position:2},l="Level Data",o={id:"game-play/level-data",title:"Level Data",description:"game_info",source:"@site/docs/game-play/level-data.md",sourceDirName:"game-play",slug:"/game-play/level-data",permalink:"/Botomy/docs/game-play/level-data",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basic Gameplay",permalink:"/Botomy/docs/game-play/basic-gameplay"},next:{title:"RPG",permalink:"/Botomy/docs/game-play/maps/rpg"}},r={},d=[{value:"game_info",id:"game_info",level:2},{value:"items",id:"items",level:2},{value:"own_player",id:"own_player",level:2},{value:"players",id:"players",level:2},{value:"enemies",id:"enemies",level:2},{value:"obstacles",id:"obstacles",level:2},{value:"hazards",id:"hazards",level:2},{value:"stats",id:"stats",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"level-data",children:"Level Data"}),"\n",(0,i.jsx)(n.h2,{id:"game_info",children:"game_info"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  game_info: {\n    map: <name>,\n    game_type: <rpg/survival>,\n    state: <STARTING/STARTED/ENDING/ENDED/MATCH_COMPLETED>,\n    time_left_s, // time left in the round in secs,\n    friendly_fire: true/false,\n    latency, // ping ms to server (every second)\n  }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"items",children:"items"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  items: [\n    {\n      type: "coin",\n      id,\n      position: {x, y},\n      value,\n      points,\n    },\n    {\n      type: "big_potion",\n      id,\n      position: {x, y},\n      value, // not used\n      points,\n    },\n    {\n      type: "speed_zapper",\n      id,\n      position: {x, y},\n      value, // speed zap percentage\n      duration, // in seconds\n      points,\n    },\n    {\n      type: "ring",\n      id,\n      position: {x, y},\n      duration, // in seconds\n      points,\n    },\n  ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"own_player",children:"own_player"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  own_player: {\n    id,\n    type: "player",\n    display_name,\n    position: {x, y},\n    items: [\n      big_potions: [ {value} ],\n      speed_zappers: [ { value, duration }],\n      rings: [ { duration }],\n    ],\n    max_health,\n    health,\n    base_speed, // base speed before penalities or boosts\n    attack_damage,\n    is_cloaked,\n    is_shield_ready,\n    shield_raised,\n    direction: <"left"/"right">,\n    is_attacking,\n    is_zapped,\n    is_boosted,\n    is_dashing,\n    is_dash_ready,\n    is_zap_ready,\n    is_colliding,\n    collisions : [{ relative_pos: { x, y }, type }]\n    is_frozen,\n    is_pushed,\n    unleashing_shockwave,\n    is_special_ready,\n    speech,\n    score,\n    levelling: { // only in fight world\n      level,\n      available_skill_points,\n      attack, // redeemed attack points\n      speed, // redeemed speed points\n      health, // redeemed health points\n    },\n    is_overclocking,\n    overclock_duration,\n    has_health_regen,\n    points, // base points (without penalties/bonuses applied)\n  }\n'})}),"\n",(0,i.jsx)(n.h2,{id:"players",children:"players"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  players: [\n    {\n      id,\n      type: "player",\n      display_name,\n      position: {x, y},\n      health,\n      base_speed, // base speed before penalities or boosts\n      attack_damage,\n      shield_raised,\n      direction: <"left"/"right">,\n      is_attacking,\n      is_zapped,\n      is_boosted,\n      is_dashing,\n      is_frozen,\n      is_pushed,\n      unleashing_shockwave,\n      special_equipped,\n      speech,\n      score,\n      levelling: { // only in fight world\n        level,\n      },\n      is_overclocking,\n      has_health_regen,\n      points, // base points (without penalties/bonuses applied)\n    }\n  ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enemies",children:"enemies"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  enemies: [\n    {\n      type: <wolf/ghoul/minotaur/tiny>\n      id,\n      position: {x, y},\n      health,\n      attack_damage,\n      is_zapped,\n      is_frozen,\n      is_pushed,\n      direction: <left/right>,\n      points,\n    }\n  ]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"obstacles",children:"obstacles"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"x,y"})," coordinates of tiles that are obstacles on the map.\nEach object is 48x48."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  obstacles: [\n    {\n      x,\n      y,\n    },\n    {\n      x,\n      y,\n    },\n    ...\n  ]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"hazards",children:"hazards"}),"\n",(0,i.jsx)(n.p,{children:"Hazards are things that can hurt you - bombs, icicles, lightning storms, etc."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  hazards: [\n    {\n      id,\n      position,\n      attack_damage,\n      status: <charging/active/idle>,\n      type,\n      owner_id,\n    },\n    ...\n  ]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"stats",children:"stats"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'  stats: {\n    "<player_id_1>": {\n      score,\n      kills,\n      deaths,\n      coins,\n      kd_ratio,\n      kill_streak,\n      overclocks,\n      xps,\n      wolf_kills,\n      ghoul_kills,\n      tiny_kills,\n      minotaur_kills,\n      player_kills,\n      self_destructs,\n    }\n    "<player_id_2>": {\n      score,\n      kills,\n      deaths,\n      coins,\n      kd_ratio,\n      kill_streak,\n      overclocks,\n      xps,\n      wolf_kills,\n      ghoul_kills,\n      tiny_kills,\n      minotaur_kills,\n      player_kills,\n      self_destructs,\n    }\n  }\n'})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(6540);const a={},t=i.createContext(a);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);