var p=Object.defineProperty;var m=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var d=(o,e,a)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,i=(o,e)=>{for(var a in e||(e={}))c.call(e,a)&&d(o,a,e[a]);if(m)for(var a of m(e))f.call(e,a)&&d(o,a,e[a]);return o};import{f as u,h as t,T as v,m as g,g as y,n as b,p as h,q as D,r as n,s as S,t as L}from"./app.58ed2401.js";import{S as P}from"./SkipLink.d40d7d44.js";var B=u({name:"FadeSlideY",setup(o,{slots:e}){const a=g(),r=a.resolve,l=a.pending;return()=>t(v,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:l},()=>{var s;return(s=e.default)==null?void 0:s.call(e)})}}),C=u({name:"Layout",setup(){const o=L(),e=y(),a=S(),r=b(),l=h(),s=D(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[t(P),t(n("CommonWrapper"),{},i(i({default:()=>r.value.home?t(n("HomePage")):t(B,()=>t(n("NormalPage"),{key:a.value.path}))},s.value!=="none"?{navScreenBottom:()=>t(n("BloggerInfo"))}:{}),!l.value&&s.value==="always"?{sidebar:()=>t(n("BloggerInfo"))}:{}))]}});export{C as default};