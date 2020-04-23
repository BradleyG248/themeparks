(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],m=0,u=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"0b43":function(t,e,s){},1886:function(t,e,s){"use strict";var a=s("b8f2"),o=s.n(a);o.a},"1a8a":function(t,e,s){"use strict";var a=s("b5e8"),o=s.n(a);o.a},"1b5c":function(t,e,s){},"2c2a":function(t,e,s){"use strict";var a=s("62bc"),o=s.n(a);o.a},"31d9":function(t,e,s){"use strict";var a=s("f184"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-arial",attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[s("router-link",{staticClass:"navbar-brand pl-3 pr-3",attrs:{to:{name:"Home"}}},[t._v("Lagoon")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}}),s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Posts")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item pl-3",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e(),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item pl-3",class:{active:"Followers"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Followers"}}},[t._v("Followers")])],1):t._e(),s("li",{staticClass:"nav-item pl-3"},[s("add-post")],1)]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger mr-4",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success mr-4",on:{click:t.login}},[t._v("Login")])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler border-0",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],c=s("bc3a"),l=s.n(c),d=s("335d"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#post-creator"}},[t._v("create post")]),s("div",{staticClass:"modal",attrs:{tabindex:"10",role:"dialog",id:"post-creator"},on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("form",{attrs:{action:""}},[s("div",{staticClass:"modal-content form-group rounded input-group-default"},[s("div",{staticClass:"modal-header d-flex flex-column"},[s("h2",[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.title,expression:"newPost.title"}],staticClass:"modal-title rounded form-control",attrs:{placeholder:"Hyped?","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.newPost.title},on:{input:function(e){e.target.composing||t.$set(t.newPost,"title",e.target.value)}}})]),s("div",{staticClass:"modal-body"},[s("h3",[t._v("Description")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.description,expression:"newPost.description"}],staticClass:"rounded form-control",attrs:{placeholder:"Elaborate..."},domProps:{value:t.newPost.description},on:{input:function(e){e.target.composing||t.$set(t.newPost,"description",e.target.value)}}}),s("h3",[t._v("Image")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPost.imgUrl,expression:"newPost.imgUrl"}],staticClass:"rounded form-control",attrs:{placeholder:"Hands in the air like you just don't care"},domProps:{value:t.newPost.imgUrl},on:{input:function(e){e.target.composing||t.$set(t.newPost,"imgUrl",e.target.value)}}})]),t._m(0)])])])])])},u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit","data-toggle":"modal","data-target":"#post-creator"}},[t._v("Submit")]),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],p={name:"AddPost",data(){return{newPost:{}}},computed:{},methods:{createPost(){this.$store.dispatch("createPost",this.newPost)}},components:{}},f=p,v=(s("9683"),s("2877")),h=Object(v["a"])(f,m,u,!1,null,"ef668b04",null),b=h.exports,g={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){await this.$auth.logout(),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"})}},components:{addPost:b}},C=g,w=(s("1a8a"),Object(v["a"])(C,r,i,!1,null,null,null)),_=w.exports,P={name:"App",async beforeCreate(){await Object(d["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:_}},y=P,$=(s("034f"),Object(v["a"])(y,o,n,!1,null,null,null)),x=$.exports,k=s("8c4f"),E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home setting container-fluid",attrs:{id:"lagoonUrl"}},[s("h1",{staticClass:"text-center"},[t._v("Lagoon Park")]),s("div",{staticClass:"search-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"  search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),s("div",{staticClass:"row"},t._l(t.filteredList,(function(t){return s("post",{key:t.id,attrs:{postData:t}})})),1)])},j=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component"},[s("div",{staticClass:"row pl-3 pr-3"},t._l(t.posts,(function(t){return s("post",{key:t.id,attrs:{postData:t}})})),1)])},I=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.postData.closed,expression:"!postData.closed"}],staticClass:"component col-6 col-md-3 p-2"},[s("div",[t.postData.closed?t._e():s("div",{staticClass:"card"},[s("router-link",{attrs:{to:{name:"PostDetails",params:{postId:this.postData._id}}}},[s("img",{staticClass:"card-img-top img-fluid",attrs:{src:t.postData.imgUrl,alt:"Card image cap"}})]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.postData.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(t.postData.description))]),s("i",{staticClass:"card-text"},[t._v(t._s(t.postData.creatorEmail))])])],1)])])},B=[],U={name:"Post",props:["postData"],data(){return{}},computed:{},methods:{},components:{}},L=U,F=(s("8934"),Object(v["a"])(L,O,B,!1,null,"43542cf2",null)),T=F.exports,H={name:"Posts",data(){return{}},computed:{posts(){let t=this.$store.state.posts;return t}},methods:{},components:{Post:T},mounted(){}},N=H,A=Object(v["a"])(N,D,I,!1,null,"04096da8",null),S=A.exports,z={name:"Home",mounted(){this.$store.dispatch("getPosts")},data(){return{search:""}},components:{Posts:S,Post:T},computed:{filteredList(){return this.postList.filter(t=>t.title.toLowerCase().includes(this.search.toLowerCase()))},postList(){return this.$store.state.posts}}},M=z,R=(s("2c2a"),Object(v["a"])(M,E,j,!1,null,"0e3f3246",null)),G=R.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about text-center"},[s("h1",[t._v("Profile "+t._s(t.profile.name))]),s("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),s("p",[t._v(t._s(t.profile.email))])])},J=[],V={name:"Profile",mounted(){this.$store.dispatch("getFollowers",this.$auth.userInfo.email)},computed:{profile(){return this.$store.state.profile},followers(){return this.$store.state.followers}}},X=V,Y=(s("81cf"),Object(v["a"])(X,W,J,!1,null,"24840c4b",null)),q=Y.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"row"},[t._m(0),t._l(t.followers,(function(e){return s("div",{key:e.id,staticClass:"col-12 d-flex flex-row align-items-center justify-content-center"},[s("img",{staticClass:"img-fluid rounded-pill follower-img",attrs:{src:e.follower.picture,alt:"..."}}),s("p",[t._v(t._s(e.follower.name))])])}))],2)]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"row"},[t._m(1),t._l(t.creators,(function(e){return s("div",{key:e.id,staticClass:"col-12 d-flex flex-row align-items-center justify-content-center"},[s("img",{staticClass:"img-fluid rounded-pill follower-img",attrs:{src:e.creator.picture,alt:"..."}}),s("p",[t._v(t._s(e.creator.name))])])}))],2)])])])},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 d-flex justify-content-center"},[s("h3",[t._v("Followers")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 d-flex justify-content-center"},[s("h3",[t._v("Creators")])])}],Z={name:"followers",mounted(){this.$store.dispatch("getCreators"),this.$store.dispatch("getFollowers")},data(){return{}},computed:{followers(){return this.$store.state.followers},creators(){return this.$store.state.creators}},methods:{},components:{}},tt=Z,et=(s("96d2"),Object(v["a"])(tt,K,Q,!1,null,"485cd063",null)),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"psdeets"}},[s("div",{staticClass:"post-details text-center pt-3"},[t.details.closed?s("h1",[t._v("This post has been deleted!")]):t._e(),t.details.closed?t._e():s("div",[s("h1",[t._v(t._s(t.details.title))]),s("p",[t._v(t._s(t.details.description))]),s("img",{staticClass:"pic-size img-fluid",attrs:{height:"400",src:t.details.imgUrl,alt:""}})]),t.$auth.userInfo.email==t.details.creatorEmail?s("edit-post",{attrs:{postData:t.details}}):t._e(),s("div",{staticClass:"buttons-details p-1"},[s("button",{staticClass:"btn btn-success m-1",on:{click:function(e){return t.vote(1)}}},[t._v("+")]),s("button",{staticClass:"btn btn-info m-1",on:{click:function(e){return t.vote(-1)}}},[t._v("-")]),t.$auth.userInfo.email==t.details.creatorEmail?s("button",{staticClass:"btn btn-danger m-1",on:{click:this.delete}},[t._v("Delete!")]):t._e()]),s("div",{staticClass:"d-flex flex-column align-items-start justify-content-center ml-2"},[s("h4",[t._v("Creator: "+t._s(t.details.creator.name))]),s("img",{staticClass:"img-fluid",attrs:{src:t.details.creator.picture,alt:""}}),t.$auth.userInfo.email!==t.details.creatorEmail&&t.creators?s("button",{on:{click:function(e){return t.follow()}}},[s("i",{staticClass:"fas fa-camera"})]):t._e()]),s("h4",[t._v(t._s(t.votes)+" votes")]),s("create-comment",{staticClass:"m-1 mb-4"}),s("comments")],1)])},ot=[],nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},t._l(t.comments,(function(t){return s("comment",{key:t.id,attrs:{commentData:t}})})),1),s("div",{staticClass:"row pt-3 mt-3"})])])},rt=[],it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row pb-1"},[s("div",{staticClass:"comment-body"},[s("h6",[t._v(" "+t._s(t.comment.description)+" -- "+t._s(t.comment.creatorEmail)+" -- Votes: "+t._s(t.votes)+" "),s("button",{staticClass:"btn btn-success mr-2 ml-3",on:{click:function(e){return t.vote(1)}}},[t._v("+")]),s("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.vote(-1)}}},[t._v("-")]),t.$auth.userInfo.email==t.comment.creatorEmail?s("button",{staticClass:"btn btn-danger ml-3",on:{click:function(e){return t.destroy()}}},[t._v("Delete")]):t._e()])])])])])},ct=[],lt={name:"Comment",props:["commentData"],mounted(){},data(){return{}},computed:{comment(){let t=this.commentData;return t},votes(){let t=0;return this.comment.votes.forEach(e=>{t+=e.value}),t||0}},methods:{async destroy(){await this.$store.dispatch("deleteCommentById",this.comment.id),await this.$store.dispatch("getCommentsByPost",this.comment.postId)},vote(t){let e={vote:t,id:this.commentData.id};this.$store.dispatch("voteComment",e)}},components:{}},dt=lt,mt=(s("5d49"),Object(v["a"])(dt,it,ct,!1,null,"67e9ea52",null)),ut=mt.exports,pt={name:"Comments",data(){return{}},computed:{comments(){let t=this.$store.state.comments;return t}},methods:{},components:{Comment:ut},mounted(){}},ft=pt,vt=Object(v["a"])(ft,nt,rt,!1,null,"737f77e3",null),ht=vt.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"component"},[t.comtoggle?t._e():s("button",{staticClass:"btn btn-info",on:{click:function(e){t.comtoggle=!0}}},[t._v("Create Comment")]),t.comtoggle?s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.description,expression:"newComment.description"}],attrs:{type:"text",placeholder:"Talk is cheap"},domProps:{value:t.newComment.description},on:{input:function(e){e.target.composing||t.$set(t.newComment,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-success",on:{click:t.createComment}},[t._v("Post")]),s("button",{staticClass:"btn btn-warning",on:{click:function(e){t.comtoggle=!1}}},[t._v("Cancel")])]):t._e()])},gt=[],Ct={name:"CreateComment",data(){return{newComment:{postId:this.$route.params.postId,description:""},comtoggle:!1}},computed:{},methods:{async createComment(){await this.$store.dispatch("createComment",this.newComment),this.comtoggle=!1,this.newComment.description=""}},components:{}},wt=Ct,_t=(s("31d9"),Object(v["a"])(wt,bt,gt,!1,null,"cce09710",null)),Pt=_t.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row d-flex flex-column justify-content-center align-items-center"},[s("button",{staticClass:"btn btn-warning",on:{click:function(e){t.edit=!t.edit}}},[t._v("Edit")]),t.edit?s("div",{staticClass:"col-12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedPost.title,expression:"editedPost.title"}],staticClass:"form-control",attrs:{placeholder:"Title",type:"text"},domProps:{value:t.editedPost.title},on:{input:function(e){e.target.composing||t.$set(t.editedPost,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedPost.description,expression:"editedPost.description"}],staticClass:"form-control",attrs:{placeholder:"Description",type:"text"},domProps:{value:t.editedPost.description},on:{input:function(e){e.target.composing||t.$set(t.editedPost,"description",e.target.value)}}}),s("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.editPost()}}},[t._v("Submit")])]):t._e()])},$t=[],xt={name:"Post",props:["postData"],data(){return{edit:!1,editedPost:{title:this.postData.title,description:this.postData.description,id:this.postData.id}}},computed:{},methods:{editPost(){this.edit=!1,this.$store.dispatch("editPost",this.editedPost)}},components:{}},kt=xt,Et=Object(v["a"])(kt,yt,$t,!1,null,null,null),jt=Et.exports,Dt={name:"PostDetails",data(){return{postData:{},commentData:{},edit:!1}},methods:{delete(){this.$store.dispatch("deletePostById",this.$route.params.postId)},vote(t){let e={id:this.$route.params.postId,vote:t};this.$store.dispatch("voteById",e)},follow(){let t={creatorEmail:this.details.creatorEmail,followerEmail:this.$auth.userInfo.email};this.$store.dispatch("followUser",t)}},components:{Post:T,Comments:ht,CreateComment:Pt,EditPost:jt},mounted(){this.$store.dispatch("getPostById",this.$route.params.postId);this.$store.dispatch("getCommentsByPost",this.$route.params.postId),this.$store.dispatch("getCreators")},computed:{details(){return this.$store.state.activePost},votes(){let t=0;return this.details.votes.forEach(e=>{t+=e.value}),t||0},creators(){let t=this.$store.state.creators;return t=t.filter(t=>t.followerEmail!=this.$auth.userInfo.email),t.length<1}}},It=Dt,Ot=(s("1886"),Object(v["a"])(It,at,ot,!1,null,null,null)),Bt=Ot.exports;a["a"].use(k["a"]);const Ut=[{path:"/",name:"Home",component:G},{path:"/profile",name:"Profile",component:q,beforeEnter:d["b"]},{path:"/post/:postId",name:"PostDetails",component:Bt,beforeEnter:d["b"]},{path:"/followers",name:"Followers",component:st,beforeEnter:d["b"]}],Lt=new k["a"]({routes:Ut});var Ft=Lt,Tt=s("2f62");a["a"].use(Tt["a"]);let Ht=location.host.includes("localhost")?"http://localhost:3000/":"/",Nt=l.a.create({baseURL:Ht+"api",timeout:3e3,withCredentials:!0}),At=l.a.create({baseURL:Ht+"api/posts",timeout:3e3,withCredentials:!0}),St=l.a.create({baseURL:Ht+"api/comments",timeout:3e3,withCredentials:!0});var zt=new Tt["a"].Store({state:{profile:{},posts:[],comments:[],followers:[],creators:[],activePost:{}},mutations:{setProfile(t,e){t.profile=e},addPost(t,e){t.posts.push(e)},addComment(t,e){t.comments.push(e)},editComment(t,e){let s=t.comments.findIndex(t=>t.id==e.id);a["a"].set(t.comments,s,e)},setPosts(t,e){t.posts=e},editPost(t,e){t.activePost=e},setComments(t,e){t.comments=e},setActivePost(t,e){t.activePost=e},setCreators(t,e){t.creators=e},setFollowers(t,e){t.followers=e}},actions:{setBearer({},t){Nt.defaults.headers.authorization=t,At.defaults.headers.authorization=t,St.defaults.headers.authorization=t},resetBearer(){Nt.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await Nt.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async createPost({commit:t},e){try{let s=await At.post("",e);t("addPost",s.data)}catch(s){console.error(s)}},async createComment({commit:t},e){try{let s=await St.post("",e);t("addComment",s.data)}catch(s){console.error(s)}},async editPost({commit:t},e){try{let s=await At.put(e.id,e);t("editPost",s.data)}catch(s){console.error(s)}},async getPostById({commit:t},e){try{let s=await At.get(e);t("setActivePost",s.data)}catch(s){console.error(s)}},async deletePostById({commit:t},e){let s=await At.delete(e);return t("setActivePost",null),Ft.push({name:"Home"}),s},async deleteCommentById({commit:t},e){let s=await St.delete(e);return s},async getPosts({commit:t}){try{let e=await At.get("");t("setPosts",e.data)}catch(e){console.error(e)}},async voteById({commit:t},e){let s=await At.put("/"+e.id+"/vote",e);t("editPost",s.data)},async voteComment({commit:t},e){let s=await St.put("/"+e.id+"/vote",e);t("editComment",s.data)},async getCommentsByPost({commit:t},e){try{let s=await At.get(e+"/comments");t("setComments",s.data)}catch(s){console.error(s)}},async followUser({commit:t},e){try{await Nt.post("/followers",e)}catch(s){console.error(s)}},async getCreators({commit:t}){try{let e=await Nt.get("profile/creators");t("setCreators",e.data)}catch(e){console.error(e)}},async getFollowers({commit:t}){try{let e=await Nt.get("profile/followers");t("setFollowers",e.data)}catch(e){console.error(e)}}}});const Mt="jnfu.auth0.com",Rt="jnfu-server.com",Gt="gWcHY8x41Gkzwbo8T8PoFgnauxsWGXlm";a["a"].use(d["a"],{domain:Mt,clientId:Gt,audience:Rt,onRedirectCallback:t=>{Ft.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:Ft,store:zt,render:function(t){return t(x)}}).$mount("#app")},"5ac7":function(t,e,s){},"5d49":function(t,e,s){"use strict";var a=s("1b5c"),o=s.n(a);o.a},"62bc":function(t,e,s){},"6a14":function(t,e,s){},"81cf":function(t,e,s){"use strict";var a=s("f060"),o=s.n(a);o.a},"85ec":function(t,e,s){},8934:function(t,e,s){"use strict";var a=s("0b43"),o=s.n(a);o.a},9683:function(t,e,s){"use strict";var a=s("6a14"),o=s.n(a);o.a},"96d2":function(t,e,s){"use strict";var a=s("5ac7"),o=s.n(a);o.a},b5e8:function(t,e,s){},b8f2:function(t,e,s){},f060:function(t,e,s){},f184:function(t,e,s){}});