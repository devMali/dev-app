(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l),o=(n(13),n(15),n(3));function m(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8",style:{resize:"none"},required:!0}," ")),r.a.createElement("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){var e=l.toUpperCase();c(e)}},"Convert to UpperCase   "),r.a.createElement("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){var e=l.toLowerCase();c(e)}},"Convert to LowerCase   "),r.a.createElement("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){c("")}},"Clear Textarea "),r.a.createElement("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){var e=l.split(/[ ]+/);c(e.join(" "))}},"Remove space "),r.a.createElement("button",{className:"btn btn-primary mx-3 my-2 ",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)}},"Copy Text ")),r.a.createElement("div",{className:"container my-3"},r.a.createElement("h2",null,"Your Text Summary"),r.a.createElement("p",null,l.split(" ").filter(function(e){return 0!==e.length}).length," words and ",l.length," characters")))}var i={backgroundColor:"black",color:"white",textAlign:"center",padding:"20px",fontFamily:"cursive"};var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:i},"Dev Text-Edit Project "),r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement(m,{heading:"Enter Text to do Different Operations"})))},s=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,18)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null))),s()},4:function(e,t,n){e.exports=n(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.af45fdf8.chunk.js.map