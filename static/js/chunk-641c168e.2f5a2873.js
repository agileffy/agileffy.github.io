(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-641c168e"],{"2af2":function(t,e,n){"use strict";var i=n("6c81"),s=n.n(i);s.a},"3cf4":function(t,e,n){},"6c81":function(t,e,n){},"7a93":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"write_view"},[n("div",{ref:"msgContainer",staticClass:"message_container"},[t._l(t.messages,function(t){return[n("MessageBlock",{key:t.index,attrs:{content:t.content,timestamp:t.timestamp}})]})],2),n("div",{ref:"typeWriterContainer",staticClass:"type_writer_container",attrs:{contenteditable:"true"},on:{input:t.input_trigger,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.spark(e):null}}})])])},s=[];function r(t){throw new Error('"'+t+'" is read-only')}var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message",attrs:{content:t.content}},[t._v(t._s(t.content))])},o=[],c={props:{content:String,timestamp:String}},u=c,l=(n("95da"),n("2877")),f=Object(l["a"])(u,a,o,!1,null,null,null),p=f.exports;function m(t){var e=t.parentElement.offsetHeight-t.nextSibling.offsetHeight;e<10&&(r("newHeight"),e=10),t.style.height=e+"px"}function g(t){t.scrollTop=t.scrollHeight}function h(t){t.innerText=""}var d={components:{MessageBlock:p},data:function(){return{messages:[{timestamp:Date(),content:"I love you",index:0},{timestamp:Date(),content:"I love you",index:1}],input_text:""}},methods:{input_trigger:function(){m(this.$refs.msgContainer)},spark:function(){var t=this;this.messages.push({timestamp:Date(),content:this.$refs.typeWriterContainer.innerText,index:this.messages.length+1}),setTimeout(function(){return g(t.$refs.msgContainer)},1),h(this.$refs.typeWriterContainer),m(this.$refs.msgContainer)}}},v=d,y=(n("2af2"),Object(l["a"])(v,i,s,!1,null,null,null));e["default"]=y.exports},"95da":function(t,e,n){"use strict";var i=n("3cf4"),s=n.n(i);s.a}}]);
//# sourceMappingURL=chunk-641c168e.2f5a2873.js.map