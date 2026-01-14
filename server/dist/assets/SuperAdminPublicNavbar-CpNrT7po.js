import{D as m,r as u,u as h,bf as p,j as t,X as b,J as g}from"./index-DsHjdIkQ.js";function v(){const[l,r]=m.useState(!1),i=u(),o=h(),{data:x}=p(),s=x?.navbar,n=s?.buttons?.filter(e=>e.isActive)?.sort((e,a)=>e.order-a.order)||[],c=e=>{const a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth"}),r(!1)},f=e=>{o.pathname!=="/"?(i("/"),setTimeout(()=>c(e),400)):c(e)},d=e=>{if(e.type==="path"&&e.path){i(e.path),r(!1);return}e.type==="section"&&e.section&&f(e.section)};return t.jsxs("header",{className:"fixed top-0 left-0 right-0 bg-white shadow z-50",children:[t.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>i("/"),children:[t.jsx("div",{className:"w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold",children:s?.brandName?.[0]||"M"}),t.jsxs("div",{children:[t.jsx("h1",{className:"font-bold text-lg",children:s?.brandName||"MVAD IT Solutions"}),t.jsx("p",{className:"text-xs text-blue-600",children:s?.tagline||""})]})]}),t.jsx("nav",{className:"hidden lg:flex items-center gap-10",children:n.map(e=>{const a=e.type==="path"&&o.pathname===e.path;return t.jsx("button",{onClick:()=>d(e),className:`
          relative text-[16px] font-medium tracking-normal
          text-gray-700 hover:text-blue-600 transition
          after:absolute after:left-0 after:-bottom-1
          after:h-[2px] after:w-full after:bg-blue-600
          after:scale-x-0 after:origin-left
          after:transition-transform
          hover:after:scale-x-100
          ${a?"text-blue-600 after:scale-x-100":""}
        `,children:e.label},e.label)})}),t.jsx("button",{className:"lg:hidden",onClick:()=>r(!l),children:l?t.jsx(b,{}):t.jsx(g,{})})]}),l&&t.jsx("div",{className:"lg:hidden bg-white shadow-md border-t",children:t.jsx("div",{className:"flex flex-col gap-3 p-4",children:n.map(e=>t.jsx("button",{onClick:()=>d(e),className:`px-4 py-3 rounded-lg text-left font-medium
                  ${e.isPrimary?"bg-blue-600 text-white":"bg-gray-100"}
                `,children:e.label},e.label))})})]})}export{v as default};
