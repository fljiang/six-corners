(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{78:function(e,t,n){e.exports=n(96)},83:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r,a,c,o,l,i,u,s=n(0),m=n.n(s),p=n(22),E=n.n(p),f=(n(83),n(18)),h=n(28),b=n(29),d=n(38),T=n(21),v=n(39),O=n(108),j=n(111),C=n(112),I=n(110),k=n(113),x=n(109),w=n(45),g=function(){return{type:"RESET_ALL_EVENTS"}},A=n(32),_=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(T.a)(t).call(this,e))).handleStart=function(){var e=n.props,t=e.interval,r=e.totalTime,a=e.on,c=Math.floor(r/t);if(a)n.props.resetAllEvents();else{n.props.setTimer(!0);for(var o=function(e){setTimeout(function(){if(n.props.on){var r=Math.floor(6*Math.random()+1);n.props.setCorner(r),setTimeout(function(){e===c-1?n.props.resetAllEvents():n.props.setCorner("")},t-250)}else n.props.resetAllEvents()},t*e)},l=0;l<c;l++)o(l)}},n.handleIntervalChange=function(e){e*=1e3,n.props.setInterval(e),n.props.resetAllEvents()},n.submitCustomTime=function(){if(n.totalTimeRef){var e=1e3*parseInt(n.totalTimeRef.current.value);n.props.setTotalTime(e),n.props.resetAllEvents()}},n.totalTimeRef=m.a.createRef(),n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(S,null,m.a.createElement(y,null,m.a.createElement(j.a.Brand,{href:"#home"},"Six Corners"),m.a.createElement(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),m.a.createElement(C.a,{className:"me-auto"},m.a.createElement(C.a.Link,{onClick:this.handleStart},"Start"),m.a.createElement(I.a,{title:"Intervals"},m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.5)}},"0.5"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.6)}},"0.6"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.7)}},"0.7"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.8)}},"0.8"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.9)}},"0.9"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1)}},"1"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.1)}},"1.1"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.2)}},"1.2"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.3)}},"1.3"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.4)}},"1.4"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.5)}},"1.5"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.6)}},"1.6"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.7)}},"1.7"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.8)}},"1.8"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.9)}},"1.9"),m.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(2)}},"2"))),m.a.createElement(C.a,null,m.a.createElement(R,{type:"text",placeholder:"() Seconds",ref:this.totalTimeRef}),m.a.createElement(L,{onClick:this.submitCustomTime},"Submit"))))}}]),t}(s.Component),S=Object(A.a)(O.a)(r||(r=Object(f.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n"]))),y=Object(A.a)(j.a)(a||(a=Object(f.a)(["\n    width: calc(15px + 100%);\n    border-bottom: 2px solid #eee;\n"]))),R=Object(A.a)(k.a)(c||(c=Object(f.a)(["\n    box-sizing: border-box;\n    &:hover, &:active, &:focus {\n        box-shadow: none;\n        border: 1px solid royalblue !important;\n    }\n    width: 120px;\n"]))),L=Object(A.a)(x.a)(o||(o=Object(f.a)(["\n    color: royalblue;\n    border: 1px solid royalblue !important;\n    &:hover, &:active, &:focus {\n        background-color: royalblue !important;\n        color: white;\n    }\n    width: 100px;\n    margin-left: 5% !important;\n    margin-right: 5% !important;\n"]))),D={setCorner:function(e){return{type:"SET_CORNER",corner:e}},setInterval:function(e){return{type:"SET_INTERVAL",interval:e}},setTimer:function(e){return{type:"SET_TIMER",on:e}},setTotalTime:function(e){return{type:"SET_TOTAL_TIME",totalTime:e}},resetAllEvents:g},N=Object(w.b)(function(e){return{interval:e.interval,totalTime:e.totalTime,on:e.on}},D)(_),M=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(d.a)(this,Object(T.a)(t).call(this,e))).handleStop=function(){n.props.resetAllEvents()},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.corner;return m.a.createElement(P,{id:"display"},m.a.createElement(U,{sx:{backgroundColor:"whitesmoke",color:"black",fontSize:250},onClick:this.handleStop},e))}}]),t}(s.Component),P=Object(A.a)(O.a)(l||(l=Object(f.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-top: 5%;\n    background-color: white;\n"]))),U=Object(A.a)(x.a)(i||(i=Object(f.a)(["\n    width: 80%;\n"]))),V={resetAllEvents:g},z=Object(w.b)(function(e){return{corner:e.corner}},V)(M),B=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return m.a.createElement(J,{id:"app"},m.a.createElement(N,null),m.a.createElement(z,null))}}]),t}(s.Component),J=Object(A.a)(O.a)(u||(u=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n"]))),q=B,F=n(52),G=n(71),H=n(19),K=n.n(H),Q=n(26),W=K.a.mark(ne),X=K.a.mark(re),Y=K.a.mark(ae),Z=K.a.mark(ce),$=K.a.mark(oe),ee=K.a.mark(le),te=K.a.mark(ie);function ne(e){return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Q.b)({type:"CORNER_UPDATED",corner:e.corner});case 2:case"end":return t.stop()}},W)}function re(e){return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Q.b)({type:"INTERVAL_UPDATED",interval:e.interval});case 2:case"end":return t.stop()}},X)}function ae(e){return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Q.b)({type:"TIMER_UPDATED",on:e.on});case 2:case"end":return t.stop()}},Y)}function ce(e){return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Q.b)({type:"TOTAL_TIME_UPDATED",totalTime:e.totalTime});case 2:case"end":return t.stop()}},Z)}function oe(e){var t,n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=setTimeout(";"),n=0;n<t;n++)clearTimeout(n);return e.next=4,Object(Q.b)({type:"ALL_EVENTS_RESET"});case 4:case"end":return e.stop()}},$)}function le(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.c)("SET_CORNER",ne);case 2:return e.next=4,Object(Q.c)("SET_INTERVAL",re);case 4:return e.next=6,Object(Q.c)("SET_TIMER",ae);case 6:return e.next=8,Object(Q.c)("SET_TOTAL_TIME",ce);case 8:return e.next=10,Object(Q.c)("RESET_ALL_EVENTS",oe);case 10:case"end":return e.stop()}},ee)}function ie(){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([le()]);case 2:case"end":return e.stop()}},te)}var ue=n(4),se={corner:0,interval:2e3,totalTime:12e4,on:!1},me=Object(G.a)(),pe=Object(F.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CORNER_UPDATED":return Object(ue.a)({},e,{corner:t.corner});case"INTERVAL_UPDATED":return Object(ue.a)({},e,{interval:t.interval});case"TIMER_UPDATED":return Object(ue.a)({},e,{on:t.on});case"TOTAL_TIME_UPDATED":return Object(ue.a)({},e,{totalTime:t.totalTime});case"ALL_EVENTS_RESET":return Object(ue.a)({},e,{corner:0,on:!1});default:return e}},Object(F.a)(me));me.run(ie);var Ee=pe;E.a.render(m.a.createElement(w.a,{store:Ee},m.a.createElement(m.a.StrictMode,null,m.a.createElement(q,null))),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b58df3b2.chunk.js.map