var e=require("react"),t=require("react-spring"),r=require("react-use");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=n(e);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}exports.GridComponent=function(n){const l=n.style,a=n.children,u=n.itemMarginTop,p=void 0===u?0:u,f=n.itemMarginRight,s=void 0===f?0:f,h=n.itemMarginBottom,c=void 0===h?0:h,d=n.itemMarginLeft,m=void 0===d?0:d,g=r.useMeasure(),v=g[0],y=g[1].width,w=e.useRef(new Array(a.length)),M=a.map(()=>{const e=r.useMeasure(),t=e[1];return{size:e[0],width:t.width,height:t.height}}),k=e.useMemo(()=>(((e,t,r,n,i,o,l)=>{let a=0,u=0,p=0,f=l,s=[40];const h=[];return e.forEach((e,c)=>{let d=t[c].width;s.push(t[c].height);const m=o+d+n;(f<=m&&l>m||m>=l&&0!==c)&&(a+=1,u+=r+Math.max(...s)+i,p=0,f=l,s=[40]),h.push({row:a,top:u+r,left:p+o}),f-=m,p+=m}),h})(a,M,p,s,c,m,y).forEach((e,t)=>{w.current[t]=o({},w.current[t],e)}),a.map((e,t)=>o({},e,{key:e.key||0,top:w.current[t].top,left:w.current[t].left,width:M[t].width}))),[y,M]),b=t.useTransition(k,e=>e.key,{from:({top:e,left:t})=>({top:e,left:t}),enter:({top:e,left:t})=>({top:e,left:t}),update:({top:e,left:t})=>({top:e,left:t})});return i.default.createElement("div",{style:o({},l,{position:"relative"}),ref:v},(null==a?void 0:a.length)&&b.map((e,r)=>{const n=e.item,l=e.props,u=l.top,p=l.left,f=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}(l,["top","left","width"]);return i.default.createElement(t.animated.div,{key:n.key,style:o({position:"absolute",height:M[r].height,top:null==u?void 0:u.interpolate(e=>e+"px"),left:null==p?void 0:p.interpolate(e=>e+"px")},f)},i.default.cloneElement(a[r],{ref:M[r].size}))}))};
//# sourceMappingURL=index.js.map