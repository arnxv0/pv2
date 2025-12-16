import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as g}from"./index.ai7qpRr1.js";function N({image:c,images:l,direction:p="vertical",speed:j=5,duplicates:b=6,height:f="100%",width:d="100%",spacing:n=8,showDivider:m=!0,dividerColor:y="#ffffff08",dividerWidth:h=1}){const[k,$]=g.useState(!1),t=p==="horizontal",a=l&&l.length>0?l:[c];g.useEffect(()=>{const s=a.map(e=>typeof e=="object"&&e?.src?e.src:e);Promise.all(s.map(e=>new Promise(o=>{const i=new Image;i.onload=()=>o(e),i.onerror=()=>o(e),i.src=e}))).then(()=>{$(!0)})},[l,c]);const u=[...a,...a,...a,...a],x=-75,v=j*a.length*3;return k?r.jsxs("div",{className:"overflow-hidden relative",style:{height:f,width:d},children:[r.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${v}s linear infinite`,height:t?"100%":"auto",width:t?"auto":"100%",gap:n?`${n}px`:0,willChange:"transform"},children:u.map((s,e)=>{const o=typeof s=="object"&&s?.src?s.src:s;return r.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:n&&m?`${n}px`:0,width:t?"auto":"100%",height:t?"100%":"auto"},children:[t?r.jsx("img",{src:o,className:"flex-shrink-0",style:{height:"100%",width:"auto",objectFit:"contain",display:"block"},alt:`Image ${e+1}`}):r.jsx("div",{className:"flex-shrink-0",style:{height:"auto",width:"100%",backgroundImage:`url(${o})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",paddingBottom:"56.25%"},role:"img","aria-label":`Image ${e+1}`}),m&&e<u.length-1&&r.jsx("div",{style:{width:t?`${h}px`:"80%",height:t?"80%":`${h}px`,backgroundColor:y,flexShrink:0}})]},`img-${e}`)})}),r.jsx("style",{children:`
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
      `})]}):r.jsx("div",{className:"overflow-hidden relative flex items-center justify-center",style:{height:f,width:d},children:r.jsx("div",{className:"text-gray-400",children:"Loading..."})})}export{N as default};
