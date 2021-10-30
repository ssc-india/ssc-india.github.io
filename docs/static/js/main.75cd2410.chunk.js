(this["webpackJsonpssc-india-client"]=this["webpackJsonpssc-india-client"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},44:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(36),i=n.n(r),a=n(14),l=(n(44),n(12)),u=n.n(l),o=n(18),j=n(2),d=n(4),b=n.n(d),h=n(3),O=(n(64),n(0)),p=function(e){return Object(O.jsxs)("div",{className:"DeleteModal",children:[Object(O.jsx)("div",{className:"DeleteModalBg"}),Object(O.jsxs)("div",{className:"DeleteModalContainer",children:[Object(O.jsx)("p",{children:"Delete this post? This action is irreversible."}),Object(O.jsxs)("div",{className:"buttonsContainer",children:[Object(O.jsx)("button",{onClick:e.confirmDelete,children:"Delete"}),Object(O.jsx)("button",{onClick:e.cancelDelete,children:"Cancel"})]})]})]})},x=(n(66),function(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(j.a)(i,2),l=a[0],u=a[1],o=Object(h.g)(),d=Object(h.h)();return Object(O.jsxs)("div",{className:"Navbar-container",children:[l.length?Object(O.jsx)(P,{errors:l}):null,Object(O.jsx)("button",{onClick:function(){return o.goBack()},disabled:"/"===d.pathname,children:"Back"}),e.user.username?Object(O.jsxs)("p",{children:["Signed in as ",e.user.username]}):null,e.user.username?Object(O.jsx)("button",{onClick:function(){e.setDraftId(null),o.push("/createPost")},children:"Create Post"}):null,e.user.username&&"/viewPost"===d.pathname.slice(0,d.pathname.lastIndexOf("/"))&&e.user.id===e.postAuthor?Object(O.jsx)("button",{onClick:function(){return o.push("/editPost/"+e.postId)},children:"Edit Post"}):null,e.user.username&&"/viewPost"===d.pathname.slice(0,d.pathname.lastIndexOf("/"))&&e.user.id===e.postAuthor?Object(O.jsx)("button",{onClick:function(){return r(!0)},children:"Delete Post"}):null,s?Object(O.jsx)(p,{confirmDelete:function(){return t=e.postId,b.a.post("https://ssci.herokuapp.com/content/delete",{postId:t},{withCredentials:!0}).then((function(){r(!1),o.push("/")})).catch((function(e){var t=e.response;return u(t.data.errors)}));var t},cancelDelete:function(){return r(!1)}}):null,Object(O.jsx)("button",{onClick:e.setUser,children:e.user.username?"Sign out":"Sign in"})]})}),f=n(6),m=n(5),v=function(e){var t=Object(m.a)(e.branches).map((function(t,n){return Object(O.jsx)("option",{value:t,selected:e.filter.branch===t,children:t},n)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"branch",children:"Branch"}),Object(O.jsxs)("select",{name:"branch",value:e.filter.branch,onChange:function(t){return e.filterChange({branch:t.target.value})},children:[Object(O.jsx)("option",{value:"",selected:""===e.filter.branch,children:"All"}),t]})]})},g=function(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(j.a)(i,2),l=a[0],u=a[1];Object(c.useEffect)((function(){return b.a.get("https://ssci.herokuapp.com/institute/show").then((function(t){r(t.data),function(t){var n=new Set;t.forEach((function(e){return e.branches.forEach((function(e){return n.add(e.name)}))})),e.setBranches(n)}(t.data)})).catch((function(e){var t=e.response;return u(t.data.errors)}))}),[]);var o=s.map((function(e,t){return Object(O.jsx)("option",{value:e.name,children:e.name},t)}));return Object(O.jsxs)("div",{children:[l.length?Object(O.jsx)(P,{errors:l}):null,Object(O.jsx)("label",{htmlFor:"institute",children:"Institute"}),Object(O.jsxs)("select",{name:"institute",value:e.filter.institute,onChange:function(t){return e.filterChange({institute:t.target.value})},children:[Object(O.jsx)("option",{value:"",selected:!0,children:"All"}),o]})]})},C=(n(74),function(e){var t=Object(c.useState)(e.query),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)(new Set),a=Object(j.a)(i,2),l=a[0],u=a[1],o=function(t){r(Object(f.a)(Object(f.a)({},s),t)),e.setQuery(Object(f.a)(Object(f.a)({},s),t))};return Object(O.jsxs)("div",{className:"ListPostsFilter",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"tag",children:"Posts"}),Object(O.jsxs)("select",{name:"tag",value:s.tag,onChange:function(e){return o({tag:e.target.value})},children:[Object(O.jsx)("option",{value:"",selected:!0,children:"All"}),Object(O.jsx)("option",{value:"generic",children:"Info"}),Object(O.jsx)("option",{value:"blog",children:"Blog"})]})]}),Object(O.jsx)(g,{filter:s,filterChange:o,setBranches:u}),Object(O.jsx)(v,{filter:s,filterChange:o,branches:l})]})}),y=(n(32),function(e){var t=e.posts,n=Object(h.g)();return t.map((function(e,t){return Object(O.jsxs)("div",{onClick:function(){return n.push("/viewPost/".concat(e.id))},className:"LoadPostsList",children:[Object(O.jsx)("h3",{children:e.title}),"blog"===e.tag?Object(O.jsx)("p",{children:"author"in e&&null!==e.author?e.author.username:"~Unknown Author~"}):null,"blog"===e.tag?Object(O.jsx)("p",{children:"branch"in e?e.branch:"~Unknown Branch~"}):null,Object(O.jsx)("p",{children:"institute"in e?e.institute:"~Unknown Institute~"})]},t)}))}),S=function(e){var t=e.passedQuery,n=Object(c.useState)([]),s=Object(j.a)(n,2),r=s[0],i=s[1],a=Object(c.useState)(t),l=Object(j.a)(a,2),u=l[0],o=l[1],d=Object(c.useState)([]),h=Object(j.a)(d,2),p=h[0],x=h[1];return Object(c.useEffect)((function(){b.a.get("https://ssci.herokuapp.com/content/show",{params:Object(f.a)({},u)}).then((function(e){return i(e.data.posts)})).catch((function(e){var t=e.response;return x(t.data.errors)}))}),[u]),Object(O.jsxs)("div",{className:"ListPosts",children:[p.length?Object(O.jsx)(P,{errors:p}):null,Object(O.jsx)(C,{query:u,setQuery:o}),Object(O.jsx)(y,{posts:r})]})},k=n(10),w=n.n(k),I=(n(77),function(e){var t=Object(h.h)(),n=Object(h.g)(),c=function(t){e.setQuery(t),n.push("/")};return Object(O.jsxs)("div",{className:"SidePanel",children:["/"!==t.pathname?Object(O.jsxs)("div",{className:"sideLinks",children:[Object(O.jsx)("button",{onClick:function(){return c({})},children:"HomePage"}),"/viewPost"===t.pathname.slice(0,t.pathname.lastIndexOf("/"))?Object(O.jsx)("button",{onClick:function(){return c({institute:e.similarQuery.institute||""})},children:"Posts from this institute"}):null,"/viewPost"===t.pathname.slice(0,t.pathname.lastIndexOf("/"))?Object(O.jsx)("button",{onClick:function(){return c({branch:e.similarQuery.branch||""})},children:"Posts from this branch"}):null]}):null,Object(O.jsx)("div",{children:Object(O.jsx)("h5",{children:"Important Notifications"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h5",{children:"Your saved drafts"}),Object(O.jsx)("ul",{children:(w.a.get("drafts")||[]).map((function(t,c){return Object(O.jsx)("li",{onClick:function(){e.setDraftId(c),n.push("/createPost")},children:t.title},c)}))})]})]})}),N=(n(78),function(){return Object(O.jsx)("div",{className:"Footer",children:Object(O.jsx)("p",{children:"\xa9 2021 Science Students' Collective India"})})}),P=function(e){var t=e.errors;return Object(O.jsx)("div",{className:"error",children:t.map((function(e,t){return Object(O.jsx)("div",{children:e.message},t)}))})},L=function(e){return Object(c.useEffect)((function(){return e.setPost([])}),[]),Object(O.jsx)("div",{children:Object(O.jsx)(S,{passedQuery:e.query})})},B=(n(79),function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(j.a)(n,2),r=s[0],i=s[1],a=Object(c.useState)(""),l=Object(j.a)(a,2),u=l[0],o=l[1],d=Object(c.useState)([]),p=Object(j.a)(d,2),x=p[0],f=p[1],m=Object(h.g)();return Object(O.jsx)("div",{className:"AuthUser",children:Object(O.jsxs)("div",{className:"AuthContainer",children:[x.length?Object(O.jsx)(P,{errors:x}):null,Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"identity",children:"Email or username"}),Object(O.jsx)("input",{type:"text",name:"identity",id:"identity",onChange:function(e){return i(e.target.value)},required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return o(e.target.value)},required:!0})]}),Object(O.jsx)("button",{type:"submit",onClick:function(){return b.a.post("https://ssci.herokuapp.com/auth/signin",{identity:r,password:u},{withCredentials:!0}).then((function(e){t(e.data),m.push("/")})).catch((function(e){var t=e.response;return f(t.data.errors)}))},disabled:r.length*u.length===0,children:"Login"}),Object(O.jsxs)("div",{className:"registerGroup",children:[Object(O.jsx)("hr",{}),Object(O.jsx)("p",{children:"First time? Register as a content creator!"}),Object(O.jsx)("button",{onClick:function(){return m.push("/userSignup")},children:"Register"})]})]})})}),F=n(39),E=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(j.a)(i,2),l=a[0],u=a[1];Object(c.useEffect)((function(){return r(e.institute.name||"")}),[e.institute.name]);var o=function(t){e.setInstitute(t),r(t.name),u([])},d=function(){return!Object.keys(e.institute).length&&s.length?Object(O.jsx)("div",{className:"listing-dropdown institutesListing",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(){return o({name:s,branches:[]})},children:Object(O.jsxs)("i",{children:['Add "',s,'"']})}),l.map((function(e,t){return Object(O.jsx)("li",{onClick:function(){return o(e)},children:e.name},t)}))]})}):null};return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"institute",children:"Institute"}),Object(O.jsx)("input",{type:"text",name:"institute",value:s,onChange:function(t){e.setInstitute({}),r(t.target.value),t.target.value.length?u(e.institutesList.filter((function(e){return-1!==e.name.toUpperCase().search(t.target.value.toUpperCase())}))):u([])},autoComplete:"off"}),Object(O.jsx)(d,{})]})},U=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(j.a)(i,2),l=a[0],u=a[1];Object(c.useEffect)((function(){return r(e.branch)}),[e.branch]);var o=function(t){e.setBranch(t),r(t),u([])},d=function(){return!e.branch.length&&s.length?Object(O.jsx)("div",{className:"listing-dropdown branchesListing",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(){return o(s)},children:Object(O.jsxs)("i",{children:['Add "',s,'"']})}),l.map((function(e,t){return Object(O.jsx)("li",{onClick:function(){return o(e.name)},children:e.name},t)}))]})}):null};return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"branch",children:"Branch"}),Object(O.jsx)("input",{type:"text",name:"branch",value:s,onChange:function(t){e.setBranch(""),r(t.target.value),t.target.value.length?u(e.branchesList.filter((function(e){return-1!==e.name.toUpperCase().search(t.target.value.toUpperCase())}))):u([])},disabled:e.disabled,autoComplete:"off"}),Object(O.jsx)(d,{})]})},D=function(e){var t=e.contents.map((function(t,n){return Object(O.jsxs)("li",{children:[Object(O.jsx)("textarea",{type:"text",value:t,onChange:function(t){return e.editBulletListLine(n,t.target.value)}}),Object(O.jsx)("button",{onClick:function(){return e.removeLine(n)},children:"Remove line"})]},n)}));return Object(O.jsxs)("div",{className:"bulletList",children:[Object(O.jsx)("ul",{children:t}),Object(O.jsx)("button",{onClick:e.addLine,children:"Add line"})]})},A=(n(34),function(e){return e.contents.map((function(t,n){return"p"===t.type?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"paragraph",children:"Text"}),Object(O.jsx)("textarea",{type:"text",name:"paragraph",value:t.content,onChange:function(t){return e.handleContentsChange(n,{content:t.target.value})},required:!0})]})]},n):"img"===t.type?Object(O.jsxs)("div",{className:"AddImg",children:[Object(O.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(O.jsx)("p",{children:Object(O.jsxs)("i",{children:["[Please host the images somewhere online (like",Object(O.jsx)("a",{href:"https://imgur.com/upload",target:"_blank",rel:"noopener noreferrer",children:"https://imgur.com/upload"}),") and provide link here. The link will not be visible to readers once post is ready.]"]})}),Object(O.jsxs)("div",{className:"imgInput",children:[Object(O.jsx)("label",{htmlFor:"src",children:"URL"}),Object(O.jsx)("input",{type:"text",name:"src",value:t.src,onChange:function(t){return e.handleContentsChange(n,{src:t.target.value})}})]}),Object(O.jsx)("img",{src:t.src,alt:t.description}),Object(O.jsxs)("div",{className:"imgShow",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Image description"}),Object(O.jsx)("input",{type:"text",name:"description",value:t.description,onChange:function(t){return e.handleContentsChange(n,{description:t.target.value})}})]})]},n):"ul"===t.type?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(O.jsx)(D,{contents:t.contents,addLine:function(){return e.addBulletListLine(n)},removeLine:function(t){return e.removeBulletListLine(n,t)},editBulletListLine:function(t,c){return e.editBulletListLine(n,t,c)}})]}):"h2"===t.type?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"heading",children:"Heading"}),Object(O.jsx)("input",{type:"text",name:"heading",value:t.text,className:"blog-heading",onChange:function(t){return e.handleContentsChange(n,{text:t.target.value})}})]})]}):"hr"===t.type?Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"removeButton",onClick:function(){return e.removeElement(n)},children:"Remove"}),Object(O.jsx)("hr",{})]}):null}))}),Q="https://ssci.herokuapp.com",q=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([{type:"p"}]),a=Object(j.a)(i,2),l=a[0],d=a[1],p=Object(c.useState)(!1),x=Object(j.a)(p,2),v=x[0],g=x[1],C=Object(c.useState)([]),y=Object(j.a)(C,2),S=y[0],k=y[1],I=Object(c.useState)({}),N=Object(j.a)(I,2),L=N[0],B=N[1],D=Object(c.useState)(""),q=Object(j.a)(D,2),R=q[0],T=q[1],H=Object(c.useState)([]),M=Object(j.a)(H,2),_=M[0],G=M[1],V=Object(h.g)();Object(c.useEffect)((function(){if(e.edit)r(e.post.title),d(e.post.content),g("generic"===e.post.tag);else if(null!==e.draftId){var t=w.a.get("drafts")[e.draftId];r(t.title),d(t.content),g("generic"===t.tag),B({name:t.institute||"",branches:[]}),T(t.branch||"")}else r(""),d([{type:"p"}]),g(!1),B({}),T("");var n=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(Q+"/institute/show");case 2:t=e.sent,G(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}),[e.edit,e.post,e.draftId]);var J=s.length>0&&l.length>0;if(J){var z,Y=Object(F.a)(l);try{for(Y.s();!(z=Y.n()).done;){var K=z.value;("content"in K&&0===K.content.length||"src"in K&&0===K.src.length)&&(J=!1)}}catch(W){Y.e(W)}finally{Y.f()}}return Object(O.jsxs)("div",{className:"createPost",children:[S.length?Object(O.jsx)(P,{errors:S}):null,Object(O.jsxs)("div",{className:"titlearea",children:[Object(O.jsx)("label",{htmlFor:"blog-title",children:"Title"}),Object(O.jsx)("input",{type:"text",id:"blog-title",name:"blog-title",className:"blog-heading",value:s,onChange:function(e){return r(e.target.value)},required:!0,disabled:e.edit})]}),e.edit?null:Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Post type:"}),Object(O.jsxs)("div",{className:"radioGroup",children:[Object(O.jsx)("label",{htmlFor:"generic",children:"Factual post"}),Object(O.jsx)("input",{type:"radio",name:"generic",checked:v,onChange:function(){return g(!0)}}),Object(O.jsx)("label",{htmlFor:"blog",children:"Blog post"}),Object(O.jsx)("input",{type:"radio",name:"blog",checked:!v,onChange:function(){return g(!1)}})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("hr",{})}),Object(O.jsx)("div",{children:Object(O.jsx)(A,{contents:l,handleContentsChange:function(e,t){return d([].concat(Object(m.a)(l.slice(0,e)),[Object(f.a)(Object(f.a)({},l[e]),t)],Object(m.a)(l.slice(e+1))))},removeElement:function(e){return d([].concat(Object(m.a)(l.slice(0,e)),Object(m.a)(l.slice(e+1))))},addBulletListLine:function(e){return d([].concat(Object(m.a)(l.slice(0,e)),[Object(f.a)(Object(f.a)({},l[e]),{},{contents:[].concat(Object(m.a)(l[e].contents),[""])})],Object(m.a)(l.slice(e+1))))},removeBulletListLine:function(e,t){return d([].concat(Object(m.a)(l.slice(0,e)),[Object(f.a)(Object(f.a)({},l[e]),{},{contents:[].concat(Object(m.a)(l[e].contents.slice(0,t)),Object(m.a)(l[e].contents.slice(t+1)))})],Object(m.a)(l.slice(e+1))))},editBulletListLine:function(e,t,n){return d([].concat(Object(m.a)(l.slice(0,e)),[Object(f.a)(Object(f.a)({},l[e]),{},{contents:[].concat(Object(m.a)(l[e].contents.slice(0,t)),[n],Object(m.a)(l[e].contents.slice(t+1)))})],Object(m.a)(l.slice(e+1))))}})}),Object(O.jsxs)("div",{className:"buttonGroup",children:[Object(O.jsx)("hr",{}),Object(O.jsx)(E,{institute:L,setInstitute:B,institutesList:_}),Object(O.jsx)(U,{branch:R,setBranch:T,branchesList:L.branches,disabled:0===Object.keys(L).length}),Object(O.jsxs)("select",{value:"",onChange:function(e){var t={};"p"===e.target.value?t={type:"p",content:""}:"img"===e.target.value?t={type:"img",src:"",description:""}:"ul"===e.target.value?t={type:"ul",contents:[""]}:"h2"===e.target.value?t={type:"h2",text:""}:"hr"===e.target.value&&(t={type:"hr"}),d([].concat(Object(m.a)(l),[t]))},children:[Object(O.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Add Element"}),Object(O.jsx)("option",{value:"h2",children:"Subheading"}),Object(O.jsx)("option",{value:"hr",children:"Horizontal Line"}),Object(O.jsx)("option",{value:"p",children:"Paragraph"}),Object(O.jsx)("option",{value:"img",children:"Image"}),Object(O.jsx)("option",{value:"ul",children:"Bullet List"})]}),Object(O.jsx)("button",{onClick:function(){J&&(e.edit?b.a.post(Q+"/content/edit",{postId:e.id,content:l},{withCredentials:!0}).then((function(){return V.push("/viewPost/"+e.id)})).catch((function(e){var t=e.response;return k(t.data.errors)})):b.a.post(Q+"/content/create",{title:s,content:l,institute:L.name,branch:R,tag:v?"generic":"blog"},{withCredentials:!0}).then((function(e){return V.push("/viewPost/"+e.data.postId)})).catch((function(t){var n=t.response;k(n.data.errors),401===n.status&&e.setUser({})})))},disabled:!J,children:"Submit"}),Object(O.jsx)("button",{onClick:function(){var t=w.a.get("drafts")||[],n={title:s,content:l,institute:L.name,branch:R,tag:v?"generic":"blog"};"draftId"in e&&null!==e.draftId?t[e.draftId]=n:t.push(n),w.a.set("drafts",t),e.setDraftId(null!==e.draftId?e.draftId:t.length-1)},children:"Save as draft"}),Object(O.jsx)("button",{onClick:function(){var t=w.a.get("drafts")||[];t=[].concat(Object(m.a)(t.slice(0,e.draftId)),Object(m.a)(t.slice(e.draftId+1))),w.a.set("drafts",t),e.setDraftId(null),V.push("/")},disabled:null===e.draftId,children:"Delete this draft"})]})]})},R=(n(35),function(e){var t=e.post;return"blog"===t.tag?Object(O.jsxs)("div",{className:"postAuthor",children:[Object(O.jsxs)("h4",{children:["Author: ",t.author?t.author.username:"~Unknown Author~"]}),Object(O.jsxs)("p",{children:["Institute: ",t.institute]}),Object(O.jsxs)("p",{children:["Branch: ",t.branch]})]}):null}),T=function(e){return e.contents?e.contents.map((function(e,t){return"p"===e.type?Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:e.content})},t):"img"===e.type?Object(O.jsxs)("div",{className:"postImg",children:[Object(O.jsx)("img",{src:e.src,alt:e.description}),Object(O.jsx)("p",{children:Object(O.jsx)("i",{children:e.description})})]},t):"ul"===e.type?Object(O.jsx)("div",{children:Object(O.jsx)("ul",{children:e.contents.map((function(e,t){return Object(O.jsx)("li",{children:e},t)}))})},t):"h2"===e.type?Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:e.text})},t):"hr"===e.type?Object(O.jsx)("div",{children:Object(O.jsx)("hr",{})},t):null})):null},H=function(e){var t=Object(c.useState)({}),n=Object(j.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),a=Object(j.a)(i,2),l=a[0],u=a[1];return Object(c.useEffect)((function(){return b.a.get("https://ssci.herokuapp.com/content/show",{params:{id:e.id}}).then((function(t){r(t.data.posts[0]),e.setSimilarQuery({institute:t.data.posts[0].institute,branch:t.data.posts[0].branch}),e.setPost(t.data.posts[0])})).catch((function(e){var t=e.response;return u(t.data.errors)}))}),[e.id]),l.length?Object(O.jsx)("div",{className:"ShowPost",children:Object(O.jsx)(P,{errors:l})}):Object(O.jsxs)("div",{className:"ShowPost",children:[Object(O.jsxs)("div",{className:"postHead",children:[Object(O.jsx)("h2",{children:s.title}),Object(O.jsx)("p",{children:Date(s.timestamp)})]}),Object(O.jsx)("div",{className:"postContents",children:Object(O.jsx)(T,{contents:s.content})}),Object(O.jsx)(R,{post:s})]})},M=(n(80),"https://ssci.herokuapp.com"),_=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),a=i[0],l=i[1],u=Object(c.useState)({}),o=Object(j.a)(u,2),d=o[0],h=o[1],p=Object(c.useState)([]),x=Object(j.a)(p,2),f=x[0],m=x[1],v=Object(c.useState)(""),g=Object(j.a)(v,2),C=g[0],y=g[1],S=Object(c.useState)(""),k=Object(j.a)(S,2),w=k[0],I=k[1],N=Object(c.useState)(""),L=Object(j.a)(N,2),B=L[0],F=L[1],D=Object(c.useState)("not verified"),A=Object(j.a)(D,2),Q=A[0],q=A[1],R=Object(c.useState)({}),T=Object(j.a)(R,2),H=T[0],_=T[1],G=Object(c.useState)([]),V=Object(j.a)(G,2),J=V[0],z=V[1];Object(c.useEffect)((function(){return b.a.get(M+"/institute/show").then((function(e){m(e.data)}))}),[]);return Object(O.jsxs)("div",{className:"Signup",children:["email"in H?Object(O.jsxs)("div",{className:"userCreated",children:[Object(O.jsx)("p",{children:"User email verification pending. Please check your inbox (and spam) for the verification link."}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"createdUsername",children:"Username"}),Object(O.jsx)("p",{name:"createdUsername",children:H.username})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"createdEmail",children:"Email"}),Object(O.jsx)("p",{name:"createdEmail",children:H.email})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"createdPass",children:"Password"}),Object(O.jsx)("p",{name:"createdPass",children:H.password})]})]}):null,Object(O.jsxs)("div",{className:"SignupContainer",children:[J.length?Object(O.jsx)(P,{errors:J}):null,Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",value:n,onChange:function(e){return s(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"text",name:"username",value:a,onChange:function(e){l(e.target.value),q("not verified")}}),"verified"===Q?Object(O.jsx)("span",{children:Object(O.jsx)("i",{children:"Unique"})}):Object(O.jsx)("button",{onClick:function(){q("verifying"),b.a.post(M+"/auth/check_username",{username:a}).then((function(){q("verified"),z([])})).catch((function(e){var t=e.response;z(t.data.errors),q("not verified")}))},disabled:"verifying"===Q,children:"not verified"===Q?"Verify uniqueness":"Verifying"})]}),Object(O.jsx)(E,{institute:d,setInstitute:h,institutesList:f}),Object(O.jsx)(U,{branch:C,setBranch:y,branchesList:d.branches,disabled:0===Object.keys(d).length}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",name:"email",value:w,onChange:function(e){return I(e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password (min 8 chars)"}),Object(O.jsx)("input",{type:"password",name:"password",value:B,onChange:function(e){return F(e.target.value)}})]}),Object(O.jsx)("button",{onClick:function(){_({}),z([]),b.a.post(M+"/auth/signup",{name:n,username:a,institute:d.name,branch:C,email:w,password:B},{withCredentials:!0}).then((function(){_({username:a,email:w,password:B}),s(""),l(""),h({}),y(""),I(""),F(""),q("not verified")})).catch((function(e){var t=e.response;return z(t.data.errors)}))},disabled:B.length<8,children:"Register"})]})]})},G=function(e){var t=e.id,n=Object(c.useState)(!1),s=Object(j.a)(n,2),r=s[0],i=s[1],l=Object(c.useState)([]),u=Object(j.a)(l,2),o=u[0],d=u[1];return Object(c.useEffect)((function(){return b.a.post("https://ssci.herokuapp.com/auth/verify_email",{id:t}).then((function(){return i(!0)})).catch((function(e){var t=e.response;return d(t.data.errors)}))}),[t]),r?Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["Email ID verified! ",Object(O.jsx)(a.b,{to:"/authUser",children:"Login"})," to create your first post!"]})}):o.length?Object(O.jsx)(P,{errors:o}):Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"Verifying ..."})})},V=s.a.createContext(),J=(n(81),function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({}),i=Object(j.a)(r,2),a=i[0],l=i[1],d=Object(c.useState)([]),p=Object(j.a)(d,2),f=p[0],m=p[1],v=Object(c.useState)({}),g=Object(j.a)(v,2),C=g[0],y=g[1],S=Object(c.useState)(null),k=Object(j.a)(S,2),w=k[0],P=k[1],F=Object(h.g)(),E="https://ssci.herokuapp.com",U="/auth/check_user";Object(c.useEffect)((function(){var e=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(E+U,{withCredentials:!0});case 2:t=e.sent,s(null===t.data.currentUser?{}:t.data.currentUser);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[E,U]);var D=function(){return b.a.post(E+"/auth/signout",{},{withCredentials:!0}).then((function(){return s({})}))};return Object(O.jsx)(V.Provider,{value:n,children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{user:n,postId:f.id,postAuthor:f.author?f.author.id:"",setUser:function(){return"name"in n?D():F.push("/authUser")},setDraftId:P}),Object(O.jsxs)("div",{className:"App-contents",children:[Object(O.jsx)(I,{similarQuery:C,setQuery:l,setDraftId:P}),Object(O.jsx)("div",{className:"main-contents",children:Object(O.jsxs)(h.d,{children:[Object(O.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(L,{query:a,setPost:m})}}),Object(O.jsx)(h.b,{exact:!0,path:"/viewPost/:id",render:function(e){return Object(O.jsx)(H,{id:e.match.params.id,setSimilarQuery:y,setPost:m})}}),Object(O.jsx)(h.b,{exact:!0,path:"/userSignup",component:_}),Object(O.jsx)(h.b,{exact:!0,path:"/verify/:id",render:function(e){return Object(O.jsx)(G,{id:e.match.params.id})}}),n.username?null:Object(O.jsx)(B,{setUser:s}),Object(O.jsx)(h.b,{exact:!0,path:"/createPost",render:function(){return Object(O.jsx)(q,{user:n,setUser:s,draftId:w,setDraftId:P})}}),Object(O.jsx)(h.b,{exact:!0,path:"/editPost/:id",render:function(e){return Object(O.jsx)(q,{edit:!0,setUser:s,post:f,id:e.match.params.id,setDraftId:P})}}),Object(O.jsx)(h.a,{to:"/"})]})})]}),Object(O.jsx)(N,{})]})})}),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(a.a,{children:Object(O.jsx)(J,{})})}),document.getElementById("root")),z()}},[[82,1,2]]]);
//# sourceMappingURL=main.75cd2410.chunk.js.map