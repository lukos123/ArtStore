(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{5823:function(e,t,a){Promise.resolve().then(a.bind(a,6463))},4514:function(e,t,a){"use strict";var i=a(7437),r=a(904),o=a.n(r);t.Z=e=>{let{class_for:t,children:a}=e;return(0,i.jsx)("div",{className:o().Container+" "+t,children:a})}},6463:function(e,t,a){"use strict";a.d(t,{default:function(){return g}});var i=a(7437),r=a(2265),o=a(260),d=a.n(o),n=a(4514),s=a(1444),l=a(1590),c=a(5219),u=a(610),m=a(8008),p=a.n(m),_=e=>{let{product_for:t,func:a}=e,[o,d]=(0,r.useState)(t.name),[n,c]=(0,r.useState)(t.price),[m,_]=(0,r.useState)(t.description),[f,h]=(0,r.useState)(""),g=(0,s.I0)(),v=async e=>{var i;let r;e.preventDefault();let{product:d,err:s}=await (0,l.zG)(t.id,o,n,m);if(""!==s){h(s);return}h("Product edited");let c=document.querySelector("#form_file_image");if(null!==c&&(null===(i=c.files)||void 0===i?void 0:i.length)&&(null==(r=await (0,l.lL)(d.id,null==c?void 0:c.files[0]))?void 0:r.err)!==""){let e=null==r?void 0:r.err;h(t=>t+" | "+e)}(null==r?void 0:r.image)&&(d.image=r.image),g(u.h.setProduct(d)),a()};return(0,i.jsxs)("form",{onSubmit:v,className:p().FormEditProduct,children:[(0,i.jsx)("input",{type:"file",id:"form_file_image"}),(0,i.jsx)("input",{required:!0,type:"text",value:o,onChange:e=>{d(e.target.value)}}),(0,i.jsx)("input",{required:!0,type:"number",value:n,onChange:e=>{c(Number(e.target.value))}}),(0,i.jsx)("textarea",{value:m,onChange:e=>{_(e.target.value)}}),f,(0,i.jsx)("input",{required:!0,type:"submit",value:"EDIT"})]})},f=a(7138),h={src:"/ArtStore/_next/static/media/pencil-svgrepo-com.87d0cec6.svg"},g=e=>{let{params:t}=e,[a,o]=(0,r.useState)(),[m,p]=(0,r.useState)(),[g,v]=(0,r.useState)(""),[x,y]=(0,r.useState)(!1),[P,j]=(0,r.useState)(!1),C=(0,s.v9)(e=>e.authReducer.auth),[b,k]=(0,r.useState)(""),N=(0,s.v9)(e=>e.userReducer.products),S=(0,c.useRouter)();(0,r.useEffect)(()=>{(async()=>{let{product:e,err:a}=await (0,l.wv)(Number(t.id));if(""!==a)return;e.comments.reverse();let{user_profile:i,err:r}=await (0,l.PR)(e.user_id);if(""!==r)return;let d=new Date(e.created_at);for(let t of(e.created_at=d.toLocaleDateString(),N))if(t.id===e.id){y(!0);break}v(a),p(i),o(e)})()},[N]);let E=(0,s.I0)();if(a&&m)return(0,i.jsx)("div",{children:(0,i.jsxs)(n.Z,{class_for:d().page,children:[(0,i.jsxs)("div",{className:d().product,children:[(0,i.jsx)("div",{className:d().left+" "+d().block,children:(0,i.jsx)("div",{className:d().img,children:(0,i.jsx)("img",{src:(null==a?void 0:a.image)?(0,l.Gr)(null==a?void 0:a.image):"",alt:"img"})})}),(0,i.jsxs)("div",{className:d().right+" "+d().block,children:[g,x&&!P?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{onClick:()=>{j(!0)},width:20,src:h.src,className:d().edit}),(0,i.jsx)("div",{onClick:()=>{(async()=>{""===await (0,l.xq)(null==a?void 0:a.id)&&(E(u.h.deleteProduct(a.id)),S.push("/products/my"))})()},className:d().del,children:"del"})]}):"",P&&a?(0,i.jsx)(_,{product_for:a,func:()=>{j(!1)}}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:null==a?void 0:a.name}),(0,i.jsx)(f.default,{href:"/profile/".concat(m.id),children:m.username}),(0,i.jsx)("h3",{children:null==a?void 0:a.created_at}),(0,i.jsxs)("span",{children:[null==a?void 0:a.price,"$"]}),(0,i.jsx)("p",{children:null==a?void 0:a.description})]}),C&&!x?(0,i.jsx)("button",{onClick:()=>{(async()=>{if(a){let{cart_item:e,err:t}=await (0,l._7)(a.id);""===t&&E(u.h.addToCart(e))}})()},children:"ADD TO CART"}):""]})]})]}),(0,i.jsxs)("div",{className:[d().comments,d().block].join(" "),children:[C?(0,i.jsxs)("div",{className:d().add,children:[(0,i.jsx)("textarea",{placeholder:"Add comment",value:b,onChange:e=>{k(e.target.value)}}),(0,i.jsx)("button",{onClick:async()=>{if(b.length>0){let{comment:e,err:t}=await (0,l.Ir)(a.id,b);""===t&&(E(u.h.addComment(e)),o(t=>{var a;if(!t)return t;let i={...t};return null===(a=i.comments)||void 0===a||a.unshift(e),i}),k(""))}},children:"ADD"})]}):"",a.comments.length>0?a.comments.map(e=>(0,i.jsxs)("div",{className:d().comment,children:[(0,i.jsx)("h3",{children:e.user}),(0,i.jsx)("h4",{children:new Date(e.created_at).toLocaleDateString()}),(0,i.jsx)("p",{children:e.text})]},e.id)):"0 comments"]})]})})}},5219:function(e,t,a){"use strict";var i=a(1169);a.o(i,"usePathname")&&a.d(t,{usePathname:function(){return i.usePathname}}),a.o(i,"useRouter")&&a.d(t,{useRouter:function(){return i.useRouter}})},610:function(e,t,a){"use strict";a.d(t,{h:function(){return r}});let i=(0,a(9753).oM)({name:"user",initialState:{id:-1,username:"none",description:"none",email:"none",logo:"none",products:[],comments:[],orders:[],notifications:[],cart_item_groups:[]},reducers:{edit(e,t){e.cart_item_groups=t.payload.cart_item_groups,e.comments=t.payload.comments,e.description=t.payload.description,e.email=t.payload.email,e.id=t.payload.id,e.notifications=t.payload.notifications,e.orders=t.payload.orders,e.username=t.payload.username,e.products=t.payload.products,e.logo=t.payload.logo},setUsername(e,t){e.username=t.payload},setEmail(e,t){e.email=t.payload},setDescription(e,t){e.description=t.payload},setLogo(e,t){e.logo=t.payload},addProduct(e,t){e.products.push(t.payload)},setProduct(e,t){e.products.forEach((a,i)=>{t.payload.id==a.id&&(e.products[i]=t.payload)})},addToCart(e,t){for(let a of e.cart_item_groups)if(a.main){let e=!1;for(let i of a.cart_items)if(i.id==t.payload.id){i.quantity++,e=!0;break}e||a.cart_items.push(t.payload);break}},editCartItem(e,t){for(let a of e.cart_item_groups)if(a.main){a.cart_items.forEach((e,i)=>{e.id==t.payload.id&&(a.cart_items[i]=t.payload)});break}},deleteCartItem(e,t){var a;null===(a=e.cart_item_groups.find(e=>e.main))||void 0===a||a.cart_items.forEach((e,a,i)=>{e.id==t.payload&&i.splice(a,1),console.log(e)})},deleteProduct(e,t){e.products.find((e,a,i)=>(e.id==t.payload&&i.splice(a,1),e.id==t.payload))},setCarts(e,t){e.cart_item_groups=t.payload},setOrders(e,t){e.orders=t.payload},setNotifications(e,t){e.notifications=t.payload},addComment(e,t){e.comments.push(t.payload)}}}),r=i.actions;t.Z=i},904:function(e){e.exports={Container:"Container_Container__L_q4N"}},8008:function(e){e.exports={FormEditProduct:"FormEditProduct_FormEditProduct__1EW1D"}},260:function(e){e.exports={page:"ProductPage_page__g8Bxy",block:"ProductPage_block__dZkLW",product:"ProductPage_product__VgKiK",left:"ProductPage_left__6Kzyz",img:"ProductPage_img__iSGQB",right:"ProductPage_right__MTXoW",edit:"ProductPage_edit__3gdEM",del:"ProductPage_del__plRmd",comments:"ProductPage_comments__Yhd2B",add:"ProductPage_add__oj2HP",comment:"ProductPage_comment__i8sLR"}}},function(e){e.O(0,[535,728,444,753,138,590,971,23,744],function(){return e(e.s=5823)}),_N_E=e.O()}]);