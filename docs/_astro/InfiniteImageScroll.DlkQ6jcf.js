import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as j,R as w}from"./index.ai7qpRr1.js";function I({children:l}){const[n,f]=j.useState(null);return n?(typeof window<"u"&&alert("An error occurred in InfiniteImageScroll: "+n.message),null):r.jsx(w.Fragment,{children:l})}function k(l){return r.jsx(I,{children:r.jsx($,{...l})})}function $({image:l,images:n,direction:f="vertical",speed:h=5,height:x="100%",width:g="100%",spacing:i=8,showDivider:m=!0,dividerColor:y="#ffffff08",dividerWidth:d=1}){const e=f==="horizontal";let a;try{a=n&&n.length>0?n:[l]}catch(t){return typeof window<"u"&&alert("Error in InfiniteImageScroll: "+t.message),null}const o=3;let s;try{s=Array.from({length:o},()=>a).flat()}catch(t){return typeof window<"u"&&alert("Error in InfiniteImageScroll: "+t.message),null}const p=128,u=h*a.length;return r.jsxs("div",{className:"overflow-hidden relative",style:{height:x,width:g},children:[r.jsx("div",{className:"flex infinite-scroll-track",style:{flexDirection:e?"row":"column",animation:e?`infinite-horizontal-scroll ${u}s linear infinite`:`infinite-vertical-scroll ${u}s linear infinite`,height:e?"100%":"auto",width:e?"max-content":"100%",gap:i?`${i}px`:0,willChange:"transform"},children:s.map((t,c)=>r.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:e?"row":"column",alignItems:"center",gap:i&&m?`${i}px`:0},children:[r.jsx("img",{src:typeof t=="object"&&t?.src?t.src:t,className:"flex-shrink-0",style:{height:e?"100%":"auto",width:e?`${p}px`:"100%",objectFit:"cover"},alt:`Scroll image ${c+1}`,loading:"eager",decoding:"async"}),m&&c<s.length-1&&r.jsx("div",{style:{width:e?`${d}px`:"80%",height:e?"80%":`${d}px`,backgroundColor:y,flexShrink:0}})]},c))}),r.jsx("style",{children:`
        @keyframes infinite-horizontal-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / ${o}), 0, 0);
          }
        }
        @keyframes infinite-vertical-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, calc(-100% / ${o}), 0);
          }
        }
      `})]})}export{k as default};
