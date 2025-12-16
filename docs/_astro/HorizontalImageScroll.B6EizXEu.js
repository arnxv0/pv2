import{j as o}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";import{b as a,a as e,c as n,d as s,e as m,f as c,g as p,h as g,i as h,j as b,k as d,l as f,m as z,n as j,o as x,p as v}from"./Broll_23.CzK31mOc.js";function y(){const i=[{image:a,position:"top"},{image:e,position:"bottom"},{image:n,position:"center"},{image:s,position:"bottom"},{image:m,position:"center"},{image:c,position:"center"},{image:p,position:"center"},{image:g,position:"center"},{image:h,position:"bottom"},{image:b,position:"center"},{image:d,position:"center"},{image:f,position:"center"},{image:z,position:"center"},{image:j,position:"center"},{image:x,position:"center"},{image:v,position:"bottom"}],l=[...i,...i,...i];return o.jsxs("div",{className:"horizontal-scroll-container",children:[o.jsx("style",{children:`
        .horizontal-scroll-container {
          width: 100vw;
          margin-left: -1.5rem;
          margin-right: -1.5rem;
          margin-bottom: 2rem;
          overflow: hidden;
          position: relative;
          padding: 0.5rem 0;
        }

        .horizontal-scroll-track {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          padding: 0 1.5rem;
          animation: scroll-horizontal 70s linear infinite;
          will-change: transform;
        }

        .horizontal-scroll-track:hover {
          animation-play-state: paused;
        }

        .horizontal-scroll-item {
          flex-shrink: 0;
          width: 250px;
          height: 150px;
          overflow: hidden;
          border-radius: 0.75rem;
        }

        .horizontal-scroll-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .horizontal-scroll-item img[data-position="top"] {
          object-position: top;
        }
        
        .horizontal-scroll-item img[data-position="bottom"] {
          object-position: bottom;
        }
        
        .horizontal-scroll-item img[data-position="center"] {
          object-position: center;
        }

        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}),o.jsx("div",{className:"horizontal-scroll-track",children:l.map((t,r)=>o.jsx("div",{className:"horizontal-scroll-item",children:o.jsx("img",{src:t.image.src,alt:`Broll ${r+1}`,"data-position":t.position})},r))})]})}export{y as default};
