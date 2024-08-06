"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[561],{9964:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=e(4848),o=e(8453);const r={sidebar_position:2},a="Quickstart Tutorial",s={id:"getting-started/quickstart-tutorial",title:"Quickstart Tutorial",description:"Start Offline Tutorial",source:"@site/docs/getting-started/quickstart-tutorial.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart-tutorial",permalink:"/Botomy/docs/getting-started/quickstart-tutorial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/Botomy/docs/getting-started/install"},next:{title:"Basic Gameplay",permalink:"/Botomy/docs/game-play/basic-gameplay"}},l={},c=[{value:"Start Offline Tutorial",id:"start-offline-tutorial",level:2},{value:"Use the script play mode",id:"use-the-script-play-mode",level:2},{value:"Collect a coin",id:"collect-a-coin",level:2},{value:"Congratulations",id:"congratulations",level:3}];function d(t){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickstart-tutorial",children:"Quickstart Tutorial"}),"\n",(0,i.jsx)(n.h2,{id:"start-offline-tutorial",children:"Start Offline Tutorial"}),"\n",(0,i.jsxs)(n.p,{children:["Go into the ",(0,i.jsx)(n.strong,{children:"Offline Practice"}),' mode and select the "Tutorial" map.']}),"\n",(0,i.jsx)(n.p,{children:'Press "Start"'}),"\n",(0,i.jsx)(n.h2,{id:"use-the-script-play-mode",children:"Use the script play mode"}),"\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.code,{children:"script"})," tab (probably already selected)."]}),"\n",(0,i.jsx)(n.p,{children:'Press "Run" to start executing the default script. You should see your character say "hello there"'}),"\n",(0,i.jsx)(n.h2,{id:"collect-a-coin",children:"Collect a coin"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Get the location of a coin"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"func play(level_data):\n# highlight-start\n\t# get the first coin in the array\n\tvar coin = level_data.coins[0]\n\n\t# print the x,y coordinates of the coin\n\tprint(coin.position)\n# highlight-end\n\treturn []\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Get your character's position"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"func play(level_data):\n# highlight-start\n\t# get the first coin in the array\n\tvar coin = level_data.coins[0]\n\n\t# print the x,y coordinates of the coin\n\tdebug(coin.position)\n\n\t# highlight-start\n\tvar own_player = level_data.own_player\n\tdebug(own_player.position)\n\t# highlight-end\n\treturn []\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Determine what direction the coin is relative to your character"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'func play(level_data):\n\t# get the first coin in the array\n\tvar coin = level_data.coins[0]\n\n\t# print the x,y coordinates of the coin\n\tdebug(coin.position)\n\n\tvar own_player = level_data.own_player\n\tdebug(own_player.position)\n\n\t# highlight-start\n\tif own_player.position.x > coin.position.x:\n  \tdebug("coin is left of character")\n\telse:\n  \tdebug("coin is right of character")\n\n\tif own_player.position.y > coin.position.y:\n  \tdebug("coin is above character")\n\telse:\n\t\tdebug("coin is below character")\n\t# highlight-end\n\treturn []\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Return the moves to get to the coin"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'func play(level_data):\n\t# get the first coin in the array\n\tvar coin = level_data.coins[0]\n\n\t# print the x,y coordinates of the coin\n\tdebug(coin.position)\n\n\tvar own_player = level_data.own_player\n\tprint(own_player.position)\n\n\t# highlight-start\n\tvar moves = []\n\tif own_player.position.x > coin.position.x:\n\t\tdebug("coin is left of character")\n\t\tmoves.append("move_left")\n\telse:\n\t\tdebug("coin is right of character")\n\t\tmoves.append("move_right")\n\n\tif own_player.position.y > coin.position.y:\n\t\tdebug("coin is above character")\n\t\tmoves.append("move_up")\n\telse:\n\t\tdebug("coin is below character")\n\t\tmoves.append("move_down")\n\n\tdebug(moves)\n\n\t# highlight-end\n\treturn []\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Go pick up the coin!"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'func play(level_data):\n\t# get the first coin in the array\n\tvar coin = level_data.coins[0]\n\n\t# print the x,y coordinates of the coin\n\tdebug(coin.position)\n\n\tvar own_player = level_data.own_player\n\tprint(own_player.position)\n\n\n\tvar moves = []\n\tif own_player.position.x > coin.position.x:\n\t\tdebug("coin is left of character")\n\t\tmoves.append("move_left")\n\telse:\n\t\tdebug("coin is right of character")\n\t\tmoves.append("move_right")\n\n\tif own_player.position.y > coin.position.y:\n\t\tdebug("coin is above character")\n\t\tmoves.append("move_up")\n\telse:\n\t\tdebug("coin is below character")\n\t\tmoves.append("move_down")\n\n\tdebug(moves)\n\n\t# highlight-start\n\treturn moves\n\t# highlight-end\n'})}),"\n",(0,i.jsx)(n.h3,{id:"congratulations",children:"Congratulations"}),"\n",(0,i.jsx)(n.p,{children:"Your character is now able to move towards a coin. Go forth and implement more functionality. Conquer more worlds!"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Is your character bobbing up and down and back and forth? Try modifying the code to detect if the character is in line with the coin already. This may require you to have a margin of error (i.e. sometimes it's better to say 11 ~= 10)"})})]})}function h(t={}){const{wrapper:n}={...(0,o.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>a,x:()=>s});var i=e(6540);const o={},r=i.createContext(o);function a(t){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),i.createElement(r.Provider,{value:n},t.children)}}}]);