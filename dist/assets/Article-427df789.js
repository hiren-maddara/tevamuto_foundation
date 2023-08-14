import{j as D,r as p,w as A,k as b,g as B,o as l,l as C,m as v,p as N,a as e,f as y,S as k,t as s,c as n,h as x,F as g,q as h,s as _}from"./index-02fb2477.js";const T={class:"px-5 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-100"},V={class:"container grid grid-cols-12 mx-auto gap-y-6 gap-x-8"},F={class:"px-5 py-10 text-gray-800 dark:bg-gray-800 dark:text-gray-100"},U={class:"container grid grid-cols-12 mx-auto gap-y-6 gap-x-8"},$={class:"relative flex col-span-12 dark:bg-gray-500 md:col-span-12 lg:col-span-9 min-h-96"},E={class:"py-18 mx-auto space-y-16 text-gray-800 dark:bg-gray-800 dark:text-gray-50"},G={class:"w-full mx-auto space-y-4"},I={class:"text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase"},L={class:"text-5xl font-bold leadi"},P={class:"flex flex-wrap space-x-2 text-sm dark:text-gray-400"},R={class:"text-sm dark:text-gray-400"},z={href:"#",target:"_blank",rel:"noopener noreferrer",class:"hover:underline dark:text-violet-400"},H=["datetime"],J=["src"],K={class:"container mx-auto px-4 dark:text-gray-100"},M={class:"flex flex-wrap items-center mt-16"},O={class:"w-full md:w-5/12 px-4 mr-auto ml-auto"},Q={class:"text-3xl mb-2 font-semibold leading-normal"},W={class:"text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"},X={class:"w-full md:w-4/12 px-4 mx-auto relative flex flex-col min-w-0 break-words mb-2 shadow-lg rounded-lg bg-pink-500"},Y={class:"relative p-8 mb-4"},Z={class:"text-xl font-bold text-white"},ee={class:"text-md font-light mt-2 text-white"},te={class:"py-2 col-span-12 md:col-span-10 xl:col-span-3 lg:col-span-4 lg:block"},se=e("div",{class:"mb-8 space-x-5 border-b-2 border-opacity-10 dark:border-violet-400"},[e("button",{type:"button",class:"pb-5 text-xs font-bold uppercase border-b-2 dark:border-violet-400"},"About"),e("button",{type:"button",class:"pb-5 text-xs font-bold uppercase border-b-2 dark:border-transparent dark:text-gray-400"},"Projects")],-1),ae={class:"flex flex-col divide-y divide-gray-700"},oe={class:"flex px-1 py-4"},re=["src"],le={class:"flex flex-col flex-grow"},ce={rel:"noopener noreferrer",href:"#",class:"font-serif hover:underline"},ne={class:"mt-auto text-xs dark:text-gray-400"},ie={rel:"noopener noreferrer",href:"#",class:"block dark:text-blue-400 lg:ml-2 lg:inline hover:underline"},_e={__name:"Article",async setup(de){let r,i;const d=D(),m=p(d.params.id),f=p(d.params.sect);A(()=>d,()=>m.value=d.params.id);const w=async(c,o)=>{if(c==="about"){const{error:t,data:u}=await _.from("about").select().eq("article_id",o);return t&&console.log(t),u[0]}if(c==="project"){const{error:t,data:u}=await _.from("projects").select("*").eq("article_id",o);return t&&console.log(t),u[0]}},a=p(([r,i]=b(()=>w(f.value,m.value)),r=await r,i(),r));console.log(a.value.content);const j=async c=>{if(c==="about"){const{error:o,data:t}=await _.from("projects").select().order("created_at",{ascending:!1});return o&&console.log(o),t}if(c==="project"){const{error:o,data:t}=await _.from("projects").select().order("created_at",{ascending:!1});return o&&console.log(o),t}},S=p(([r,i]=b(()=>j(f.value)),r=await r,i(),r)),q=B(()=>S.value.slice(5));return(c,o)=>(l(),C(N,null,{fallback:v(()=>[e("section",T,[e("div",V,[y(k,{prefer:"card",h:"100%",w:"100%",br:"5px",class:"col-span-12 lg:col-span-8"}),y(k,{prefer:"card",h:"100%",w:"100%",br:"5px",class:"col-span-12 lg:col-span-4"})])])]),default:v(()=>[e("section",F,[e("div",U,[e("div",$,[e("article",E,[e("div",G,[e("h2",I,s(a.value.category),1),e("h1",L,s(a.value.title),1),e("div",P,[(l(!0),n(g,null,x(a.value.tags,t=>(l(),n("a",{key:t,rel:"noopener noreferrer",href:"#",class:"p-1 hover:underline"},"#"+s(t),1))),128))]),e("p",R,[h("by "),e("a",z,[e("span",null,s(a.value.creator),1)]),h("  on   "),e("time",{datetime:new Date().toUTCString()},s(new Date().toUTCString()),9,H)]),e("img",{src:`/src/assets/img/${a.value.img}`,class:"block w-[80%] mx-auto aspect-square max-h-60",alt:""},null,8,J)]),e("div",K,[e("div",M,[e("div",O,[(l(!0),n(g,null,x(a.value.content,t=>(l(),n("div",null,[e("h3",Q,s(t.heading),1),e("p",W,s(t.paragraph),1)]))),256))]),e("div",X,[e("blockquote",Y,[e("h4",Z,s(a.value.note.heading),1),e("p",ee,s(a.value.note.content),1)])])])])])]),e("div",te,[se,e("div",ae,[(l(!0),n(g,null,x(q.value,t=>(l(),n("div",oe,[e("img",{alt:"",class:"flex-shrink-0 object-cover w-20 h-20 mr-4 dark:bg-gray-500",src:`/src/assets/img/${t.img}`},null,8,re),e("div",le,[e("a",ce,s(t.title),1),e("p",ne,[h("5 minutes ago "),e("a",ie,s(t.category),1)])])]))),256))])])])])]),_:1}))}};export{_e as default};
