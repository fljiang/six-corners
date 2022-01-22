(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var r,a,o,c,i,s,u,l,p,f,b=n(0),E=n.n(b),m=n(30),O=n.n(m),h=(n(93),n(20)),d=n(35),v=n(36),j=n(43),T=n(27),R=n(44),x=n(123),w=n(125),C=n(126),S=n(124),_=n(132),y=n(129),A=n(128),k=n(131),g=n(49),D=function(){return{type:"RESET_ALL_EVENTS"}},I=n(28),N=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(j.a)(this,Object(T.a)(t).call(this,e))).handleStart=function(){var e=n.props,t=e.interval,r=e.time,a=e.on,o=e.fourCorners,c=Math.floor(r/t);if(a)n.props.resetAllEvents();else{n.props.startTimer(!0);for(var i=function(e){setTimeout(function(){if(n.props.on){if(o){var r=Math.floor(4*Math.random()+1);n.props.setCorner({1:1,2:2,3:5,4:6}[r])}else{var a=Math.floor(6*Math.random()+1);n.props.setCorner(a)}setTimeout(function(){n.props.setCorner(""),e===c-1&&n.props.resetAllEvents()},t-250)}else n.props.resetAllEvents()},t*e)},s=0;s<c;s++)i(s)}},n.handleFourCorners=function(){var e=n.props.fourCorners;n.props.setFourCorners(!e)},n.handleSettings=function(){if(n.totalTimeRef||n.intervalRef){if(n.intervalRef.current){var e=1e3*parseInt(n.intervalRef.current.value);n.props.setInterval(e)}if(n.timeRef.current){var t=1e3*parseInt(n.timeRef.current.value);n.props.setTime(t)}n.props.resetAllEvents()}},n.intervalRef=E.a.createRef(),n.timeRef=E.a.createRef(),n}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return E.a.createElement(M,null,E.a.createElement(L,null,E.a.createElement(w.a.Brand,{href:"#home"},"Six Corners"),E.a.createElement(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),E.a.createElement(C.a,{className:"me-auto"},E.a.createElement(F,{onClick:this.handleStart},"Start"),E.a.createElement(P,null,E.a.createElement(y.a,{control:E.a.createElement(A.a,{onChange:this.handleFourCorners}),label:"4 Corners"})))),E.a.createElement(U,null,E.a.createElement(C.a,null,E.a.createElement(V,{type:"text",placeholder:"Interval (s)",ref:this.intervalRef}),E.a.createElement(V,{type:"text",placeholder:"Time (s)",ref:this.totalTimeRef}),E.a.createElement(z,{onClick:this.handleSettings},"Submit"))))}}]),t}(b.Component),M=Object(I.a)(x.a)(r||(r=Object(h.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]))),L=Object(I.a)(w.a)(a||(a=Object(h.a)(["\n    width: 100%;\n"]))),U=Object(I.a)(w.a)(o||(o=Object(h.a)(["\n    width: 100%;\n    margin-top: -15px;\n    border-bottom: 2px solid #eee;\n"]))),F=Object(I.a)(C.a.Link)(c||(c=Object(h.a)(["\n    margin-right: 15px;\n    margin-top: 5px;\n"]))),P=Object(I.a)(S.a)(i||(i=Object(h.a)(["\n    margin-top: 5px;\n"]))),V=Object(I.a)(_.a)(s||(s=Object(h.a)(["\n    box-sizing: border-box;\n    &:hover, &:active, &:focus {\n        box-shadow: none;\n        border: 1px solid royalblue !important;\n    }\n    width: 110px;\n    margin-right: 15px;\n"]))),z=Object(I.a)(k.a)(u||(u=Object(h.a)(["\n    color: royalblue;\n    border: 1px solid royalblue !important;\n    &:hover, &:active, &:focus {\n        background-color: royalblue !important;\n        color: white;\n    }\n    width: 100px;\n"]))),B={setCorner:function(e){return{type:"SET_CORNER",corner:e}},setFourCorners:function(){return{type:"SET_FOUR_CORNERS"}},setInterval:function(e){return{type:"SET_INTERVAL",interval:e}},setTime:function(e){return{type:"SET_TIME",time:e}},startTimer:function(e){return{type:"START_TIMER",on:e}},resetAllEvents:D},J=Object(g.b)(function(e){return{interval:e.interval,time:e.time,on:e.on,fourCorners:e.fourCorners}},B)(N),q=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(j.a)(this,Object(T.a)(t).call(this,e))).handleStop=function(){n.props.resetAllEvents()},n}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.corner;return E.a.createElement(G,{id:"display"},E.a.createElement(H,{sx:{backgroundColor:"whitesmoke",color:"black",fontSize:250},onClick:this.handleStop},e))}}]),t}(b.Component),G=Object(I.a)(x.a)(l||(l=Object(h.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    margin-top: 15px;\n"]))),H=Object(I.a)(k.a)(p||(p=Object(h.a)(["\n    width: 100%;\n"]))),K={resetAllEvents:D},Q=Object(g.b)(function(e){return{corner:e.corner}},K)(q),W=function(e){function t(){return Object(d.a)(this,t),Object(j.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return E.a.createElement(X,{id:"app"},E.a.createElement(J,null),E.a.createElement(Q,null))}}]),t}(b.Component),X=Object(I.a)(x.a)(f||(f=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n"]))),Y=W,Z=n(56),$=n(78),ee=n(22),te=n.n(ee),ne=n(26),re=te.a.mark(pe),ae=te.a.mark(fe),oe=te.a.mark(be),ce=te.a.mark(Ee),ie=te.a.mark(me),se=te.a.mark(Oe),ue=te.a.mark(he),le=te.a.mark(de);function pe(e){return te.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ne.b)({type:"CORNER_UPDATED",corner:e.corner});case 2:case"end":return t.stop()}},re)}function fe(e){return te.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ne.b)({type:"FOUR_CORNERS_UPDATED",fourCorners:e.fourCorners});case 2:case"end":return t.stop()}},ae)}function be(e){return te.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ne.b)({type:"INTERVAL_UPDATED",interval:e.interval});case 2:case"end":return t.stop()}},oe)}function Ee(e){return te.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ne.b)({type:"TIME_UPDATED",time:e.time});case 2:case"end":return t.stop()}},ce)}function me(e){return te.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ne.b)({type:"TIMER_STARTED",on:e.on});case 2:case"end":return t.stop()}},ie)}function Oe(){var e,t;return te.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(e=setTimeout(";"),t=0;t<e;t++)clearTimeout(t);return n.next=4,Object(ne.b)({type:"ALL_EVENTS_RESET"});case 4:case"end":return n.stop()}},se)}function he(){return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.c)("SET_CORNER",pe);case 2:return e.next=4,Object(ne.c)("SET_FOUR_CORNERS",fe);case 4:return e.next=6,Object(ne.c)("SET_INTERVAL",be);case 6:return e.next=8,Object(ne.c)("SET_TIME",Ee);case 8:return e.next=10,Object(ne.c)("START_TIMER",me);case 10:return e.next=12,Object(ne.c)("RESET_ALL_EVENTS",Oe);case 12:case"end":return e.stop()}},ue)}function de(){return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([he()]);case 2:case"end":return e.stop()}},le)}var ve=n(6),je={corner:0,interval:2e3,time:12e4,on:!1,fourCorners:!1},Te=Object($.a)(),Re=Object(Z.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CORNER_UPDATED":return Object(ve.a)({},e,{corner:t.corner});case"FOUR_CORNERS_UPDATED":return Object(ve.a)({},e,{fourCorners:t.fourCorners});case"INTERVAL_UPDATED":return Object(ve.a)({},e,{interval:t.interval});case"TIME_UPDATED":return Object(ve.a)({},e,{time:t.time});case"TIMER_STARTED":return Object(ve.a)({},e,{on:t.on});case"ALL_EVENTS_RESET":return Object(ve.a)({},e,{corner:0,on:!1});default:return e}},Object(Z.a)(Te));Te.run(de);var xe=Re;O.a.render(E.a.createElement(g.a,{store:xe},E.a.createElement(E.a.StrictMode,null,E.a.createElement(Y,null))),document.getElementById("root"))},88:function(e,t,n){e.exports=n(107)},93:function(e,t,n){}},[[88,1,2]]]);
//# sourceMappingURL=main.976fabaa.chunk.js.map