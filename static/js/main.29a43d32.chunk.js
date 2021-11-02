(this["webpackJsonpfriend-list"]=this["webpackJsonpfriend-list"]||[]).push([[0],{24:function(e,t,r){},25:function(e,t,r){},27:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(6),c=r.n(a),s=r(2),d=r(9),f=r(13),u=r(11),o=r(3),A="ADD_FRIEND",b="CHANGE_PAGINATION",O="DELETE_FRIEND",l="CHANGE_FAVOURITE_PREFERENCE",j="SEARCH_BY_NAME",v="SORT_BY_FAVOURITE_ASC",p="SORT_BY_FAVOURITE_DESC",g={friendList:[{id:1,friendName:"Ajay",favourite:!0,status:"Feeling lucky today"},{id:2,friendName:"Vijay",favourite:!1,status:"Almighty GOD"},{id:3,friendName:"Priya",favourite:!0,status:"Lets party"},{id:4,friendName:"Sneha",favourite:!1,status:"Marvels Superhero Movies ROCK"}],pagination:1,mockedFriendList:[{id:1,friendName:"Ajay",favourite:!0,status:"Feeling lucky today"},{id:2,friendName:"Vijay",favourite:!1,status:"Almighty GOD"},{id:3,friendName:"Priya",favourite:!0,status:"Lets party"},{id:4,friendName:"Sneha",favourite:!1,status:"Marvels Superhero Movies ROCK"}],maxItemCountPerPage:4},N=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var r=t.friend,n=e.friendList.concat(r),i=e.mockedFriendList.concat(r);return Object(o.a)(Object(o.a)({},e),{},{friendList:n,mockedFriendList:i});case l:var a=e.friendList.map((function(e){return e.id===t.id?(e.favourite=!t.favourite,e):e})),c=e.mockedFriendList.map((function(e){return e.id===t.id?(e.favourite=!t.favourite,e):e}));return Object(o.a)(Object(o.a)({},e),{},{friendList:a,mockedFriendList:c});case b:return Object(o.a)(Object(o.a)({},e),{},{pagination:t.value});case O:var s=e.friendList.filter((function(e){return e.id!==t.id})),d=e.mockedFriendList.filter((function(e){return e.id!==t.id})),f=1===t.setPagination&&1!==e.pagination?e.pagination-1:e.pagination;return Object(o.a)(Object(o.a)({},e),{},{friendList:s,pagination:f,mockedFriendList:d});case v:var N=Object(u.a)(e.friendList),x=N.sort((function(e,t){return e.favourite===t.favourite?0:e.favourite?-1:1}));return Object(o.a)(Object(o.a)({},e),{},{friendList:x});case p:var h=Object(u.a)(e.friendList),I=h.sort((function(e,t){return e.favourite===t.favourite?0:e.favourite?1:-1}));return Object(o.a)(Object(o.a)({},e),{},{friendList:I});case j:var P=e.mockedFriendList.filter((function(e){return e.friendName.toLowerCase().includes(t.searchText.toLowerCase())}));return Object(o.a)(Object(o.a)({},e),{},{friendList:P});default:return e}}),Object(f.devToolsEnhancer)({})),x=(r(24),r(25),r(4)),h=function(e){return e.friendList},I=function(e){return e.pagination},P=function(e){return e.maxItemCountPerPage},m=r(1),y=function(){var e=Object(s.b)(),t=Object(s.c)(h),r=Object(n.useState)(""),i=Object(x.a)(r,2),a=i[0],c=i[1],d=Object(n.useState)(""),f=Object(x.a)(d,2),u=f[0],o=f[1],b=Object(n.useState)(20),O=Object(x.a)(b,2),l=O[0],j=O[1],v=function(e){var t=e.target.value;if(c(t),t&&(13===e.charCode||"Enter"===e.key)){if(!function(e){return e.match(/^[a-zA-Z]+$/)}(t))return void o("Invalid Input!!! Only alphabets allowed");if(g(t))return void o("Already Exists, please try with other friend name");o(""),p(t)}},p=function(t){j(l+1),e({type:A,friend:{id:l,friendName:t,favourite:!1,status:"No Status!!!"}}),c("")},g=function(e){return t.some((function(t){return t.friendName.toLowerCase().trim()===e.toLowerCase().trim()}))};return Object(m.jsxs)("div",{className:"add-friend-text-container",children:[Object(m.jsx)("input",{type:"text",id:"friend-name",placeholder:"Type the name and press 'ENTER' to add a friend...",autoComplete:"off",value:a,onChange:v,onKeyPress:v,className:"add-friend-text-field"}),u&&Object(m.jsx)("span",{className:"error",children:u})]})},w=function(){var e=Object(s.b)(),t=Object(n.useState)(""),r=Object(x.a)(t,2),i=r[0],a=r[1],c=function(t){var r=t.target.value;a(r),e({type:j,searchText:r})};return Object(m.jsx)("div",{className:"search-box-container",children:Object(m.jsx)("input",{type:"text",id:"search",placeholder:"Search by a friend name",autoComplete:"off",value:i,onChange:c,onKeyPress:c,className:"text-field"})})},z=function(){var e=Object(s.b)(),t=function(t){e("Asc"===t?{type:v}:{type:p})};return Object(m.jsx)("div",{className:"sort-container",children:Object(m.jsxs)("div",{className:"button-wrapper",children:[Object(m.jsx)("span",{className:"sort-label",children:"Sort By Fav: "}),Object(m.jsx)("div",{className:"button sort-button",onClick:function(){return t("Asc")},children:Object(m.jsx)("img",{className:"sort-img",src:"data:image/png;base64,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",alt:"Sort Asc"})}),Object(m.jsx)("div",{className:"button sort-button",onClick:function(){return t("Desc")},children:Object(m.jsx)("img",{className:"sort-img",src:"data:image/png;base64,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",alt:"Sort Desc"})})]})})},D=function(){return Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)("div",{className:"friend-list-heading",children:Object(m.jsx)("h1",{children:"F.R.I.E.N.D.S"})}),Object(m.jsx)(z,{}),Object(m.jsx)(w,{})]})},S=function(){var e=Object(s.c)(I),t=Object(s.c)(h),r=Object(s.c)(P),i=Object(s.b)(),a=Object(n.useState)(e),c=Object(x.a)(a,2),d=c[0],f=c[1],u=Object(n.useState)([1]),o=Object(x.a)(u,2),A=o[0],O=o[1];Object(n.useEffect)((function(){for(var e=new Array(Math.ceil(t.length/r)),n=0;n<e.length;n++)e[n]=n+1;O(e)}),[t,r]);var l=function(e){f(e),i({type:b,value:e})};return Object(m.jsx)("div",{className:"pagination",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{onClick:d>1?function(){return l(d-1)}:void 0,children:"\xab"}),A.map((function(e,t){return Object(m.jsx)("li",{className:e===d?"active":"",onClick:function(){return l(t+1)},children:e},t)})),Object(m.jsx)("li",{onClick:A.length>d?function(){return l(d+1)}:void 0,children:"\xbb"})]})})},G=function(){var e=Object(s.c)(h),t=Object(s.c)(I),r=Object(s.c)(P),a=Object(n.useState)(0),c=Object(x.a)(a,2),d=c[0],f=c[1],u=Object(n.useState)(0),o=Object(x.a)(u,2),A=o[0],b=o[1],j=Object(n.useState)(e),v=Object(x.a)(j,2),p=v[0],g=v[1],N=Object(s.b)();Object(n.useEffect)((function(){f(t*r),b(d-r),g(e.slice(A,d))}),[e,t,A,d,r]);return Object(m.jsxs)("div",{className:"card",children:[function(){if(e)return p.map((function(e){return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.friendName}),Object(m.jsxs)("div",{children:["Status: ",e.status]})]}),Object(m.jsxs)("div",{className:"button-wrapper",children:[Object(m.jsx)("div",{className:"button",onClick:function(){return t=e.id,r=e.favourite,void N({type:l,id:t,favourite:r});var t,r},children:e.favourite?Object(m.jsx)("img",{className:"fav-img",src:"data:image/png;base64,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",alt:"Fav"}):Object(m.jsx)("img",{className:"fav-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABHlJREFUaEPtWVsou28cf5ZDjQsXWqNRyiGnohauHC4sF0pEtFyaQyGHJpMowrakCJljbn4tZUK5sim5ktQkXDikkOONpJTD99f3/f/fX9vPTs+z980vWa13redzer7b8z7P95WQb/KSfJMc5CcITSUHBwehra1N1EkTlRzDlpeXw9HREdnf3xdVS1RyDJKeng7h4eHEZrOJqiUqOQbR6XRgMBgk4+PjUF9fL5qeaMQYoqioCFZXVzmNlJQUODg4EE1PNGI0L5fL4fb2ltNISkrC/4poeqIRo/na2lqYnJzkNKanpwGv1dXVomiKQoqGKyoqYGFhwYk/LS0N9vb2RNEUhRSDREREwM3NjRN/bGwsnJ6eiqIpCikGUavVYDabnfiHh4dBJpORyspKwXUFJ8QQGo0GZmZmXHIrlUrY3d0VXFdwQgwik8ng/v7eJXd0dDRcXFwIris4IQYpLi6G5eVll9wGgwF0Op3guoITOi657jaWWVlZsL29Lai2oGRoPCoqCi4vLz3yxsTEwPn5uaDan8hKSkogLCyMPD8/k5eXFwIAJDAwkLy9vZGgoCCnSf74+CD4xu/xihipVEr4bYm7ivT29uI9hiQmJpL393dOQyKRcFd844u/8p+Dg4O57+RyObm7uyNLS0tO3j8FGRoaAr1eTx4eHgSdMZrzi6exuGfLyckhExMTnoM4kODU/Gth3HryaFSlUgGWfmNj40sDNTQ0wMrKCvG0bPtq8MuqExoaCj09PUSr1Xr06msQEhISAgMDA6S5udlnjAD/C58nkMpUTU0NWK1WcnZ2RoWjDVRQUAC4Ym5ubvqs4/PAv8z4PFO0ISQSCQAAtS9qAG8sISEB8vLyyNTUFDOHY8ixsTHQarV472LiYwLxBrBf1dfXRx4fH/3iSU1NhczMTDI3N8fMwwzkwxiNRq7do9FomLnKyspgcXGRGY9e/AIL1R1xdZqk/m/RAv4en5ycDIeHh35NSGlpKVgsFr84/AKbTCYICAgQpDNSVVUFs7OzzH6YgVgZIarBV1ihUMDV1RWzH2YgGoiPj4fj42O/OPgghYWFsLa2xszFDJyfn4enpyfS2NjolgO7JgaDgSgUCqJUKr3ec5qammBkZITJExMIZzEjIwN2dnbc4uPi4kClUv05N4yOjkJrayt5fX11i3FssdIuQsxBvBxX3Z8bPGxB8Niwvr7O5IkJhLOl1+uho6PDCY+bSpvNRrx1E/Pz8wGPxq7OOe3t7WA0Gql9UQMwhKsuiFQq5bb5LS0tNJyfKudL88LVz45G9A8ef/8nJyeOWObdMB6curq68IEQx5ednQ1bW1vUvqgBKIZdkO7ubklubi5gB8VqtTLx8DODq5XFYiF8G6m/vx86OzupOKkGo7DDUyjmKnhYkThOfO5ot9upvFEN/t8AREZGkuvraxas11UVm9x2ux37XVT8VIPRRV1dHZhMJmqc1wQOA3APh01CtVrts47PA2mMfMXYnyBfMeueNH8q8tUVMZt/cW17tfq/55HfpiK/AWulvkIRrz4zAAAAAElFTkSuQmCC",alt:"NotFav"})}),Object(m.jsx)("div",{className:"button",onClick:function(){return t=e.id,r=p.length,void(window.confirm("Are you sure you wish to delete this friend?")&&N({type:O,id:t,setPagination:r}));var t,r},children:Object(m.jsx)("img",{className:"del-img",src:"data:image/png;base64,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",alt:"Del"})})]})]})},e.id)}))}(),function(){if(e)return e.length>r&&Object(m.jsx)(S,{})}()]})};var Z=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"Main",children:[Object(m.jsx)(D,{}),Object(m.jsx)(y,{}),Object(m.jsx)(G,{})]})})};c.a.render(Object(m.jsx)(s.a,{store:N,children:Object(m.jsx)(Z,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.29a43d32.chunk.js.map