import{j as l}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";function v({image:h,images:n,direction:m="vertical",speed:d=5,duplicates:g=6,height:x="100%",width:u="100%",spacing:a=8,showDivider:s=!0,dividerColor:y="#ffffff08",dividerWidth:i=1}){const t=m==="horizontal",e=n&&n.length>0?n:[h];e.length*4;const c=[...e,...e,...e,...e],f=-75,p=d*e.length*3;return l.jsxs("div",{className:"overflow-hidden relative",style:{height:x,width:u,contain:"layout paint"},children:[l.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${p}s linear infinite`,height:t?"100%":"auto",width:t?"auto":"100%",gap:a?`${a}px`:0,willChange:"transform"},children:c.map((r,o)=>l.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:a&&s?`${a}px`:0},children:[l.jsx("img",{src:typeof r=="object"&&r?.src?r.src:r,className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?"auto":"100%",objectFit:"contain"},loading:"lazy",decoding:"async",alt:`Image ${o+1}`}),s&&o<c.length-1&&l.jsx("div",{style:{width:t?`${i}px`:"80%",height:t?"80%":`${i}px`,backgroundColor:y,flexShrink:0}})]},o))}),l.jsx("style",{children:`
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
