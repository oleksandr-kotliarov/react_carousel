(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),r=n(2),s=n(3),c=n(5),o=n(4),u=n(1),m=n.n(u),l=n(17),p=(n(12),n(13),n(0)),b=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={viewPosition:0},t.moveImage=function(e){var n=t.state.viewPosition,a=t.props,i=a.itemWidth,r=a.frameSize,s=a.step,c=t.props.images;if("forward"===e){var o=n+i*s,u=(c.length-r)*i;t.setState({viewPosition:o>u?u:o})}if("back"===e){var m=n-i*s;t.setState({viewPosition:m<0?0:m})}},t}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(t){t!==this.props&&this.setState({viewPosition:0})}},{key:"render",value:function(){var t=this,e=this.props,n=e.images,a=e.itemWidth,i=e.frameSize,r=e.animationDuration,s=this.state.viewPosition;return Object(p.jsxs)("div",{className:"Carousel",style:{width:"".concat(a*i,"px")},children:[Object(p.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(-".concat(s,"px)"),transition:"transform ".concat(r,"ms")},children:n.map((function(t){var e=t.image,n=t.id;return Object(p.jsx)("li",{children:Object(p.jsx)("img",{src:e,alt:e,style:{width:"".concat(a,"px")}})},n)}))}),Object(p.jsxs)("div",{className:"Carousel__button-place",children:[Object(p.jsx)("button",{type:"button",onClick:function(){return t.moveImage("back")},disabled:0===s,children:"Prev"}),Object(p.jsx)("button",{type:"button",onClick:function(){return t.moveImage("forward")},disabled:s===(n.length-i)*a,"data-cy":"next",children:"Next"})]})]})}}]),n}(m.a.Component),j=b,g=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],h=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={images:g.map((function(t){return{image:t,id:Object(l.a)()}})),itemWidth:130,frameSize:3,step:3,animationDuration:1e3},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.itemWidth,i=e.frameSize,r=e.animationDuration,s=e.step;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(p.jsxs)("label",{children:["Item Width:",Object(p.jsx)("input",{type:"number",value:a,min:"130",max:"250",step:"5",onChange:function(e){var n=e.target;return t.setState({itemWidth:+n.value})}})]}),Object(p.jsxs)("label",{children:["Frame Size:",Object(p.jsx)("input",{type:"number",value:i,min:"1",max:"10",onChange:function(e){var n=e.target;return t.setState({frameSize:+n.value})}})]}),Object(p.jsxs)("label",{children:["Step:",Object(p.jsx)("input",{type:"number",value:s,min:"1",max:"5",onChange:function(e){var n=e.target;return t.setState({step:+n.value})}})]}),Object(p.jsxs)("label",{children:["Animation Duration:",Object(p.jsx)("input",{type:"number",value:r,min:"100",max:"2000",step:"100",onChange:function(e){var n=e.target;return t.setState({animationDuration:+n.value})}})]}),Object(p.jsx)(j,{images:n,step:s,frameSize:i,itemWidth:a,animationDuration:r})]})}}]),n}(m.a.Component),d=h;i.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.570a40fb.chunk.js.map