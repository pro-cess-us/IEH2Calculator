import{d as I,q as V,o as p,c as m,b as t,e as u,a as i,t as o,u as l,j as k,v as E,F as f,h as w,i as C,p as R,f as M,U as d,K as P,k as D,_ as G}from"./index-xVAOHMAb.js";import{M as h}from"./MultiplierInformation-pk_E5vgr.js";import{u as H}from"./global-JbrL0Ocb.js";import{_ as T}from"./AppInput.vue_vue_type_script_setup_true_lang-xanUnd7p.js";const a=c=>(R("data-v-1342714f"),c=c(),M(),c),N={style:{display:"flex"}},U=a(()=>t("br",null,null,-1)),q=["value"],B=a(()=>t("br",null,null,-1)),F=a(()=>t("br",null,null,-1)),X={style:{"margin-left":"10px","border-left":"1px solid #fff","padding-left":"10px"}},z=a(()=>t("br",null,null,-1)),$=a(()=>t("br",null,null,-1)),j=a(()=>t("br",null,null,-1)),K=a(()=>t("hr",null,null,-1)),O=a(()=>t("br",null,null,-1)),A=a(()=>t("br",null,null,-1)),J={key:0,class:"expedition"},Q={class:"green"},W={class:"orange"},Y={style:{"text-align":"right"}},Z=["onUpdate:modelValue"],ee={value:"0"},te={value:"1"},le={value:"2"},oe={value:"3"},ne={value:"4"},ie={value:"5"},se={value:"6"},ae={class:"yellow"},de=a(()=>t("br",null,null,-1)),re={class:"yellow"},ue=a(()=>t("br",null,null,-1)),ce={class:"yellow"},pe={class:"green"},me=["onClick"],_e={style:{width:"50px",display:"inline-block","text-align":"center"}},ve=["onClick"],ge=a(()=>t("br",null,null,-1)),fe=I({__name:"expedition",setup(c){const n=C("game"),_=H(),v=n.data.expedition.expeditions.reduce((r,s)=>r+s.GetExpeditionExp(),0);function x(r){let s=0;for(let e=1;e<10;++e)if(r>=e*86400)s+=86400/e;else{s+=(r-86400*(e-1))/e;break}return s}const b=x(n.data.nitro.nitroCap.Value()),S=b*v,y=V(()=>v*_.expedition.playtime*3600*n.data.source.nitroSpeed);return(r,s)=>(p(),m(f,null,[t("div",N,[t("div",null,[u(h,{name:"Max Nitro",multiplier:"nitro.nitroCap",inline:!0},null,8,["multiplier"]),u(h,{name:"Expedition Slots",multiplier:"expedition.unlockedExpeditionSlotNum",inline:!0},null,8,["multiplier"]),u(h,{name:"Efficiency penalty",multiplier:"expedition.rewardModifierPerHour",inline:!0},null,8,["multiplier"]),i(" Expedition Minimum time: "+o(l(d).secondsToDhms(l(n).data.expedition.lowerLimitTime.Value())),1),U,i(" Nitro Speed: "),t("input",{size:"5",value:l(d).tDigit(l(n).data.source.nitroSpeed,1),onChange:s[0]||(s[0]=e=>l(n).data.source.nitroSpeed=parseFloat(e.target.value))},null,40,q),B,i(" Playtime in day (hours): "),k(t("input",{type:"text",size:"4","onUpdate:modelValue":s[1]||(s[1]=e=>l(_).expedition.playtime=e)},null,512),[[E,l(_).expedition.playtime,void 0,{lazy:!0,number:!0}]]),F]),t("div",X,[i(" EXP per second: "+o(l(d).tDigit(l(v))),1),z,i(" EXP per playtime: "+o(l(d).tDigit(y.value)),1),$,i(" EXP per Nitro Sink: "+o(l(d).tDigit(S))+" ( "+o(l(d).secondsToDhms(l(b),!1))+")",1),j,K,i(" Total EXP per day: "+o(l(d).tDigit(y.value+S*5)),1),O,i(" Hackmanite "),u(T,{modelValue:l(n).data.sdg.sdGemRitualCtrl.sdGemList[6].level,"onUpdate:modelValue":s[2]||(s[2]=e=>l(n).data.sdg.sdGemRitualCtrl.sdGemList[6].level=e)},null,8,["modelValue"]),A,i(" Turquoise "),u(T,{modelValue:l(n).data.sdg.sdGemRitualCtrl.sdGemList[7].level,"onUpdate:modelValue":s[3]||(s[3]=e=>l(n).data.sdg.sdGemRitualCtrl.sdGemList[7].level=e)},null,8,["modelValue"])])]),(p(!0),m(f,null,w(l(n).data.expedition.expeditions,(e,L)=>(p(),m(f,null,[L<l(n).data.expedition.unlockedExpeditionSlotNum.Value()?(p(),m("div",J,[t("div",null,[i(" Team "+o(L+1)+" < ",1),t("span",Q,"Lv "+o(e.TotalLevel()),1),i(" > "),t("span",W,"Rank "+o(e.TotalRank()),1)]),t("div",Y,[k(t("select",{"onUpdate:modelValue":g=>e.kind=g},[t("option",ee,"Manufacturing Bricks Lv "+o(l(n).data.expedition.globalInfoList[0].level),1),t("option",te,"Logging Trees Lv "+o(l(n).data.expedition.globalInfoList[1].level),1),t("option",le,"Gathering Shards Lv "+o(l(n).data.expedition.globalInfoList[2].level),1),t("option",oe,"Capturing Monsters Lv "+o(l(n).data.expedition.globalInfoList[3].level),1),t("option",ne,"Training Equipment Lv "+o(l(n).data.expedition.globalInfoList[4].level),1),t("option",ie,"Field Training Lv "+o(l(n).data.expedition.globalInfoList[5].level),1),t("option",se,"Marathon Race Lv "+o(l(n).data.expedition.globalInfoList[6].level),1)],8,Z),[[P,e.kind,void 0,{number:!0}]])]),t("div",null,[t("span",ae,"("+o(e.RewardPerSecString(0))+" / sec)",1),i(" "+o(e.globalInfo.RewardString(e,e.pets[0].pet,e.timeHour))+" ",1),de,t("span",re,"("+o(e.RewardPerSecString(1))+" / sec)",1),i(" "+o(e.globalInfo.RewardString(e,e.pets[1].pet,e.timeHour))+" ",1),ue,t("span",ce,"("+o(e.RewardPerSecString(2))+" / sec)",1),i(" "+o(e.globalInfo.RewardString(e,e.pets[2].pet,e.timeHour)),1)]),t("div",null,[t("span",pe,"Speed "+o(l(d).tDigit(e.TimeSpeed())),1),i("     "),t("button",{class:"button-left",onClick:g=>e.timeId--}," ",8,me),t("span",_e,o(e.timeHour>=8760?e.timeHour/8760:e.timeHour)+" "+o(e.timeHour>=8760?"y":"h"),1),t("button",{class:"button-right",onClick:g=>e.timeId++}," ",8,ve),i(" Time to finish: "+o(l(d).secondsToDhms(e.RequiredTimesec())),1),ge,i(" Most effective: "+o(e.MostEffective()),1)])])):D("",!0)],64))),256))],64))}}),Le=G(fe,[["__scopeId","data-v-1342714f"]]);export{Le as default};
