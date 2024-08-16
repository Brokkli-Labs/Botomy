"use strict";(self.webpackChunkbotomy_wiki=self.webpackChunkbotomy_wiki||[]).push([[4502],{8308:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"0.26.4-release","metadata":{"permalink":"/Botomy/blog/0.26.4-release","source":"@site/blog/2024-08-16-0.27.0-release.md","title":"0.26.4 Release","description":"Bug fixes","date":"2024-08-16T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.28,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.26.4 Release","description":"Bug fixes","slug":"0.26.4-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"0.26.2 Release","permalink":"/Botomy/blog/0.26.2-release"}},"content":"Fix bugs around item use and skill point redemption. Oh yeah more data.\\n\\n\x3c!-- truncate --\x3e\\n\\n- fix bug when trying to use multiple items at a time\\n- fix bug when trying to redeem multiple skill points at a time\\n- add skill points to minotaur fight in tutorial\\n- add `direction` property to enemy"},{"id":"0.26.2-release","metadata":{"permalink":"/Botomy/blog/0.26.2-release","source":"@site/blog/2024-08-15-0.26.2-release.md","title":"0.26.2 Release","description":"More useful tutorial","date":"2024-08-15T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.215,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.26.2 Release","description":"More useful tutorial","slug":"0.26.2-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.26.4 Release","permalink":"/Botomy/blog/0.26.4-release"},"nextItem":{"title":"0.26.4 Release","permalink":"/Botomy/blog/0.26.4-release"}},"content":"Tutorial has buttons to skip stages so you can hone against the enemies.\\nIncrease spawn area in fight world\\n\\n\x3c!-- truncate --\x3e\\n\\nSkip stages in the tutorial to get to the enemies to practice fighting them.\\n\\nAlso, increased spawn area in fight world"},{"id":"0.26.4-release","metadata":{"permalink":"/Botomy/blog/0.26.4-release","source":"@site/blog/2024-08-15-0.26.4-release.md","title":"0.26.4 Release","description":"Bug fixes","date":"2024-08-15T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.28,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.26.4 Release","description":"Bug fixes","slug":"0.26.4-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.26.2 Release","permalink":"/Botomy/blog/0.26.2-release"},"nextItem":{"title":"0.26.0 Patch","permalink":"/Botomy/blog/0.26.0-release"}},"content":"Fix bugs around item use and skill point redemption. Oh yeah more data.\\n\\n\x3c!-- truncate --\x3e\\n\\n- fix bug when trying to use multiple items at a time\\n- fix bug when trying to redeem multiple skill points at a time\\n- add skill points to minotaur fight in tutorial\\n- add `direction` property to enemy"},{"id":"0.26.0-release","metadata":{"permalink":"/Botomy/blog/0.26.0-release","source":"@site/blog/2024-08-14-0.26.0-release.md","title":"0.26.0 Patch","description":"Added to level_data","date":"2024-08-14T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.365,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.26.0 Patch","description":"Added to level_data","slug":"0.26.0-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.26.4 Release","permalink":"/Botomy/blog/0.26.4-release"},"nextItem":{"title":"0.22.0 Release","permalink":"/Botomy/blog/0.22.0-release"}},"content":"New in level_data: stats, game state info, and player data\\n\\n\x3c!-- truncate --\x3e\\n\\n```json\\nlevel_data: {\\n  game_info: {\\n    ...\\n    // highlight-start\\n    state: <STARTING/STARTED/ENDING/ENDED/MATCH_COMPLETED>,\\n    time_left_s,\\n    // highlight-end\\n    ...\\n  }\\n  // highlight-start\\n  stats: {\\n    id: {\\n      score,\\n      kills,\\n      deaths,\\n      kd_ratio,\\n    }\\n    ...\\n  }\\n  // highlight-end\\n  ...\\n  own_player: {\\n    ...\\n    // highlight-start\\n    is_zapping,\\n    speech,\\n    // highlight-end\\n    ...\\n  },\\n  ...\\n  players: [\\n    ...\\n    {\\n      ...\\n      // highlight-start\\n      is_zapping,\\n      speech,\\n      // highlight-end\\n      ...\\n    }\\n    ...\\n  ]\\n}\\n```"},{"id":"0.22.0-release","metadata":{"permalink":"/Botomy/blog/0.22.0-release","source":"@site/blog/2024-08-13-0.22.0-release.md","title":"0.22.0 Release","description":"New game play mechanics","date":"2024-08-13T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.255,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.22.0 Release","description":"New game play mechanics","slug":"0.22.0-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.26.0 Patch","permalink":"/Botomy/blog/0.26.0-release"},"nextItem":{"title":"0.23.0 Release","permalink":"/Botomy/blog/0.23.0-release"}},"content":"0.22.0 Release - Cloaking\\n\\n\x3c!-- truncate --\x3e\\n\\nThis release introduces a new power up - the ring!\\n\\nThis ring allows a play to cloak. Once cloaked, a player is not visible to other players or enemies.\\n\\nAttacking will decloak.\\n\\nShields cannot be raised when cloaked. Cloaking will take down your shield."},{"id":"0.23.0-release","metadata":{"permalink":"/Botomy/blog/0.23.0-release","source":"@site/blog/2024-08-13-0.23.0-release.md","title":"0.23.0 Release","description":"New level_data","date":"2024-08-13T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.105,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.23.0 Release","description":"New level_data","slug":"0.23.0-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.22.0 Release","permalink":"/Botomy/blog/0.22.0-release"},"nextItem":{"title":"0.23.1 Patch","permalink":"/Botomy/blog/0.23.1-release"}},"content":"0.23.0 Additional level data around speed\\n\\n\x3c!-- truncate --\x3e\\n\\nAdds `is_zapped` property to players and enemies\\n\\nAdds `is_boosted` property to players"},{"id":"0.23.1-release","metadata":{"permalink":"/Botomy/blog/0.23.1-release","source":"@site/blog/2024-08-13-0.23.1-release.md","title":"0.23.1 Patch","description":"Kill reward calc in fight world","date":"2024-08-13T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.215,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.23.1 Patch","description":"Kill reward calc in fight world","slug":"0.23.1-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.23.0 Release","permalink":"/Botomy/blog/0.23.0-release"},"nextItem":{"title":"0.24.0 Patch","permalink":"/Botomy/blog/0.24.0-release"}},"content":"0.23.1 Use an equation to calc player kill reward in fight world\\n\\n\x3c!-- truncate --\x3e\\n\\nSome exponential curve as the level increases (presumably the player is harder to kill). So you get a reward up to 5x the base (120).\\n1 + (0.541*exp(0.1*level))"},{"id":"0.24.0-release","metadata":{"permalink":"/Botomy/blog/0.24.0-release","source":"@site/blog/2024-08-13-0.24.0-release.md","title":"0.24.0 Patch","description":"Fix cloaking?","date":"2024-08-13T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.085,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.24.0 Patch","description":"Fix cloaking?","slug":"0.24.0-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.23.1 Patch","permalink":"/Botomy/blog/0.23.1-release"},"nextItem":{"title":"0.25.0 Patch","permalink":"/Botomy/blog/0.25.0-release"}},"content":"Fix cloaking in server games (hopefully)\\n\\n\x3c!-- truncate --\x3e\\n\\nSync cloak duration so it stops flashing weirdly"},{"id":"0.25.0-release","metadata":{"permalink":"/Botomy/blog/0.25.0-release","source":"@site/blog/2024-08-13-0.25.0-release.md","title":"0.25.0 Patch","description":"Lower kill xp","date":"2024-08-13T00:00:00.000Z","tags":[{"inline":true,"label":"releases","permalink":"/Botomy/blog/tags/releases"}],"readingTime":0.12,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"0.25.0 Patch","description":"Lower kill xp","slug":"0.25.0-release","authors":"cintari","tags":["releases"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.24.0 Patch","permalink":"/Botomy/blog/0.24.0-release"},"nextItem":{"title":"New release 0.21.0","permalink":"/Botomy/blog/release-0.21.0"}},"content":"Lower kill xp to help with balance. Lower data bandwidth.\\n\\n\x3c!-- truncate --\x3e\\n\\nxp func - base is 60 and max is 6*60 (60*0.91*exp(0.0943*level))"},{"id":"release-0.21.0","metadata":{"permalink":"/Botomy/blog/release-0.21.0","source":"@site/blog/2024-08-09-new-release.md","title":"New release 0.21.0","description":"New enemy + breaking changes","date":"2024-08-09T00:00:00.000Z","tags":[{"inline":false,"label":"Releases","permalink":"/Botomy/blog/tags/releases","description":"Release announcements"},{"inline":false,"label":"Breaking Changes","permalink":"/Botomy/blog/tags/breaking-changes","description":"Breaking changes"},{"inline":false,"label":"Alpha","permalink":"/Botomy/blog/tags/alpha","description":"Alpha release"}],"readingTime":0.2,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"New release 0.21.0","description":"New enemy + breaking changes","slug":"release-0.21.0","authors":"cintari","tags":["release","breaking-changes","alpha"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"0.25.0 Patch","permalink":"/Botomy/blog/0.25.0-release"},"nextItem":{"title":"Hello World","permalink":"/Botomy/blog/hello-world"}},"content":"New release w/ breaking changes\\n\\n\x3c!-- truncate --\x3e\\n\\nVersion 0.21.0 introduces a new \\"tiny\\" enemy.\\n\\nBreaking changes:\\n`level_data` structure has changed. All map items are consolidated under the `level_data.items` property to allow for easier item changes and additions later on."},{"id":"hello-world","metadata":{"permalink":"/Botomy/blog/hello-world","source":"@site/blog/2024-08-05-hello-world.md","title":"Hello World","description":"Launching the open alpha","date":"2024-08-05T00:00:00.000Z","tags":[{"inline":false,"label":"Hello","permalink":"/Botomy/blog/tags/hello","description":"Intros"},{"inline":false,"label":"Alpha","permalink":"/Botomy/blog/tags/alpha","description":"Alpha release"}],"readingTime":0.055,"hasTruncateMarker":true,"authors":[{"name":"Jason Ma","title":"Creator of Botomy","url":"https://github.com/jasonfma","imageURL":"https://github.com/jasonfma.png","key":"cintari"}],"frontMatter":{"title":"Hello World","description":"Launching the open alpha","slug":"hello-world","authors":"cintari","tags":["hello","alpha"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"New release 0.21.0","permalink":"/Botomy/blog/release-0.21.0"}},"content":"Officially launching Botomy in open alpha.\\n\\n\x3c!-- truncate --\x3e\\n\\nCheckout https://botomy.vercel.app"}]}}')}}]);