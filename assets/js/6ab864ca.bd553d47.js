"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[4352],{5724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var s=i(4848),l=i(8453);const a={sidebar_position:1},r="Basic Gameplay",t={id:"game-play/basic-gameplay",title:"Basic Gameplay",description:"Play modes",source:"@site/docs/game-play/basic-gameplay.md",sourceDirName:"game-play",slug:"/game-play/basic-gameplay",permalink:"/Botomy/docs/game-play/basic-gameplay",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart Tutorial",permalink:"/Botomy/docs/getting-started/quickstart-tutorial"},next:{title:"Level Data",permalink:"/Botomy/docs/game-play/level-data"}},d={},o=[{value:"Play modes",id:"play-modes",level:2},{value:"ScriptEditor",id:"scripteditor",level:3},{value:"ApiCall",id:"apicall",level:3},{value:"Manual",id:"manual",level:3},{value:"Movement",id:"movement",level:2},{value:"Dash",id:"dash",level:2},{value:"Actions",id:"actions",level:2},{value:"Attack",id:"attack",level:3},{value:"Raise Shield",id:"raise-shield",level:3},{value:"Speak",id:"speak",level:3},{value:"Use Items",id:"use-items",level:3},{value:"Redeeming Skill Points",id:"redeeming-skill-points",level:3},{value:"Special Attack",id:"special-attack",level:3},{value:"Bomb",id:"bomb",level:4},{value:"Freeze",id:"freeze",level:4},{value:"Shockwave",id:"shockwave",level:4},{value:"Kill Streaks",id:"kill-streaks",level:2},{value:"Speed",id:"speed",level:3},{value:"Damage",id:"damage",level:3},{value:"Health Regen",id:"health-regen",level:3},{value:"Super",id:"super",level:3},{value:"Debugging",id:"debugging",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"basic-gameplay",children:"Basic Gameplay"}),"\n",(0,s.jsx)(n.h2,{id:"play-modes",children:"Play modes"}),"\n",(0,s.jsxs)(n.p,{children:["To enable a play mode, select the tab and press ",(0,s.jsx)(n.strong,{children:"RUN"}),". You can stop execution at any time by pressing ",(0,s.jsx)(n.strong,{children:"STOP"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can only run one mode at a time. Pressing ",(0,s.jsx)(n.strong,{children:"RUN"})," in one mode will stop execution in another mode."]})}),"\n",(0,s.jsx)(n.p,{children:"There are three supported play modes (see below):"}),"\n",(0,s.jsx)(n.h3,{id:"scripteditor",children:"ScriptEditor"}),"\n",(0,s.jsxs)(n.p,{children:["The language used in ",(0,s.jsx)(n.strong,{children:"script"})," mode is ",(0,s.jsx)(n.a,{href:"https://docs.godotengine.org/en/4.2/tutorials/scripting/gdscript/gdscript_basics.html",children:"GDScript"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Your script must define a ",(0,s.jsx)(n.code,{children:"play"})," function that takes a single argument (",(0,s.jsx)(n.code,{children:"level_data"}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"play(level_data)"})," function is called by the game engine (",(0,s.jsx)(n.em,{children:"mostly"}),") on every frame ."]})}),"\n",(0,s.jsx)(n.p,{children:"The function should return the list of moves (i.e. key presses) that the bot should follow."}),"\n",(0,s.jsx)(n.h3,{id:"apicall",children:"ApiCall"}),"\n",(0,s.jsxs)(n.p,{children:["This mode makes a POST call to the specificed url. It passes in a ",(0,s.jsx)(n.code,{children:"level_data"})," object and expects a list of moves returned."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"If the previous call has not returned, the API will not be called. The specified API will be called by the game engine at most every frame."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Using this mode allows you to use any language or libraries you want. Your imagination is the limit here (and maybe your programming skills)"})}),"\n",(0,s.jsx)(n.h3,{id:"manual",children:"Manual"}),"\n",(0,s.jsx)(n.p,{children:"This mode allows you to use keyboard input to control your character."}),"\n",(0,s.jsx)(n.div,{children:(0,s.jsx)(n.p,{children:"This mode can get very boring."})}),"\n",(0,s.jsx)(n.h2,{id:"movement",children:"Movement"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:"move_to"})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"arrow keys"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Your player will move to a given x,y target.\n",(0,s.jsx)(n.code,{children:"move_to: {x, y}"})]}),"\n",(0,s.jsxs)(n.p,{children:["e.g.\n",(0,s.jsx)(n.code,{children:'return [{"move_to": {"x": 10, "y": 20}}]'})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Your player will navigate to the target using basic astar pathfinding (built into the engine)"})}),"\n",(0,s.jsx)(n.h2,{id:"dash",children:"Dash"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:"dash"}),", ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"d"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Dash will temporarily increase your player's speed in whatever direction they are moving."}),"\n",(0,s.jsx)(n.p,{children:"Dash is a battle mechanic. It is only enabled if there are enemies within 300 radius of the player."}),"\n",(0,s.jsxs)(n.p,{children:["There is a ",(0,s.jsx)(n.code,{children:"1s"})," cooldown on this ability."]}),"\n",(0,s.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(n.p,{children:"In addition to movement, a character can take actions."}),"\n",(0,s.jsx)(n.h3,{id:"attack",children:"Attack"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:"attack"})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"space bar"})]})]}),"\n",(0,s.jsx)(n.p,{children:"This will cause the character to attack in the direction it is facing."}),"\n",(0,s.jsxs)(n.p,{children:["e.g.\n",(0,s.jsx)(n.code,{children:'return ["attack"]'})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"In most game modes, there is a speed penalty when your character is attacking. (i.e. your character slows down while attacking and moving at the same time)"})}),"\n",(0,s.jsx)(n.h3,{id:"raise-shield",children:"Raise Shield"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:"shield"})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"s"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Your character can defend itself by raising a shield. While the shield is up, your character will recieve no damage"}),"\n",(0,s.jsxs)(n.p,{children:["e.g.\n",(0,s.jsx)(n.code,{children:'return ["shield"]'})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Shields have a short lifespan. They break when hit or when they run out of energy."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Shields have a cooldown so use them wisely"})}),"\n",(0,s.jsx)(n.h3,{id:"speak",children:"Speak"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:'{"speak": "Hello there!}'})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"not supported"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Your character can speak. Returning the speak action will display the message next to your character for all to see."}),"\n",(0,s.jsxs)(n.p,{children:["e.g. ",(0,s.jsx)(n.code,{children:'return [{"speak": "Hello there"}]'})]}),"\n",(0,s.jsx)(n.h3,{id:"use-items",children:"Use Items"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:'{"use": "<item>"}'})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"x(big_potion)/c(speed_zapper)/v(ring)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["There are three items availale for use in the game - ",(0,s.jsx)(n.code,{children:"big_potion"}),"s, ",(0,s.jsx)(n.code,{children:"ring"}),"s and ",(0,s.jsx)(n.code,{children:"speed_zapper"}),"s. Once you collect the items, you can use them."]}),"\n",(0,s.jsxs)(n.p,{children:["To use them, return a ",(0,s.jsx)(n.code,{children:"use"})," action with the specified item."]}),"\n",(0,s.jsxs)(n.p,{children:["e.g.\n",(0,s.jsx)(n.code,{children:'return [{"use": "ring"}]'})]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Big Potions - replenish your health"}),(0,s.jsx)(n.p,{children:"Speed Zappers - a weapon you can fire that will slow down anything in it's blast radius"})]}),"\n",(0,s.jsx)(n.p,{children:"Rings - cloaks your player to hide from enemies and other players"}),"\n",(0,s.jsx)(n.h3,{id:"redeeming-skill-points",children:"Redeeming Skill Points"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:'{"redeem_skill_point": "<skill_type>"}'})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"e(attack)/w(speed)/q(health)"})]})]}),"\n",(0,s.jsxs)(n.p,{children:["In some maps (i.e. Fight World), you can gain ",(0,s.jsx)(n.code,{children:"xp"})," and level up. Each level will come with ",(0,s.jsx)(n.code,{children:"skill points"})," you can redeem to boost your characters abilities."]}),"\n",(0,s.jsxs)(n.p,{children:["You can apply skill points to ",(0,s.jsx)(n.code,{children:"health"}),", ",(0,s.jsx)(n.code,{children:"speed"}),", or ",(0,s.jsx)(n.code,{children:"attack"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["e.g.\n",(0,s.jsx)(n.code,{children:'return [{"redeem_skill_point": "attack"}]'})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Come up with a strategy to build up your characters skill. Speed allows you to collect items and escape attacks while health and attack may give you the upper hand in battle."})}),"\n",(0,s.jsx)(n.h3,{id:"special-attack",children:"Special Attack"}),"\n",(0,s.jsxs)(n.p,{children:["| ",(0,s.jsxs)("small",{children:[(0,s.jsx)(n.strong,{children:"script"}),":",(0,s.jsx)(n.code,{children:"special"})," ",(0,s.jsx)(n.strong,{children:"manual"}),":",(0,s.jsx)(n.code,{children:"f"})]})]}),"\n",(0,s.jsx)(n.p,{children:"Use whichever special attack is equipped on the player"}),"\n",(0,s.jsxs)(n.p,{children:["e.g.\n",(0,s.jsx)(n.code,{children:'return ["special"]'})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Specials have a cooldown so use them wisely"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"You won't lose a power up after you're killed. It seems more fun that way (for now?)"})}),"\n",(0,s.jsx)(n.h4,{id:"bomb",children:"Bomb"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"max_damage": 200,\n\t"damage_factor": 2.5, // factor of the player\'s current attack damage\n\t"cooldown": 1.5,\n'})}),"\n",(0,s.jsx)(n.div,{children:(0,s.jsx)(n.p,{children:"Bombs can do self damage. Be careful after you've dropped a bomb."})}),"\n",(0,s.jsx)(n.h4,{id:"freeze",children:"Freeze"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"cooldown": 1.5,\n\t"duration": 1.0, // how long an enemy will be frozen for (sec)\n\t"max_damage": 20,\n\t"damage_factor": 0.33, // factor of the player\'s current attack damage\n\t"damage_absorption_factor": 0.3, // how much damage is asborbed by the ice when frozen (i.e. when frozen, damage is received at 70%)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"shockwave",children:"Shockwave"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"duration": 0.2,\n\t"cooldown": 1.5,\n\t"speed": 1500,\n\t"max_damage": 15,\n\t"damage_factor": 0.2, // factor of the player\'s current attack damage\n'})}),"\n",(0,s.jsx)(n.h2,{id:"kill-streaks",children:"Kill Streaks"}),"\n",(0,s.jsx)(n.p,{children:"If your player gets high enough kill streaks, it will begin overclocking. Overclocking lasts for 15s.\nEach additional kill will reset the 15s timer."}),"\n",(0,s.jsx)(n.h3,{id:"speed",children:"Speed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"streak": 60,\n\t"value": 1.3, # overclocked speed is 1.3 times the base speed\n'})}),"\n",(0,s.jsx)(n.h3,{id:"damage",children:"Damage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"streak": 120,\n\t"value": 1.2, # overclocked damage is 1.2 times the base damage\n'})}),"\n",(0,s.jsx)(n.h3,{id:"health-regen",children:"Health Regen"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"streak": 180,\n\t"value": 10, # overclocked health regen points per second\n'})}),"\n",(0,s.jsx)(n.h3,{id:"super",children:"Super"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\t"streak": 250,\n\t"value": 9001, # value of attack damage\n'})}),"\n",(0,s.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsxs)(n.p,{children:["There is a single function to print messages to the console - ",(0,s.jsx)(n.code,{children:"print_message(msg)"})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"print_message(level_data)"})," to see what information your function gets every frame. This will help you decide what moves to return"]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Any script level error (e.g. syntax) will not be displayed. You will only see a ",(0,s.jsx)(n.code,{children:"script error message"})," (good luck!)"]})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var s=i(6540);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);