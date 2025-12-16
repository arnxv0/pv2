import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";function g({image:h,images:s,direction:m="vertical",speed:x=5,duplicates:y=6,height:j="100%",width:p="100%",spacing:r=8,showDivider:n=!0,dividerColor:u="#ffffff08",dividerWidth:i=1}){const t=m==="horizontal",a=s&&s.length>0?s:[h];a.length*2;const c=[...a,...a],f=-100/2;return e.jsxs("div",{className:"overflow-hidden relative",style:{height:j,width:p},children:[e.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${x}s linear infinite`,height:"100%",width:"100%",gap:r?`${r}px`:0},children:c.map((l,o)=>e.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:r&&n?`${r}px`:0},children:[e.jsx("img",{src:typeof l=="object"&&l?.src?l.src:l,className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?"auto":"100%",objectFit:"contain"},alt:`Image ${o+1}`}),n&&o<c.length-1&&e.jsx("div",{style:{width:t?`${i}px`:"80%",height:t?"80%":`${i}px`,backgroundColor:u,flexShrink:0}})]},o))}),e.jsx("style",{children:`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(${f}%);
          }
        }

        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(${f}%);
          }
        }
      `})]})}export{g as I};
