(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[5,8],{190:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e,t){var r=[];return Object.keys(e).forEach((function(n){if(void 0!==t[n])switch(e[n].type){case"boolean":r[n]="false"!==t[n]&&!1!==t[n];break;case"number":r[n]=parseInt(t[n],10);break;case"array":case"object":r[n]=JSON.parse(t[n]);break;default:r[n]=t[n]}else r[n]=e[n].default})),r}},285:function(e,t,r){"use strict";var n=r(11),a=r.n(n),c=r(190);t.a=function(e){return function(t){return function(r){var n=Object(c.a)(e,r);return React.createElement(t,a()({},r,n))}}}},286:function(e,t){},287:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r.n(n),c=(r(3),r(1)),o=r(5),l=r.n(o),s=r(38),u=r(80),i=r(199);r(286);t.default=Object(i.withProductDataContext)((function(e){var t=e.className,r=e.align,n=Object(u.useInnerBlockLayoutContext)().parentClassName,o=Object(u.useProductDataContext)().product;if(!o.id||!o.on_sale)return null;var i="string"==typeof r?"wc-block-components-product-sale-badge--align-".concat(r):"";return React.createElement("div",{className:l()("wc-block-components-product-sale-badge",t,i,a()({},"".concat(n,"__product-onsale"),n))},React.createElement(s.a,{label:Object(c.__)("Sale","woo-gutenberg-products-block"),screenReaderLabel:Object(c.__)("Product on sale","woo-gutenberg-products-block")}))}))},288:function(e,t){},310:function(e,t,r){"use strict";r.r(t);var n=r(285),a=r(11),c=r.n(a),o=r(7),l=r.n(o),s=r(10),u=r.n(s),i=(r(3),r(0)),p=r(1),d=r(5),b=r.n(d),f=r(9),m=r(80),g=r(199),O=r(287);r(288);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(){return React.createElement("img",{src:f.r,alt:"",width:500,height:500})},v=function(e){var t=e.image,r=e.onLoad,n=e.loaded,a=e.showFullSize,o=e.fallbackAlt,l=t||{},s=l.thumbnail,u=l.src,i=l.srcset,p=l.sizes,d=w({alt:l.alt||o,onLoad:r,hidden:!n,src:s},a&&{src:u,srcSet:i,sizes:p});return React.createElement(React.Fragment,null,d.src&&React.createElement("img",c()({"data-testid":"product-image"},d)),!n&&React.createElement(y,null))},h=Object(g.withProductDataContext)((function(e){var t=e.className,r=e.imageSizing,n=void 0===r?"full-size":r,a=e.productLink,c=void 0===a||a,o=e.showSaleBadge,s=e.saleBadgeAlign,d=void 0===s?"right":s,f=Object(m.useInnerBlockLayoutContext)().parentClassName,g=Object(m.useProductDataContext)().product,j=Object(i.useState)(!1),h=u()(j,2),k=h[0],E=h[1];if(!g.id)return React.createElement("div",{className:b()(t,"wc-block-components-product-image","wc-block-components-product-image--placeholder",l()({},"".concat(f,"__product-image"),f))},React.createElement(y,null));var P=!!g.images.length,R=P?g.images[0]:null,S=c?"a":i.Fragment,_=Object(p.sprintf)(Object(p.__)("Link to %s","woo-gutenberg-products-block"),g.name),D=w({href:g.permalink,rel:"nofollow"},!P&&{"aria-label":_});return React.createElement("div",{className:b()(t,"wc-block-components-product-image",l()({},"".concat(f,"__product-image"),f))},React.createElement(S,c&&D,!!o&&React.createElement(O.default,{align:d,product:g}),React.createElement(v,{fallbackAlt:g.name,image:R,onLoad:function(){return E(!0)},loaded:k,showFullSize:"cropped"!==n})))})),k={productLink:{type:"boolean",default:!0},showSaleBadge:{type:"boolean",default:!0},saleBadgeAlign:{type:"string",default:"right"},imageSizing:{type:"string",default:"full-size"},productId:{type:"number",default:0}};t.default=Object(n.a)(k)(h)},38:function(e,t,r){"use strict";var n=r(7),a=r.n(n),c=(r(3),r(2)),o=r(5),l=r.n(o);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t,r=e.label,n=e.screenReaderLabel,a=e.wrapperElement,o=e.wrapperProps,s=void 0===o?{}:o,i=null!=r,p=null!=n;return!i&&p?(t=a||"span",s=u(u({},s),{},{className:l()(s.className,"screen-reader-text")}),React.createElement(t,s,n)):(t=a||c.Fragment,i&&p&&r!==n?React.createElement(t,s,React.createElement("span",{"aria-hidden":"true"},r),React.createElement("span",{className:"screen-reader-text"},n)):React.createElement(t,s,r))}}}]);