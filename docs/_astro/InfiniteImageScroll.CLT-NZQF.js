import{j as e}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";function k({image:h,images:n,direction:d="vertical",speed:m=5,duplicates:y=6,height:x="100%",width:u="100%",spacing:r=8,showDivider:o=!0,dividerColor:g="#ffffff08",dividerWidth:i=1}){const t=d==="horizontal",c=n&&n.length>0?n:[h],l=Array.from({length:4},()=>c).flat();l.length;const f=-75,p=m*c.length*3;return e.jsxs("div",{className:"overflow-hidden relative",style:{height:x,width:u},children:[e.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${p}s linear infinite`,height:t?"100%":"auto",width:t?`${l.length*100}%`:"100%",gap:r?`${r}px`:0,willChange:"transform"},children:l.map((a,s)=>e.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:r&&o?`${r}px`:0},children:[e.jsx("img",{src:typeof a=="object"&&a?.src?a.src:a,className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?`${100/l.length}%`:"100%",objectFit:"contain"},loading:"lazy",decoding:"async",alt:`Image ${s+1}`}),o&&s<l.length-1&&e.jsx("div",{style:{width:t?`${i}px`:"80%",height:t?"80%":`${i}px`,backgroundColor:g,flexShrink:0}})]},s))}),e.jsx("style",{children:`
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
      `})]})}export{k as default};
