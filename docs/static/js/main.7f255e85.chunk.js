(this["webpackJsonpssc-india-client"]=this["webpackJsonpssc-india-client"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(30),i=n.n(r),a=n(12),u=(n(40),n(2)),l=n(4),o=n.n(l),j=n(3),b=(n(59),n(0)),h=function(e){return Object(b.jsxs)("div",{className:"DeleteModal",children:[Object(b.jsx)("div",{className:"DeleteModalBg"}),Object(b.jsxs)("div",{className:"DeleteModalContainer",children:[Object(b.jsx)("p",{children:"Delete this post? This action is irreversible."}),Object(b.jsxs)("div",{className:"buttonsContainer",children:[Object(b.jsx)("button",{onClick:e.confirmDelete,children:"Delete"}),Object(b.jsx)("button",{onClick:e.cancelDelete,children:"Cancel"})]})]})]})},d=(n(61),function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],d=a[1],O=Object(j.g)(),p=Object(j.h)();return Object(b.jsxs)("div",{className:"Navbar-container",children:[l.length?Object(b.jsx)(k,{errors:l}):null,Object(b.jsx)("button",{onClick:function(){return O.goBack()},disabled:"/"===p.pathname,children:"Back"}),e.user.username?Object(b.jsxs)("p",{children:["Signed in as ",e.user.username]}):null,e.user.name?Object(b.jsx)("button",{onClick:function(){return O.push("/createPost")},children:"Create Post"}):null,e.user.name&&"/viewPost"===p.pathname.slice(0,p.pathname.lastIndexOf("/"))&&e.user.id===e.postAuthor?Object(b.jsx)("button",{onClick:function(){return O.push("/editPost/"+e.postId)},children:"Edit Post"}):null,e.user.name&&"/viewPost"===p.pathname.slice(0,p.pathname.lastIndexOf("/"))&&e.user.id===e.postAuthor?Object(b.jsx)("button",{onClick:function(){return r(!0)},children:"Delete Post"}):null,s?Object(b.jsx)(h,{confirmDelete:function(){return t=e.postId,o.a.post("https://ssci.herokuapp.com/content/delete",{postId:t},{withCredentials:!0}).then((function(){r(!1),O.push("/")})).catch((function(e){var t=e.response;return d(t.data.errors)}));var t},cancelDelete:function(){return r(!1)}}):null,Object(b.jsx)("button",{onClick:e.setUser,children:e.user.name?"Sign out":"Sign in"})]})}),O=n(6),p=n(5),x=function(e){var t=Object(p.a)(e.branches).map((function(t,n){return Object(b.jsx)("option",{value:t,selected:e.filter.branch===t,children:t},n)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"branch",children:"Branch"}),Object(b.jsxs)("select",{name:"branch",value:e.filter.branch,onChange:function(t){return e.filterChange({branch:t.target.value})},children:[Object(b.jsx)("option",{value:"",selected:""===e.filter.branch,children:"All"}),t]})]})},m=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],j=a[1];Object(c.useEffect)((function(){return o.a.get("https://ssci.herokuapp.com/institute/show").then((function(t){r(t.data),function(t){var n=new Set;t.forEach((function(e){return e.branches.forEach((function(e){return n.add(e.name)}))})),e.setBranches(n)}(t.data)})).catch((function(e){var t=e.response;return j(t.data.errors)}))}),[]);var h=s.map((function(e,t){return Object(b.jsx)("option",{value:e.name,children:e.name},t)}));return Object(b.jsxs)("div",{children:[l.length?Object(b.jsx)(k,{errors:l}):null,Object(b.jsx)("label",{htmlFor:"institute",children:"Institute"}),Object(b.jsxs)("select",{name:"institute",value:e.filter.institute,onChange:function(t){return e.filterChange({institute:t.target.value})},children:[Object(b.jsx)("option",{value:"",selected:!0,children:"All"}),h]})]})},f=(n(70),function(e){var t=Object(c.useState)(e.query),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(new Set),a=Object(u.a)(i,2),l=a[0],o=a[1],j=function(t){r(Object(O.a)(Object(O.a)({},s),t)),e.setQuery(Object(O.a)(Object(O.a)({},s),t))};return Object(b.jsxs)("div",{className:"ListPostsFilter",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"tag",children:"Posts"}),Object(b.jsxs)("select",{name:"tag",value:s.tag,onChange:function(e){return j({tag:e.target.value})},children:[Object(b.jsx)("option",{value:"",selected:!0,children:"All"}),Object(b.jsx)("option",{value:"generic",children:"Info"}),Object(b.jsx)("option",{value:"blog",children:"Blog"})]})]}),Object(b.jsx)(m,{filter:s,filterChange:j,setBranches:o}),Object(b.jsx)(x,{filter:s,filterChange:j,branches:l})]})}),v=(n(28),function(e){var t=e.posts,n=Object(j.g)();return t.map((function(e,t){return Object(b.jsxs)("div",{onClick:function(){return n.push("/viewPost/".concat(e.id))},className:"LoadPostsList",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{children:"author"in e&&null!==e.author?e.author.username:"~Unknown Author~"}),Object(b.jsx)("p",{children:"branch"in e?e.branch:"~Unknown Branch~"}),Object(b.jsx)("p",{children:"institute"in e?e.institute:"~Unknown Institute~"})]},t)}))}),g=function(e){var t=e.passedQuery,n=Object(c.useState)([]),s=Object(u.a)(n,2),r=s[0],i=s[1],a=Object(c.useState)(t),l=Object(u.a)(a,2),j=l[0],h=l[1],d=Object(c.useState)([]),p=Object(u.a)(d,2),x=p[0],m=p[1];return Object(c.useEffect)((function(){o.a.get("https://ssci.herokuapp.com/content/show",{params:Object(O.a)({},j)}).then((function(e){return i(e.data.posts)})).catch((function(e){var t=e.response;return m(t.data.errors)}))}),[j]),Object(b.jsxs)("div",{className:"ListPosts",children:[x.length?Object(b.jsx)(k,{errors:x}):null,Object(b.jsx)(f,{query:j,setQuery:h}),Object(b.jsx)(v,{posts:r})]})},C=(n(71),function(e){var t=Object(j.h)(),n=Object(j.g)(),c=function(t){e.setQuery(t),n.push("/")};return Object(b.jsxs)("div",{className:"SidePanel",children:["/viewPost"===t.pathname.slice(0,t.pathname.lastIndexOf("/"))?Object(b.jsxs)("div",{className:"sideLinks",children:[Object(b.jsx)("button",{onClick:function(){return c({})},children:"HomePage"}),Object(b.jsx)("button",{onClick:function(){return c({institute:e.similarQuery.institute||""})},children:"Posts from this institute"}),Object(b.jsx)("button",{onClick:function(){return c({branch:e.similarQuery.branch||""})},children:"Posts from this branch"})]}):null,Object(b.jsx)("div",{children:Object(b.jsx)("h5",{children:"Important Notifications"})})]})}),y=(n(72),function(){return Object(b.jsx)("div",{className:"Footer",children:Object(b.jsx)("p",{children:"\xa9 2021 Science Students' Collective India"})})}),k=function(e){var t=e.errors;return Object(b.jsx)("div",{className:"error",children:t.map((function(e,t){return Object(b.jsx)("div",{children:e.message},t)}))})},S=function(e){return Object(c.useEffect)((function(){return e.setPost([])}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(g,{passedQuery:e.query})})},w=function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(u.a)(n,2),r=s[0],i=s[1],a=Object(c.useState)(""),l=Object(u.a)(a,2),h=l[0],d=l[1],O=Object(c.useState)([]),p=Object(u.a)(O,2),x=p[0],m=p[1],f=Object(j.g)();return Object(b.jsxs)("div",{children:[x.length?Object(b.jsx)(k,{errors:x}):null,Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"identity",children:"Email or username"}),Object(b.jsx)("input",{type:"text",name:"identity",id:"identity",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return d(e.target.value)},required:!0})]}),Object(b.jsx)("button",{type:"submit",onClick:function(){return o.a.post("https://ssci.herokuapp.com/auth/signin",{identity:r,password:h},{withCredentials:!0}).then((function(e){t(e.data),f.push("/")})).catch((function(e){var t=e.response;return m(t.data.errors)}))},disabled:r.length*h.length===0,children:"Login"}),Object(b.jsx)("button",{onClick:function(){return f.push("/userSignup")},children:"Sign up"})]})},P=n(33),L=function(e){console.log(e.contents);var t=e.contents.map((function(t,n){return Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"text",value:t,onChange:function(t){return e.editBulletListLine(n,t.target.value)}}),Object(b.jsx)("button",{onClick:function(){return e.removeLine(n)},children:"Remove line"})]},n)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("ul",{children:t}),Object(b.jsx)("button",{onClick:e.addLine,children:"Add line"})]})},N=(n(73),function(e){return e.contents.map((function(t,n){return"p"===t.type?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)("label",{htmlFor:"paragraph",children:"Text"}),Object(b.jsx)("textarea",{type:"text",name:"paragraph",value:t.content,onChange:function(t){return e.handleContentsChange(n,{content:t.target.value})},required:!0}),Object(b.jsx)("hr",{})]},n):"img"===t.type?Object(b.jsxs)("div",{className:"AddImg",children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)("p",{children:Object(b.jsxs)("i",{children:["[Please host the images somewhere online (like ",Object(b.jsx)("a",{href:"https://imgur.com/upload",target:"_blank",rel:"noopener noreferrer",children:"https://imgur.com/upload"}),") and provide link here. The link will not be visible to readers once post is ready.]"]})}),Object(b.jsxs)("div",{className:"imgInput",children:[Object(b.jsx)("label",{htmlFor:"src",children:"URL"}),Object(b.jsx)("input",{type:"text",name:"src",value:t.src,onChange:function(t){return e.handleContentsChange(n,{src:t.target.value})}})]}),Object(b.jsxs)("div",{className:"imgShow",children:[Object(b.jsx)("img",{src:t.src,alt:t.description}),Object(b.jsx)("label",{htmlFor:"description",children:"Image description"}),Object(b.jsx)("input",{type:"text",name:"description",value:t.description,onChange:function(t){return e.handleContentsChange(n,{description:t.target.value})}})]}),Object(b.jsx)("hr",{})]},n):"ul"===t.type?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)(L,{contents:t.contents,addLine:function(){return e.addBulletListLine(n)},removeLine:function(t){return e.removeBulletListLine(n,t)},editBulletListLine:function(t,c){return e.editBulletListLine(n,t,c)}})]}):"h2"===t.type?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)("label",{htmlFor:"heading",children:"Heading"}),Object(b.jsx)("input",{type:"text",name:"heading",value:t.text,onChange:function(t){return e.handleContentsChange(n,{text:t.target.value})}})]}):"hr"===t.type?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)("hr",{})]}):null}))}),B="https://ssci.herokuapp.com",U=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([{type:"p"}]),a=Object(u.a)(i,2),l=a[0],h=a[1],d=Object(c.useState)(!1),x=Object(u.a)(d,2),m=x[0],f=x[1],v=Object(c.useState)([]),g=Object(u.a)(v,2),C=g[0],y=g[1],S=Object(j.g)();Object(c.useEffect)((function(){e.edit&&(r(e.post.title),h(e.post.content),f("generic"===e.post.tag))}),[e.edit,e.post]);var w=s.length>0&&l.length>0;if(w){var L,U=Object(P.a)(l);try{for(U.s();!(L=U.n()).done;){var F=L.value;("content"in F&&0===F.content.length||"src"in F&&0===F.src.length)&&(w=!1)}}catch(I){U.e(I)}finally{U.f()}}return Object(b.jsxs)("div",{children:[C.length?Object(b.jsx)(k,{errors:C}):null,Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"blog-title",children:"Title"}),Object(b.jsx)("input",{type:"text",id:"blog-title",name:"blog-title",value:s,onChange:function(e){return r(e.target.value)},required:!0,disabled:e.edit})]}),e.edit?null:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"generic",children:"Generic post"}),Object(b.jsx)("input",{type:"radio",name:"generic",checked:m,onChange:function(){return f(!0)}}),Object(b.jsx)("label",{htmlFor:"blog",children:"Blog post"}),Object(b.jsx)("input",{type:"radio",name:"blog",checked:!m,onChange:function(){return f(!1)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{children:Object(b.jsx)(N,{contents:l,handleContentsChange:function(e,t){return h([].concat(Object(p.a)(l.slice(0,e)),[Object(O.a)(Object(O.a)({},l[e]),t)],Object(p.a)(l.slice(e+1))))},removeElement:function(e){return h([].concat(Object(p.a)(l.slice(0,e)),Object(p.a)(l.slice(e+1))))},addBulletListLine:function(e){return h([].concat(Object(p.a)(l.slice(0,e)),[Object(O.a)(Object(O.a)({},l[e]),{},{contents:[].concat(Object(p.a)(l[e].contents),[""])})],Object(p.a)(l.slice(e+1))))},removeBulletListLine:function(e,t){return h([].concat(Object(p.a)(l.slice(0,e)),[Object(O.a)(Object(O.a)({},l[e]),{},{contents:[].concat(Object(p.a)(l[e].contents.slice(0,t)),Object(p.a)(l[e].contents.slice(t+1)))})],Object(p.a)(l.slice(e+1))))},editBulletListLine:function(e,t,n){return h([].concat(Object(p.a)(l.slice(0,e)),[Object(O.a)(Object(O.a)({},l[e]),{},{contents:[].concat(Object(p.a)(l[e].contents.slice(0,t)),[n],Object(p.a)(l[e].contents.slice(t+1)))})],Object(p.a)(l.slice(e+1))))}})}),Object(b.jsxs)("select",{value:"",onChange:function(e){var t={};"p"===e.target.value?t={type:"p",content:""}:"img"===e.target.value?t={type:"img",src:"",description:""}:"ul"===e.target.value?t={type:"ul",contents:[""]}:"h2"===e.target.value?t={type:"h2",text:""}:"hr"===e.target.value&&(t={type:"hr"}),h([].concat(Object(p.a)(l),[t]))},children:[Object(b.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Add Element"}),Object(b.jsx)("option",{value:"h2",children:"Subheading"}),Object(b.jsx)("option",{value:"hr",children:"Horizontal Line"}),Object(b.jsx)("option",{value:"p",children:"Paragraph"}),Object(b.jsx)("option",{value:"img",children:"Image"}),Object(b.jsx)("option",{value:"ul",children:"Bullet List"})]}),Object(b.jsx)("button",{type:"submit",onClick:function(){w&&(e.edit?o.a.post(B+"/content/edit",{postId:e.id,content:l},{withCredentials:!0}).then((function(){return S.push("/viewPost/"+e.id)})).catch((function(e){var t=e.response;return y(t.data.errors)})):o.a.post(B+"/content/create",{title:s,content:l,institute:e.user.institute,branch:e.user.branch,tag:m?"generic":"blog"},{withCredentials:!0}).then((function(e){return S.push("/viewPost/"+e.data.postId)})).catch((function(t){var n=t.response;400===n.status&&(y(n.data.errors),e.setUser({}))})))},disabled:!w,children:"Submit"})]})},F=(n(29),function(e){var t=e.post;return"blog"===t.tag?Object(b.jsxs)("div",{className:"postAuthor",children:[Object(b.jsxs)("h4",{children:["Author: ",t.author?t.author.username:"~Unknown Author~"]}),Object(b.jsxs)("p",{children:["Institute: ",t.institute]}),Object(b.jsxs)("p",{children:["Branch: ",t.branch]})]}):null}),I=function(e){return e.contents?e.contents.map((function(e,t){return"p"===e.type?Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:e.content})},t):"img"===e.type?Object(b.jsxs)("div",{className:"postImg",children:[Object(b.jsx)("img",{src:e.src,alt:e.description}),Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:e.description})})]},t):"ul"===e.type?Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e.contents.map((function(e,t){return Object(b.jsx)("li",{children:e},t)}))})},t):"h2"===e.type?Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:e.text})},t):"hr"===e.type?Object(b.jsx)("div",{children:Object(b.jsx)("hr",{})},t):null})):null},E=function(e){var t=Object(c.useState)({}),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],j=a[1];return Object(c.useEffect)((function(){return o.a.get("https://ssci.herokuapp.com/content/show",{params:{id:e.id}}).then((function(t){r(t.data.posts[0]),e.setSimilarQuery({institute:t.data.posts[0].institute,branch:t.data.posts[0].branch}),e.setPost(t.data.posts[0])})).catch((function(e){var t=e.response;return j(t.data.errors)}))}),[e.id]),l.length?Object(b.jsx)("div",{className:"ShowPost",children:Object(b.jsx)(k,{errors:l})}):Object(b.jsxs)("div",{className:"ShowPost",children:[Object(b.jsxs)("div",{className:"postHead",children:[Object(b.jsx)("h2",{children:s.title}),Object(b.jsx)("p",{children:Date(s.timestamp)})]}),Object(b.jsx)("div",{className:"postContents",children:Object(b.jsx)(I,{contents:s.content})}),Object(b.jsx)(F,{post:s})]})},A=(n(74),function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],o=a[1];Object(c.useEffect)((function(){return r(e.branch)}),[e.branch]);var j=function(t){e.setBranch(t),r(t),o([])},h=function(){return!e.branch.length&&s.length?Object(b.jsx)("div",{className:"listing-dropdown branchesListing",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){return j(s)},children:Object(b.jsxs)("i",{children:['Add "',s,'"']})}),l.map((function(e,t){return Object(b.jsx)("li",{onClick:function(){return j(e.name)},children:e.name},t)}))]})}):null};return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"branch",children:"Branch"}),Object(b.jsx)("input",{type:"text",name:"branch",value:s,onChange:function(t){e.setBranch(""),r(t.target.value),t.target.value.length?o(e.branchesList.filter((function(e){return-1!==e.name.toUpperCase().search(t.target.value.toUpperCase())}))):o([])},disabled:e.disabled}),Object(b.jsx)(h,{})]})}),D=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],o=a[1];Object(c.useEffect)((function(){return r(e.institute.name||"")}),[e.institute.name]);var j=function(t){e.setInstitute(t),r(t.name),o([])},h=function(){return!Object.keys(e.institute).length&&s.length?Object(b.jsx)("div",{className:"listing-dropdown institutesListing",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{onClick:function(){return j({name:s,branches:[]})},children:Object(b.jsxs)("i",{children:['Add "',s,'"']})}),l.map((function(e,t){return Object(b.jsx)("li",{onClick:function(){return j(e)},children:e.name},t)}))]})}):null};return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"institute",children:"Institute"}),Object(b.jsx)("input",{type:"text",name:"institute",value:s,onChange:function(t){e.setInstitute({}),r(t.target.value),t.target.value.length?o(e.institutesList.filter((function(e){return-1!==e.name.toUpperCase().search(t.target.value.toUpperCase())}))):o([])}}),Object(b.jsx)(h,{})]})},Q="https://ssci.herokuapp.com",q=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),a=i[0],l=i[1],j=Object(c.useState)({}),h=Object(u.a)(j,2),d=h[0],O=h[1],p=Object(c.useState)([]),x=Object(u.a)(p,2),m=x[0],f=x[1],v=Object(c.useState)(""),g=Object(u.a)(v,2),C=g[0],y=g[1],S=Object(c.useState)(""),w=Object(u.a)(S,2),P=w[0],L=w[1],N=Object(c.useState)(""),B=Object(u.a)(N,2),U=B[0],F=B[1],I=Object(c.useState)("not verified"),E=Object(u.a)(I,2),q=E[0],R=E[1],T=Object(c.useState)({}),H=Object(u.a)(T,2),M=H[0],_=H[1],V=Object(c.useState)([]),J=Object(u.a)(V,2),z=J[0],G=J[1];Object(c.useEffect)((function(){return o.a.get(Q+"/institute/show").then((function(e){f(e.data)}))}),[]);return Object(b.jsxs)("div",{className:"Signup",children:["email"in M?Object(b.jsxs)("div",{className:"userCreated",children:[Object(b.jsx)("p",{children:"User email verification pending. Please check your inbox (and spam) for the verification link."}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"createdUsername",children:"Username"}),Object(b.jsx)("p",{name:"createdUsername",children:M.username})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"createdEmail",children:"Email"}),Object(b.jsx)("p",{name:"createdEmail",children:M.email})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"createdPass",children:"Password"}),Object(b.jsx)("p",{name:"createdPass",children:M.password})]})]}):null,z.length?Object(b.jsx)(k,{errors:z}):null,Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",value:a,onChange:function(e){l(e.target.value),R("not verified")}}),"verified"===q?Object(b.jsx)("span",{children:Object(b.jsx)("i",{children:"Unique"})}):Object(b.jsx)("button",{onClick:function(){R("verifying"),o.a.post(Q+"/auth/check_username",{username:a}).then((function(){R("verified"),G([])})).catch((function(e){var t=e.response;G(t.data.errors),R("not verified")}))},disabled:"verifying"===q,children:"not verified"===q?"Verify uniqueness":"Verifying"})]}),Object(b.jsx)(D,{institute:d,setInstitute:O,institutesList:m}),Object(b.jsx)(A,{branch:C,setBranch:y,branchesList:d.branches,disabled:0===Object.keys(d).length}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",name:"email",value:P,onChange:function(e){return L(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password (min 8 chars)"}),Object(b.jsx)("input",{type:"password",name:"password",value:U,onChange:function(e){return F(e.target.value)}})]}),Object(b.jsx)("button",{onClick:function(){_({}),G([]),o.a.post(Q+"/auth/signup",{name:n,username:a,institute:d.name,branch:C,email:P,password:U},{withCredentials:!0}).then((function(){_({username:a,email:P,password:U}),s(""),l(""),O({}),y(""),L(""),F(""),R("not verified")})).catch((function(e){var t=e.response;return G(t.data.errors)}))},disabled:U.length<8,children:"Register"})]})},R=function(e){var t=e.id,n=Object(c.useState)(!1),s=Object(u.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)([]),j=Object(u.a)(l,2),h=j[0],d=j[1];return Object(c.useEffect)((function(){return o.a.post("https://ssci.herokuapp.com/auth/verify_email",{id:t}).then((function(){return i(!0)})).catch((function(e){var t=e.response;return d(t.data.errors)}))}),[t]),r?Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Email ID verified! ",Object(b.jsx)(a.b,{to:"/authUser",children:"Login"})," to create your first post!"]})}):h.length?Object(b.jsx)(k,{errors:h}):Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Verifying ..."})})},T=n(34),H=n(35),M=new(function(){function e(){var t=this;Object(T.a)(this,e),o.a.get("https://ssci.herokuapp.com/auth/check_user",{withCredentials:!0}).then((function(e){t.currentUser=e.data.currentUser})).catch((function(){}))}return Object(H.a)(e,[{key:"getCurrentUser",value:function(){return this.currentUser}},{key:"isAuthenticated",value:function(){return null===this.currentUser}}]),e}()),_=s.a.createContext(M),V=(n(75),function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({}),i=Object(u.a)(r,2),a=i[0],l=i[1],h=Object(c.useState)([]),O=Object(u.a)(h,2),p=O[0],x=O[1],m=Object(c.useState)({}),f=Object(u.a)(m,2),v=f[0],g=f[1],k=Object(j.g)(),P=Object(c.useContext)(_),L=function(){return o.a.post("https://ssci.herokuapp.com/auth/signout").then((function(){return s({})}))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{user:n,postId:p.id,postAuthor:p.author?p.author.id:"",setUser:function(){return"name"in n?L():k.push("/authUser")},isAuthenticated:P.isAuthenticated()}),Object(b.jsxs)("div",{className:"App-contents",children:[Object(b.jsx)(C,{similarQuery:v,setQuery:l}),Object(b.jsx)("div",{className:"main-contents",children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(S,{user:"name"in n?n.name:null,query:a,setPost:x})}}),Object(b.jsx)(j.b,{exact:!0,path:"/viewPost/:id",render:function(e){return Object(b.jsx)(E,{id:e.match.params.id,setSimilarQuery:g,user:n.name,setPost:x})}}),Object(b.jsx)(j.b,{exact:!0,path:"/userSignup",component:q}),Object(b.jsx)(j.b,{exact:!0,path:"/verify/:id",render:function(e){return Object(b.jsx)(R,{id:e.match.params.id})}}),n.name?null:Object(b.jsx)(w,{setUser:s}),Object(b.jsx)(j.b,{exact:!0,path:"/createPost",render:function(){return Object(b.jsx)(U,{user:n,setUser:s})}}),Object(b.jsx)(j.b,{exact:!0,path:"/editPost/:id",render:function(e){return Object(b.jsx)(U,{edit:!0,user:n.id,setUser:s,post:p,id:e.match.params.id})}}),Object(b.jsx)(j.a,{to:"/"})]})})]}),Object(b.jsx)(y,{})]})}),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(a.a,{children:Object(b.jsx)(_.Provider,{value:M,children:Object(b.jsx)(V,{})})})}),document.getElementById("root")),J()}},[[76,1,2]]]);
//# sourceMappingURL=main.7f255e85.chunk.js.map