(this["webpackJsonpshopping-list-v2"]=this["webpackJsonpshopping-list-v2"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n(8),r=n.n(o),s=(n(51),n(16)),i=(n(52),n(32)),l=n(40),u=n(25),d=n.n(u),h=n(31),j=Object(a.createContext)(),p=function(e){var t=e.children,n=Object(a.useState)([]),o=Object(s.a)(n,2),r=o[0],u=o[1],p=Object(a.useState)(!0),b=Object(s.a)(p,2),f=b[0],m=b[1],O=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(JSON.parse(localStorage.getItem("products"))){e.next=4;break}localStorage.setItem("products",JSON.stringify(r)),e.next=8;break;case 4:return e.next=6,JSON.parse(localStorage.getItem("products"));case 6:t=e.sent,u(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){O()}),[]),Object(a.useEffect)((function(){localStorage.setItem("products",JSON.stringify(r))}),[r]);var v=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u([].concat(Object(l.a)(r),[t]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(j.Provider,{value:{products:r,showAll:f,handleShowAll:function(){m(!f)},handleNewProduct:v,handleProductIsBought:function(e){u(r.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{isBought:!t.isBought}):t})))},handleClearAll:function(){u([])},handleRemoveProduct:function(e){u(r.filter((function(t){return t.id!==e})))}},children:t})},b=n(81),f=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useContext)(j).handleNewProduct;return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("form",{className:"header__form",onSubmit:function(e){e.preventDefault(),n&&(r({id:Math.floor(9999999*Math.random()),name:n,isBought:!1}),o(""))},children:[Object(c.jsx)("input",{value:n,placeholder:"product...",className:"header__input",onChange:function(e){o(e.target.value)}}),Object(c.jsx)(b.a,{className:"header__button",type:"submit",children:Object(c.jsx)("span",{className:"fas fa-plus"})})]})})},m=(n(58),n(59),n(84)),O=function(e){var t=e.id,n=e.name,a=e.isBought,o=e.handleRemoveProduct,r=e.handleProductIsBought;return Object(c.jsxs)("li",{className:"product__container",children:[Object(c.jsx)(m.a,{className:"".concat(a?"product product--isBought":"product"),color:"primary",variant:"contained",size:"small",onClick:function(){return r(t)},children:Object(c.jsx)("span",{className:"product__name",children:n})}),Object(c.jsx)(m.a,{color:"secondary",variant:"contained",className:"product__delete ",onClick:function(){o(t)},children:Object(c.jsx)("span",{className:"far fa-trash-alt"})})]})},v=function(e){var t=e.products,n=e.showAll,o=Object(a.useContext)(j),r=o.handleProductIsBought,s=o.handleRemoveProduct;return t=t.sort((function(e,t){return e.isBought-t.isBought})),Object(c.jsx)("div",{className:"main",children:t.length?Object(c.jsx)("ul",{className:"main__list",children:n?t.map((function(e){var t=e.id,n=e.isBought,a=e.name;return Object(c.jsx)(O,{id:t,isBought:n,name:a,handleProductIsBought:r,handleRemoveProduct:s},t)})):t.filter((function(e){return!e.isBought})).map((function(e){var t=e.id,n=e.isBought,a=e.name;return Object(c.jsx)(O,{id:t,isBought:n,name:a,handleProductIsBought:r,handleRemoveProduct:s},t)}))}):Object(c.jsx)("h4",{className:"main__emptyList",children:"There is no products on your list."})})},x=(n(60),n(85)),g=n(87),N=n(86),_=n(62),B=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useContext)(j),i=r.handleShowAll,l=r.showAll,u=r.handleClearAll,d=r.products,h=function(){o(null)},p=Boolean(n),b=p?"simple-popover":void 0,f=d.filter((function(e){return e.isBought}));return Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)(m.a,{"aria-describedby":b,onClick:function(e){o(e.currentTarget)},color:"primary",variant:"contained",className:"options__clear",size:"small",disabled:!d.length,children:"Clear All"}),Object(c.jsx)(x.a,{label:"".concat(l?"Hide Bought":"Show All"),disabled:!f.length,control:Object(c.jsx)(g.a,{color:"primary",onChange:function(e){i(e)}})}),Object(c.jsxs)(N.a,{className:"options__popup",id:b,open:p,anchorEl:n,onClose:h,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(c.jsx)(_.a,{children:"Are you sure?"}),Object(c.jsxs)("div",{className:"options__popupGroup",children:[Object(c.jsx)(m.a,{variant:"contained",color:"primary",className:"options__popupBtn",onClick:function(){h()},children:"No"}),Object(c.jsx)(m.a,{variant:"contained",color:"primary",className:"options__popupBtn",onClick:function(){h(),u()},children:"Yes"})]})]})]})};var w=function(){var e=Object(a.useContext)(j),t=e.products,n=e.showAll;return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(f,{}),Object(c.jsx)(B,{}),Object(c.jsx)(v,{products:t,showAll:n})]})};r.a.render(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p,{children:Object(c.jsx)(w,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.82e0947a.chunk.js.map