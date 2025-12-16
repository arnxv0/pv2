import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r as p}from"./index.ai7qpRr1.js";function S({image:i,images:l,direction:j="vertical",speed:y=5,duplicates:k=6,height:f="100%",width:m="100%",spacing:o=8,showDivider:d=!0,dividerColor:g="#ffffff08",dividerWidth:h=1}){const[$,v]=p.useState(!1),t=j==="horizontal",a=l&&l.length>0?l:[i];p.useEffect(()=>{const r=a.map(e=>typeof e=="object"&&e?.src?e.src:e);Promise.all(r.map(e=>new Promise(n=>{const c=new Image;c.onload=()=>n(e),c.onerror=()=>n(e),c.src=e}))).then(()=>{v(!0)})},[l,i]);const u=[...a,...a,...a,...a],x=-75,w=y*a.length*3,I=(r,e)=>`${typeof r=="object"&&r?.src?r.src:r}#duplicate-${e}`;return $?s.jsxs("div",{className:"overflow-hidden relative",style:{height:f,width:m},children:[s.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${w}s linear infinite`,height:t?"100%":"auto",width:t?"auto":"100%",gap:o?`${o}px`:0,willChange:"transform"},children:u.map((r,e)=>s.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:o&&d?`${o}px`:0,width:t?"auto":"100%"},children:[s.jsx("img",{src:I(r,e),className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?"auto":"100%",objectFit:"contain",display:"block"},alt:`Image ${e+1}`}),d&&e<u.length-1&&s.jsx("div",{style:{width:t?`${h}px`:"80%",height:t?"80%":`${h}px`,backgroundColor:g,flexShrink:0}})]},`img-${e}`))}),s.jsx("style",{children:`
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
      `})]}):s.jsx("div",{className:"overflow-hidden relative flex items-center justify-center",style:{height:f,width:m},children:s.jsx("div",{className:"text-gray-400",children:"Loading..."})})}export{S as default};
