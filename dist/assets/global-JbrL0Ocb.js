import{a7 as a,a8 as o}from"./index-xVAOHMAb.js";const e="GlobalStore",r={dataTabSelected:0,heroStatsTabSelected:0,rubyShard:{ticket:0,failure:0,dungeon:0,modifier:0,floor:100},dropChance:{level:0,sdchance:1},guild:{targetLevel:0,expPerHour:0},talisman:{perWA:Array(47).fill(0)},expedition:{playtime:0}},s=a(e,{state:()=>o(e,r,localStorage,{mergeDefaults:!0}),actions:{set(t){console.log(t)},increment(){this.count++},Save(){localStorage.setItem(e,JSON.stringify(this))}}});export{s as u};
