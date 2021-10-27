(this["webpackJsonpssc-india-client"]=this["webpackJsonpssc-india-client"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(30),r=n.n(i),a=n(15),o=(n(38),n(3)),l=n(4),u=n.n(l),j=n(2),b=(n(57),n(0)),h=function(e){return Object(b.jsxs)("div",{className:"DeleteModal",children:[Object(b.jsx)("div",{className:"DeleteModalBg"}),Object(b.jsxs)("div",{className:"DeleteModalContainer",children:[Object(b.jsx)("p",{children:"Delete this post? This action is irreversible."}),Object(b.jsxs)("div",{className:"buttonsContainer",children:[Object(b.jsx)("button",{onClick:e.confirmDelete,children:"Delete"}),Object(b.jsx)("button",{onClick:e.cancelDelete,children:"Cancel"})]})]})]})},d=(n(59),function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),s=n[0],i=n[1],r=Object(j.g)(),a=Object(j.h)();return Object(b.jsxs)("div",{className:"Navbar-container",children:[Object(b.jsx)("button",{onClick:function(){return r.goBack()},disabled:"/"===a.pathname,children:"Back"}),e.user.name?Object(b.jsxs)("p",{children:["Signed in as ",e.user.name]}):null,e.user.name?Object(b.jsx)("button",{onClick:function(){return r.push("/createPost")},children:"Create Post"}):null,e.user.name&&"/viewPost"===a.pathname.slice(0,a.pathname.lastIndexOf("/"))?Object(b.jsx)("button",{onClick:function(){return r.push("/editPost/"+e.postId)},children:"Edit Post"}):null,e.user.name&&"/viewPost"===a.pathname.slice(0,a.pathname.lastIndexOf("/"))&&e.user.id===e.postAuthor?Object(b.jsx)("button",{onClick:function(){return i(!0)},children:"Delete Post"}):null,s?Object(b.jsx)(h,{confirmDelete:function(){return t=e.postId,u.a.post("https://ssci.herokuapp.com/content/delete",{postId:t},{withCredentials:!0}).then((function(){i(!1),r.push("/")})).catch((function(e){return console.log(e)}));var t},cancelDelete:function(){return i(!1)}}):null,Object(b.jsx)("button",{onClick:e.setUser,children:e.user.name?"Sign out":"Sign in"})]})}),O=n(8),p=n(9),x=function(e){var t=Object(p.a)(e.branches).map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"branch",children:"Branch"}),Object(b.jsxs)("select",{name:"branch",value:e.filter.branch,onChange:function(t){return e.filterChange({branch:t.target.value})},children:[Object(b.jsx)("option",{value:"",selected:!0,children:"All"}),t]})]})},m=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],i=n[1];Object(c.useEffect)((function(){return u.a.get("https://ssci.herokuapp.com/institute/show").then((function(t){i(t.data),function(t){var n=new Set;t.forEach((function(e){return e.branches.forEach((function(e){return n.add(e.name)}))})),e.setBranches(n)}(t.data)}))}),[]);var r=s.map((function(e,t){return Object(b.jsx)("option",{value:e.name,children:e.name},t)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"institute",children:"Institute"}),Object(b.jsxs)("select",{name:"institute",value:e.filter.institute,onChange:function(t){return e.filterChange({institute:t.target.value})},children:[Object(b.jsx)("option",{value:"",selected:!0,children:"All"}),r]})]})},f=(n(68),function(e){var t=Object(c.useState)({tag:"",institute:"",branch:""}),n=Object(o.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(new Set),a=Object(o.a)(r,2),l=a[0],u=a[1],j=function(t){i(Object(O.a)(Object(O.a)({},s),t)),e.setQuery(Object(O.a)(Object(O.a)({},s),t))};return Object(b.jsxs)("div",{className:"ListPostsFilter",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"tag",children:"Posts"}),Object(b.jsxs)("select",{name:"tag",value:s.tag,onChange:function(e){return j({tag:e.target.value})},children:[Object(b.jsx)("option",{value:"",selected:!0,children:"All"}),Object(b.jsx)("option",{value:"generic",children:"Info"}),Object(b.jsx)("option",{value:"blog",children:"Blog"})]})]}),Object(b.jsx)(m,{filter:s,filterChange:j,setBranches:u}),Object(b.jsx)(x,{filter:s,filterChange:j,branches:l})]})}),g=(n(28),function(e){var t=e.posts,n=Object(j.g)();return t.map((function(e,t){return Object(b.jsxs)("div",{onClick:function(){return n.push("/viewPost/".concat(e.id))},className:"LoadPostsList",children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("p",{children:"author"in e?e.author.name:null}),Object(b.jsx)("p",{children:"branch"in e?e.branch:null}),Object(b.jsx)("p",{children:"institute"in e?e.institute:null})]},t)}))}),v=function(e){var t=e.passedQuery,n=Object(c.useState)([]),s=Object(o.a)(n,2),i=s[0],r=s[1],a=Object(c.useState)(t),l=Object(o.a)(a,2),j=l[0],h=l[1];return Object(c.useEffect)((function(){u.a.get("https://ssci.herokuapp.com/content/show",{params:Object(O.a)({},j)}).then((function(e){return r(e.data.posts)})).catch((function(e){return console.log(e)}))}),[j]),Object(b.jsxs)("div",{className:"ListPosts",children:[Object(b.jsx)(f,{setQuery:h}),Object(b.jsx)(g,{posts:i})]})},C=(n(69),function(e){var t=Object(j.h)(),n=Object(j.g)(),c=function(t){e.setQuery(t),n.push("/")};return Object(b.jsxs)("div",{className:"SidePanel",children:["/viewPost"===t.pathname.slice(0,t.pathname.lastIndexOf("/"))?Object(b.jsxs)("div",{className:"sideLinks",children:[Object(b.jsx)(a.b,{to:"/",children:"HomePage"}),Object(b.jsx)("button",{onClick:function(){return c({institute:e.similarQuery.institute||""})},children:"Posts from this institute"}),Object(b.jsx)("button",{onClick:function(){return c({branch:e.similarQuery.branch||""})},children:"Posts from this branch"})]}):null,Object(b.jsx)("div",{children:Object(b.jsx)("h5",{children:"Important Notifications"})})]})}),y=(n(70),function(){return Object(b.jsx)("div",{className:"Footer",children:Object(b.jsx)("p",{children:"\xa9 2021 Science Students' Collective India"})})}),k=function(e){return Object(c.useEffect)((function(){return e.setPost([])}),[]),Object(b.jsx)("div",{children:Object(b.jsx)(v,{passedQuery:e.query})})},P=function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(o.a)(n,2),i=s[0],r=s[1],a=Object(c.useState)(""),l=Object(o.a)(a,2),h=l[0],d=l[1],O=Object(c.useState)(!1),p=Object(o.a)(O,2),x=p[0],m=p[1],f=Object(j.g)();return Object(b.jsxs)("div",{children:[x?Object(b.jsx)("div",{children:"Login failed"}):null,Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return d(e.target.value)},required:!0})]}),Object(b.jsx)("button",{type:"submit",onClick:function(){return u.a.post("https://ssci.herokuapp.com/auth/signin",{email:i,password:h},{withCredentials:!0}).then((function(e){200===e.status&&(t(e.data),f.push("/"))})).catch((function(e){400===e.response.status&&m(!0)}))},disabled:i.length*h.length===0,children:"Login"})]})},S=n(33),w=(n(71),function(e){return e.contents.map((function(t,n){return"p"===t.type?Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)("label",{htmlFor:"paragraph",children:"Text"}),Object(b.jsx)("textarea",{type:"text",name:"paragraph",value:t.content,onChange:function(t){return e.handleContentsChange(n,{content:t.target.value})},required:!0}),Object(b.jsx)("hr",{})]},n):"img"===t.type?Object(b.jsxs)("div",{className:"AddImg",children:[Object(b.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(b.jsx)("p",{children:Object(b.jsxs)("i",{children:["[Please host the images somewhere online (like ",Object(b.jsx)("a",{href:"https://imgur.com/upload",target:"_blank",rel:"noopener noreferrer",children:"https://imgur.com/upload"}),") and provide link here. The link will not be visible to readers once post is ready.]"]})}),Object(b.jsxs)("div",{className:"imgInput",children:[Object(b.jsx)("label",{htmlFor:"src",children:"URL"}),Object(b.jsx)("input",{type:"text",name:"src",value:t.src,onChange:function(t){return e.handleContentsChange(n,{src:t.target.value})}})]}),Object(b.jsxs)("div",{className:"imgShow",children:[Object(b.jsx)("img",{src:t.src,alt:t.description}),Object(b.jsx)("label",{htmlFor:"description",children:"Image description"}),Object(b.jsx)("input",{type:"text",name:"description",value:t.description,onChange:function(t){return e.handleContentsChange(n,{description:t.target.value})}})]}),Object(b.jsx)("hr",{})]},n):null}))}),N="https://ssci.herokuapp.com",I=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)([{type:"p"}]),a=Object(o.a)(r,2),l=a[0],h=a[1],d=Object(c.useState)(!1),x=Object(o.a)(d,2),m=x[0],f=x[1],g=Object(j.g)();Object(c.useEffect)((function(){e.edit&&(i(e.post.title),h(e.post.content),f("generic"===e.post.tag))}),[e.edit,e.post]);var v=s.length>0&&l.length>0;if(v){var C,y=Object(S.a)(l);try{for(y.s();!(C=y.n()).done;){var k=C.value;"content"in k&&k.content.length>0||"src"in k&&k.src.length>0||(v=!1)}}catch(P){y.e(P)}finally{y.f()}}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"blog-title",children:"Title"}),Object(b.jsx)("input",{type:"text",id:"blog-title",name:"blog-title",value:s,onChange:function(e){return i(e.target.value)},required:!0,disabled:e.edit})]}),e.edit?null:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"generic",children:"Generic post"}),Object(b.jsx)("input",{type:"radio",name:"generic",checked:m,onChange:function(){return f(!0)}}),Object(b.jsx)("label",{htmlFor:"blog",children:"Blog post"}),Object(b.jsx)("input",{type:"radio",name:"blog",checked:!m,onChange:function(){return f(!1)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{contents:l,handleContentsChange:function(e,t){return h([].concat(Object(p.a)(l.slice(0,e)),[Object(O.a)(Object(O.a)({},l[e]),t)],Object(p.a)(l.slice(e+1))))},removeElement:function(e){return h([].concat(Object(p.a)(l.slice(0,e)),Object(p.a)(l.slice(e+1))))}})}),Object(b.jsxs)("select",{value:"",onChange:function(e){var t={};"p"===e.target.value?t={type:"p",content:""}:"img"===e.target.value&&(t={type:"img",src:"",description:""}),h([].concat(Object(p.a)(l),[t]))},children:[Object(b.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Add Element"}),Object(b.jsx)("option",{value:"p",children:"Paragraph"}),Object(b.jsx)("option",{value:"img",children:"Image"})]}),Object(b.jsx)("button",{type:"submit",onClick:function(){v&&(e.edit?u.a.post(N+"/content/edit",{postId:e.id,content:l},{withCredentials:!0}).then((function(){return g.push("/viewPost/"+e.id)})).catch((function(e){return console.log(e)})):u.a.post(N+"/content/create",{title:s,content:l,institute:e.user.institute,branch:e.user.branch,tag:m?"generic":"blog"},{withCredentials:!0}).then((function(e){return g.push("/viewPost/"+e.data.postId)})).catch((function(t){return 400===t.response.status?e.setUser({}):null})))},disabled:!v,children:"Submit"})]})},F=(n(29),function(e){var t=e.post;return"blog"===t.tag?Object(b.jsxs)("div",{className:"postAuthor",children:[Object(b.jsxs)("h4",{children:["Author: ",t.author.name]}),Object(b.jsxs)("p",{children:["Institute: ",t.institute]}),Object(b.jsxs)("p",{children:["Branch: ",t.branch]})]}):null}),E=function(e){return e.contents?e.contents.map((function(e,t){return"p"===e.type?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:e.content}),Object(b.jsx)("hr",{})]},t):"img"===e.type?Object(b.jsxs)("div",{className:"postImg",children:[Object(b.jsx)("img",{src:e.src,alt:e.description}),Object(b.jsx)("p",{children:Object(b.jsx)("i",{children:e.description})}),Object(b.jsx)("hr",{})]},t):null})):null},B=function(e){var t=Object(c.useState)({}),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(c.useEffect)((function(){return u.a.get("https://ssci.herokuapp.com/content/show",{params:{id:e.id}}).then((function(t){i(t.data.posts[0]),e.setSimilarQuery({institute:t.data.posts[0].institute,branch:t.data.posts[0].branch}),e.setPost(t.data.posts[0])}))}),[e.id]),Object(b.jsxs)("div",{className:"ShowPost",children:[Object(b.jsxs)("div",{className:"postHead",children:[Object(b.jsx)("h2",{children:s.title}),Object(b.jsx)("p",{children:s.timestamp})]}),Object(b.jsx)("div",{className:"postContents",children:Object(b.jsx)(E,{contents:s.content})}),Object(b.jsx)(F,{post:s})]})},A=(n(72),function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)({}),r=Object(o.a)(i,2),a=r[0],l=r[1],h=Object(c.useState)([]),O=Object(o.a)(h,2),p=O[0],x=O[1],m=Object(c.useState)({}),f=Object(o.a)(m,2),g=f[0],v=f[1],S=Object(j.g)(),w=function(){return u.a.post("https://ssci.herokuapp.com/auth/signout").then((function(){return s({})}))};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{user:n,postId:p.id,postAuthor:p.author?p.author.id:"",setUser:function(){return"name"in n?w():S.push("/authUser")}}),Object(b.jsxs)("div",{className:"App-contents",children:[Object(b.jsx)(C,{similarQuery:g,setQuery:l}),Object(b.jsx)("div",{className:"main-contents",children:Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(k,{user:"name"in n?n.name:null,query:a,setPost:x})}}),Object(b.jsx)(j.b,{exact:!0,path:"/viewPost/:id",render:function(e){return Object(b.jsx)(B,{id:e.match.params.id,setSimilarQuery:v,user:n.name,setPost:x})}}),n.name?null:Object(b.jsx)(P,{setUser:s}),Object(b.jsx)(j.b,{exact:!0,path:"/createPost",render:function(){return Object(b.jsx)(I,{user:n,setUser:s})}}),Object(b.jsx)(j.b,{exact:!0,path:"/editPost/:id",render:function(e){return Object(b.jsx)(I,{edit:!0,user:n.id,setUser:s,post:p,id:e.match.params.id})}}),Object(b.jsx)(j.a,{to:"/"})]})})]}),Object(b.jsx)(y,{})]})}),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(a.a,{children:Object(b.jsx)(A,{})})}),document.getElementById("root")),D()}},[[73,1,2]]]);
//# sourceMappingURL=main.ff0ab116.chunk.js.map