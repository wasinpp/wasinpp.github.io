_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),s=n("FYa8"),i=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,i=f.length;s<i;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var u=o.props[l],d=r[l]||new Set;d.has(u)?a=!1:(d.add(u),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}b.rewind=function(){};var x=b;t.default=x},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n("nKUr");n("8Kt/");function o(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a,{}),Object(r.jsx)(i,{}),Object(r.jsx)(s,{})]})}var a=function(){return Object(r.jsxs)("div",{className:"relative flex items-center bg-gray-200 h-screen w-screen bg-gray-700",children:[Object(r.jsxs)("div",{className:"flex-1 content-center items-center",children:[Object(r.jsxs)("span",{className:"text-4xl font-bold text-center text-white",children:[Object(r.jsx)("p",{children:"Hi, I'm Name"}),Object(r.jsx)("p",{children:"Role"})]}),Object(r.jsx)("div",{className:"py-8"}),Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)("button",{className:" text-sm font-bold transition  duration-500  ease-in-out  py-3 px-6 border  border-blue-500 rounded-full text-white                 bg-transparent transform  hover:text-white  hover:bg-blue-600  hover:-translate-x-1  hover:scale-110  ",children:"BUTTON"})})]}),Object(r.jsxs)("a",{className:" transition duration-300 ease-in-out  absolute bottom-0 w-screen text-white flex-col text-gray-500  transform  hover:text-white hover:-translate-y-1   pb-8         ",href:"#",children:[Object(r.jsx)("div",{className:"text-center",children:"Learn more about what I do"}),Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsx)(c,{})})]})]})},c=function(){return Object(r.jsx)("svg",{className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})})},s=function(){return Object(r.jsx)("section",{class:"text-gray-700 body-font overflow-hidden",children:Object(r.jsx)("div",{class:"container px-5 py-24 mx-auto",children:Object(r.jsxs)("div",{class:"lg:w-4/5 mx-auto flex flex-wrap",children:[Object(r.jsx)("img",{alt:"ecommerce",class:"lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded",src:"https://dummyimage.com/400x400"}),Object(r.jsxs)("div",{class:"lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0",children:[Object(r.jsx)("h2",{class:"text-sm title-font text-gray-500 tracking-widest",children:"BRAND NAME"}),Object(r.jsx)("h1",{class:"text-gray-900 text-3xl title-font font-medium mb-4",children:"Name"}),Object(r.jsxs)("div",{class:"flex mb-4",children:[Object(r.jsx)("a",{class:"flex-grow text-teal-500 border-b-2 border-teal-500 py-2 text-lg px-1",children:"Company"}),Object(r.jsx)("a",{class:"flex-grow border-b-2 border-gray-300 py-2 text-lg px-1",children:"Overall responsibilities"})]}),Object(r.jsx)("p",{class:"leading-relaxed mb-4",children:"sdfksdfjskdlfjsldkf"}),Object(r.jsxs)("div",{class:"flex border-t border-gray-300 py-2",children:[Object(r.jsx)("span",{class:"text-gray-500",children:"Color"}),Object(r.jsx)("span",{class:"ml-auto text-gray-900",children:"Blue"})]}),Object(r.jsxs)("div",{class:"flex border-t border-gray-300 py-2",children:[Object(r.jsx)("span",{class:"text-gray-500",children:"Size"}),Object(r.jsx)("span",{class:"ml-auto text-gray-900",children:"Medium"})]}),Object(r.jsxs)("div",{class:"flex border-t border-b mb-6 border-gray-300 py-2",children:[Object(r.jsx)("span",{class:"text-gray-500",children:"Quantity"}),Object(r.jsx)("span",{class:"ml-auto text-gray-900",children:"4"})]}),Object(r.jsxs)("div",{class:"flex",children:[Object(r.jsx)("span",{class:"title-font font-medium text-2xl text-gray-900",children:"$58.00"}),Object(r.jsx)("button",{class:"flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded",children:"Button"}),Object(r.jsx)("button",{class:"rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",children:Object(r.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(r.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})})})]})]})]})})})},i=function(){return Object(r.jsx)("div",{className:"py-8"})}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){c(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);