(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{9551:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(6941),i=t(8595),a=t(267),o=t(1252),c=t(6794),s=(t(5675),t(5893));n.default=function(e){var n=e.prof;return(0,s.jsx)(r.Z,{className:"section-lg bg-gradient-info shadow-lg border-0",children:(0,s.jsx)(i.Z,{className:"",children:(0,s.jsx)("div",{className:"p-2",children:(0,s.jsxs)(a.Z,{className:"",children:[(0,s.jsx)(o.Z,{className:"order-lg-2",lg:"4",children:(0,s.jsx)("img",{src:n.avatar_url,style:{width:"200px"},alt:"",className:"rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"})}),(0,s.jsxs)(o.Z,{lg:"8",className:"order-lg-1",children:[(0,s.jsx)("h2",{className:"text-white",children:"Reach Out to me!"}),(0,s.jsx)("p",{className:"lead text-white mt-3",children:"DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL"}),(0,s.jsx)("p",{className:"text-white mt-3",children:n.bio}),(0,s.jsxs)("div",{className:"my-3 icon-shape bg-gradient-white shadow rounded text-info",children:[(0,s.jsx)("i",{className:"ni ni-pin-3 text-info mr-2"}),n.location]}),(0,s.jsx)(c.Z,{})]})]})})})})}},6794:function(e,n,t){"use strict";t(7294);var r=t(7975),i=t(2806),a=t(5893);n.Z=function(){return(0,a.jsxs)("div",{className:"btn-wrapper text-lg",children:[i.KT.facebook&&(0,a.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1",color:"facebook",href:i.KT.facebook,target:"_blank",rel:"noopener","aria-label":"Facebook",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-facebook-square"})})}),i.KT.instagram&&(0,a.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1",color:"instagram",href:i.KT.instagram,target:"_blank",rel:"noopener","aria-label":"Instagram",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-instagram"})})}),i.KT.github&&(0,a.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1",color:"github",href:i.KT.github,rel:"noopener","aria-label":"Github",target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-github"})})}),i.KT.linkedin&&(0,a.jsx)(r.Z,{className:"btn-icon-only rounded-circle ml-1",color:"twitter",rel:"noopener","aria-label":"Linkedin",href:i.KT.linkedin,target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-linkedin"})})}),i.KT.twitter&&(0,a.jsx)(r.Z,{className:"btn-icon-only rounded-circle",color:"twitter",href:i.KT.twitter,target:"_blank",rel:"noopener","aria-label":"Twitter",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-twitter"})})})]})}},9917:function(e,n,t){"use strict";var r=t(3848),i=t(3115);var a=d(t(7294)),o=d(t(639)),c=t(8997),s=t(5809),l=t(7426);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}var m=new Set;var b=new Map([["default",function(e){var n=e.root,t=e.src,r=e.width,i=e.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(t),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var n=e.root,t=e.src,r=e.width,i=e.quality,a=new URL("".concat(n).concat(_(t))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var n=e.root,t=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(n).concat(a).concat(_(t))}],["akamai",function(e){var n=e.root,t=e.src,r=e.width;return"".concat(n).concat(_(t),"?imwidth=").concat(r)}],["custom",function(e){var n=e.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,p=g.deviceSizes,v=g.imageSizes,w=g.loader,x=g.path,j=(g.domains,[].concat(i(p),i(v)));function k(e){var n=e.src,t=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,s=e.loader;if(t)return{src:n,srcSet:void 0,sizes:void 0};var l=function(e,n,t){if(t&&("fill"===n||"responsive"===n)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(t);r)o.push(parseInt(r[2]));if(o.length){var c=.01*Math.min.apply(Math,o);return{widths:j.filter((function(e){return e>=p[0]*c})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:p,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return j.find((function(n){return n>=e}))||j[j.length-1]})))),kind:"x"}}(a,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,t){return"".concat(s({src:n,quality:o,width:e})," ").concat("w"===d?e:t+1).concat(d)})).join(", "),src:s({src:n,quality:o,width:u[f]})}}function y(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function N(e){var n=b.get(w);if(n)return n(f({root:x},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(w))}function _(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,n){return e-n})),j.sort((function(e,n){return e-n}))},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,s=i.useRef(),l=i.useState(!1),u=r(l,2),d=u[0],f=u[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return i.useEffect((function(){if(!o&&!d){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),[m,d]};var i=t(7294),a=t(3447),o="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBase64=function(e){return window.btoa(e)}},5809:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(e,n,t){t(9917)},7975:function(e,n,t){"use strict";var r=t(7462),i=t(3366),a=t(7326),o=t(1721),c=t(7294),s=t(5697),l=t.n(s),u=t(4184),d=t.n(u),f=t(3663),m={active:l().bool,"aria-label":l().string,block:l().bool,color:l().string,disabled:l().bool,outline:l().bool,tag:f.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),onClick:l().func,size:l().string,children:l().node,className:l().string,cssModule:l().object,close:l().bool},b=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind((0,a.Z)(t)),t}(0,o.Z)(n,e);var t=n.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],a=e.block,o=e.className,s=e.close,l=e.cssModule,u=e.color,m=e.outline,b=e.size,h=e.tag,g=e.innerRef,p=(0,i.Z)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof p.children&&(p.children=c.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(m?"-outline":"")+"-"+u,w=(0,f.mx)(d()(o,{close:s},s||"btn",s||v,!!b&&"btn-"+b,!!a&&"btn-block",{active:n,disabled:this.props.disabled}),l);p.href&&"button"===h&&(h="a");var x=s?"Close":null;return c.createElement(h,(0,r.Z)({type:"button"===h&&p.onClick?"button":void 0},p,{className:w,ref:g,onClick:this.onClick,"aria-label":t||x}))},n}(c.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},n.Z=b}}]);