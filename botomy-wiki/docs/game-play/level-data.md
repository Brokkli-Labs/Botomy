---
sidebar_position: 2
---

# Level Data

## game_info

```
  game_info: {
    map: <name>,
    game_type: <rpg/survival>,
    state: <STARTING/STARTED/ENDING/ENDED/MATCH_COMPLETED>,
    time_left_s, // time left in the round in secs,
    friendly_fire: true/false,
  }
```

## items

```
  items: [
    {
      type: "coin",
      id,
      position: {x, y},
      value,
      points,
    },
    {
      type: "big_potion",
      id,
      position: {x, y},
      value, // not used
    },
    {
      type: "speed_zapper",
      id,
      position: {x, y},
      value, // speed zap percentage
      duration, // in seconds
    },
    {
      type: "ring",
      id,
      position: {x, y},
      duration, // in seconds
    },
  ]
```

## own_player

```
  own_player: {
    id,
    type: "player",
    display_name,
    position: {x, y},
    items: [
      big_potions: [ {value} ],
      speed_zappers: [ { value, duration }],
      rings: [ { duration }],
    ],
    max_health,
    health,
    attack_damage,
    is_cloaked,
    is_shield_ready,
    shield_raised,
    direction: <"left"/"right">,
    is_zapping,
    is_attacking,
    is_zapped,
    is_boosted,
    is_dashing,
    is_dash_ready,
    is_colliding,
    collisions : [{ relative_pos: { x, y }, type }]
    is_frozen,
    is_pushed,
    unleashing_shockwave,
    is_special_ready,
    speech,
    score,
    levelling: { // only in fight world
      level,
      available_skill_points,
      attack, // redeemed attack points
      speed, // redeemed speed points
      health, // redeemed health points
    }
  }
```

## players

```
  players: [
    {
      id,
      type: "player",
      display_name,
      position: {x, y},
      health,
      attack_damage,
      shield_raised,
      direction: <"left"/"right">,
      is_attacking,
      is_zapping,
      is_zapped,
      is_boosted,
      is_dashing,
      is_frozen,
      is_pushed,
      unleashing_shockwave,
      special_equipped,
      speech,
      score,
      levelling: { // only in fight world
        level,
      },
    }
  ]
```

## enemies

```
  enemies: [
    {
      type: <wolf/ghoul/minotaur/tiny>
      id,
      position: {x, y},
      health,
      attack_damage,
      is_zapped,
      is_frozen,
      is_pushed,
      direction: <left/right>,
    }
  ]
```

## obstacles

`x,y` coordinates of tiles that are obstacles on the map.
Each object is 48x48.

```
  obstacles: [
    {
      x,
      y,
    },
    {
      x,
      y,
    },
    ...
  ]
```

## hazards

Hazards are things that can hurt you - bombs, icicles, etc.

```
  hazards: [
    {
      id,
      position,
      attack_damage,
      status: <charging/active/idle>,
      type,
      owner_id,
    },
    ...
  ]
```

## stats

```
  stats: {
    "<player_id_1>": {
      score,
      kills,
      deaths,
      coins,
      kd_ratio,
      xps,
      wolf_kills,
      ghoul_kills,
      tiny_kills,
      minotaur_kills,
      player_kills,
      self_destructs,
    }
    "<player_id_2>": {
      score,
      kills,
      deaths,
      coins,
      kd_ratio,
      xps,
      wolf_kills,
      ghoul_kills,
      tiny_kills,
      minotaur_kills,
      player_kills,
      self_destructs,
    }
  }
```