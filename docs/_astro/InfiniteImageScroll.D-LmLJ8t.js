import{j as l}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";function v({image:h,images:s,direction:m="vertical",speed:d=5,duplicates:j=6,height:x="100%",width:g="100%",spacing:r=8,showDivider:i=!0,dividerColor:u="#ffffff08",dividerWidth:c=1}){const t=m==="horizontal",e=s&&s.length>0?s:[h];e.length*4;const a=[...e,...e,...e,...e],f=-75,y=d*e.length*3;return l.jsxs("div",{className:"overflow-hidden relative",style:{height:x,width:g},children:[l.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${y}s linear infinite`,height:t?"100%":"auto",width:t?`${a.length*100}%`:"100%",gap:r?`${r}px`:0,willChange:"transform"},children:a.map((n,o)=>l.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:r&&i?`${r}px`:0},children:[l.jsx("img",{src:typeof n=="object"&&n?.src?n.src:n,className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?`${100/a.length}%`:"100%",objectFit:"contain"},loading:"lazy",decoding:"async",alt:`Image ${o+1}`}),i&&o<a.length-1&&l.jsx("div",{style:{width:t?`${c}px`:"80%",height:t?"80%":`${c}px`,backgroundColor:u,flexShrink:0}})]},o))}),l.jsx("style",{children:`
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
      `})]})}export{v as default};
