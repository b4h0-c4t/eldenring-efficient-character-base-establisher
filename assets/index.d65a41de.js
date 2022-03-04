var O=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var E=(e,i,n)=>i in e?O(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,V=(e,i)=>{for(var n in i||(i={}))A.call(i,n)&&E(e,n,i[n]);if(S)for(var n of S(i))T.call(i,n)&&E(e,n,i[n]);return e};import{j as p,r as c,R as j,a as k}from"./vendor.3cb0808b.js";const P=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}};P();const R=e=>e.vigor+e.mind+e.endurance+e.strength+e.dexterity+e.intelligence+e.faith+e.arcane-79,w=[{name:"vagabond",status:{level:9,vigor:15,mind:10,endurance:11,strength:14,dexterity:13,intelligence:9,faith:9,arcane:7}},{name:"warrior",status:{level:8,vigor:11,mind:12,endurance:11,strength:10,dexterity:16,intelligence:10,faith:8,arcane:9}},{name:"hero",status:{level:7,vigor:14,mind:9,endurance:12,strength:16,dexterity:9,intelligence:7,faith:8,arcane:11}},{name:"bandit",status:{level:5,vigor:10,mind:11,endurance:10,strength:9,dexterity:13,intelligence:9,faith:8,arcane:14}},{name:"astrologer",status:{level:6,vigor:9,mind:15,endurance:9,strength:8,dexterity:12,intelligence:16,faith:7,arcane:9}},{name:"prophet",status:{level:7,vigor:10,mind:14,endurance:8,strength:11,dexterity:10,intelligence:7,faith:16,arcane:10}},{name:"samurai",status:{level:9,vigor:12,mind:11,endurance:13,strength:12,dexterity:15,intelligence:9,faith:8,arcane:8}},{name:"prisoner",status:{level:9,vigor:11,mind:12,endurance:11,strength:11,dexterity:14,intelligence:14,faith:6,arcane:9}},{name:"confessor",status:{level:10,vigor:10,mind:13,endurance:10,strength:12,dexterity:12,intelligence:9,faith:14,arcane:9}},{name:"wretch",status:{level:1,vigor:10,mind:10,endurance:10,strength:10,dexterity:10,intelligence:10,faith:10,arcane:10}}],D=e=>{const n=w.map(t=>({name:t.name,status:{vigor:Math.max(t.status.vigor,e.vigor),mind:Math.max(t.status.mind,e.mind),endurance:Math.max(t.status.endurance,e.endurance),strength:Math.max(t.status.strength,e.strength),dexterity:Math.max(t.status.dexterity,e.dexterity),intelligence:Math.max(t.status.intelligence,e.intelligence),faith:Math.max(t.status.faith,e.faith),arcane:Math.max(t.status.arcane,e.arcane)}})).map(t=>({name:t.name,status:V({level:R(t.status)},t.status)}));let s=[{name:"none",status:{level:1/0,vigor:0,mind:0,endurance:0,strength:0,dexterity:0,intelligence:0,faith:0,arcane:0}}];return n.forEach(t=>{t.status.level===s[0].status.level&&(s=[...s,t]),t.status.level<s[0].status.level&&(s=[t])}),s},r=p.exports.jsx,a=p.exports.jsxs,H=p.exports.Fragment,m=e=>{const i=(n,s)=>{var u;let t;e.value+s<0?t=0:e.value+s>99?t=99:t=e.value+s;const l=(u=n.currentTarget.parentElement)==null?void 0:u.querySelector("input");l instanceof HTMLInputElement&&(l.value=`${t}`),e.setValue(e.value+s)};return a("div",{children:[r("label",{htmlFor:e.name,children:e.name}),r("input",{name:e.name,type:"number",defaultValue:0,onChange:n=>{var s;return e.setValue(parseInt((s=n.target)==null?void 0:s.value))}}),r("button",{onClick:n=>i(n,-10),children:"-10"}),r("button",{onClick:n=>i(n,-1),children:"-1"}),r("button",{onClick:n=>i(n,1),children:"+1"}),r("button",{onClick:n=>i(n,10),children:"+10"})]},e.name)},N=[0,0,0,0,0,0,0,0,0,396,414,434,455,476,499,522,547,572,598,624,652,680,709,738,769,800,833,870,910,951,994,1037,1081,1125,1170,1216,1262,1308,1355,1402,1450,1476,1503,1529,1555,1581,1606,1631,1656,1680,1704,1727,1750,1772,1793,1814,1834,1853,1871,1887,1900,1906,1912,1918,1924,1930,1936,1942,1948,1954,1959,1965,1971,1977,1982,1988,1993,1999,2004,2010,2015,2020,2026,2031,2036,2041,2046,2051,2056,2060,2065,2070,2074,2078,2082,2088,2090,2094,2097,2100],q=[0,0,0,0,0,0,0,0,0,0,68,71,74,77,81,84,87,90,93,96,100,106,112,118,124,130,136,142,148,154,160,166,172,178,184,190,196,202,208,214,220,226,232,238,244,250,256,262,268,274,280,288,297,305,313,321,328,335,341,346,350,352,355,357,360,362,365,367,370,373,375,378,380,383,385,388,391,393,396,398,401,403,406,408,411,414,416,419,421,424,426,429,432,434,437,439,442,444,447,450],G=[0,0,0,0,0,0,0,0,0,91,92,94,95,97,98,100,101,103,105,106,108,110,111,113,115,116,118,120,121,123,125,126,128,129,131,132,134,135,137,138,140,141,143,144,146,147,149,150,152,153,155,155,155,155,156,156,156,157,157,157,158,158,158,158,159,159,159,160,160,160,161,161,161,162,162,162,162,163,163,163,164,164,164,165,165,165,166,166,166,166,167,167,167,168,168,168,169,169,169,170],K=[0,0,0,0,0,0,0,0,0,46.6,48.2,49.8,51.4,52.9,54.5,56.1,57.7,59.3,60.9,62.5,64.1,65.6,67.2,68.8,70.4,72,73,74.1,75.2,76.4,77.6,78.9,80.2,81.5,82.8,84.1,85.4,86.8,88.1,89.5,90.9,92.3,93.7,95.1,96.5,97.9,99.4,100.8,102.2,103.7,105.2,106.6,108.1,109.6,111,112.5,114,115.5,117,118.5,120,121,122.1,123.1,124.1,125.1,126.2,127.2,128.2,129.2,130.3,131.3,132.3,133.3,134.4,135.4,136.4,137.4,138.5,139.5,140.5,141.5,142.6,132.6,144.6,145.6,146.7,147.7,148.7,149.7,150.8,151.8,152.8,153.8,154.9,155.9,156.9,157.9,159,160],W=Array.from({length:100},(e,i)=>100+i),_=({characterBase:e})=>a("article",{style:{marginTop:"16px"},children:[r("h3",{style:{margin:0,marginTop:"8px"},children:e.name}),a("section",{children:[r("h4",{style:{margin:0},children:"Advanced Status"}),a("div",{children:["HP: ",N[e.status.vigor]]}),a("div",{children:["FP: ",q[e.status.mind]]}),a("div",{children:["Stamina: ",G[e.status.endurance]]}),a("div",{children:["Amount: ",K[e.status.endurance]]}),a("div",{children:["Luck: ",W[e.status.arcane]]})]}),a("section",{children:[r("h4",{style:{margin:0,marginTop:"8px"},children:"Base Status"}),a("div",{children:["Vigor: ",e.status.vigor]}),a("div",{children:["Mind: ",e.status.mind]}),a("div",{children:["Endurance: ",e.status.endurance]}),a("div",{children:["Strength: ",e.status.strength]}),a("div",{children:["Dexterity: ",e.status.dexterity]}),a("div",{children:["Intelligence: ",e.status.intelligence]}),a("div",{children:["Faith: ",e.status.faith]}),a("div",{children:["Arcane: ",e.status.arcane]})]})]});function $(){const[e,i]=c.exports.useState(0),[n,s]=c.exports.useState(0),[t,l]=c.exports.useState(0),[u,C]=c.exports.useState(0),[g,M]=c.exports.useState(0),[f,b]=c.exports.useState(0),[v,F]=c.exports.useState(0),[x,L]=c.exports.useState(0),[y,I]=c.exports.useState([{name:"",status:{level:1/0,vigor:e,mind:n,endurance:t,strength:u,dexterity:g,intelligence:f,faith:v,arcane:x}}]),d=o=>h=>{h<0?o(0):h>99?o(99):o(h)};return c.exports.useEffect(()=>{I(D({vigor:e,mind:n,endurance:t,strength:u,dexterity:g,intelligence:f,faith:v,arcane:x}))},[e,n,t,u,g,f,v,x]),a(H,{children:[r("header",{children:r("h1",{children:"EldenRing Efficient Character Base Establisher"})}),a("main",{children:[r(m,{name:"Vigor",value:e,setValue:d(i)}),r(m,{name:"Mind",value:n,setValue:d(s)}),r(m,{name:"endurance",value:t,setValue:d(l)}),r(m,{name:"strength",value:u,setValue:d(C)}),r(m,{name:"dexterity",value:g,setValue:d(M)}),r(m,{name:"Intelligence",value:f,setValue:d(b)}),r(m,{name:"Faith",value:v,setValue:d(F)}),r(m,{name:"Arcane",value:x,setValue:d(L)}),a("div",{children:["Best Efficient Character Base is : ",y.map((o,h)=>a("span",{children:[h>0?", ":"",o.name]},o.name))]}),a("div",{children:["Target Level : ",y[0].status.level]}),y.map(o=>r(_,{characterBase:o},o.name))]})]})}j.render(r(k.StrictMode,{children:r($,{})}),document.getElementById("root"));
