import{_ as h}from"./CM0beIJA.js";import{P as t,_ as d,R as e}from"./B7wV1K3K.js";import{f as p,o as r,j as N,w as u,a as i,b as n,t as g,_ as E,r as k,c as _,F as I,i as A}from"./5UEVMSY5.js";const f={class:"platform__svg"},D=p({__name:"PlatformItem",props:{title:{},slug:{},link:{}},setup(m){const l=s=>({pale:{src:`/images/platform/pale/${s}.svg`,alt:s.charAt(0).toUpperCase()+s.slice(1)},color:{src:`/images/platform/${s}.svg`,alt:s.charAt(0).toUpperCase()+s.slice(1)}}),o={[t.IOS]:l("ios"),[t.ANDROID]:l("android"),[t.APP_GALLERY]:l("app-gallery"),[t.AMAZON]:l("amazon"),[t.MAC]:l("mac"),[t.WINDOWS]:l("windows"),[t.CHROME]:l("chrome"),[t.OPERA]:l("opera"),[t.YANDEX]:l("yandex"),[t.FIREFOX]:l("firefox"),[t.EDGE]:l("edge"),[t.LINUX]:l("linux"),[t.ROUTER]:l("router")};return(s,c)=>{const a=h,O=d;return r(),N(O,{to:s.link,class:"platform scalable"},{default:u(()=>[i("div",f,[n(a,{src:o[s.slug].pale.src,alt:o[s.slug].pale.alt,width:"50",height:"51"},null,8,["src","alt"]),n(a,{src:o[s.slug].color.src,alt:o[s.slug].color.alt,width:"50",height:"51"},null,8,["src","alt"])]),i("p",null,g(s.title),1)]),_:1},8,["to"])}}}),P=E(D,[["__scopeId","data-v-af334596"]]),R={class:"platforms"},S={class:"color-orange"},L={class:"platforms-list"},X=p({__name:"PlatformsList",props:{keypathTitle:{}},setup(m){const l=[{title:"iOS",slug:t.IOS,link:e.MOBILE_IOS},{title:"Android",slug:t.ANDROID,link:e.MOBILE_ANDROID},{title:"App Gallery",slug:t.APP_GALLERY,link:""},{title:"Amazon",slug:t.AMAZON,link:""},{title:"macOS",slug:t.MAC,link:e.DESKTOP_MAC},{title:"Windows",slug:t.WINDOWS,link:e.DESKTOP_WINDOWS},{title:"Linux",slug:t.LINUX,link:e.DESKTOP_LINUX},{title:"Chrome",slug:t.CHROME,link:e.EXTENSION_CHROME},{title:"Opera",slug:t.OPERA,link:e.EXTENSION_OPERA},{title:"Yandex",slug:t.YANDEX,link:e.EXTENSION_YANDEX},{title:"Firefox",slug:t.FIREFOX,link:e.EXTENSION_FIREFOX},{title:"Edge",slug:t.EDGE,link:e.EXTENSION_EDGE}];return(o,s)=>{const c=k("i18n-t");return r(),_("div",R,[n(c,{scope:"global",keypath:o.keypathTitle,tag:"h2"},{"title-highlight":u(()=>[i("span",S,g(o.$t(`${o.keypathTitle}-highlight`)),1)]),_:1},8,["keypath"]),i("div",L,[(r(),_(I,null,A(l,a=>n(P,{key:a.slug,title:a.title,slug:a.slug,link:a.link},null,8,["title","slug","link"])),64))])])}}}),M=E(X,[["__scopeId","data-v-340c79f3"]]);export{M as P};