(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,t,n){e.exports=n(95)},82:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),l=n(20),i=n.n(l),u=(n(82),n(30)),s=n(25),h=n(26),f=n(35),m=n(18),b=n(36),d=n(108),p=n(111),O=n(112),j=n(110),v=n(43),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).handleStart=function(){for(var e=n.state.interval,t=Math.floor(12e4/e),a=0;a<t;a++)setTimeout(function(){var t=Math.floor(6*Math.random()+1);n.props.setCorner(t),setTimeout(function(){n.props.setCorner("")},e-250)},e*a)},n.handleIntervalChange=function(e){console.log(e)},n.state={interval:3e3},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(p.a.Brand,{href:"#home"},"Six Corners"),o.a.createElement(O.a.Link,{onClick:this.handleStart},"Start"),o.a.createElement(j.a,{title:"Intervals"},o.a.createElement(j.a.Item,{onClick:this.handleIntervalChange(.5)},"0.5"),o.a.createElement(j.a.Item,{onClick:this.handleIntervalChange(.6)},"0.6"),o.a.createElement(j.a.Item,{onClick:this.handleIntervalChange(.7)},"0.7"),o.a.createElement(j.a.Item,{onClick:this.handleIntervalChange(.8)},"0.8"),o.a.createElement(j.a.Item,{onClick:this.handleIntervalChange(.9)},"0.9"),o.a.createElement(j.a.Item,{onClick:this.handleIntervalChange(1)},"1")))}}]),t}(c.Component),E={setCorner:function(e){return{type:"SET_CORNER",corner:e}}},k=Object(v.b)(null,E)(C),w=n(109),g=n(59),I=function(e){function t(e){return Object(s.a)(this,t),Object(f.a)(this,Object(m.a)(t).call(this,e))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleStop",value:function(){console.log("here")}},{key:"render",value:function(){var e=this.props.corner;return o.a.createElement(x,{sx:{backgroundColor:"whitesmoke",color:"black",fontSize:50}},e)}}]),t}(c.Component),x=Object(g.a)(w.a)(a||(a=Object(u.a)(["\n  width: 80%;\n  height: 100px;\n"]))),y=Object(v.b)(function(e){return{corner:e.corner}},null)(I),S=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement(R,{id:"app"},o.a.createElement(k,null),o.a.createElement(y,null))}}]),t}(c.Component),R=Object(g.a)(d.a)(r||(r=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n"]))),T=S,D=n(50),M=n(70),N=n(37),_=n.n(N),A=n(62),B=_.a.mark(U),J=_.a.mark(z),P=_.a.mark(L);function U(e){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.b)({type:"CORNER_UPDATED",corner:e.corner});case 2:case"end":return t.stop()}},B)}function z(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.c)("SET_CORNER",U);case 2:case"end":return e.stop()}},J)}function L(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([z()]);case 2:case"end":return e.stop()}},P)}var q=n(4),F={corner:0,on:!0},G=Object(M.a)(),H=Object(D.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CORNER_UPDATED":return Object(q.a)({},e,{corner:t.corner});default:return e}},Object(D.a)(G));G.run(L);var K=H;i.a.render(o.a.createElement(v.a,{store:K},o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null))),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a36c9c13.chunk.js.map