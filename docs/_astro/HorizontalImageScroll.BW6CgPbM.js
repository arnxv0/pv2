import{j as o}from"./jsx-runtime.D_zvdyIk.js";import"./index.ai7qpRr1.js";function e(){const t=["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1605379399642-870262d3d051?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop","https://images.unsplash.com/photo-1593642532400-2682810df593?w=300&h=200&fit=crop"],s=[...t,...t,...t];return o.jsxs("div",{className:"horizontal-scroll-container",children:[o.jsx("style",{children:`
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

        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}),o.jsx("div",{className:"horizontal-scroll-track",children:s.map((i,a)=>o.jsx("div",{className:"horizontal-scroll-item",children:o.jsx("img",{src:i,alt:`Tech ${a+1}`})},a))})]})}export{e as default};
