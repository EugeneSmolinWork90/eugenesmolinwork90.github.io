import{d as N}from"./h2TJk36r.js";import{f as O,M as I,s as a,N as _,O as c}from"./CFLejP-_.js";const n=N({componentName:"NuxtLinkLocale"}),A=O({name:"NuxtLinkLocale",props:{...n.props,locale:{type:String,default:void 0,required:!1}},setup(e,{slots:l}){const i=I(),f=a(()=>{const r=e.to??e.href;return r!=null?i(r,e.locale):r}),o=a(()=>{if(e.external||e.target&&e.target!=="_self")return!0;const r=e.to??e.href;return typeof r=="object"?!1:r===""||r==null||_(r,{acceptRelative:!0})}),t=()=>{const r={...e};return o.value||(r.to=f.value),delete r.href,delete r.locale,r};return()=>c(n,t(),l.default)}});var p=(e=>(e.FIREFOX="firefox",e.EDGE="edge",e.CHROME="chrome",e.OPERA="opera",e.YANDEX="yandex",e.WINDOWS="windows",e.MAC="mac",e.LINUX="linux",e.ANDROID="android",e.IOS="ios",e.ROUTER="router",e.APP_GALLERY="app-gallery",e.AMAZON="amazon",e))(p||{}),v=(e=>(e.MAIN="/",e.DONATE="/donate",e.POLICY="/policy",e.TERMS="/terms",e.EXTENSION_CHROME="/free-vpn-chrome",e.EXTENSION_OPERA="/free-vpn-opera",e.EXTENSION_YANDEX="/free-vpn-yandex",e.EXTENSION_FIREFOX="/free-vpn-firefox",e.EXTENSION_EDGE="/free-vpn-edge",e.DESKTOP_MAC="/free-vpn-mac",e.DESKTOP_WINDOWS="/free-vpn-windows",e.DESKTOP_LINUX="/free-vpn-linux",e.MOBILE_ANDROID="/free-vpn-android",e.MOBILE_IOS="/free-vpn-ios",e))(v||{});export{p as P,v as R,A as _};
