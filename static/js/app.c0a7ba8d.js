(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],c=0,p=[];c<o.length;c++)i=o[c],s[i]&&p.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={app:0},n=[];function i(e){return o.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"9d637610"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=s[e]=[t,a]});t.push(r[2]=a);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e),n=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");i.type=a,i.request=n,r[1](i)}s[e]=void 0}};var u=setTimeout(function(){n({type:"timeout",target:l})},12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"95da":function(e,t,r){"use strict";var a=r("aeb9"),s=r.n(a);s.a},9643:function(e,t,r){"use strict";var a=r("d229"),s=r.n(a);s.a},aeb9:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("14c6"),r("08c1"),r("4842"),r("d9fc");var a=r("a026"),s=r("bc3a"),n=r.n(s),i={},o=n.a.create(i);o.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),o.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=o,window.axios=o,Object.defineProperties(e.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["a"].use(Plugin);Plugin;var l=r("bb71");r("da64");a["a"].use(l["a"],{iconfont:"md"});var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:"",flat:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",{staticClass:"font-weight-light"},[e._v("AGIL")]),r("span",[e._v("EFFY")])]),r("v-spacer"),r("v-btn",{attrs:{flat:"",href:"https://github.com/agileffy/Agileffy",target:"_blank"}},[r("span",{staticClass:"mr-2"},[e._v("Contribute")])])],1),r("router-view")],1)},c=[],d={name:"App",data:function(){return{}}},p=d,f=r("2877"),m=r("6544"),v=r.n(m),h=r("7496"),g=r("8336"),b=r("9910"),w=r("71d9"),x=r("2a7f"),y=Object(f["a"])(p,u,c,!1,null,null,null),T=y.exports;v()(y,{VApp:h["a"],VBtn:g["a"],VSpacer:b["a"],VToolbar:w["a"],VToolbarTitle:x["a"]});var k=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"})},V=[],j=r("d225"),C=r("308d"),P=r("6bb5"),S=r("4e2b"),$=r("9ab4"),O=r("60a3"),R=function(e){function t(){return Object(j["a"])(this,t),Object(C["a"])(this,Object(P["a"])(t).apply(this,arguments))}return Object(S["a"])(t,e),t}(O["b"]);R=$["a"]([Object(O["a"])({components:{}})],R);var A=R,L=A,M=Object(f["a"])(L,_,V,!1,null,null,null),E=M.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"#4DBA87"}},[r("v-toolbar-title",[e._v("Login to Agileffy")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text",rules:[e.rules.required],"test-input-username":""},model:{value:e.userdata.username,callback:function(t){e.$set(e.userdata,"username",t)},expression:"userdata.username"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",rules:[e.rules.required],"test-input-password":""},model:{value:e.userdata.password,callback:function(t){e.$set(e.userdata,"password",t)},expression:"userdata.password"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{flat:"",small:"",color:"primary","test-btn-register":""},on:{click:e.jumpToRegister}},[e._v("Register")]),r("v-spacer"),r("v-btn",{attrs:{disabled:!e.valid,color:"primary","test-btn-submit":""},on:{click:e.login}},[e._v("Login")])],1),r("v-alert",{attrs:{value:e.errmsg,color:"error",icon:"warning",outline:""}},[e._v(e._s(e.errmsg))])],1)],1)],1)],1)],1)},D=[],B={data:function(){return{drawer:null,valid:!1,userdata:{username:"",password:""},rules:{required:function(e){return!!e||"This is required!"}},errmsg:""}},props:{source:String},methods:{login:function(){var e=this;axios.post("/api/login",this.userdata).then(function(t){"OK"===t.data?e.$router.push("/write"):e.errmsg=t.data}).catch(function(t){e.errmsg="ERROR:"+t.response.status+" "+t.response.statusText})},jumpToRegister:function(){this.$router.push("/register")}}},H=B,I=r("0798"),F=r("b0af"),z=r("99d9"),K=r("a523"),W=r("549c"),N=r("0e8f"),Z=r("4bd4"),J=r("a722"),U=r("2677"),Y=Object(f["a"])(H,q,D,!1,null,null,null),G=Y.exports;v()(Y,{VAlert:I["a"],VBtn:g["a"],VCard:F["a"],VCardActions:z["a"],VCardText:z["b"],VContainer:K["a"],VContent:W["a"],VFlex:N["a"],VForm:Z["a"],VLayout:J["a"],VSpacer:b["a"],VTextField:U["a"],VToolbar:w["a"],VToolbarTitle:x["a"]});var Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{fixed:"",right:"",clipped:"",app:""},model:{value:e.drawerRight,callback:function(t){e.drawerRight=t},expression:"drawerRight"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.right=!e.right}}},[r("v-list-tile-action",[r("v-icon",[e._v("exit_to_app")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Open Temporary Drawer")])],1)],1),r("v-subheader",[e._v("FIRST LIST")]),r("draggable",{staticStyle:{"min-height":"10px"},attrs:{options:{group:"people"}},model:{value:e.items,callback:function(t){e.items=t},expression:"items"}},[e._l(e.items,function(t){return[r("v-list-tile",{key:t.id,attrs:{avatar:""}},[r("v-list-tile-avatar",[r("img",{attrs:{src:t.avatar}})]),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{innerHTML:e._s(t.title)}}),r("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.subtitle)}})],1)],1)]})],2)],1)],1),r("v-toolbar",{attrs:{color:"#4DBA87",dark:"",fixed:"",app:"","clipped-right":"",flat:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("Agileffy")]),r("v-spacer"),r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawerRight=!e.drawerRight}}})],1),r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.left=!e.left}}},[r("v-list-tile-action",[r("v-icon",[e._v("exit_to_app")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Open Temporary Drawer")])],1)],1),r("v-subheader",[e._v("SECOND LIST")]),r("draggable",{staticStyle:{"min-height":"10px"},attrs:{options:{group:"people"}},model:{value:e.items2,callback:function(t){e.items2=t},expression:"items2"}},[e._l(e.items2,function(t){return[r("v-list-tile",{key:t.id,attrs:{avatar:""}},[r("v-list-tile-avatar",[r("img",{attrs:{src:t.avatar}})]),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{innerHTML:e._s(t.title)}}),r("v-list-tile-sub-title",{domProps:{innerHTML:e._s(t.subtitle)}})],1)],1)]})],2)],1)],1),r("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e.left,callback:function(t){e.left=t},expression:"left"}}),r("v-navigation-drawer",{attrs:{right:"",temporary:"",fixed:""},model:{value:e.right,callback:function(t){e.right=t},expression:"right"}}),r("v-content",{attrs:{id:"Content"}},[r("v-container",{ref:"msgContainer",attrs:{id:"MessagePile","pa-0":"","pb-0":""}},[r("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("draggable",{attrs:{group:"MessageList"},model:{value:e.messages,callback:function(t){e.messages=t},expression:"messages"}},[e._l(e.messages,function(t){return[r("v-card",{key:t.updateTime,attrs:{tile:""}},[r("div",[r("MessageBlock",{attrs:{msg:t},on:{"edit-block":e.editBlock}})],1)])]})],2)],1)],1)],1),r("v-divider"),r("v-container",{ref:"typeWriterContainer",attrs:{id:"Typer","ma-0":"","pa-0":""}},[r("div",{ref:"userInput",attrs:{"ma-0":"","pa-0":"",contenteditable:"true",id:"Input"},on:{input:e.input_trigger,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.spark(t):null}}},[r("p",[e._v("Type some thing please")])])])],1)],1)},X=[],ee=r("310e"),te=r.n(ee),re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message",on:{click:e.edit}},[r("div",{ref:"msgBlock"}),r("div",{staticClass:"status"},[e._v("last edit: "+e._s(e.timeToRender))])])},ae=[],se=r("0e54"),ne=r.n(se),ie=r("b0b4"),oe=function(){function e(t,r,a){if(Object(j["a"])(this,e),this.content=t,r)this.timestamp=r;else{var s=new Date;this.timestamp=s.getTime()}if(a)this.updateTime=a;else{var n=new Date;this.updateTime=n.getTime()}}return Object(ie["a"])(e,[{key:"toDoc",value:function(){return{_id:String(this.timestamp),content:this.content,timestamp:this.timestamp,updateTime:this.updateTime}}},{key:"updateContent",value:function(e){this.content=e;var t=new Date;this.updateTime=t.getTime()}}]),e}(),le=oe;function ue(e){var t=new Date,r=t.getTime()-e;t.setTime(e);var a=60*(new Date).getHours()*60*1e3+60*(new Date).getMinutes()*1e3+1e3*(new Date).getSeconds(),s=a+864e5,n=a+432e6;if(r>n)return t.toLocaleString();if(r>s){var i=new Array("星期一","星期二","星期三","星期四","星期五","星期六","星期日");return i[t.getDay()]+" "+t.toLocaleTimeString()}return r>a?"昨天 "+t.toLocaleTimeString():t.toLocaleTimeString()}var ce={props:{msg:le},data:function(){return{timeToRender:""}},mounted:function(){this.render()},methods:{render:function(){var e=ne()(this.msg.content);this.$refs.msgBlock.innerHTML=e,this.timeToRender=ue(this.msg.updateTime)},edit:function(){this.$emit("edit-block",this.msg)}}},de=ce,pe=(r("95da"),Object(f["a"])(de,re,ae,!1,null,null,null)),fe=pe.exports,me=(r("ac4d"),r("8a81"),r("ac6a"),r("16b2")),ve=function(){function e(){Object(j["a"])(this,e),this.db=new me["a"]("local")}return Object(ie["a"])(e,[{key:"newMsg",value:function(e){var t=new le(e),r=t.toDoc();return this.db.put(r),t}},{key:"getAllMessages",value:function(){return this.db.allDocs({include_docs:!0}).then(function(e){var t=[],r=!0,a=!1,s=void 0;try{for(var n,i=e.rows[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var o=n.value,l=o.doc;t.push(new le(l.content,l.timestamp,l.updateTime))}}catch(u){a=!0,s=u}finally{try{r||null==i.return||i.return()}finally{if(a)throw s}}return new Promise(function(e){t.length>0&&e(t)})})}},{key:"updateMessage",value:function(e){var t=this;this.db.get(String(e.timestamp)).then(function(r){return t.db.put({_id:String(e.timestamp),_rev:r._rev,content:e.content,updateTime:e.updateTime})})}}]),e}(),he=new ve,ge=he,be=(r("1c46"),{components:{MessageBlock:fe,draggable:te.a},props:{source:String},data:function(){return{drawer:!1,drawerRight:!1,right:null,left:null,messages:[],input_text:"",msgToEdit:null,items:[{id:1,avatar:"https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg",title:"Brunch this life?",subtitle:"Subtitle 1"},{id:2,avatar:"https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg",title:"Winter Lunch",subtitle:"Subtitle 2"},{id:3,avatar:"https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg",title:"Oui oui",subtitle:"Subtitle 3"}],items2:[{id:4,avatar:"https://s3.amazonaws.com/vuetify-docs/images/lists/4.jpg",title:"Brunch this weekend?",subtitle:"Subtitle 4"},{id:5,avatar:"https://s3.amazonaws.com/vuetify-docs/images/lists/5.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"Subtitle 5"}]}},created:function(){var e=this;ge.getAllMessages().then(function(t){e.messages=t})},methods:{input_trigger:function(){this.resetHeight()},spark:function(){null==this.msgToEdit?this.messages.push(ge.newMsg(this.$refs.userInput.innerText)):(this.msgToEdit.updateContent(this.$refs.userInput.innerText),ge.updateMessage(this.msgToEdit),this.msgToEdit=null),setTimeout(this.scrollView,1),this.clearTypeWriter(),this.resetHeight()},resetHeight:function(){var e=this.$refs.msgContainer.parentElement.offsetHeight-this.$refs.typeWriterContainer.offsetHeight;this.$refs.msgContainer.style.height=e+"px"},scrollView:function(){this.$refs.msgContainer.scrollTop=this.$refs.msgContainer.scrollHeight},clearTypeWriter:function(){this.$refs.userInput.innerText="And more?"},editBlock:function(e){this.$refs.userInput.innerText=e.content,this.resetHeight(),this.msgToEdit=e}},mounted:function(){this.resetHeight(),setTimeout(this.scrollView,10)}}),we=be,xe=(r("9643"),r("ce7e")),ye=r("132d"),Te=r("8860"),ke=r("ba95"),_e=r("40fe"),Ve=r("c954"),je=r("5d23"),Ce=r("f774"),Pe=r("e0c7"),Se=r("706c"),$e=Object(f["a"])(we,Q,X,!1,null,null,null),Oe=$e.exports;v()($e,{VCard:F["a"],VContainer:K["a"],VContent:W["a"],VDivider:xe["a"],VFlex:N["a"],VIcon:ye["a"],VLayout:J["a"],VList:Te["a"],VListTile:ke["a"],VListTileAction:_e["a"],VListTileAvatar:Ve["a"],VListTileContent:je["a"],VListTileSubTitle:je["b"],VListTileTitle:je["c"],VNavigationDrawer:Ce["a"],VSpacer:b["a"],VSubheader:Pe["a"],VToolbar:w["a"],VToolbarSideIcon:Se["a"],VToolbarTitle:x["a"]});var Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"#4DBA87"}},[r("v-toolbar-title",[e._v("Create a new account")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"test-form-register":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.min,e.rules.max,e.rules.username],"prepend-icon":"person",name:"username",label:"Username",type:"text",counter:"",required:"","test-input-username":""},model:{value:e.userdata.username,callback:function(t){e.$set(e.userdata,"username",t)},expression:"userdata.username"}}),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.password],error:e.passwordRepeatRule(),"append-icon":e.showPassword?"visibility":"visibility_off","prepend-icon":"lock",name:"password",label:"Password",id:"password",type:e.showPassword?"text":"password",required:"","test-input-password":""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.userdata.password,callback:function(t){e.$set(e.userdata,"password",t)},expression:"userdata.password"}}),r("v-text-field",{attrs:{rules:[e.rules.required],error:e.passwordRepeatRule(),"error-messages":e.passwordRepeatMsg(),"append-icon":e.showPassword?"visibility":"visibility_off","prepend-icon":"lock",name:"password2",label:"Password Again",id:"password2",type:e.showPassword?"text":"password",required:"","test-input-passwordrepeat":""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.userdata.passwordRepeat,callback:function(t){e.$set(e.userdata,"passwordRepeat",t)},expression:"userdata.passwordRepeat"}}),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],"prepend-icon":"email",name:"email",label:"Email",type:"text",required:"","test-input-email":""},model:{value:e.userdata.email,callback:function(t){e.$set(e.userdata,"email",t)},expression:"userdata.email"}}),r("v-checkbox",{attrs:{rules:[e.rules.required,e.rules.checkbox],label:"Do you agree?",required:"","test-checkbox-termagree":""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"error","test-btn-cancel":""},on:{click:e.cancel}},[e._v("Cancel")]),r("v-btn",{attrs:{disabled:!e.valid,color:"primary","test-btn-submit":""},on:{click:e.register}},[e._v("Register")])],1),r("v-alert",{attrs:{value:e.errmsg,color:"error",icon:"warning",outline:""}},[e._v(e._s(e.errmsg))])],1)],1)],1)],1)],1)},Ae=[],Le={data:function(){return{valid:!1,userdata:{username:"",password:"",passwordRepeat:"",email:""},checkbox:!1,showPassword:!1,rules:{required:function(e){return!!e||"This is required!"},min:function(e){return(e||"").length>=6||"Min 6 characters required!"},max:function(e){return(e||"").length<=30||"Max 30 characters required!"},username:function(e){var t=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._-]){5,29}$/;return t.test(e)||"Username should start with a letter, following with letters,digits and special characters(._-)."},password:function(e){var t=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,30}$/;return t.test(e)||"Password should contains at least two of these four types of characters: lowercase letters,                         uppercase letters, digits, special characters(.,_!@#$%^&*`~()-+=)                         and should have a length between 8 and 30."},email:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."},checkbox:function(e){return!!e||"You must agree to continue!"}},errmsg:""}},methods:{passwordRepeatRule:function(){return this.userdata.password!==this.userdata.passwordRepeat},passwordRepeatMsg:function(){if(this.userdata.password!==this.userdata.passwordRepeat)return"Password does not match!"},register:function(){var e=this;this.$refs.form.validate()&&axios.post("/api/register",{username:this.userdata.username,password:this.userdata.password,email:this.userdata.email}).then(function(t){"OK"===t.data?e.$router.push("/write"):e.errmsg=t.data}).catch(function(t){e.errmsg="ERROR:"+t.response.status+" "+t.response.statusText})},cancel:function(){this.$router.push("/")}}},Me=Le,Ee=r("ac7c"),qe=Object(f["a"])(Me,Re,Ae,!1,null,null,null),De=qe.exports;v()(qe,{VAlert:I["a"],VBtn:g["a"],VCard:F["a"],VCardActions:z["a"],VCardText:z["b"],VCheckbox:Ee["a"],VContainer:K["a"],VContent:W["a"],VFlex:N["a"],VForm:Z["a"],VLayout:J["a"],VSpacer:b["a"],VTextField:U["a"],VToolbar:w["a"],VToolbarTitle:x["a"]}),a["a"].use(k["a"]);var Be=new k["a"]({routes:[{path:"/home",name:"home",component:E},{path:"/",name:"login",component:G},{path:"/register",name:"register",component:De},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/write",name:"write",component:Oe}]}),He=r("2f62");a["a"].use(He["a"]);var Ie=new He["a"].Store({state:{},mutations:{},actions:{}}),Fe=r("9483");Object(Fe["a"])("".concat("/","sw.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:Be,store:Ie,render:function(e){return e(T)}}).$mount("#app")},d229:function(e,t,r){}});
//# sourceMappingURL=app.c0a7ba8d.js.map