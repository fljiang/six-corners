(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,n,t){e.exports=t(95)},82:function(e,n,t){},95:function(e,n,t){"use strict";t.r(n);var r,a,c,o=t(0),l=t.n(o),i=t(20),u=t.n(i),s=(t(82),t(30)),h=t(26),f=t(27),m=t(36),p=t(18),E=t(37),v=t(108),d=t(6),b=t(111),C=t(112),I=t(110),O=t(44),j=function(e){return{type:"SET_TIMER",on:e}},k=function(e){function n(e){var t;return Object(h.a)(this,n),(t=Object(m.a)(this,Object(p.a)(n).call(this,e))).handleStart=function(){var e=t.props,n=e.interval,r=e.on,a=Math.floor(12e4/n);if(r)t.resetAllEvents();else{t.props.setTimer(!0);for(var c=0;c<a;c++)setTimeout(function(){if(t.props.on){var e=Math.floor(6*Math.random()+1);t.props.setCorner(e),setTimeout(function(){t.props.setCorner("")},n-250)}else t.resetAllEvents()},n*c)}},t.handleIntervalChange=function(e){e*=1e3,t.props.setInterval(e),t.resetAllEvents()},t}return Object(E.a)(n,e),Object(f.a)(n,[{key:"resetAllEvents",value:function(){for(var e=setTimeout(";"),n=0;n<e;n++)clearTimeout(n);this.props.setCorner(0),this.props.setTimer(!1)}},{key:"render",value:function(){var e=this;return l.a.createElement(b.a,null,l.a.createElement(b.a.Brand,{href:"#home"},"Six Corners"),l.a.createElement(C.a.Link,{onClick:this.handleStart},"Start"),l.a.createElement(I.a,{title:"Intervals"},l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.5)}},"0.5"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.6)}},"0.6"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.7)}},"0.7"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.8)}},"0.8"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(.9)}},"0.9"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1)}},"1"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.1)}},"1.1"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.2)}},"1.2"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.3)}},"1.3"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.4)}},"1.4"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.5)}},"1.5"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.6)}},"1.6"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.7)}},"1.7"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.8)}},"1.8"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(1.9)}},"1.9"),l.a.createElement(I.a.Item,{onClick:function(){return e.handleIntervalChange(2)}},"2")))}}]),n}(o.Component),T=Object(d.a)({setCorner:function(e){return{type:"SET_CORNER",corner:e}},setInterval:function(e){return{type:"SET_INTERVAL",interval:e}},setTimer:j},"setTimer",j),g=Object(O.b)(function(e){return{interval:e.interval,on:e.on}},T)(k),w=t(109),x=t(51),y=function(e){function n(e){return Object(h.a)(this,n),Object(m.a)(this,Object(p.a)(n).call(this,e))}return Object(E.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){var e=this.props.corner;return l.a.createElement(R,{id:"display"},l.a.createElement(A,{sx:{backgroundColor:"whitesmoke",color:"black",fontSize:250}},e))}}]),n}(o.Component),R=Object(x.a)(v.a)(r||(r=Object(s.a)(["\n    width: 100%;\n    padding-top: 5%;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n"]))),A=Object(x.a)(w.a)(a||(a=Object(s.a)(["\n    width: 80%;\n"]))),D=Object(O.b)(function(e){return{corner:e.corner}},null)(y),S=function(e){function n(){return Object(h.a)(this,n),Object(m.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(E.a)(n,e),Object(f.a)(n,[{key:"render",value:function(){return l.a.createElement(_,{id:"app"},l.a.createElement(g,null),l.a.createElement(D,null))}}]),n}(o.Component),_=Object(x.a)(v.a)(c||(c=Object(s.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n"]))),M=S,N=t(52),P=t(71),U=t(25),L=t.n(U),V=t(38),B=L.a.mark(G),J=L.a.mark(H),z=L.a.mark(K),q=L.a.mark(Q),F=L.a.mark(W);function G(e){return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(V.b)({type:"CORNER_UPDATED",corner:e.corner});case 2:case"end":return n.stop()}},B)}function H(e){return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(V.b)({type:"INTERVAL_UPDATED",interval:e.interval});case 2:case"end":return n.stop()}},J)}function K(e){return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(V.b)({type:"TIMER_UPDATED",on:e.on});case 2:case"end":return n.stop()}},z)}function Q(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.c)("SET_CORNER",G);case 2:return e.next=4,Object(V.c)("SET_INTERVAL",H);case 4:return e.next=6,Object(V.c)("SET_TIMER",K);case 6:case"end":return e.stop()}},q)}function W(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.a)([Q()]);case 2:case"end":return e.stop()}},F)}var X=t(4),Y={corner:0,interval:2e3,on:!1},Z=Object(P.a)(),$=Object(N.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CORNER_UPDATED":return Object(X.a)({},e,{corner:n.corner});case"INTERVAL_UPDATED":return Object(X.a)({},e,{interval:n.interval});case"TIMER_UPDATED":return Object(X.a)({},e,{on:n.on});default:return e}},Object(N.a)(Z));Z.run(W);var ee=$;u.a.render(l.a.createElement(O.a,{store:ee},l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null))),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.7c659c71.chunk.js.map