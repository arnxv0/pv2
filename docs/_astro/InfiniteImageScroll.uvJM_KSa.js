import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as j}from"./index.ai7qpRr1.js";function z({image:c,images:l,direction:p="vertical",speed:y=5,duplicates:k=6,height:i="100%",width:f="100%",spacing:o=8,showDivider:d=!0,dividerColor:g="#ffffff08",dividerWidth:m=1}){const[v,$]=j.useState(!1),t=p==="horizontal",s=l&&l.length>0?l:[c];j.useEffect(()=>{const a=s.map(e=>typeof e=="object"&&e?.src?e.src:e);Promise.all(a.map(e=>new Promise((u,I)=>{const n=new Image;n.onload=()=>u(e),n.onerror=()=>u(e),n.src=e}))).then(()=>{$(!0)})},[l,c]),s.length*4;const h=[...s,...s,...s,...s],x=-75,w=y*s.length*3;return v?r.jsxs("div",{className:"overflow-hidden relative",style:{height:i,width:f},children:[r.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${w}s linear infinite`,height:t?"100%":"auto",width:t?"auto":"100%",gap:o?`${o}px`:0,willChange:"transform"},children:h.map((a,e)=>r.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:o&&d?`${o}px`:0,width:t?"auto":"100%"},children:[r.jsx("img",{src:typeof a=="object"&&a?.src?a.src:a,className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?"auto":"100%",objectFit:"contain",display:"block"},alt:`Image ${e+1}`}),d&&e<h.length-1&&r.jsx("div",{style:{width:t?`${m}px`:"80%",height:t?"80%":`${m}px`,backgroundColor:g,flexShrink:0}})]},`img-${e}`))}),r.jsx("style",{children:`
        @keyframes scroll-horizontal {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(${x}%, 0, 0);
          }
        }

        @keyframes scroll-vertical {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, ${x}%, 0);
          }
        }
      `})]}):r.jsx("div",{className:"overflow-hidden relative flex items-center justify-center",style:{height:i,width:f},children:r.jsx("div",{className:"text-gray-400",children:"Loading..."})})}export{z as default};
