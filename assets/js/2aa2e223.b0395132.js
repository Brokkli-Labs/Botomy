"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[1561],{9964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(4848),r=n(8453);const i={sidebar_position:2},s="Quickstart Tutorial",a={id:"getting-started/quickstart-tutorial",title:"Quickstart Tutorial",description:"How It Works",source:"@site/docs/getting-started/quickstart-tutorial.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-tutorial",permalink:"/Botomy/docs/getting-started/quickstart-tutorial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/Botomy/docs/getting-started/install"},next:{title:"Basic Gameplay",permalink:"/Botomy/docs/game-play/basic-gameplay"}},l={},c=[{value:"How It Works",id:"how-it-works",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Making Your First Bot",id:"making-your-first-bot",level:2},{value:"Basic Movement",id:"basic-movement",level:3},{value:"Combat",id:"combat",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"quickstart-tutorial",children:"Quickstart Tutorial"}),"\n",(0,o.jsx)(t.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,o.jsx)(t.p,{children:"Botomy uses a client-server architecture:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"The game (client) sends level data to your bot server via POST requests"}),"\n",(0,o.jsx)(t.li,{children:"Your server processes the data and returns a list of moves"}),"\n",(0,o.jsx)(t.li,{children:"The game executes those moves for your character"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Download a starter project:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/botomy/botomy-node-starter",children:"TypeScript Starter"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/botomy/botomy-python-starter",children:"Python Starter"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Start your server (follow the repo's README instructions). It should be running on port 3000."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"In Botomy:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Press ",(0,o.jsx)(t.strong,{children:"RUN"})]}),"\n",(0,o.jsx)(t.li,{children:'You should see your character say "Hello Botomy!"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"making-your-first-bot",children:"Making Your First Bot"}),"\n",(0,o.jsx)(t.p,{children:"Let's modify the default code to make your character move and attack:"}),"\n",(0,o.jsx)(t.h3,{id:"basic-movement",children:"Basic Movement"}),"\n",(0,o.jsx)(t.p,{children:"In your server, return a position for your player to move towards:"}),"\n",(0,o.jsx)(t.p,{children:"API RESPONSE"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'[\n  {\n    "move_to": {\n      "x": <x_coord>,\n      "y": <y_coord>,\n    }\n  }\n]\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"// TypeScript example modifying src/play.ts\nfunction play(levelData: LevelData) {\n  const moves = [];\n\n  // Move to coordinate (100, 100)\n  moves.push({ move_to: { x: 100, y: 100 } });\n\n  return moves;\n}\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'# Python example modifying play.py\ndef play(level_data: dict) -> list:\n    moves = []\n\n    # Move to coordinate (100, 100)\n    moves.append({"move_to": {"x": 100, "y": 100}})\n\n    return moves\n'})}),"\n",(0,o.jsx)(t.p,{children:"You will see your character moving to the top left."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Every object in the game has a position making it easy to move towards whatever you like."})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:'The coordinate system is "raster coordinate system" where the origin is at the top left and the y-axis increases downwards.'})}),"\n",(0,o.jsx)(t.h3,{id:"combat",children:"Combat"}),"\n",(0,o.jsx)(t.p,{children:"Return the attack move"}),"\n",(0,o.jsx)(t.p,{children:"API RESPONSE"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'[\n  {\n    "move_to": {\n      "x": <x_coord>,\n      "y": <y_coord>,\n    }\n  },\n  "attack"\n]\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:'// TypeScript example modifying src/play.ts\nfunction play(levelData: LevelData) {\n  const moves = [];\n\n  // Move to coordinate (100, 100)\n  moves.push({ move_to: { x: 100, y: 100 } });\n\n  // Attack\n  moves.push("attack");\n\n  return moves;\n}\n'})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'# Python example modifying play.py\ndef play(level_data: dict) -> list:\n    moves = []\n\n    # Move to coordinate (100, 100)\n    moves.append({"move_to": {"x": 100, "y": 100}})\n\n    # Attack\n    moves.append("attack")\n\n    return moves\n'})}),"\n",(0,o.jsx)(t.p,{children:"You will see your character attacking while moving."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:['Try other combat mechanics like "shield", and "dash". See more here ',(0,o.jsx)(t.a,{href:"/docs/game-play/basic-gameplay",children:"Basic Gameplay"})]})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Your API is called multiple times per frame. This means your bot can make multiple moves per frame. The game will execute them in real time."})}),"\n",(0,o.jsx)(t.h3,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Review ",(0,o.jsx)(t.a,{href:"/docs/game-play/basic-gameplay",children:"Basic Gameplay"})," for all available moves"]}),"\n",(0,o.jsxs)(t.li,{children:["Join our ",(0,o.jsx)(t.a,{href:"https://discord.gg/TTdkaA63zX",children:"Discord"})," for help and to share your bots!"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(6540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);