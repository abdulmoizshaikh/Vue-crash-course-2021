(function(e){function t(t){for(var r,c,s=t[0],u=t[1],i=t[2],l=0,b=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&b.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28cd":function(e,t,n){"use strict";n("e49b")},"2e21":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container"};function o(e,t,n,o,c,s){var u=Object(r["u"])("Header"),i=Object(r["u"])("router-view"),d=Object(r["u"])("Footer");return Object(r["p"])(),Object(r["d"])("div",a,[Object(r["g"])(u,{title:"Task tracker",onToggleAddTask:s.toggleAddTask,showAddTask:c.showAddTask},null,8,["onToggleAddTask","showAddTask"]),Object(r["g"])(i,{showAddTask:c.showAddTask},null,8,["showAddTask"]),Object(r["g"])(d)])}function c(e,t,n,a,o,c){var s=Object(r["u"])("Button");return Object(r["p"])(),Object(r["d"])("header",null,[Object(r["g"])("h1",null,Object(r["x"])(n.title),1),Object(r["E"])(Object(r["g"])(s,{onBtnClick:t[1]||(t[1]=function(t){return e.$emit("toggle-add-task")}),text:n.showAddTask?"Close":"Add Task",color:n.showAddTask?"red":"green"},null,8,["text","color"]),[[r["B"],c.homePage]])])}function s(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("button",{class:"btn",style:{backgroundColor:n.color},onClick:t[1]||(t[1]=function(t){return e.$emit("btn-click")})},Object(r["x"])(n.text),5)}var u={name:"Button",props:{text:String,color:String}};u.render=s,u.__scopeId="data-v-277dba36";var i=u,d={name:"Header",props:{title:String,showAddTask:Boolean},components:{Button:i},computed:{homePage:function(){return"/"===this.$route.path}}};n("c953");d.render=c,d.__scopeId="data-v-b408a2a2";var l=d;Object(r["v"])("data-v-5bb6c960");var b=Object(r["g"])("p",null,"Copyright © 2021",-1),f=Object(r["f"])("About");function p(e,t){var n=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("footer",null,[b,Object(r["g"])(n,{to:"/about"},{default:Object(r["D"])((function(){return[f]})),_:1})])}Object(r["v"])(null);n("ffe0");const k={};k.render=p,k.__scopeId="data-v-5bb6c960";var m=k,j={data:function(){return{showAddTask:!1}},methods:{toggleAddTask:function(){this.showAddTask=!this.showAddTask}},components:{Header:l,Footer:m}};n("e000");j.render=o;var O=j,h=n("6c02"),g={class:"home"};function v(e,t,n,a,o,c){var s=Object(r["u"])("AddTask"),u=Object(r["u"])("Tasks");return Object(r["p"])(),Object(r["d"])("div",g,[n.showAddTask?(Object(r["p"])(),Object(r["d"])(s,{key:0,onAddTask:c.AddTask},null,8,["onAddTask"])):Object(r["e"])("",!0),Object(r["g"])(u,{tasks:o.tasks,onDeleteTask:c.deleteTask,onToggleReminder:c.toggleReminder},null,8,["tasks","onDeleteTask","onToggleReminder"])])}var T=n("5530"),y=n("2909"),w=n("1da1");n("96cf"),n("d3b7"),n("99af"),n("4de4"),n("d81d");function x(e,t,n,a,o,c){var s=Object(r["u"])("Task");return Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(n.tasks,(function(t,n){return Object(r["p"])(),Object(r["d"])("div",{key:t.id},[Object(r["g"])(s,{onToggleReminder:function(r){return e.$emit("toggle-reminder",t.id,n)},onDeleteTask:function(n){return e.$emit("delete-task",t.id)},task:t},null,8,["onToggleReminder","onDeleteTask","task"])])})),128)}function A(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("div",{onDblclick:t[2]||(t[2]=function(t){return e.$emit("toggle-reminder",n.task.id)}),class:[n.task.reminder?"reminder":"","task"]},[Object(r["g"])("h3",null,[Object(r["f"])(Object(r["x"])(n.task.text),1),Object(r["g"])("i",{class:"fas fa-times",onClick:t[1]||(t[1]=function(t){return e.$emit("delete-task",n.task.id)})})]),Object(r["g"])("p",null,Object(r["x"])(n.task.day),1)],34)}var _={name:"Task",props:{task:Object},methods:{}};n("7266");_.render=A,_.__scopeId="data-v-4875a190";var R=_,S={name:"Tasks",props:{tasks:Array},components:{Task:R},emits:["delete-task","toggle-reminder"]};S.render=x,S.__scopeId="data-v-21943b37";var P=S;Object(r["v"])("data-v-d6847c04");var B={class:"form-control"},D=Object(r["g"])("label",null,"Task",-1),C={class:"form-control"},E=Object(r["g"])("label",null,"Day & Time",-1),I={class:"form-control form-control-check"},$=Object(r["g"])("label",null,"Set Reminder",-1),H=Object(r["g"])("input",{type:"submit",value:"Save Task",class:"btn btn-block btn-dark"},null,-1);function J(e,t,n,a,o,c){return Object(r["p"])(),Object(r["d"])("form",{onSubmit:t[4]||(t[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(r["g"])("div",B,[D,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.text=e}),name:"text",placeholder:"Add Task"},null,512),[[r["A"],o.text]])]),Object(r["g"])("div",C,[E,Object(r["E"])(Object(r["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.day=e}),name:"day",placeholder:"Add Day & Time"},null,512),[[r["A"],o.day]])]),Object(r["g"])("div",I,[$,Object(r["E"])(Object(r["g"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.reminder=e}),name:"reminder"},null,512),[[r["z"],o.reminder]])]),H],32)}Object(r["v"])(null);var M={name:"AddTask",data:function(){return{text:"",day:"",reminder:!1}},methods:{onSubmit:function(e){if(e.preventDefault(),this.text){var t={text:this.text,day:this.day,reminder:this.reminder};this.$emit("add-task",t),this.text="",this.day="",this.reminder=!1}else alert("Please add a task")}}};n("28cd");M.render=J,M.__scopeId="data-v-d6847c04";var U=M,V={name:"Home",components:{AddTask:U,Tasks:P},props:{showAddTask:Boolean},data:function(){return{tasks:[]}},methods:{AddTask:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n.next=3,fetch("api/tasks",r);case 3:return a=n.sent,n.next=6,a.json();case 6:o=n.sent,t.tasks=[].concat(Object(y["a"])(t.tasks),[o]);case 8:case"end":return n.stop()}}),n)})))()},deleteTask:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!confirm("Are you sure you want to delete")){n.next=6;break}return r={method:"DELETE"},n.next=4,fetch("api/tasks/".concat(e),r);case 4:a=n.sent,200===a.status?t.tasks=t.tasks.filter((function(t){return t.id!=e})):alert("Error in delete task");case 6:case"end":return n.stop()}}),n)})))()},toggleReminder:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,a,o,c,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTasksById(e);case 2:return r=n.sent,a=Object(T["a"])(Object(T["a"])({},r),{},{reminder:!r.reminder}),o={method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}},n.next=7,fetch("api/tasks/".concat(e),o);case 7:return c=n.sent,n.next=10,c.json();case 10:s=n.sent,t.tasks=t.tasks.map((function(t){return t.id===e?Object(T["a"])(Object(T["a"])({},t),{},{reminder:s.reminder}):t}));case 12:case"end":return n.stop()}}),n)})))()},fetchTasks:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))()},fetchTasksById:function(e){return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("api/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchTasks();case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};V.render=v;var F=V,N=Object(r["g"])("h3",null,"Version 1.0.0",-1),z=Object(r["f"])("Go Back");function G(e,t,n,a,o,c){var s=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])(r["a"],null,[N,Object(r["g"])(s,{to:"/"},{default:Object(r["D"])((function(){return[z]})),_:1})],64)}var L={props:{showAddTask:Boolean}};L.render=G;var q=L,K=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:q}],Q=Object(h["a"])({history:Object(h["b"])("/"),routes:K}),W=Q,X=n("5502"),Y=Object(X["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(O).use(Y).use(W).mount("#app")},"61fc":function(e,t,n){},7266:function(e,t,n){"use strict";n("61fc")},c953:function(e,t,n){"use strict";n("caa1")},caa1:function(e,t,n){},e000:function(e,t,n){"use strict";n("2e21")},e49b:function(e,t,n){},e55e:function(e,t,n){},ffe0:function(e,t,n){"use strict";n("e55e")}});
//# sourceMappingURL=app.31771b8f.js.map