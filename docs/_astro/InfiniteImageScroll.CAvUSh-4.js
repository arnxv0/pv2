import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as p}from"./index.ai7qpRr1.js";function b({image:i,images:l,direction:j="vertical",speed:y=2,duplicates:I=6,height:f="100%",width:m="100%",spacing:n=8,showDivider:d=!0,dividerColor:g="#ffffff08",dividerWidth:h=1}){const[v,$]=p.useState(!1),e=j==="horizontal",s=l&&l.length>0?l:[i];p.useEffect(()=>{const a=s.map(t=>typeof t=="object"&&t?.src?t.src:t);Promise.all(a.map(t=>new Promise(o=>{const c=new Image;c.onload=()=>o(t),c.onerror=()=>o(t),c.src=t}))).then(()=>{$(!0)})},[l,i]);const x=[...s,...s,...s,...s],u=-75,w=y*s.length;return v?r.jsxs("div",{className:"overflow-hidden relative",style:{height:f,width:m},children:[r.jsx("div",{className:"flex",style:{flexDirection:e?"row":"column",animation:`${e?"scroll-horizontal":"scroll-vertical"} ${w}s linear infinite`,height:"100%",width:e?"auto":"100%",gap:n?`${n}px`:0,willChange:"transform",alignItems:"center"},children:x.map((a,t)=>{const o=typeof a=="object"&&a?.src?a.src:a;return r.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:e?"row":"column",alignItems:"center",gap:n&&d?`${n}px`:0,height:e?"100%":"auto"},children:[r.jsx("img",{src:o,className:"flex-shrink-0",style:{height:e?"100%":"auto",width:e?"auto":"100%",maxWidth:e?"none":"400px",maxHeight:e?"100%":"none",objectFit:"contain",display:"block"},alt:`Image ${t+1}`}),d&&t<x.length-1&&r.jsx("div",{style:{width:e?`${h}px`:"80%",height:e?"80%":`${h}px`,backgroundColor:g,flexShrink:0}})]},`img-${t}`)})}),r.jsx("style",{children:`
        @keyframes scroll-horizontal {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(${u}%, 0, 0);
          }
        }

        @keyframes scroll-vertical {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, ${u}%, 0);
          }
        }
      `})]}):r.jsx("div",{className:"overflow-hidden relative flex items-center justify-center",style:{height:f,width:m},children:r.jsx("div",{className:"text-gray-400",children:"Loading..."})})}export{b as default};
