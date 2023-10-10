import{u as w,d as N,c as y,h as P,r as _,o as q,a as A,b as R,e as z,f as B,g as S,i as E,p as I,j as T,w as j,k as L,l as C,n as U,_ as V,m as H,q as M,s as p,t as x,v as O,x as $,y as F,z as D,A as G}from"./entry.44455688.js";import{u as Q}from"./vue.f36acd1f.4c3845b3.js";async function k(t,a=w()){const{path:c,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(c)))return;const r=a._preloadPromises=a._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>k(t,a));a._routePreloaded.add(c);const s=e.map(n=>{var l;return(l=n.components)==null?void 0:l.default}).filter(n=>typeof n=="function");for(const n of s){const l=Promise.resolve(n()).catch(()=>{}).finally(()=>r.splice(r.indexOf(l)));r.push(l)}await Promise.all(r)}const X=(...t)=>t.find(a=>a!==void 0),J="noopener noreferrer";/*! @__NO_SIDE_EFFECTS__ */function K(t){const a=t.componentName||"NuxtLink",c=(e,r)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const s=t.trailingSlash==="append"?j:L;if(typeof e=="string")return s(e,!0);const n="path"in e?e.path:r(e).path;return{...e,name:void 0,path:s(n,!0)}};return N({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const s=w(),n=y(()=>{const o=e.to||e.href||"";return c(o,s.resolve)}),l=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||P(n.value,{acceptRelative:!0})),h=_(!1),d=_(null),b=o=>{var f;d.value=e.custom?(f=o==null?void 0:o.$el)==null?void 0:f.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Z()){const f=C();let v,i=null;q(()=>{const g=Y();A(()=>{v=R(()=>{var m;(m=d==null?void 0:d.value)!=null&&m.tagName&&(i=g.observe(d.value,async()=>{i==null||i(),i=null;const u=typeof n.value=="string"?n.value:s.resolve(n.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",u).catch(()=>{}),!l.value&&k(n.value,s).catch(()=>{})]),h.value=!0}))})})}),z(()=>{v&&B(v),i==null||i(),i=null})}return()=>{var g,m;if(!l.value){const u={ref:b,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(h.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel),S(E("RouterLink"),u,r.default)}const o=typeof n.value=="object"?((g=s.resolve(n.value))==null?void 0:g.href)??null:n.value||null,f=e.target||null,v=e.noRel?null:X(e.rel,t.externalRelAttribute,o?J:"")||null,i=()=>U(o,{replace:e.replace});return e.custom?r.default?r.default({href:o,navigate:i,get route(){if(!o)return;const u=I(o);return{path:u.pathname,fullPath:u.pathname,get query(){return T(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:f,isExternal:l.value,isActive:!1,isExactActive:!1}):null:S("a",{ref:d,href:o,rel:v,target:f},(m=r.default)==null?void 0:m.call(r))}}})}const W=K({componentName:"NuxtLink"});function Y(){const t=C();if(t._observer)return t._observer;let a=null;const c=new Map,e=(s,n)=>(a||(a=new IntersectionObserver(l=>{for(const h of l){const d=c.get(h.target);(h.isIntersecting||h.intersectionRatio>0)&&d&&d()}})),c.set(s,n),a.observe(s),()=>{c.delete(s),a.unobserve(s),c.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function Z(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const ee=t=>(D("data-v-ccd3db62"),t=t(),G(),t),te={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ae=ee(()=>p("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),ne={class:"max-w-520px text-center z-20"},re=["textContent"],oe=["textContent"],se={class:"w-full flex items-center justify-center"},le={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const a=t;return Q({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(c,e)=>{const r=W;return H(),M("div",te,[ae,p("div",ne,[p("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:x(t.statusCode)},null,8,re),p("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:x(t.description)},null,8,oe),p("div",se,[O(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:$(()=>[F(x(t.backHome),1)]),_:1})])])])}}},ue=V(le,[["__scopeId","data-v-ccd3db62"]]);export{ue as default};