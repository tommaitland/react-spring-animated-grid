!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-spring"),require("react-use")):"function"==typeof define&&define.amd?define(["exports","react","react-spring","react-use"],t):t((e||self).reactSpringAnimatedGrid={},e.react,e.reactSpring,e.reactUse)}(this,function(e,t,r,n){function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=i(t);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}e.GridComponent=function(e){const i=e.style,l=e.children,u=e.itemMarginTop,f=void 0===u?0:u,p=e.itemMarginRight,s=void 0===p?0:p,c=e.itemMarginBottom,d=void 0===c?0:c,h=e.itemMarginLeft,g=void 0===h?0:h,m=n.useMeasure(),y=m[0],v=m[1].width,w=t.useRef(new Array(l.length)),b=l.map(()=>{const e=n.useMeasure(),t=e[1];return{size:e[0],width:t.width,height:t.height}}),M=t.useMemo(()=>(((e,t,r,n,i,o,a)=>{let l=0,u=0,f=0,p=a,s=[40];const c=[];return e.forEach((e,d)=>{let h=t[d].width;s.push(t[d].height);const g=o+h+n;(p<=g&&a>g||g>=a&&0!==d)&&(l+=1,u+=r+Math.max(...s)+i,f=0,p=a,s=[40]),c.push({row:l,top:u+r,left:f+o}),p-=g,f+=g}),c})(l,b,f,s,d,g,v).forEach((e,t)=>{w.current[t]=a({},w.current[t],e)}),l.map((e,t)=>a({},e,{key:e.key||0,top:w.current[t].top,left:w.current[t].left,width:b[t].width}))),[v,b]),x=r.useTransition(M,e=>e.key,{from:({top:e,left:t})=>({top:e,left:t}),enter:({top:e,left:t})=>({top:e,left:t}),update:({top:e,left:t})=>({top:e,left:t})});return o.default.createElement("div",{style:a({},i,{position:"relative"}),ref:y},(null==l?void 0:l.length)&&x.map((e,t)=>{const n=e.item,i=e.props,u=i.top,f=i.left,p=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(i,["top","left","width"]);return o.default.createElement(r.animated.div,{key:n.key,style:a({position:"absolute",height:b[t].height,top:null==u?void 0:u.interpolate(e=>e+"px"),left:null==f?void 0:f.interpolate(e=>e+"px")},p)},o.default.cloneElement(l[t],{ref:b[t].size}))}))}});
//# sourceMappingURL=index.umd.js.map