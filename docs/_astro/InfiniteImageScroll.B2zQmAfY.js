import{j as l}from"./jsx-runtime.D_zvdyIk.js";import{r as s}from"./index.ai7qpRr1.js";function B({image:h,images:i,direction:$="vertical",speed:j=5,duplicates:E=6,height:f="100%",width:g="100%",spacing:c=8,showDivider:p=!0,dividerColor:b="#ffffff08",dividerWidth:x=1}){const[m,k]=s.useState(!1),[D,v]=s.useState(""),t=$==="horizontal",a=i&&i.length>0?i:[h];s.useEffect(()=>{alert(`DEBUG: Initial image array length: ${a.length}
First image: ${typeof a[0]=="object"?a[0]?.src:a[0]}`)},[]),s.useEffect(()=>{const r=a.map(e=>typeof e=="object"&&e?.src?e.src:e);alert(`DEBUG: Starting to preload ${r.length} images
URLs: ${r.join(", ")}`),Promise.all(r.map((e,o)=>new Promise(d=>{const u=new Image;u.onload=()=>{alert(`DEBUG: Image ${o+1} loaded successfully: ${e.substring(0,50)}...`),d(e)},u.onerror=()=>{alert(`DEBUG: Image ${o+1} FAILED to load: ${e.substring(0,50)}...`),d(e)},u.src=e}))).then(()=>{alert("DEBUG: All images preloaded, setting imagesLoaded to true"),k(!0)})},[i,h]);const n=[...a,...a,...a,...a];s.useEffect(()=>{m&&alert(`DEBUG: Rendering component
Total duplicates: ${n.length}
Original images: ${a.length}
Direction: ${$}
Is Horizontal: ${t}`)},[m]);const y=-75,I=j*a.length*3;return m?l.jsxs("div",{className:"overflow-hidden relative",style:{height:f,width:g},onClick:()=>{alert(`DEBUG: Container clicked
Container height: ${f}
Container width: ${g}
Total images rendered: ${n.length}
Animation duration: ${I}s`)},children:[l.jsx("div",{className:"flex",style:{flexDirection:t?"row":"column",animation:`${t?"scroll-horizontal":"scroll-vertical"} ${I}s linear infinite`,height:t?"100%":"auto",width:t?"auto":"100%",gap:c?`${c}px`:0,willChange:"transform"},children:n.map((r,e)=>{const o=typeof r=="object"&&r?.src?r.src:r;return e<5&&console.log(`Rendering image ${e}: ${o}`),l.jsxs("div",{className:"flex-shrink-0 flex",style:{flexDirection:t?"row":"column",alignItems:"center",gap:c&&p?`${c}px`:0,width:t?"auto":"100%"},onClick:d=>{d.stopPropagation(),alert(`DEBUG: Image ${e} clicked
Src: ${o.substring(0,50)}...
Index: ${e}
Total images: ${n.length}`)},children:[l.jsx("div",{className:"flex-shrink-0",style:{height:t?"100%":"auto",width:t?"auto":"100%",backgroundImage:`url(${o})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",minHeight:t?"100%":"200px",minWidth:t?"200px":"100%",border:"1px solid red"},role:"img","aria-label":`Image ${e+1}`}),p&&e<n.length-1&&l.jsx("div",{style:{width:t?`${x}px`:"80%",height:t?"80%":`${x}px`,backgroundColor:b,flexShrink:0}})]},`img-${e}`)})}),l.jsx("style",{children:`
        @keyframes scroll-horizontal {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(${y}%, 0, 0);
          }
        }

        @keyframes scroll-vertical {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, ${y}%, 0);
          }
        }
      `})]}):l.jsx("div",{className:"overflow-hidden relative flex items-center justify-center",style:{height:f,width:g},children:l.jsx("div",{className:"text-gray-400",children:"Loading..."})})}export{B as default};
