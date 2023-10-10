import{u as N}from"./vue.f36acd1f.4c3845b3.js";import{r as b,B as L,C as F,D as O,h as U,E as H,F as j,p as q,G as A,H as D,I as C,J as G,l as V,c as _,d as W,o as K,g as J,q as X,s as o,v as y,K as $,y as Y,m as Z}from"./entry.44455688.js";function Q(e,t){const s=b({});return L(()=>{const i=F(e),{title:a,titleTemplate:r,...n}=i;s.value={title:a,titleTemplate:r,meta:O(n)}}),N(s,t)}async function ee(e,t){return await te(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function te(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,s)=>{const i=new Image;i.onload=()=>{const a={width:i.width,height:i.height,ratio:i.width/i.height};t(a)},i.onerror=a=>s(a),i.src=e})}function I(e){return t=>t?e[t]||t:e.missingValue}function ie({formatter:e,keyMap:t,joinWith:s="/",valueMap:i}={}){e||(e=(r,n)=>`${r}=${n}`),t&&typeof t!="function"&&(t=I(t));const a=i||{};return Object.keys(a).forEach(r=>{typeof a[r]!="function"&&(a[r]=I(a[r]))}),(r={})=>Object.entries(r).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const u=a[d];return typeof u=="function"&&(c=u(r[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(s)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function se(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const s of e.split(" ")){const i=parseInt(s.replace("x",""));i&&t.add(i)}return Array.from(t)}function oe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ae(e){const t={};if(typeof e=="string")for(const s of e.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function re(e){const t={options:e},s=(a,r={})=>P(t,a,r),i=(a,r={},n={})=>s(a,{...n,modifiers:A(r,n.modifiers||{})}).url;for(const a in e.presets)i[a]=(r,n,d)=>i(r,n,{...e.presets[a],...d});return i.options=e,i.getImage=s,i.getMeta=(a,r)=>ne(t,a,r),i.getSizes=(a,r)=>ce(t,a,r),t.$img=i,i}async function ne(e,t,s){const i=P(e,t,{...s});return typeof i.getMeta=="function"?await i.getMeta():await ee(e,i.url)}function P(e,t,s){var u,m;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:a}=le(e,s.provider||e.options.provider),r=de(e,s.preset);if(t=U(t)?t:H(t),!i.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=j(e.options.alias[g],t.substr(g.length)));if(i.validateDomains&&U(t)){const g=q(t).host;if(!e.options.domains.find(x=>x===g))return{url:t}}const n=A(s,r,a);n.modifiers={...n.modifiers};const d=n.modifiers.format;(u=n.modifiers)!=null&&u.width&&(n.modifiers.width=h(n.modifiers.width)),(m=n.modifiers)!=null&&m.height&&(n.modifiers.height=h(n.modifiers.height));const c=i.getImage(t,n,e);return c.format=c.format||d||"",c}function le(e,t){const s=e.options.providers[t];if(!s)throw new Error("Unknown provider: "+t);return s}function de(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ce(e,t,s){var p,z,k,E,T;const i=h((p=s.modifiers)==null?void 0:p.width),a=h((z=s.modifiers)==null?void 0:z.height),r=ae(s.sizes),n=(k=s.densities)!=null&&k.trim()?se(s.densities.trim()):e.options.densities;oe(n);const d=i&&a?a/i:0,c=[],u=[];if(Object.keys(r).length>=1){for(const f in r){const v=M(f,String(r[f]),a,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const w of n)u.push({width:v._cWidth*w,src:B(e,t,s,v,w)})}}ue(c)}else for(const f of n){const v=Object.keys(r)[0];let w=M(v,String(r[v]),a,d,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(E=s.modifiers)==null?void 0:E.width,_cHeight:(T=s.modifiers)==null?void 0:T.height}),u.push({width:f,src:B(e,t,s,w,f)})}me(u);const m=u[u.length-1],g=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,x=g?"w":"x",l=u.map(f=>`${f.src} ${f.width}${x}`).join(", ");return{sizes:g,srcset:l,src:m==null?void 0:m.src}}function M(e,t,s,i,a){const r=a.options.screens&&a.options.screens[e]||parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let d=parseInt(t);if(!r||!d)return;n&&(d=Math.round(d/100*r));const c=i?Math.round(d*i):s;return{size:t,screenMaxWidth:r,_cWidth:d,_cHeight:c}}function B(e,t,s,i,a){return e.$img(t,{...s.modifiers,width:i._cWidth?i._cWidth*a:void 0,height:i._cHeight?i._cHeight*a:void 0},s)}function ue(e){var s;e.sort((i,a)=>i.screenMaxWidth-a.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const a=e[i];a.media===t&&e.splice(i,1),t=a.media}for(let i=0;i<e.length;i++)e[i].media=((s=e[i+1])==null?void 0:s.media)||""}function me(e){e.sort((s,i)=>s.width-i.width);let t=null;for(let s=e.length-1;s>=0;s--){const i=e[s];i.width===t&&e.splice(s,1),t=i.width}}const fe=ie({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>C(e)+"_"+C(t)}),pe=(e,{modifiers:t={},baseURL:s}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const a=fe(t)||"_";return s||(s=j(i.options.nuxt.baseURL,"/_ipx")),{url:j(s,a,D(e))}},he=!0,ge=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,getImage:pe,supportsAlias:ge,validateDomains:he},Symbol.toStringTag,{value:"Module"})),R={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};R.providers={ipxStatic:{provider:ve,defaults:void 0}};const S=()=>{const e=G(),t=V();return t.$img||t._img||(t._img=re({...R,nuxt:{baseURL:e.app.baseURL}}))},_e={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},we=e=>{const t=_(()=>({provider:e.provider,preset:e.preset})),s=_(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=S(),a=_(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:s,modifiers:a}},xe={..._e,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ye=W({name:"NuxtImg",props:xe,emits:["load","error"],setup:(e,t)=>{const s=S(),i=we(e),a=b(!1),r=_(()=>s.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),n=_(()=>{const l={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||a.value)&&(l.sizes=r.value.sizes,l.srcset=r.value.srcset),l}),d=_(()=>{let l=e.placeholder;if(l===""&&(l=!0),!l||a.value)return!1;if(typeof l=="string")return l;const p=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return s(e.src,{...i.modifiers.value,width:p[0],height:p[1],quality:p[2]||50,blur:p[3]||3},i.options.value)}),c=_(()=>e.sizes?r.value.src:s(e.src,i.modifiers.value,i.options.value)),u=_(()=>d.value?d.value:c.value);if(e.preload){const l=Object.values(r.value).every(p=>p);N({link:[{rel:"preload",as:"image",nonce:e.nonce,...l?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:u.value}}]})}const m=b(),x=V().isHydrating;return K(()=>{if(d.value){const l=new Image;l.src=c.value,e.sizes&&(l.sizes=r.value.sizes||"",l.srcset=r.value.srcset),l.onload=p=>{a.value=!0,t.emit("load",p)};return}m.value&&(m.value.complete&&x&&(m.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),m.value.onload=l=>{t.emit("load",l)},m.value.onerror=l=>{t.emit("error",l)})}),()=>J("img",{ref:m,src:u.value,...n.value,...t.attrs})}}),be=""+new URL("movin.e7f78293.svg",import.meta.url).href,je=""+new URL("kyndryl.545f336f.svg",import.meta.url).href,Se=""+new URL("czech-us.c51d2bc1.svg",import.meta.url).href,ze=""+new URL("best.ea4f4452.jpg",import.meta.url).href,ke=""+new URL("vut.97e23e1f.svg",import.meta.url).href,Ee=""+new URL("vut-fp.0c6b26d8.svg",import.meta.url).href,Te=""+new URL("vut-skas.29a39a68.svg",import.meta.url).href,Ue=""+new URL("esn-vut.3f1ba4eb.svg",import.meta.url).href,Ce=$('<section id="top" class="h-screen bg-gradient-to-tr from-[#1A91B1] to-[#84D0EA] flex flex-col items-center justify-center text-center gap-y-6 px-6 text-white font-kelson bg-map [&amp;&gt;*]:transition [&amp;&gt;*]:duration-500 hover:[&amp;&gt;*]:scale-105"><img src="'+be+'" alt="Mov&#39;in Europe logo" width="238" height="88" class="mt-auto max-w-xs w-full transform drop-shadow"><h1 class="text-6xl md:text-8xl uppercase font-bold text-center mt-auto drop-shadow-title"> Mov&#39;in Europe </h1><h2 class="text-3xl md:text-4xl uppercase font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,1)]"> Studuj a pracuj v zahraničí </h2><time class="text-4xl md:text-5xl font-bold mt-8 drop-shadow-[0_0_5px_rgba(0,0,0,.5)]"> 18.10.2023 </time><address class="not-italic text-3xl font-semibold drop-shadow-[0_0_5px_rgba(0,0,0,.5)]"> Fakulta podnikatelská, VUT </address><a href="#video" class="mt-auto flex flex-col text-4xl pb-8 animate-[bounce_2s_ease-in-out_infinite]">⬇️⬇️⬇️</a></section>',1),Ie=o("section",{id:"video",class:"h-screen bg-gradient-to-b from-[#1A91B1] via-[#12657b] to-[#09323d] text-white flex flex-col justify-center items-center text-center gap-y-8 bg-map"},[o("h2",{class:"text-5xl text-white px-8 font-semibold drop-shadow-2xl"},"Jak to vypadalo minule?"),o("div",{class:"w-4/5 text-center aspect-video"},[o("iframe",{class:"inline-block max-w-full w-full h-full drop-shadow-2xl",width:"560",height:"315",src:"https://www.youtube.com/embed/a_PuXXq4CHA?si=5PVlO3ItGB4y5SO_",title:"Mov'in Europe 2022",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])],-1),Me={class:"min-h-[100vh] bg-gradient-to-b from-[#09323d] via-[#12657b] to-[#1A91B1] py-8 flex flex-col justify-center items-center prose-custom bg-map",id:"cards"},Be=o("h2",null,"Co vás čeká?",-1),Ne={class:"flex flex-row flex-wrap items-center justify-center gap-12 px-4 w-full flex-grow"},Ae={class:"Card__flipper"},Ve={class:"Card__inner"},We=o("article",{class:"Card"},[o("h4",null,"Zahraniční studenti"),o("p",null," Na festival dorazí zahraniční studenti, kteří jsou na VUT na zahraniční mobilitě. Přinesou své zkušenosti a vyprávění o tom, jaké to je studovat v zahraničí. ")],-1),$e={class:"Card__back"},Pe={class:"Card__flipper"},Re={class:"Card__inner"},Le=o("article",{class:"Card"},[o("h4",null,"Studijní pobyty"),o("p",null," Naše zahraniční oddělení představí všechny možnosti, jak se dostat na zahraniční studijní pobyt. Chybět nebude Erasmus+, CEEPUS, Freemover ani žádné další, kompletní nabídka. ")],-1),Fe={class:"Card__back"},Oe={class:"Card__flipper"},He={class:"Card__inner"},qe=o("article",{class:"Card"},[o("h4",null,"Lokální studenti"),o("p",null," Uslyšíš ty nejupřímnější zkušenosti od studentů, kteří se vrátili ze zahraničního studia. Jaké to bylo, na co je třeba myslet a co jim pobyt vzal a dal. ")],-1),De={class:"Card__back"},Ge={class:"Card__flipper"},Ke={class:"Card__inner"},Je=o("article",{class:"Card"},[o("h4",null,"Stánky partnerů"),o("p",null," Na festivalu budou přítomni i partneři, kteří nabízejí zahraniční stáže a brigády. Přijďte se podívat, co všechno nabízejí a jaké jsou podmínky. ")],-1),Xe={class:"Card__back"},Ye={class:"Card__flipper px-4 w-full md:w-1/2 lg:w-1/4"},Ze={class:"Card__inner"},Qe=o("article",{class:"Card"},[o("h4",null,"Chillout zóna"),o("p",null," Informací bude více než dost, co takhle si odpočinout u fotbálku? Nebo si jen tak posedět a pokecat u kávy? ")],-1),et={class:"Card__back"},tt=$('<section id="program" class="min-h-screen bg-gradient-to-b from-[#1A91B1] via-[#12657b] to-[#09323d] prose-custom p-6 flex flex-col justify-start items-center bg-map"><h2>Přijďte si poslechnout</h2><div class="max-w-5xl bg-white p-4 rounded-2xl text-[#1A91B1] flex flex-col"><div class="text-gray-900 flex flex-row justify-between border-b-2 border-gray-600"><span>Co?</span><span class="ml-auto">Kdo?</span><span class="w-24 md:w-48 text-right">Kdy?</span></div><div class="md:text-2xl text-gray-700 flex flex-col justify-start items-center divide-y-2 [&amp;_div]:w-full [&amp;_div]:flex [&amp;_div]:flex-col md:[&amp;_div]:flex-row md:[&amp;_div]:justify-between md:[&amp;_div]:items-center md:[&amp;_div]:gap-x-8 md:[&amp;_div]:py-4 [&amp;_div_span]:drop-shadow [&amp;_div_span:last-child]:font-semibold [&amp;_div_span:last-child]:self-end [&amp;_div_span:last-child]:font-mono [&amp;_div_span:nth-child(2)]:text-sm [&amp;_div_span:nth-child(2)]:ml-auto"><div><span>Erasmus a další programy o mobilitě</span><span>Odbor internacionalizace VUT</span><span> 9:00- 9:40</span></div><div><span>From nowhere to Czech Republic</span><span>Edi Nushi</span><span> 9:50-10:30</span></div><div><span>Korea: cesta přes půl světa</span><span>Marie Soukupová</span><span>11:20-12:00</span></div><div><span>USA a Evropa: jak na to?</span><span>Work and Travel</span><span>12:30-13:10</span></div><div><span>Řecko: Odkaz Olympu a trocha tzatziki</span><span>Jakub Starý</span><span>13:20-14:00</span></div></div><div class="text-gray-900 font-semibold text-center py-4 border-t-2 border-gray-600"> Fakulta podnikatelská, VUT </div></div></section><section class="min-h-screen bg-gradient-to-b from-[#09323d] via-[#12657b] to-[#1A91B1] flex flex-col justify-start items-center bg-map prose-custom px-6 gap-y-6"><h2>Naši partneři</h2><div class="flex flex-row flex-wrap w-full max-w-6xl items-center bg-white rounded-2xl transform"><div class="w-1/2 md:w-1/3 flex items-center justify-center"><img src="'+je+'" alt="Kyndryl" class="w-full px-4"></div><div class="w-1/2 md:w-1/3 flex items-center justify-center"><img src="'+Se+'" alt="Czech us" class="w-full px-4"></div><div class="w-1/2 md:w-1/3 flex items-center justify-center"><img src="'+ze+'" alt="BEST" class="w-full px-4"></div><div class="w-1/2 md:w-1/3 flex items-center justify-center"><img src="'+ke+'" alt="VUT" class="w-full px-4"></div><div class="w-1/2 md:w-1/3 flex items-center justify-center"><img src="'+Ee+'" alt="VUT FP" class="w-full px-4"></div><div class="w-1/2 md:w-1/3 flex items-center justify-center"><img src="'+Te+'" alt="VUT SKAS" class="w-full px-4"></div></div></section>',2),it=o("section",{class:"min-h-screen bg-gradient-to-b from-[#1A91B1] via-[#12657b] to-[#09323d] flex flex-col justify-start items-center bg-map prose-custom"},[o("h2",null,"Kdo jsme"),o("p",{class:"text-white max-w-2xl text-center px-6"}," ESN VUT Brno je dobrovolná organizace, založená díky touze pomáhat studentům Erasmu, kteří přijedou studovat na VUT. Děláme to pro myšlenku výměnného programu Erasmus, která nám velmi imponuje! "),o("a",{href:"https://esnvutbrno.cz"},[o("img",{src:Ue,class:"max-w-xs w-full text-white flex-grow transition transform hover:scale-110",alt:"ESN VUT Brno",width:"144",height:"80"})]),o("div",{class:"flex-grow flex flex-col lg:flex-row justify-center items-center w-full gap-x-8 gap-y-8 p-8"},[o("div",{class:"aspect-video flex-grow"},[o("iframe",{class:"w-full h-full drop-shadow-2xl",width:"560",height:"315",src:"https://www.youtube.com/embed/StfEszxYTf4?si=pg0FEmB6rylxoaDK",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})]),o("div",{class:"aspect-video flex-grow"},[o("iframe",{class:"w-full h-full drop-shadow-2xl",width:"560",height:"315",src:"https://www.youtube.com/embed/b7wtcu7BN6U?si=-dii-9eorZ1Jm8K_",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})]),o("div",{class:"aspect-video flex-grow"},[o("iframe",{class:"w-full h-full drop-shadow-2xl",width:"560",height:"315",src:"https://www.youtube.com/embed/AqnBwoS6Mfc?si=-mF9jULvtvzIWXfT",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""})])])],-1),st=o("footer",{class:"bg-blue-950 text-gray-300 flex flex-row p-8 justify-center gap-x-8"},[Y(" © ESN VUT Brno 2023 "),o("a",{href:"https://github.com/esnvutbrno/movineurope.cz",class:"hover:underline"},"esnvutbrno/movineurope.cz")],-1),rt=W({__name:"index",setup(e){return S(),Q({title:"Mov'in Europe 2023 | ESN VUT Brno",ogTitle:"Mov'in Europe 2023 | ESN VUT Brno",description:"TAKE THE FIRST STEP! Festival zahraničních příležitostí pro studenty VUT s cestovatelskými přednáškami, informacemi od zahraničního oddělení i zkušenostmi přímo od lokálních i zahraničních studentů.",ogDescription:"TAKE THE FIRST STEP! Festival zahraničních příležitostí pro studenty VUT s cestovatelskými přednáškami, informacemi od zahraničního oddělení i zkušenostmi přímo od lokálních i zahraničních studentů.",ogImage:{url:"https://movineurope.cz/og.jpg",width:"2048",height:"1152",alt:"Mov'in Europe 2023 | ESN VUT Brno"},twitterCard:"summary_large_image"}),(t,s)=>{const i=ye;return Z(),X("div",null,[Ce,Ie,o("section",Me,[Be,o("div",Ne,[o("div",Ae,[o("div",Ve,[We,o("div",$e,[y(i,{src:"/images/IMG_5725.jpg"})])])]),o("div",Pe,[o("div",Re,[Le,o("div",Fe,[y(i,{src:"/images/IMG_5725.jpg"})])])]),o("div",Oe,[o("div",He,[qe,o("div",De,[y(i,{src:"/images/IMG_5725.jpg"})])])]),o("div",Ge,[o("div",Ke,[Je,o("div",Xe,[y(i,{src:"/images/IMG_5725.jpg"})])])]),o("div",Ye,[o("div",Ze,[Qe,o("div",et,[y(i,{src:"/images/IMG_5725.jpg"})])])])])]),tt,it,st])}}});export{rt as default};
