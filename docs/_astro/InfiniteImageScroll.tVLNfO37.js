import{j as l}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";function $({image:h,images:n,direction:m="vertical",speed:x=5,duplicates:p=6,height:d="100%",width:y="100%",spacing:r=8,showDivider:o=!0,dividerColor:u="#ffffff08",dividerWidth:i=1}){const t=m==="horizontal",e=n&&n.length>0?n:[h];e.length*4;const c=[...e,...e,...e,...e],f=-100/4;return l.jsxs("div",{className:"overflow-hidden relative",style:{height:d,width:y,contain:"layout paint"},children:[l.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${x}s linear infinite`,height:"100%",width:"100%",gap:r?`${r}px`:0,willChange:"transform"},children:c.map((a,s)=>l.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:r&&o?`${r}px`:0},children:[l.jsx("img",{src:typeof a=="object"&&a?.src?a.src:a,className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?"auto":"100%",objectFit:"contain"},loading:"lazy",decoding:"async",alt:`Image ${s+1}`}),o&&s<c.length-1&&l.jsx("div",{style:{width:t?`${i}px`:"80%",height:t?"80%":`${i}px`,backgroundColor:u,flexShrink:0}})]},s))}),l.jsx("style",{children:`
        @keyframes scroll-horizontal {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(${f}%, 0, 0);
          }
        }

        @keyframes scroll-vertical {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, ${f}%, 0);
          }
        }
      `})]})}export{$ as default};
