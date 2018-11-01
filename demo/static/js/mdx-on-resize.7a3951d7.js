(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/docs/mdx/onResize.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./src/react-elastic-carousel/index.js"),l=t("./src/docs/components/SimpleItem.js"),m=[{width:1,itemsToShow:1},{width:550,itemsToShow:2,itemsToScroll:2},{width:850,itemsToShow:3},{width:1150,itemsToShow:4,itemsToScroll:2},{width:1450,itemsToShow:5},{width:1750,itemsToShow:6}];function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.default=function(e){var n=e.components,t=c(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"onresize"}},"onResize"),a.a.createElement(r.MDXTag,{name:"h4",components:n,props:{id:"you-can-listen-to-the-onresize-event-of-the-carousel-this-will-get-invoked-on-each-resize-event-of-the-root-element-and-will-return-the-current-breakpoint-object-being-used"}},"You can listen to the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"onResize")," event of the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"Carousel"),", this will get invoked on each ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"resize")," event of the root element and will return the current ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h4"},"breakPoint")," object being used:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},"(currentBreakPoint) => {/*...*/}\n")),a.a.createElement(i.Playground,{__codesandbox:"undefined",__position:0,__code:"<Carousel\n  breakPoints={breakPoints}\n  onResize={currentBreakPoint =>\n    console.log(JSON.stringify(currentBreakPoint))\n  }\n>\n  <Item>1</Item>\n  <Item>2</Item>\n  <Item>3</Item>\n  <Item>4</Item>\n  <Item>5</Item>\n  <Item>6</Item>\n</Carousel>",__scope:{props:t,Carousel:s.b,Item:l.a,breakPoints:m}},a.a.createElement(s.b,{breakPoints:m,onResize:function(e){return console.log(JSON.stringify(e))}},a.a.createElement(l.a,null,"1"),a.a.createElement(l.a,null,"2"),a.a.createElement(l.a,null,"3"),a.a.createElement(l.a,null,"4"),a.a.createElement(l.a,null,"5"),a.a.createElement(l.a,null,"6"))))}}}]);