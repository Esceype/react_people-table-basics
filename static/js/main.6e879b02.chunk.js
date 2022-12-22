(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(2)),s=(c(23),c(0)),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},l=c(1),o=c(6),b=c.n(o),h=function(e){var t=e.to,c=e.text;return Object(s.jsx)(a.b,{className:function(e){var t=e.isActive;return b()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},d=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(h,{to:"/",text:"Home"}),Object(s.jsx)(h,{to:"/people",text:"People"})]})})})},u=c(8),x=c(9),O=c(12),p=c(4);function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(25);var f=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},v=function(e){var t=e.person,c=e.isSelected,n=t.slug,r=t.name,j=t.born,i=t.died,l=t.sex,o=t.motherName,h=t.mother,d=t.fatherName,u=t.father,x=function(e,t){return t?Object(s.jsx)(a.b,{to:"/people/".concat(t.slug),className:b()({"has-text-danger":"f"===t.sex}),children:t.name}):e||"-"};return Object(s.jsxs)("tr",{"data-cy":"person",className:b()({"has-background-warning":c}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(a.b,{to:"/people/".concat(n),className:b()({"has-text-danger":"f"===l}),children:r})}),Object(s.jsx)("td",{children:l}),Object(s.jsx)("td",{children:j}),Object(s.jsx)("td",{children:i}),Object(s.jsx)("td",{children:x(o,h)}),Object(s.jsx)("td",{children:x(d,u)})]})},g=function(){var e=Object(l.useState)([]),t=Object(p.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),j=Object(p.a)(a,2),i=j[0],o=j[1],b=Object(l.useState)(!1),h=Object(p.a)(b,2),d=h[0],g=h[1],N=Object(r.h)().slug,y=function(){var e=Object(O.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!1),g(!0),e.prev=2,e.next=5,m();case 5:t=e.sent,n(t.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o(!0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){y()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[d&&Object(s.jsx)(f,{}),i&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!d&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:c.map((function(e){return Object(s.jsx)(v,{person:e,isSelected:e.slug===N},e.slug)}))})]})]})})]})},N=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(d,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(i,{})}),Object(s.jsxs)(r.b,{path:"/people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(g,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(g,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(N,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6e879b02.chunk.js.map