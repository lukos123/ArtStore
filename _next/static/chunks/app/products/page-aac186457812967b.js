(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{9324:function(e,t,r){Promise.resolve().then(r.bind(r,2285))},2285:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(490),c=r.n(s),o=r(2265),i=r(1590),a=r(4514),u=r(2328),l=r(795);t.default=e=>{let{}=e,[t,r]=(0,o.useState)([]),[s,d]=(0,o.useState)(""),[_,m]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{(async()=>{let{products:e,err:t}=await (0,i.Dg)();if(""!==t){console.log(t);return}r(e),d("name")})()},[]),(0,n.jsxs)(a.Z,{class_for:c().container,children:[(0,n.jsx)(l.Z,{products:t,setProducts:r,setSort:d,setSortTo:m,sort:s,sortTo:_}),(0,n.jsx)("div",{className:c().products,children:t.length>0?t.map(e=>(0,n.jsx)(u.Z,{product:e},e.id)):"0 Products"})]})}},4514:function(e,t,r){"use strict";var n=r(7437),s=r(904),c=r.n(s);t.Z=e=>{let{class_for:t,children:r}=e;return(0,n.jsx)("div",{className:c().Container+" "+t,children:r})}},795:function(e,t,r){"use strict";var n=r(7437),s=r(2265),c=r(7744),o=r.n(c),i=r(7138),a=r(1444);t.Z=e=>{let{setSortTo:t,setSort:r,sortTo:c,setProducts:u,sort:l,products:d,isMy:_=!1}=e,m=(0,a.v9)(e=>e.authReducer.auth);return(0,s.useEffect)(()=>{d.length>0&&("name"===l?u(e=>[...e].sort((e,t)=>{let r=c?1:-1;return e.name.toLowerCase()<t.name.toLowerCase()?-r:e.name.toLowerCase()>t.name.toLowerCase()?r:0})):"price"===l?u(e=>[...e].sort((e,t)=>c?e.price-t.price:-((e.price-t.price)*1))):"created_time"===l&&u(e=>[...e].sort((e,t)=>{let r=new Date(e.created_at),n=new Date(t.created_at);return c?r.getTime()-n.getTime():-((r.getTime()-n.getTime())*1)})))},[c,l]),(0,n.jsxs)("div",{className:o().control,children:[(0,n.jsxs)("div",{className:o().sort,children:[(0,n.jsxs)("span",{children:["Sort by:",(0,n.jsxs)("select",{defaultValue:"name",onChange:e=>{r(e.target.value)},children:[(0,n.jsx)("option",{value:"name",children:"name"}),(0,n.jsx)("option",{value:"price",children:"price"}),(0,n.jsx)("option",{value:"created_time",children:"created time"})]})]}),(0,n.jsx)("button",{className:o().sortTo,style:{userSelect:"none"},onClick:()=>{t(!c)},children:c?"UP":"DOWN"})]}),(0,n.jsx)("div",{className:o().links,children:m?_?(0,n.jsx)(i.default,{href:"//products/create",children:"Add Product"}):(0,n.jsx)(i.default,{href:"//products/my",children:"My Products"}):""})]})}},2328:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7437),s=r(2265),c=r(3054),o=r.n(c),i=r(1590),a=r(7138),u=function(e,t){let r=(0,s.useRef)();return(0,s.useEffect)(()=>(r.current=new IntersectionObserver((e,r)=>{e[0].isIntersecting&&t(e,r)}),e.current&&r.current.observe(e.current),()=>{r.current&&r.current.disconnect()}),[]),()=>{r.current&&e.current&&r.current.unobserve(e.current)}},l=e=>{let{product:t}=e,[r,c]=(0,s.useState)(""),l=(0,s.useRef)(null);return u(l,(e,r)=>{let n=(0,i.Gr)(t.image);n&&c(n),r.disconnect()}),(0,n.jsxs)(a.default,{ref:l,href:"/products/".concat(t.id),className:o().ProductItem,children:[(0,n.jsx)("div",{className:o().image,children:r?(0,n.jsx)("img",{src:r,alt:"image"}):(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:o().info,children:[(0,n.jsx)("h3",{children:t.name}),(0,n.jsxs)("h2",{children:[new Date(t.created_at).toLocaleDateString()," "]}),(0,n.jsxs)("span",{children:[t.price,"$"]}),(0,n.jsx)("p",{children:t.description})]})]})}},490:function(e){e.exports={container:"page_container___NloY",products:"page_products__S5uue"}},904:function(e){e.exports={Container:"Container_Container__L_q4N"}},7744:function(e){e.exports={control:"Control_control__fSRW9",sort:"Control_sort__MKiA1",sortTo:"Control_sortTo___gRmQ",links:"Control_links__PTfl9"}},3054:function(e){e.exports={ProductItem:"ProductItem_ProductItem__GLwE0",image:"ProductItem_image__zqM56",wait:"ProductItem_wait__OuqfT",info:"ProductItem_info__D5OOh"}}},function(e){e.O(0,[465,728,444,138,590,971,23,744],function(){return e(e.s=9324)}),_N_E=e.O()}]);