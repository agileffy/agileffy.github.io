(function(e){function t(t){for(var a,n,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)n=o[u],i[n]&&d.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var o=r[n];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={app:0},i={app:0},s=[];function o(e){return l.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"f56e3676","chunk-93e5c296":"7d366910"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={"chunk-93e5c296":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise(function(t,r){for(var a="static/css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-93e5c296":"7b943984"}[e]+".css",i=l.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],f.parentNode.removeChild(f),r(s)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){n[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,r){a=i[e]=[t,r]});t.push(a[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e),c=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=i[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");s.type=a,s.request=n,r[1](s)}i[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"3acd":function(e,t,r){"use strict";r("ac4d"),r("8a81"),r("ac6a");var a=r("d225"),n=r("b0b4"),i=r("16b2"),s=r("4f64"),o=function(){function e(){Object(a["a"])(this,e),this.db=new i["a"]("local")}return Object(n["a"])(e,[{key:"newMsg",value:function(e){var t=new s["a"](e),r=t.toDoc();return this.db.put(r),t}},{key:"getAllMessages",value:function(){return this.db.allDocs({include_docs:!0}).then(function(e){var t=[],r=!0,a=!1,n=void 0;try{for(var i,o=e.rows[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,c=l.doc;t.push(new s["a"](c.content,c.timestamp,c.updateTime))}}catch(u){a=!0,n=u}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}return new Promise(function(e){t.length>0&&e(t)})})}},{key:"updateMessage",value:function(e){var t=this;this.db.get(String(e.timestamp)).then(function(r){return t.db.put({_id:String(e.timestamp),_rev:r._rev,content:e.content,updateTime:e.updateTime})})}}]),e}(),l=new o;t["a"]=l},4:function(e,t){},"4f64":function(e,t,r){"use strict";var a=r("d225"),n=r("b0b4"),i=function(){function e(t,r,n){if(Object(a["a"])(this,e),this.content=t,r)this.timestamp=r;else{var i=new Date;this.timestamp=i.getTime()}if(n)this.updateTime=n;else{var s=new Date;this.updateTime=s.getTime()}}return Object(n["a"])(e,[{key:"toDoc",value:function(){return{_id:String(this.timestamp),content:this.content,timestamp:this.timestamp,updateTime:this.updateTime}}},{key:"updateContent",value:function(e){this.content=e;var t=new Date;this.updateTime=t.getTime()}}]),e}();t["a"]=i},"95da":function(e,t,r){"use strict";var a=r("aeb9"),n=r.n(a);n.a},9643:function(e,t,r){"use strict";var a=r("d229"),n=r.n(a);n.a},"9b19":function(e,t,r){e.exports=r.p+"static/img/logo.63a7d78d.svg"},aeb9:function(e,t,r){},c33b:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message",on:{click:e.edit}},[r("div",{ref:"msgBlock"}),r("div",{staticClass:"status"},[e._v("last edit: "+e._s(e.timeToRender))])])},n=[],i=r("0e54"),s=r.n(i),o=r("4f64");function l(e){var t=new Date,r=t.getTime()-e;t.setTime(e);var a=60*(new Date).getHours()*60*1e3+60*(new Date).getMinutes()*1e3+1e3*(new Date).getSeconds(),n=a+864e5,i=a+432e6;if(r>i)return t.toLocaleString();if(r>n){var s=new Array("星期一","星期二","星期三","星期四","星期五","星期六","星期日");return s[t.getDay()]+" "+t.toLocaleTimeString()}return r>a?"昨天 "+t.toLocaleTimeString():t.toLocaleTimeString()}var c={props:{msg:o["a"]},data:function(){return{timeToRender:""}},mounted:function(){this.render()},methods:{render:function(){var e=s()(this.msg.content);this.$refs.msgBlock.innerHTML=e,this.timeToRender=l(this.msg.updateTime)},edit:function(){this.$emit("edit-block",this.msg)}}},u=c,d=(r("95da"),r("2877")),f=Object(d["a"])(u,a,n,!1,null,null,null);t["a"]=f.exports},cd49:function(e,t,r){"use strict";r.r(t);r("14c6"),r("08c1"),r("4842"),r("d9fc");var a=r("a026"),n=r("bb71");r("da64");a["a"].use(n["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:"",flat:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",{staticClass:"font-weight-light"},[e._v("AGIL")]),r("span",[e._v("EFFY")])]),r("v-spacer"),r("v-btn",{attrs:{flat:"",href:"https://github.com/agileffy/Agileffy",target:"_blank"}},[r("span",{staticClass:"mr-2"},[e._v("Contribute")])])],1),r("router-view")],1)},s=[],o={name:"App",data:function(){return{}}},l=o,c=r("2877"),u=r("6544"),d=r.n(u),f=r("7496"),p=r("8336"),h=r("9910"),v=r("71d9"),m=r("2a7f"),g=Object(c["a"])(l,i,s,!1,null,null,null),b=g.exports;d()(g,{VApp:f["a"],VBtn:p["a"],VSpacer:h["a"],VToolbar:v["a"],VToolbarTitle:m["a"]});var w=r("8c4f"),y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HelloWorld",{attrs:{msg:"Welcome to Agileffy, your Vue.js + TypeScript App"}})],1)},x=[],k=r("d225"),_=r("308d"),T=r("6bb5"),V=r("4e2b"),C=r("9ab4"),j=r("60a3"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("Welcome to Vuetify")]),a("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),e._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])}),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,r){return a("a",{key:r,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(e._s(t.text))])}),0)],1)],1)],1)},S=[],A={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},O=A,P=r("a523"),E=r("0e8f"),R=r("adda"),L=r("a722"),q=Object(c["a"])(O,$,S,!1,null,null,null),D=q.exports;d()(q,{VContainer:P["a"],VFlex:E["a"],VImg:R["a"],VLayout:L["a"]});var M=function(e){function t(){return Object(k["a"])(this,t),Object(_["a"])(this,Object(T["a"])(t).apply(this,arguments))}return Object(V["a"])(t,e),t}(j["b"]);M=C["a"]([Object(j["a"])({components:{HelloWorld:D}})],M);var F=M,I=F,B=Object(c["a"])(I,y,x,!1,null,null,null),H=B.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Login to Agileffy")]),r("v-spacer"),r("v-tooltip",{attrs:{bottom:""}},[r("v-btn",{attrs:{slot:"activator",icon:"",large:"",href:e.source,target:"_blank"},slot:"activator"},[r("v-icon",{attrs:{large:""}},[e._v("code")])],1),r("span",[e._v("Source")])],1)],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"}})],1)],1),r("v-card-actions",[r("v-btn",{attrs:{flat:"",small:"",color:"primary"},on:{click:e.jumpToRegister}},[e._v("Register")]),r("v-spacer"),r("v-btn",{attrs:{color:"primary"},on:{click:e.login}},[e._v("Login")])],1)],1)],1)],1)],1)],1)},W=[],K={data:function(){return{drawer:null}},props:{source:String},methods:{login:function(){this.$router.push("/write")},jumpToRegister:function(){this.$router.push("/register")}}},z=K,U=r("b0af"),Z=r("99d9"),J=r("549c"),Y=r("4bd4"),G=r("132d"),Q=r("2677"),X=r("3a2f"),ee=Object(c["a"])(z,N,W,!1,null,null,null),te=ee.exports;d()(ee,{VBtn:p["a"],VCard:U["a"],VCardActions:Z["a"],VCardText:Z["b"],VContainer:P["a"],VContent:J["a"],VFlex:E["a"],VForm:Y["a"],VIcon:G["a"],VLayout:L["a"],VSpacer:h["a"],VTextField:Q["a"],VToolbar:v["a"],VToolbarTitle:m["a"],VTooltip:X["a"]});var re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{fixed:"",right:"",clipped:"",app:""},model:{value:e.drawerRight,callback:function(t){e.drawerRight=t},expression:"drawerRight"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.right=!e.right}}},[r("v-list-tile-action",[r("v-icon",[e._v("exit_to_app")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Open Temporary Drawer")])],1)],1)],1)],1),r("v-toolbar",{attrs:{color:"blue-grey",dark:"",fixed:"",app:"","clipped-right":"",flat:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",[e._v("Agileffy")]),r("v-spacer"),r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawerRight=!e.drawerRight}}})],1),r("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.left=!e.left}}},[r("v-list-tile-action",[r("v-icon",[e._v("exit_to_app")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Open Temporary Drawer")])],1)],1)],1)],1),r("v-navigation-drawer",{attrs:{temporary:"",fixed:""},model:{value:e.left,callback:function(t){e.left=t},expression:"left"}}),r("v-navigation-drawer",{attrs:{right:"",temporary:"",fixed:""},model:{value:e.right,callback:function(t){e.right=t},expression:"right"}}),r("v-content",{attrs:{id:"Content"}},[r("v-container",{ref:"msgContainer",attrs:{id:"MessagePile","pa-0":"","pb-0":""}},[r("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:""}},e._l(e.messages,function(t){return r("v-card",{key:t.updateTime,attrs:{tile:""}},[r("div",[r("MessageBlock",{attrs:{msg:t},on:{"edit-block":e.editBlock}})],1)])}),1)],1)],1),r("v-divider"),r("v-container",{ref:"typeWriterContainer",attrs:{id:"Typer","ma-0":"","pa-0":""}},[r("div",{ref:"userInput",attrs:{"ma-0":"","pa-0":"",contenteditable:"true",id:"Input"},on:{input:e.input_trigger,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?t.shiftKey||t.altKey||t.metaKey?null:e.spark(t):null}}},[r("p",[e._v("Type some thing please")])])])],1)],1)},ae=[],ne=r("c33b"),ie=r("3acd"),se=(r("4f64"),r("1c46"),{components:{MessageBlock:ne["a"]},props:{source:String},data:function(){return{drawer:!1,drawerRight:!1,right:null,left:null,messages:[],input_text:"",msgToEdit:null}},created:function(){var e=this;ie["a"].getAllMessages().then(function(t){e.messages=t})},methods:{input_trigger:function(){this.resetHeight()},spark:function(){null==this.msgToEdit?this.messages.push(ie["a"].newMsg(this.$refs.userInput.innerText)):(this.msgToEdit.updateContent(this.$refs.userInput.innerText),ie["a"].updateMessage(this.msgToEdit),this.msgToEdit=null),setTimeout(this.scrollView,1),this.clearTypeWriter(),this.resetHeight()},resetHeight:function(){var e=this.$refs.msgContainer.parentElement.offsetHeight-this.$refs.typeWriterContainer.offsetHeight;this.$refs.msgContainer.style.height=e+"px"},scrollView:function(){this.$refs.msgContainer.scrollTop=this.$refs.msgContainer.scrollHeight},clearTypeWriter:function(){this.$refs.userInput.innerText="And more?"},editBlock:function(e){this.$refs.userInput.innerText=e.content,this.resetHeight(),this.msgToEdit=e}},mounted:function(){this.resetHeight(),setTimeout(this.scrollView,10)}}),oe=se,le=(r("9643"),r("ce7e")),ce=r("8860"),ue=r("ba95"),de=r("40fe"),fe=r("5d23"),pe=r("f774"),he=r("706c"),ve=Object(c["a"])(oe,re,ae,!1,null,null,null),me=ve.exports;d()(ve,{VCard:U["a"],VContainer:P["a"],VContent:J["a"],VDivider:le["a"],VFlex:E["a"],VIcon:G["a"],VLayout:L["a"],VList:ce["a"],VListTile:ue["a"],VListTileAction:de["a"],VListTileContent:fe["a"],VListTileTitle:fe["b"],VNavigationDrawer:pe["a"],VSpacer:h["a"],VToolbar:v["a"],VToolbarSideIcon:he["a"],VToolbarTitle:m["a"]});var ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Create a new account")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.min,e.rules.max,e.rules.username],"prepend-icon":"person",name:"username",label:"Username",type:"text",counter:"",required:""},model:{value:e.userdata.username,callback:function(t){e.$set(e.userdata,"username",t)},expression:"userdata.username"}}),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.password],error:e.passwordRepeatRule(),"append-icon":e.showPassword?"visibility":"visibility_off","prepend-icon":"lock",name:"password",label:"Password",id:"password",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.userdata.password,callback:function(t){e.$set(e.userdata,"password",t)},expression:"userdata.password"}}),r("v-text-field",{attrs:{rules:[e.rules.required],error:e.passwordRepeatRule(),"error-messages":e.passwordRepeatMsg(),"append-icon":e.showPassword?"visibility":"visibility_off","prepend-icon":"lock",name:"password2",label:"Password Again",id:"password2",type:e.showPassword?"text":"password",required:""},on:{"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.userdata.passwordRepeat,callback:function(t){e.$set(e.userdata,"passwordRepeat",t)},expression:"userdata.passwordRepeat"}}),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],"prepend-icon":"email",name:"email",label:"Email",type:"text",required:""},model:{value:e.userdata.email,callback:function(t){e.$set(e.userdata,"email",t)},expression:"userdata.email"}}),r("v-checkbox",{attrs:{rules:[e.rules.required,e.rules.checkbox],label:"Do you agree?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"error"},on:{click:e.cancel}},[e._v("Cancel")]),r("v-btn",{attrs:{disabled:!e.valid,color:"primary"},on:{click:e.register}},[e._v("Register")])],1)],1)],1)],1)],1)],1)},be=[],we={data:function(){return{valid:!1,userdata:{username:"",password:"",passwordRepeat:"",email:""},checkbox:!1,showPassword:!1,rules:{required:function(e){return!!e||"This is required!"},min:function(e){return(e||"").length>=6||"Min 6 characters required!"},max:function(e){return(e||"").length<=30||"Max 30 characters required!"},username:function(e){var t=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._-]){5,29}$/;return t.test(e)||"Username should start with a letter, following with letters,digits and special characters(._-)."},password:function(e){var t=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,30}$/;return t.test(e)||"Password should contains at least two of these four types of characters: lowercase letters,                         uppercase letters, digits, special characters(.,_!@#$%^&*`~()-+=)                         and should have a length between 8 and 30."},email:function(e){var t=/.+@.+/;return t.test(e)||"Invalid e-mail."},checkbox:function(e){return!!e||"You must agree to continue!"}}}},methods:{passwordRepeatRule:function(){return this.userdata.password!==this.userdata.passwordRepeat},passwordRepeatMsg:function(){if(this.userdata.password!==this.userdata.passwordRepeat)return"Password does not match!"},register:function(){},cancel:function(){this.$router.push("/")}}},ye=we,xe=r("ac7c"),ke=Object(c["a"])(ye,ge,be,!1,null,null,null),_e=ke.exports;d()(ke,{VBtn:p["a"],VCard:U["a"],VCardActions:Z["a"],VCardText:Z["b"],VCheckbox:xe["a"],VContainer:P["a"],VContent:J["a"],VFlex:E["a"],VForm:Y["a"],VLayout:L["a"],VSpacer:h["a"],VTextField:Q["a"],VToolbar:v["a"],VToolbarTitle:m["a"]}),a["a"].use(w["a"]);var Te=new w["a"]({routes:[{path:"/home",name:"home",component:H},{path:"/",name:"login",component:te},{path:"/register",name:"register",component:_e},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/write_ori",name:"write_ori",component:function(){return r.e("chunk-93e5c296").then(r.bind(null,"7a93"))}},{path:"/write",name:"write",component:me}]}),Ve=r("2f62");a["a"].use(Ve["a"]);var Ce=new Ve["a"].Store({state:{},mutations:{},actions:{}}),je=r("9483");Object(je["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:Te,store:Ce,render:function(e){return e(b)}}).$mount("#app")},d229:function(e,t,r){}});
//# sourceMappingURL=app.74d9f86d.js.map