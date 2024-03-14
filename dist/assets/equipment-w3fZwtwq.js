import{d as I,y as x,i as L,z as ge,q as U,o as n,c as a,e as i,A as pe,u as e,w as M,b as t,k as y,a as v,t as r,L as D,F as _,h as b,B,C as z,D as J,G as se,U as k,H as O,I as re,J as oe,j as R,K as Y,E as j,v as Z,M as q,N as ue,p as W,f as X,_ as G,P as he,O as ve,Q as ee,R as be,S as Ee,T as ke,V as ye,W as $e,X as De,Y as Se,Z as me,$ as Me,a0 as Ce,g as H,a1 as ce,a2 as F,a3 as te}from"./index-xVAOHMAb.js";import{T as _e,M as u,u as qe}from"./MultiplierInformation-pk_E5vgr.js";import{u as He}from"./global-JbrL0Ocb.js";const V=d=>(W("data-v-17341baa"),d=d(),X(),d),Ie=["tabindex","src"],Pe={class:"head"},xe=["src"],Ve={key:0,class:"purple"},we={class:"green"},Ke=V(()=>t("h5",null,"Information",-1)),Ae={key:0},Le={class:"green"},Fe={class:"green"},Ge=V(()=>t("br",null,null,-1)),Re=V(()=>t("h5",null,"Effect",-1)),Be=["innerHTML"],Ne={key:0,class:"gray"},Te=V(()=>t("br",null,null,-1)),Oe=V(()=>t("h5",null,"Forged Effect",-1)),Ue={class:"orange"},ze={class:"orange"},We=V(()=>t("br",null,null,-1)),Xe=V(()=>t("h5",null,"Proficiency",-1)),Je={class:"green"},je={class:"green"},Qe={class:"wrapper"},Ye={class:"head"},Ze=["src"],et={key:0,value:"0"},tt=["selected","value"],lt=V(()=>t("h5",null,"Information",-1)),nt={key:0},at={class:"green"},it={class:"green"},st=V(()=>t("br",null,null,-1)),rt=V(()=>t("h5",null,"Effect",-1)),ot=["innerHTML"],ut=V(()=>t("br",null,null,-1)),ct={style:{display:"flex"}},dt=["onUpdate:modelValue"],pt=["value"],mt=["onClick"],_t=["onUpdate:modelValue"],ft=["value","selected"],gt=["onUpdate:modelValue","min","max","value"],ht=V(()=>t("br",null,null,-1)),vt={class:"orange"},bt=["onUpdate:modelValue"],Et=V(()=>t("br",null,null,-1)),kt=I({__name:"EquipmentInfo",props:{id:{}},setup(d){const s=d,p=x(!1),c=x(),E=L("game"),o=ge(),l=E.data.inventory.equipmentSlots[s.id],f=x(),h=U(()=>{let P=4;return l.forgeEffects.forEach((S,m)=>{S.IsForged()&&P--}),P});function g(){const P="img/equip";if(l.slotId<500)return`${P}/${ue[l.kind]}.png`;if(l.kind==0)switch(l.slotPart){case z.Weapon:return`${P}/EquipSlotWeapon.png`;case z.Armor:return`${P}/EquipSlotArmor.png`;case z.Jewelry:return`${P}/EquipSlotJewelry.png`}else return`${P}/${ue[l.kind]}.png`}function $(P){switch(o.type=P,P){case q.Equipment:o.data=l.Copy(q.Equipment);break;case q.OptionEffect:o.data=l.Copy(q.OptionEffect);break;case q.ForgeEffects:o.data=l.Copy(q.ForgeEffects);break}}function w(){switch(o.type){case q.Equipment:l.Paste(q.Equipment,o.data);break;case q.OptionEffect:l.Paste(q.OptionEffect,o.data);break;case q.ForgeEffects:l.Paste(q.ForgeEffects,o.data);break}}return(P,S)=>(n(),a("div",null,[i(_e,{style:{width:"700px"}},pe({default:M(()=>[t("img",{tabindex:s.id,ref_key:"img",ref:c,class:B(["icon48",e(l).isDisabled()&&e(l).slotId>500?"disabled":""]),src:g(),onClick:S[0]||(S[0]=m=>e(l).isDisabled()?null:f.value.showModal()),onMouseoverOnce:S[1]||(S[1]=m=>p.value=!0),onMouseover:S[2]||(S[2]=m=>c.value.focus()),onKeydown:[S[3]||(S[3]=re(oe(m=>$(e(q).Equipment),["ctrl"]),["c"])),S[4]||(S[4]=re(oe(m=>w(),["ctrl"]),["v"]))]},null,42,Ie)]),_:2},[e(l).kind!=0&&p.value?{name:"content",fn:M(()=>[t("div",Pe,[t("img",{class:"icon96",src:g()},null,8,xe),e(l).globalInfo.isArtifact?(n(),a("span",Ve,"[Artifact]")):y("",!0),v(" "+r(e(D).EquipmentName(e(l).kind))+" < ",1),t("span",we,"Lv "+r(e(l).level),1),v(" > "),(n(!0),a(_,null,b(e(l).optionEffects,(m,C)=>(n(),a("span",{class:B(m.isAfter?"purple":"yellow")},[C<e(l).totalOptionNum.Value()?(n(),a(_,{key:0},[v(" [ "+r(e(D).EquipmentEffectName(m.kind))+" "+r(m.kind!=0?m.level:"")+" ] ",1)],64)):y("",!0)],2))),256))]),Ke,t("p",null,"-Type : "+r(e(z)[e(l).globalInfo.part]),1),t("p",null,"-Rarity : "+r(e(J)[e(l).globalInfo.rarity]),1),e(l).setKind?(n(),a("p",Ae,[v(" -Unique : "+r(e(se)[e(l).globalInfo.setKind])+" Set ",1),t("span",Le,"[Effect Bonus "+r(e(k).percent(e(l).EffectMultiplierFromSetItem(e(l).heroKind)-1))+"]",1),v(" Equipping "),t("span",Fe,r(e(E).data.inventory.SetItemEquippedNum(e(l).setKind,e(l).heroKind)),1),v(" / 8 ")])):y("",!0),Ge,Re,(n(!0),a(_,null,b(e(l).globalInfo.effects,(m,C)=>(n(),a("p",{innerHTML:e(D).EquipmentEffect(m.kind,e(l).EffectValue(e(l).OriginalEffectValue(C),e(l).heroKind),!1,e(l).EffectValue(e(l).OriginalEffectIncrementPerLevel(C),e(l).heroKind),!1)},null,8,Be))),256)),(n(!0),a(_,null,b(e(l).optionEffects,(m,C)=>(n(),a("p",null,[C<e(l).totalOptionNum.value?(n(),a(_,{key:0},[v(r(e(D).EquipmentEffect(m.kind,e(l).EffectValue(m.effectValue,e(l).heroKind)))+" ",1),m.kind!=0?(n(),a("span",Ne,"("+r(e(D).EquipmentEffect(m.kind,e(l).EffectValue(m.MinEffectValue(),e(l).heroKind),!1,0,!0))+" ~ "+r(e(D).EquipmentEffect(m.kind,e(l).EffectValue(m.MaxEffectValue(),e(l).heroKind),!1,0,!0))+")",1)):y("",!0)],64)):y("",!0)]))),256)),Te,Oe,(n(!0),a(_,null,b(e(l).forgeEffects,m=>(n(),a("p",Ue,[m.effectValue>0?(n(),a(_,{key:0},[v(" - "+r(m.EffectString()),1)],64)):y("",!0)]))),256)),(n(!0),a(_,null,b(h.value,m=>(n(),a("p",ze,"- [Forging Available]"))),256)),We,Xe,(n(!0),a(_,null,b(e(l).globalInfo.levelMaxEffects,(m,C)=>(n(),a("p",null,[v(" -"+r(e(O)[C])+" < ",1),t("span",Je,"Lv "+r(e(l).globalInfo.levels[C].value),1),v(" >: "),t("span",je,"["+r(e(D).EquipmentEffectName(m.kind))+" + "+r(m.kind==0?e(l).globalInfo.rarity==e(J).Epic?3:e(l).globalInfo.rarity==e(J).Rare||e(l).globalInfo.rarity==e(J).SuperRare?2:1:e(k).convertTo(e(l).EffectValue(m.EffectValue(0),e(l).heroKind),2,m.valueKind))+"]",1)]))),256))]),key:"0"}:void 0]),1024),p.value?(n(),a("dialog",{key:0,ref_key:"dialog",ref:f,onMousedown:S[8]||(S[8]=m=>{m.target.nodeName==f.value.nodeName&&f.value.close()})},[t("div",Qe,[t("div",Ye,[t("img",{class:"icon96",src:g()},null,8,Ze),t("select",{name:"kind",onChange:S[5]||(S[5]=m=>e(l).kind=parseInt(m.target.value))},[e(l).slotPart!=e(z).Weapon?(n(),a("option",et,"Nothing")):y("",!0),(n(!0),a(_,null,b(e(E).data.equipment.globalInformations.filter(m=>m.part==e(l).slotPart),m=>(n(),a("option",{selected:m.kind==e(l).kind,value:m.kind},r(e(D).EquipmentName(m.kind)),9,tt))),256))],32)]),lt,t("p",null,"-Type : "+r(e(z)[e(l).globalInfo.part]),1),t("p",null,"-Rarity : "+r(e(J)[e(l).globalInfo.rarity]),1),e(l).setKind?(n(),a("p",nt,[v(" -Unique : "+r(e(se)[e(l).globalInfo.setKind])+" Set ",1),t("span",at,"[Effect Bonus "+r(e(k).percent(e(l).EffectMultiplierFromSetItem(e(l).heroKind)-1))+"]",1),v(" Equipping "),t("span",it,r(e(E).data.inventory.SetItemEquippedNum(e(l).setKind,e(l).heroKind)),1),v(" / 8 ")])):y("",!0),st,rt,(n(!0),a(_,null,b(e(l).globalInfo.effects,(m,C)=>(n(),a("p",{innerHTML:e(D).EquipmentEffect(m.kind,e(l).EffectValue(e(l).OriginalEffectValue(C),e(l).heroKind),!1,e(l).EffectValue(e(l).OriginalEffectIncrementPerLevel(C),e(l).heroKind),!1)},null,8,ot))),256)),ut,(n(!0),a(_,null,b(e(l).optionEffects,(m,C)=>(n(),a("p",ct,[C<e(l).totalOptionNum.Value()?(n(),a(_,{key:0},[R(t("select",{"onUpdate:modelValue":A=>m.kind=A,name:"optionKind"},[(n(!0),a(_,null,b(e(j).EquipmentEffectKind,(A,ie)=>(n(),a("option",{value:ie},r(e(D).EquipmentEffectName(ie)),9,pt))),256))],8,dt),[[Y,m.kind]]),m.kind==0?(n(),a(_,{key:0},[v("  "),t("button",{class:"small",onClick:A=>e(l).FindMaxEnchantDPS(m.optionId)},"Find MAX DPS",8,mt)],64)):y("",!0),m.kind?(n(),a(_,{key:1},[v("  Lv  "),R(t("select",{"onUpdate:modelValue":A=>m.level=A,name:"optionLevel"},[(n(!0),a(_,null,b(m.MaxLevel(),A=>(n(),a("option",{value:A,selected:m.level==A},r(A),9,ft))),256))],8,_t),[[Y,m.level]]),R(t("input",{"onUpdate:modelValue":A=>m.effectValue=A,type:"range",step:"0.00000001",min:m.MinEffectValue(),max:m.MaxEffectValue(),value:m.effectValue,name:"optionValue"},null,8,gt),[[Z,m.effectValue,void 0,{lazy:!0}]]),v(" "+r(e(D).EquipmentEffect(m.kind,e(l).EffectValue(m.effectValue,e(l).heroKind),!1,0,!0)),1)],64)):y("",!0)],64)):y("",!0)]))),256)),ht,(n(!0),a(_,null,b(e(l).forgeEffects,m=>(n(),a("p",vt,[R(t("input",{type:"text","onUpdate:modelValue":C=>m.effectValue=C,name:"forgeValue",size:"8"},null,8,bt),[[Z,m.effectValue,void 0,{number:!0,lazy:!0}]]),v("- "+r(m.EffectString()),1)]))),256)),Et,t("button",{onClick:S[6]||(S[6]=m=>$(e(q).OptionEffect)),class:"btn btn-gray"},"Copy All Enchantments"),t("button",{onClick:S[7]||(S[7]=m=>$(e(q).ForgeEffects)),class:"btn btn-gray"},"Copy All Anvil Effects")])],544)):y("",!0)]))}}),ne=G(kt,[["__scopeId","data-v-17341baa"]]),le=d=>(W("data-v-155b9ee4"),d=d(),X(),d),yt=["tabindex","src"],$t={class:"head"},Dt=["src"],St={key:0},Mt={class:"green"},Ct=le(()=>t("br",null,null,-1)),qt=le(()=>t("br",null,null,-1)),Ht={style:{"font-size":"12px"}},It={style:{"font-size":"12px"}},Pt=le(()=>t("h5",null,"Equipped Effect",-1)),xt={class:"wrapper"},Vt={class:"head"},wt=["src"],Kt=["value"],At={style:{"font-size":"12px"}},Lt=le(()=>t("h5",null,"Equipped Effect",-1)),Ft=I({__name:"PotionInfo",props:{id:{}},setup(d){const s=d,p=x(!1),c=x(),o=L("game").data.inventory.potionSlots[s.id],l=x();function f(){const h="img/equip";return o.kind==0?`${h}/EquipSlotPotion.png`:`${h}/${ve[o.kind]}.png`}return(h,g)=>(n(),a("div",null,[i(_e,{style:{width:"700px"}},pe({default:M(()=>[t("img",{tabindex:s.id,ref_key:"img",ref:c,class:B(["icon48",e(o).isDisabled()?"disabled":""]),src:f(),onClick:g[0]||(g[0]=$=>e(o).isDisabled()?null:l.value.showModal()),onMouseoverOnce:g[1]||(g[1]=$=>p.value=!0),onMouseover:g[2]||(g[2]=$=>c.value.focus())},null,42,yt)]),_:2},[e(o).kind!=0&&p.value?{name:"content",fn:M(()=>[t("div",$t,[t("img",{class:"icon96",src:f()},null,8,Dt),v(" "+r(e(D).PotionName(e(o).kind))+" ",1),e(o).type!=e(he).Trap?(n(),a("span",St,[v("< "),t("span",Mt,"Lv "+r(e(o).level),1),v(" >")])):y("",!0),Ct,qt,t("p",Ht,"-Type : "+r(e(D).PotionTypeString(e(o).type)),1),t("p",It,"-Stack #: "+r(e(o).stack)+" / 30",1)]),Pt,t("p",null,r(e(D).PotionEffect(e(o).kind,e(o).effectValue,!1)),1)]),key:"0"}:void 0]),1024),p.value?(n(),a("dialog",{key:0,ref_key:"dialog",ref:l,onMousedown:g[5]||(g[5]=$=>{$.target.nodeName==l.value.nodeName&&l.value.close()})},[t("div",xt,[t("div",Vt,[t("img",{class:"icon96",src:f()},null,8,wt),R(t("select",{"onUpdate:modelValue":g[3]||(g[3]=$=>e(o).kind=$),name:"kind"},[(n(!0),a(_,null,b(e(j).PotionKind,($,w)=>(n(),a("option",{value:w},r(e(D).PotionName(w)),9,Kt))),256))],512),[[Y,e(o).kind,void 0,{lazy:!0,number:!0}]]),t("p",At,"-Type : "+r(e(D).PotionTypeString(e(o).type)),1),t("p",null,[v("-Stack #: "),R(t("input",{"onUpdate:modelValue":g[4]||(g[4]=$=>e(o).stack=$),size:"6",name:"stack"},null,512),[[Z,e(o).stack,void 0,{lazy:!0,number:!0}]]),v(" / 30")])]),Lt,t("p",null,r(e(D).PotionEffect(e(o).kind,e(o).effectValue,!1)),1)])],544)):y("",!0)]))}}),Gt=G(Ft,[["__scopeId","data-v-155b9ee4"]]),Rt={class:"wrapper"},Bt=I({__name:"AppDialog",setup(d){const s=x();function p(c){c.target.nodeName==s.value.nodeName&&s.value.close()}return(c,E)=>(n(),a(_,null,[t("span",{onClick:E[0]||(E[0]=o=>s.value.showModal())},[ee(c.$slots,"trigger",{},()=>[v("Dialog Open")],!0)]),t("dialog",{ref_key:"dialog",ref:s,onMousedown:p},[t("div",Rt,[ee(c.$slots,"content",{},()=>[v("Dialog Content")],!0)])],544)],64))}}),de=G(Bt,[["__scopeId","data-v-c02ec022"]]),ae=d=>(W("data-v-0f624bf8"),d=d(),X(),d),Nt={class:"container"},Tt=ae(()=>t("h1",{style:{"text-align":"center"}},"Equipment Breakdown",-1)),Ot=ae(()=>t("h3",null,"Equipment List",-1)),Ut=ae(()=>t("h3",null,"Enchantements List",-1)),zt=I({__name:"EquipmentBreakdown",setup(d){const s=L("game"),p=U(()=>520+s.data.source.currentHero*720+s.data.source.equipmentLoadoutIds[s.data.source.currentHero]*72);function c(){let o={};for(let l=p.value;l<p.value+72;l++){if(s.data.inventory.equipmentSlots[l].kind==0||s.data.inventory.equipmentSlots[l].isDisabled())continue;let f=D.EquipmentName(s.data.inventory.equipmentSlots[l].kind);o[f]=o[f]?o[f]+1:1}return o}function E(){let o={};for(let l=p.value;l<p.value+72;l++){const f=s.data.inventory.equipmentSlots[l];if(!(f.kind==0||f.isDisabled()))for(let h=0;h<f.optionEffects.length;h++){if(f.optionEffects[h].kind==0)continue;const g=D.EquipmentEffectName(f.optionEffects[h].kind);o[g]=o[g]?o[g]+1:1}}return o}return(o,l)=>(n(),a("div",Nt,[Tt,t("div",null,[Ot,(n(!0),a(_,null,b(c(),(f,h)=>(n(),a("p",null,r(h)+" x"+r(f),1))),256))]),t("div",null,[Ut,(n(!0),a(_,null,b(E(),(f,h)=>(n(),a("p",null,r(h)+" x"+r(f),1))),256))])]))}}),Wt=G(zt,[["__scopeId","data-v-0f624bf8"]]);var K=(d=>(d[d.HeroKind=0]="HeroKind",d[d.EquipmentKind=1]="EquipmentKind",d[d.Weapon=2]="Weapon",d[d.Armor=3]="Armor",d[d.Jewelry=4]="Jewelry",d[d.PotionKind=5]="PotionKind",d[d.SuperDungeon=6]="SuperDungeon",d[d.EquipmentEffectKind=7]="EquipmentEffectKind",d[d.EquipmentForgeEffectKind=8]="EquipmentForgeEffectKind",d[d.Number=9]="Number",d[d.MonsterSpecies=10]="MonsterSpecies",d[d.MonsterColor=11]="MonsterColor",d[d.ChallengeMonsterKind=12]="ChallengeMonsterKind",d))(K||{});const Xt=["value"],Jt={key:1,style:{display:"inline-block"}},jt={style:{display:"flex"}},Qt=["src","title","onClick"],Yt=I({__name:"AppSelect",props:be({type:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const s=d,p=L("game"),c=Ee(d,"modelValue");function E(o){let l=[];switch(o){case K.EquipmentEffectKind:for(let f=0;f<j.EquipmentEffectKind;f++)l.push(D.EquipmentEffectName(f));break;case K.MonsterSpecies:for(let f=0;f<j.MonsterSpecies;f++)l.push(D.MonsterSpeciesName(f));break;case K.MonsterColor:for(let f=0;f<j.MonsterColor;f++)l.push(ke[f]);break;case K.ChallengeMonsterKind:return["Florzporb","Arachnetta","Guardian Kor","Nostro","Lady Emelda","Nari Sune","Octobaddie","Bananoon","Glorbliorbus","Distortion Slime"]}return l}return(o,l)=>(n(),a(_,null,[s.type!=e(K).HeroKind?R((n(),a("select",{key:0,"onUpdate:modelValue":l[0]||(l[0]=f=>c.value=f),name:"select"},[(n(!0),a(_,null,b(E(s.type),(f,h)=>(n(),a("option",{value:h},r(f),9,Xt))),256))],512)),[[Y,c.value]]):y("",!0),s.type==e(K).HeroKind?(n(),a("div",Jt,[t("div",jt,[(n(),a(_,null,b(6,(f,h)=>t("img",{src:`img/hero/${e(O)[h]}.png`,class:B({inactive:h!=e(p).data.source.currentHero}),title:e(O)[h],onClick:g=>e(p).data.source.currentHero=h},null,10,Qt)),64))])])):y("",!0)],64))}}),Q=G(Yt,[["__scopeId","data-v-a1bba979"]]),Zt=["onClick"],el={class:"container"},tl=I({__name:"EnchantFinder",setup(d){const s=L("game"),p=x(0),c=x(1),E=U(()=>{let f=[];if(p.value==0)return f;for(let h=0;h<4840;h++){const g=s.data.inventory.equipmentSlots[h];for(let $=0;$<g.optionEffects.length;$++)if(g.optionEffects[$].kind==p.value){f.push(g);break}}return f}),o=U(()=>E.value.map(f=>f.slotId));function l(f){const h=(f-1)*52,g=h+52;for(let $=0;$<o.value.length;$++){const w=o.value[$];if(w>=h&&w<g)return"green"}}return(f,h)=>(n(),a(_,null,[v(" Search Enchant: "),i(Q,{type:e(K).EquipmentEffectKind,modelValue:p.value,"onUpdate:modelValue":h[0]||(h[0]=g=>p.value=g)},null,8,["type","modelValue"]),t("div",null,[(n(),a(_,null,b(9,g=>t("button",{onClick:$=>c.value=g,class:B(c.value==g?"yellow":l(g))},r(g),11,Zt)),64))]),t("div",el,[(n(),a(_,null,b(52,g=>t("div",{class:B(o.value.includes(52*(c.value-1)+g-1)?"found":"")},r(52*(c.value-1)+g-1),3)),64))]),(n(!0),a(_,null,b(E.value,(g,$)=>(n(),a("p",null,r($+1)+". "+r(g.SlotString()),1))),256))],64))}}),ll=G(tl,[["__scopeId","data-v-ca45f371"]]),fe=d=>(W("data-v-8fffb912"),d=d(),X(),d),nl={style:{display:"flex",height:"24px"}},al=["onClick"],il=fe(()=>t("button",{class:"blue small",title:"Equipment Breakdown"},"☰",-1)),sl=fe(()=>t("button",{class:"blue small",title:"Search"},"🔎︎",-1)),rl={style:{display:"flex",margin:"3px 0","align-items":"center"}},ol={class:"part"},ul={class:"block"},cl={class:"part"},dl={class:"block"},pl={class:"part"},ml={class:"block"},_l={class:"part"},fl={class:"block-potion"},gl=I({__name:"EquipmentLoadout",setup(d){const s=L("game"),p=U(()=>520+s.data.source.currentHero*720+s.data.source.equipmentLoadoutIds[s.data.source.currentHero]*72);return(c,E)=>(n(),a("div",null,[t("div",nl,[(n(),a(_,null,b(7,(o,l)=>t("button",{class:B(["blue small",{yellow:l==e(s).data.source.equipmentLoadoutIds[e(s).data.source.currentHero]}]),onClick:f=>e(s).data.source.equipmentLoadoutIds[e(s).data.source.currentHero]=l}," Loadout "+r(o),11,al)),64)),i(de,null,{trigger:M(()=>[il]),content:M(()=>[i(Wt)]),_:1}),i(de,null,{trigger:M(()=>[sl]),content:M(()=>[i(ll)]),_:1})]),t("div",rl,[i(Q,{type:e(K).HeroKind},null,8,["type"]),v("  "+r(e(O)[e(s).data.source.currentHero])+" "+r(e(s).data.source.isSuperDungeon?`Grade: ${e(s).data.source.heroGrade[e(s).data.source.currentHero]}`:`Level: ${e(s).data.source.heroLevel[e(s).data.source.currentHero]}`),1)]),t("div",null,[t("div",ol,[t("div",ul,[(n(),a(_,null,b(24,(o,l)=>i(ne,{id:p.value+l,class:"equipment",key:p.value+l},null,8,["id"])),64))])]),t("div",cl,[t("div",dl,[(n(),a(_,null,b(24,(o,l)=>i(ne,{id:p.value+l+24,class:"equipment",key:p.value+l},null,8,["id"])),64))])]),t("div",pl,[t("div",ml,[(n(),a(_,null,b(24,(o,l)=>i(ne,{id:p.value+l+48,class:"equipment",key:p.value+l},null,8,["id"])),64))])]),t("div",_l,[t("div",fl,[(n(),a(_,null,b(6,(o,l)=>i(Gt,{id:260+l+e(s).data.source.currentHero*6,class:"equipment"},null,8,["id"])),64))])])])]))}}),hl=G(gl,[["__scopeId","data-v-8fffb912"]]),N=I({__name:"TabItem",props:{title:{}},setup(d){const s=x(0),p=x(!1),c=L("TabsProvider");return ye(()=>c.selectedIndex,()=>{p.value=s.value===c.selectedIndex}),$e(()=>{s.value=c.count,c.count++,p.value=s.value===c.selectedIndex}),(E,o)=>R((n(),a("div",null,[ee(E.$slots,"default")],512)),[[De,p.value]])}}),vl=["onClick"],bl=I({__name:"TabPanel",props:{selectedIndex:{}},emits:["tabChange"],setup(d,{emit:s}){const c=Se({selectedIndex:d.selectedIndex|0,tabs:[],count:0}),E=x(),o=x(),l=s;Ce("TabsProvider",c),me(()=>{E.value=Me().proxy,o.value=E.value.$slots.default(),c.tabs=E.value.$slots.default().filter(h=>h.type.__name==="TabItem")});function f(h){c.selectedIndex=h,l("tabChange",h)}return(h,g)=>(n(),a(_,null,[t("ul",null,[(n(!0),a(_,null,b(c.tabs,($,w)=>(n(),a("li",{key:w,onClick:P=>f(w),class:B(c.selectedIndex===w?"active":"")},r($.props.title),11,vl))),128))]),t("div",null,[ee(h.$slots,"default",{},void 0,!0)])],64))}}),El=G(bl,[["__scopeId","data-v-1af58e1d"]]),T=d=>(W("data-v-cd6b42dd"),d=d(),X(),d),kl={class:"panel"},yl=T(()=>t("h3",null,"Main Stats",-1)),$l={class:"block"},Dl={class:"block"},Sl=T(()=>t("h3",null,"Attack Stats",-1)),Ml={class:"block"},Cl=T(()=>t("h3",null,"Defense Stats",-1)),ql={class:"block"},Hl={class:"block"},Il=T(()=>t("h3",null,"Gain Stats",-1)),Pl={class:"block"},xl={class:"block"},Vl=T(()=>t("h3",null,"Skills",-1)),wl={class:"block"},Kl={class:"block"},Al=T(()=>t("h3",null,"Bestiary Stats",-1)),Ll={class:"block"},Fl=T(()=>t("h3",null,"Region Stats",-1)),Gl={class:"block"},Rl=T(()=>t("h3",null,"SD Stats",-1)),Bl={class:"block"},Nl={class:"block"},Tl=I({__name:"HeroStats",setup(d){const s=L("game"),p=He();return me(()=>{s.data.Update()}),(c,E)=>(n(),a("div",kl,[i(El,{"selected-index":e(p).heroStatsTabSelected,onTabChange:E[0]||(E[0]=o=>{e(p).heroStatsTabSelected=o})},{default:M(()=>[i(N,{title:"Main"},{default:M(()=>[e(p).heroStatsTabSelected==0?(n(),a(_,{key:0},[yl,t("div",$l,[(n(!0),a(_,null,b(e(s).data.stats.currentHero.basicStats,(o,l)=>(n(),H(u,{name:e(ce)[l],multiplier:`stats.currentHero.basicStats[${l}]`},null,8,["name","multiplier"]))),256)),i(u,{name:"Move Speed",multiplier:"stats.currentHero.stats[10]"},null,8,["multiplier"]),i(u,{name:"Equipment Drop Chance",multiplier:"stats.currentHero.stats[9]"},null,8,["multiplier"]),i(u,{name:"Equipment 1st Enchantment Slot Chance",multiplier:"stats.currentHero.optionEffectChance[0]"},null,8,["multiplier"]),i(u,{name:"Equipment 2nd Enchantment Slot Chance",multiplier:"stats.currentHero.optionEffectChance[1]"},null,8,["multiplier"]),i(u,{name:"Equipment 3rd Enchantment Slot Chance",multiplier:"stats.currentHero.optionEffectChance[2]"},null,8,["multiplier"]),i(u,{name:"Equipment Effect",multiplier:"equipment.effectMultiplier"},null,8,["multiplier"]),i(u,{name:"Potion Effect",multiplier:"potion.effectMultiplier"},null,8,["multiplier"])]),t("div",Dl,[i(u,{name:"HP Regeneration",multiplier:"stats.currentHero.hpRegenerate","value-suffix":"/ sec"},null,8,["multiplier"]),i(u,{name:"MP Regeneration",multiplier:"stats.currentHero.mpRegenerate","value-suffix":"/ sec"},null,8,["multiplier"]),i(u,{name:"Blessing Effect",multiplier:`blessingInfo.effectMultipliers[${e(s).data.source.currentHero}]`},null,8,["multiplier"]),i(u,{name:"SD Damage Multiplier",multiplier:"battle.superDungeonCtrl.damageMultiplier"},null,8,["multiplier"]),i(u,{name:"SD Damage Cut Multiplier",multiplier:"battle.superDungeonCtrl.damageCutMultiplier"},null,8,["multiplier"]),i(u,{name:"SD Challange Boss Damage Multiplier",multiplier:"battle.superDungeonCtrl.sdChallengeBossDamageMultiplier"},null,8,["multiplier"]),i(u,{name:"SD Challange Boss Damage Cut Multiplier",multiplier:"battle.superDungeonCtrl.sdChallengeBossDamageCutMultiplier"},null,8,["multiplier"]),i(u,{name:"SD Armored Fury",multiplier:"battle.superDungeonCtrl.armoredFury"},null,8,["multiplier"]),i(u,{name:"SD Warded Fury",multiplier:"battle.superDungeonCtrl.wardedFury"},null,8,["multiplier"])])],64)):y("",!0)]),_:1}),i(N,{title:"Attack"},{default:M(()=>[e(p).heroStatsTabSelected==1?(n(),a(_,{key:0},[Sl,t("div",Ml,[(n(!0),a(_,null,b(e(s).data.stats.currentHero.elementDamages,(o,l)=>(n(),H(u,{multiplier:`stats.currentHero.elementDamages[${l}]`,name:e(F)[l]+" Damage"},null,8,["multiplier","name"]))),256)),i(u,{multiplier:"stats.currentHero.stats[15]",name:"Armored Fury"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[16]",name:"Warded Fury"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[6]",name:"Physical Critical Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[7]",name:"Magical Critical Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[8]",name:"Critical Damage"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.extraAfterDamage",name:"Extra After Damage"},null,8,["multiplier"])])],64)):y("",!0)]),_:1}),i(N,{title:"Defense"},{default:M(()=>[e(p).heroStatsTabSelected==2?(n(),a(_,{key:0},[Cl,t("div",ql,[(n(),a(_,null,b(5,o=>i(u,{multiplier:`stats.currentHero.stats[${o-1}]`,name:e(F)[o]+" Resistance"},null,8,["multiplier","name"])),64)),i(u,{multiplier:"stats.currentHero.stats[5]",name:"Debuff Resistance"},null,8,["multiplier"]),(n(!0),a(_,null,b(e(s).data.stats.currentHero.elementAbsoptions,(o,l)=>(n(),H(u,{multiplier:`stats.currentHero.elementAbsoptions[${l}]`,name:e(F)[l]+" Absorption"},null,8,["multiplier","name"]))),256))])],64)):y("",!0),t("div",Hl,[(n(!0),a(_,null,b(e(s).data.stats.currentHero.elementInvalids,(o,l)=>(n(),H(u,{multiplier:`stats.currentHero.elementInvalids[${l}]`,name:e(F)[l]+" Nullify Chance"},null,8,["multiplier","name"]))),256))])]),_:1}),i(N,{title:"Gains"},{default:M(()=>[e(p).heroStatsTabSelected==3?(n(),a(_,{key:0},[Il,t("div",Pl,[i(u,{multiplier:"stats.currentHero.stats[14]",name:"EXP Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.globalStats[0]",name:"Gold Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.globalStats[1]",name:"Stone Gain","value-suffix":"/ kill"},null,8,["multiplier"]),i(u,{multiplier:"stats.globalStats[2]",name:"Crystal Gain","value-suffix":"/ kill"},null,8,["multiplier"]),i(u,{multiplier:"stats.globalStats[3]",name:"Leaf Gain","value-suffix":"/ kill"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[11]",name:"Skill Proficiency Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[12]",name:"Equipment Proficiency Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.guildExpGain",name:"Guild EXP Gain"},null,8,["multiplier"]),i(u,{multiplier:"area.townMaterialDungeonRewardMultiplier",name:"Town Material Gain"},null,8,["multiplier"]),i(u,{multiplier:"alchemy.alchemyPointGainMultiplier",name:"Alchemy Point Gain"},null,8,["multiplier"]),i(u,{multiplier:"alchemy.catalyst.essenceProductionMultiplier",name:"Essence Convertion Rate"},null,8,["multiplier"]),i(u,{multiplier:"superStats.currentHero.fameGain",name:"Fame Gain"},null,8,["multiplier"]),i(u,{multiplier:"sdg.dungeonCoinGain",name:"Dungeon Coin Gain"},null,8,["multiplier"])]),t("div",xl,[i(u,{multiplier:"stats.currentHero.stats[21]",name:"Artifact Proficiency Gain"},null,8,["multiplier"]),i(u,{multiplier:"town.researchPower[0]",name:"Stone Reasearch Power","value-suffix":"/ sec"},null,8,["multiplier"]),i(u,{multiplier:"town.researchPower[1]",name:"Crystal Reasearch Power","value-suffix":"/ sec"},null,8,["multiplier"]),i(u,{multiplier:"town.researchPower[2]",name:"Leaf Reasearch Power","value-suffix":"/ sec"},null,8,["multiplier"]),i(u,{multiplier:"rebirth.currentHero[0].rebirthPointGainFactor",name:"Tier 1 Rebirth Point Gain"},null,8,["multiplier"]),i(u,{multiplier:"rebirth.currentHero[1].rebirthPointGainFactor",name:"Tier 2 Rebirth Point Gain"},null,8,["multiplier"]),i(u,{multiplier:"rebirth.currentHero[2].rebirthPointGainFactor",name:"Tier 3 Rebirth Point Gain"},null,8,["multiplier"]),i(u,{multiplier:"expedition.expGainMultiplier",name:"Expedition EXP Gain"},null,8,["multiplier"]),i(u,{multiplier:"expedition.speedMultiplier",name:"Expedition Speed"},null,8,["multiplier"]),i(u,{multiplier:"expedition.rewardMultiplier",name:"Expedition Reward Amount"},null,8,["multiplier"]),i(u,{multiplier:"expedition.passiveEffectMultiplier",name:"Expedition Passive Effect"},null,8,["multiplier"]),i(u,{multiplier:"expedition.petExpGainMultiplier",name:"Expedition Pet EXP Gain"},null,8,["multiplier"])])],64)):y("",!0)]),_:1}),i(N,{title:"Skills"},{default:M(()=>[e(p).heroStatsTabSelected==4?(n(),a(_,{key:0},[Vl,t("div",wl,[(n(!0),a(_,null,b(e(s).data.skill.skillLevelBonus,(o,l)=>(n(),H(u,{multiplier:`skill.skillLevelBonus[${l}]`,name:e(O)[l]+" Skill Level Bonus"},null,8,["multiplier","name"]))),256)),(n(!0),a(_,null,b(e(s).data.skill.skillRangeMultiplier,(o,l)=>(n(),H(u,{multiplier:`skill.skillRangeMultiplier[${l}]`,name:e(O)[l]+"'s Class Skills Range"},null,8,["multiplier","name"]))),256))]),t("div",Kl,[(n(!0),a(_,null,b(e(s).data.skill.skillEffectRangeMultiplier,(o,l)=>(n(),H(u,{multiplier:`skill.skillEffectRangeMultiplier[${l}]`,name:e(O)[l]+"'s Class Skills Area of Effect"},null,8,["multiplier","name"]))),256))])],64)):y("",!0)]),_:1}),i(N,{title:"Bestiary"},{default:M(()=>[e(p).heroStatsTabSelected==5?(n(),a(_,{key:0},[Al,t("div",Ll,[i(u,{multiplier:`monster.doubleCaptureChance[${e(s).data.source.currentHero}]`,name:"Double Capture Chance"},null,8,["multiplier"]),i(u,{multiplier:`monster.captureTripleChance[${e(s).data.source.currentHero}]`,name:"Triple Capture  Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.petExpGainPerDefeat",name:"Pet EXP Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[13]",name:"Taming Point Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.loyaltyPoingGain",name:"Loyalty Point Gain"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[17]",name:"Pet Base Physical Critial Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[18]",name:"Pet Base Magical Critial Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[19]",name:"Pet Base Critial Damage"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[20]",name:"Pet Debuff Resistance"},null,8,["multiplier"]),i(u,{multiplier:"monster.petPassiveEffectMultiplier",name:"Pet Passive Effect"},null,8,["multiplier"])])],64)):y("",!0)]),_:1}),i(N,{title:"Regions"},{default:M(()=>[e(p).heroStatsTabSelected==6?(n(),a(_,{key:0},[Fl,t("div",Gl,[(n(!0),a(_,null,b(e(s).data.stats.currentHero.monsterDamages,(o,l)=>(n(),H(u,{multiplier:`stats.currentHero.monsterDamages[${l}]`,name:"Damage to "+e(te)[l]},null,8,["multiplier","name"]))),256))])],64)):y("",!0)]),_:1}),i(N,{title:"SD"},{default:M(()=>[e(p).heroStatsTabSelected==7?(n(),a(_,{key:0},[Rl,t("div",Bl,[(n(!0),a(_,null,b(e(s).data.stats.currentHero.basicStats,(o,l)=>(n(),H(u,{name:e(ce)[l],multiplier:`stats.currentHero.basicStats[${l}]`},null,8,["name","multiplier"]))),256)),i(u,{name:"SD Damage Multiplier",multiplier:"battle.superDungeonCtrl.damageMultiplier"},null,8,["multiplier"]),i(u,{name:"SD Challange Boss Damage Multiplier",multiplier:"battle.superDungeonCtrl.sdChallengeBossDamageMultiplier"},null,8,["multiplier"]),i(u,{name:"SD Armored Fury",multiplier:"battle.superDungeonCtrl.armoredFury"},null,8,["multiplier"]),i(u,{name:"SD Warded Fury",multiplier:"battle.superDungeonCtrl.wardedFury"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.extraAfterDamage",name:"Extra After Damage"},null,8,["multiplier"])]),t("div",Nl,[(n(!0),a(_,null,b(e(s).data.stats.currentHero.elementDamages,(o,l)=>(n(),H(u,{multiplier:`stats.currentHero.elementDamages[${l}]`,name:e(F)[l]+" Damage"},null,8,["multiplier","name"]))),256)),i(u,{multiplier:"stats.currentHero.stats[6]",name:"Physical Critical Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[7]",name:"Magical Critical Chance"},null,8,["multiplier"]),i(u,{multiplier:"stats.currentHero.stats[8]",name:"Critical Damage"},null,8,["multiplier"]),i(u,{name:"Damage to Challange Boss",multiplier:"stats.currentHero.monsterDamages[11]"},null,8,["multiplier"])])],64)):y("",!0)]),_:1})]),_:1},8,["selected-index"])]))}}),Ol=G(Tl,[["__scopeId","data-v-cd6b42dd"]]),Ul=I({__name:"AppDifference",props:{data:{},snap:{}},setup(d){const s=d,p=U(()=>s.data-s.snap);return(c,E)=>p.value!=0?(n(),a("span",{key:0,class:B({green:p.value>0,red:p.value<0})},r(e(qe)(c.data,c.snap,!1)),3)):y("",!0)}}),zl={style:{"margin-left":"10px"}},Wl={class:"green"},Xl={class:"orange"},Jl=t("hr",null,null,-1),jl=t("h4",null,"Skill Damage Breakdown",-1),Ql={style:{"font-size":"12px","border-collapse":"collapse"}},Yl=t("td",null,"Base:",-1),Zl=t("td",null,"Emelda",-1),en=t("td",null,"Monster Resistance",-1),tn=t("td",null,"Critical Damage",-1),ln=t("td",null,"Damage Modifier",-1),nn=t("td",null,"Damage Modifier vs Boss",-1),an={style:{"border-bottom":"1px solid #fff"}},sn=t("td",null,"Single Hit Damage",-1),rn=t("td",null,"Hit Count",-1),on={key:1},un=t("td",null,"Slayer Oil Bonus",-1),cn=t("td",null,"Extra After Bonus",-1),dn={style:{"border-bottom":"1px solid #fff"}},pn=t("td",null,"Total Damage",-1),mn=t("td",null,"Cast Time",-1),_n=t("td",null,"DPS",-1),fn=I({__name:"SkillInformation",setup(d){const s=L("game"),p=s.data.battle.Enemy(),c=p.AttackedInfo(),o=s.snap.battle.Enemy().AttackedInfo();return(l,f)=>(n(),a("div",zl,[t("p",null,[v(" Skill: "+r(e(D).SkillName(e(s).data.source.currentHero,0))+" ",1),t("span",Wl,"Lv "+r(e(k).tDigit(e(c).skill.level,0))+" + "+r(e(k).tDigit(e(c).skill.levelBonus,0)),1),t("span",Xl," < Rank "+r(e(c).skill.rank)+" >",1)]),t("p",null,"- "+r(e(F)[e(c).skill.element])+" Damage: "+r(e(k).tDigit(e(c).skill.DamageOrigin(e(c).hero,!0)))+" * "+r(e(k).tDigit(e(c).skill.HitCount(),0)),1),t("p",null,"- Cast Time: "+r(e(k).tDigit(e(c).skill.CalculateInterval(e(c).hero),3))+" sec",1),Jl,jl,t("table",Ql,[t("tr",null,[Yl,t("td",null,r(e(s).data.source.isSuperDungeon?e(k).tDigit(Math.log10(Math.max(1,e(c).skill.Damage()))):e(k).tDigit(e(c).skill.Damage())),1)]),t("tr",null,[t("td",null,r(e(c).skill.element==e(F).Physical?"ATK":"MATK")+":",1),t("td",null,r(e(s).data.source.isSuperDungeon?"+":"*")+" "+r(e(k).tDigit(e(c).skill.element==e(F).Physical?e(c).hero.atk:e(c).hero.matk)),1)]),t("tr",null,[Zl,t("td",null,"* "+r(e(k).percent(e(s).data.skill.ladyEmeldaEffectMultiplier[e(s).data.source.currentHero].Value())),1)]),t("tr",null,[en,t("td",null,"* "+r(e(k).percent(e(p).DamageCutRate(e(c).damage,e(c).element),4))+" vs "+r(e(F)[e(c).element]),1)]),t("tr",null,[t("td",null,"Knowledge "+r(e(te)[e(p).species]),1),t("td",null,"* "+r(e(k).percent(e(p).damageFactor)),1)]),t("tr",null,[t("td",null,"Element "+r(e(F)[e(c).element]),1),t("td",null,"* "+r(e(k).percent(e(p).DamageFactorElement(e(c).element))),1)]),t("tr",null,[tn,t("td",null,"* "+r(e(k).percent(e(c).hero.critDamage)),1)]),e(s).data.source.isSuperDungeon?(n(),a(_,{key:0},[t("tr",null,[ln,t("td",null,"* "+r(e(k).percent(e(s).data.battle.superDungeonCtrl.damageMultiplier.Value())),1)]),t("tr",null,[nn,t("td",null,"* "+r(e(k).percent(e(s).data.battle.superDungeonCtrl.sdChallengeBossDamageMultiplier.Value())),1)])],64)):y("",!0),t("tr",an,[sn,t("td",null,"= "+r(e(k).tDigit(e(c).DamagePerHit)),1)]),t("tr",null,[rn,t("td",null,"* "+r(e(k).tDigit(e(c).realHitCount,0)),1)]),e(c).slayerOilDamage>0?(n(),a("tr",on,[un,t("td",null,"* "+r(e(k).percent(e(c).SlayerOilValue))+" ("+r(e(k).tDigit(e(c).slayerOilDamage))+")",1)])):y("",!0),t("tr",null,[cn,t("td",null,"* "+r(e(k).percent(e(c).hero.extraAfterDamage))+" ("+r(e(k).tDigit(e(c).extraAfterDamage))+")",1)]),t("tr",dn,[pn,t("td",null,"= "+r(e(k).tDigit(e(c).totalDamage)),1)]),t("tr",null,[mn,t("td",null,"/ "+r(e(k).tDigit(e(c).castTime,3)),1)]),t("tr",null,[_n,t("td",null,[v("= "+r(e(k).tDigit(e(c).dps))+" ",1),i(Ul,{data:e(c).dps,snap:e(o).dps},null,8,["data","snap"])])])])]))}}),gn={style:{width:"250px","margin-left":"10px"}},hn=t("h3",null,"Enemy",-1),vn={style:{display:"flex"}},bn=t("br",null,null,-1),En=t("br",null,null,-1),kn=t("br",null,null,-1),yn=t("br",null,null,-1),$n=t("br",null,null,-1),Dn=t("br",null,null,-1),Sn=t("br",null,null,-1),Mn=t("br",null,null,-1),Cn=t("br",null,null,-1),qn=I({__name:"MonsterStats",setup(d){const s=L("game"),p=U(()=>s.data.battle.Enemy());return(c,E)=>(n(),a("div",gn,[hn,t("div",vn,[i(Q,{type:e(K).MonsterSpecies,modelValue:e(s).data.source.enemySpecies,"onUpdate:modelValue":E[0]||(E[0]=o=>e(s).data.source.enemySpecies=o),modelModifiers:{number:!0}},null,8,["type","modelValue"]),e(s).data.source.enemySpecies!=e(te).Mimic?(n(),a(_,{key:0},[e(s).data.source.enemySpecies!=e(te).ChallengeBoss?(n(),H(Q,{key:0,type:e(K).MonsterColor,modelValue:e(s).data.source.enemyColor,"onUpdate:modelValue":E[1]||(E[1]=o=>e(s).data.source.enemyColor=o),modelModifiers:{number:!0}},null,8,["type","modelValue"])):(n(),H(Q,{key:1,type:e(K).ChallengeMonsterKind,modelValue:e(s).data.source.enemyChallenge,"onUpdate:modelValue":E[2]||(E[2]=o=>e(s).data.source.enemyChallenge=o),modelModifiers:{number:!0}},null,8,["type","modelValue"]))],64)):y("",!0)]),v(" Level: "),R(t("input",{"onUpdate:modelValue":E[3]||(E[3]=o=>e(s).data.source.enemyLevel=o),size:"6",name:"monsterLevel"},null,512),[[Z,e(s).data.source.enemyLevel,void 0,{lazy:!0,number:!0}]]),bn,v(" HP: "+r(e(k).tDigit(p.value.hp)),1),En,v(" DEF: "+r(e(k).tDigit(p.value.def)),1),kn,v(" MDEF: "+r(e(k).tDigit(p.value.mdef)),1),yn,v(" Fire Resistance: "+r(e(k).percent(p.value.fire)),1),$n,v(" Ice Resistance: "+r(e(k).percent(p.value.ice)),1),Dn,v(" Thunder Resistance: "+r(e(k).percent(p.value.thunder)),1),Sn,v(" Light Resistance: "+r(e(k).percent(p.value.light)),1),Mn,v(" Dark Resistance: "+r(e(k).percent(p.value.dark)),1),Cn]))}}),Hn=d=>(W("data-v-6e6a406b"),d=d(),X(),d),In={class:"grid"},Pn=Hn(()=>t("hr",null,null,-1)),xn=I({__name:"equipment",setup(d){const s=L("game");return(p,c)=>(n(),a("div",In,[t("div",null,[i(hl),(n(),H(Ol,{key:e(s).data.requireUpdate.value?"xxx":"yyy"}))]),t("div",null,[i(qn),Pn,(n(),H(fn,{key:e(s).data.requireUpdate.value?"aaa":"bbb"}))])]))}}),An=G(xn,[["__scopeId","data-v-6e6a406b"]]);export{An as default};
