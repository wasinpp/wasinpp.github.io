_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"4huZ":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cv",function(){return n("X/E+")}])},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},"X/E+":function(e,t,n){"use strict";n.r(t);var r=n("nKUr");function o(e,t=[]){return(...n)=>{return(r=[...t,...n]).length>=e.length?e(...r):o(e,r);var r}}o((function(e,t,n){const r=e<0?n.length+e:e;if(e>=n.length||r<0)return n;const o=n.slice();return o[r]=t(o[r]),o}));function i(e){return()=>e}const a=Array.isArray;const s=o((function(e,t,n){return Object.assign({},n,{[e]:t})}));function c(e){return e<<0===e}Number.isInteger;o((function e(t,n,r){const o="string"===typeof t?t.split(".").map(e=>c(Number(e))?Number(e):e):t;if(0===o.length)return n;const i=o[0];if(o.length>1){const t="object"!==typeof r||null===r||!r.hasOwnProperty(i)?c(o[1])?[]:{}:r[i];n=e(Array.prototype.slice.call(o,1),n,t)}if(c(i)&&a(r)){const e=r.slice();return e[i]=n,e}return s(i,n,r)}));o((function(e,t,n){if(e>t)throw new Error("min must not be greater than max in clamp(min, max, value)");return n>=e&&n<=t?n:n>t?t:n<e?e:void 0}));function l(...e){if(0===e.length)throw new Error("compose requires at least one argument");return(...t)=>{const n=e.slice();if(n.length>0){let e=n.pop()(...t);for(;n.length>0;)e=n.pop()(e);return e}}}function u(e,t){return 1===arguments.length?t=>u(e,t):"string"===typeof e?`${e}${t}`:[...e,...t]}Object.keys;const d=o((function(e,t,n){if(!a(n))throw new TypeError("reduce: list must be array or iterable");let r=0;const o=n.length;for(;r<o;)t=e(t,n[r],r,n),r++;return t}));function f(e){return void 0===e||null===e||!0===Number.isNaN(e)}function p(e,...t){if(1===arguments.length)return(...t)=>p(e,...t);const n=t.length-1;let r,o=n+1,i=!1;for(;!i;){const e=t[n-o+1];0===o?i=!0:f(e)?o-=1:(r=e,i=!0)}return void 0===r?e:r}function h(e){const t=typeof e;if(null===e)return"Null";if(void 0===e)return"Undefined";if("boolean"===t)return"Boolean";if("number"===t)return Number.isNaN(e)?"NaN":"Number";if("string"===t)return"String";if(a(e))return"Array";if(e instanceof RegExp)return"RegExp";const n=e&&e.toString?e.toString():"";return["true","false"].includes(n)?"Boolean":Number.isNaN(Number(n))?n.startsWith("async")?"Async":"[object Promise]"===n?"Promise":"function"===t?"Function":e instanceof String?"String":"Object":"Number"}function m(e){const t=e.__proto__.toString();return["Error","TypeError"].includes(t)?[t,e.message]:[]}function b(e){return e.toDateString?[!0,e.getTime()]:[!1]}function g(e){return e.constructor!==RegExp?[!1]:[!0,e.toString()]}function j(e,t){if(1===arguments.length)return t=>j(e,t);const n=h(e);if(n!==h(t))return!1;if(["NaN","Undefined","Null"].includes(n))return!0;if("Number"===n)return Object.is(-0,e)===Object.is(-0,t)&&e.toString()===t.toString();if(["String","Boolean"].includes(n))return e.toString()===t.toString();if("Array"===n){const n=Array.from(e),r=Array.from(t);if(n.toString()!==r.toString())return!1;let o=!0;return n.forEach((e,t)=>{o&&(e===r[t]||j(e,r[t])||(o=!1))}),o}const r=g(e),o=g(t);if(r[0])return!!o[0]&&r[1]===o[1];if(o[0])return!1;const i=b(e),a=b(t);if(i[0])return!!a[0]&&i[1]===a[1];if(a[0])return!1;const s=m(e),c=m(t);if(s[0])return!!c[0]&&(s[0]===c[0]&&s[1]===c[1]);if("Object"===n){const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;let r=!0;return n.forEach(n=>{if(r){const o=e[n],i=t[n];o===i||j(o,i)||(r=!1)}}),r}return!1}o((function(e,t,n){if(!t||!n)throw new Error("wrong object inputs are passed to R.eqProps");return j(t[e],n[e])}));function v(e,t){if(1===arguments.length)return t=>v(e,t);if(null===t||void 0===t)return;let n=t,r=0;const o="string"===typeof e?e.split("."):e;for(;r<o.length;){if(null===n||void 0===n)return;n=n[o[r]],r++}return n}Object.is;const x=o((function(e,t,n){return(...r)=>!0===("boolean"===typeof e?e:e(...r))?t(...r):n(...r)}));function y(e,t,n){let r=-1,{length:o}=e;(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;const i=Array(o);for(;++r<o;)i[r]=e[r+t];return i}function N(e){return void 0===e||null===e}o((function(e,t,n){return n.slice().fill(t,e,e+1)}));function O(e,t){return 1===arguments.length?t=>O(e,t):t?t[e]:void 0}o((function(e,t,n){return e(n)>e(t)?n:t}));o((function(e,t,n){return e(n)<e(t)?n:t}));o((function(e,t,n){if(e<0||t<0)throw new Error("Rambda.move does not support negative indexes");if(e>n.length-1||t>n.length-1)return n;const r=n.slice();return r[e]=n[t],r[t]=n[e],r}));const w=e=>({x:e,map:t=>w(t(e))});const D=o((function(e,t,n){return e(e=>w(t(e)))(n).x}));o((function(e,t,n){return j(v(e,n),t)}));o((function(e,t,n){return p(e,v(t,n))}));d((function e(t,n){return 1===arguments.length?n=>e(t,n):t*n}),1);o((function(e,t,n){return!!n&&n[e]===t}));o((function(e,t,n){return function e(t,n){return 1===arguments.length?n=>e(t,n):null!=n&&n.constructor===t||n instanceof t}(e,n[t])}));o((function(e,t,n){return n?p(e,n[t]):e}));o((function(e,t,n){return n.replace(e,t)}));o((function(e,t,n){return D(e,i(t),n)}));o((function(e,t,n){return n.slice(e,t)}));function k(e,t){return 1===arguments.length?t=>k(e,t):e<0?t.slice():"string"===typeof t?t.slice(0,e):y(t,0,e)}o((function(e,t,n){return e(n)?t(n):n}));o((function(e,t,n){return k(t.length>n.length?n.length:t.length,t).map((t,r)=>e(t,n[r]))}));var A=[{company:"Gojek",roleName:"Mobile Engineer",roleDuration:"Mar 2020 up to now",roleOverview:"Working as the Develper Experience (devX) team member at Gojek for developing and maintaining some core libraries and framework. At the same time research on how to improve developer experience in current code base.",roleBullets:["Takeover for planning, maintaining, and add more functionality to Config Provider module, the module for APIs unification of remote configurations sources.","Maintain and develop CI script for automating task such as reporting the new release from Gitlab to slack, consume internal API for updating existing code base.","Take part in refactoring launching module, the module that responsible for launching all product in Gojek.","Depend on the requirement, may have opportunity to do on both Android and iOS to ensure feature parity between two platform (Android & iOS)."]},{company:"If You Can, LLC",roleApp:"NotifyMe 2",roleName:"Senior Android Developer",roleDuration:"Dec 2018 \u2013 March 2020",roleOverview:"Develop new version of NotifyMe, make a migration from NotifyMe 1 to NotifyMe 2. The project structure rely heavenly on MVI & MVVM pattern by using Rxjava, Room, LiveData, Dagger.",roleBullets:["Develop project structure with MVI, MVVM approach. Our structure use room as the single source of truth. The UI and View State is like a reflection of Room database. Since we need to synchronize content that share across several screen","Develop the navigation module that free from the android context according to the principle that business layer should be driven the navigation.","Develop beacon service and App permission for fetching notification from beacon identifier.","Develop online/offline data read feature with infinite scrolling functionality that can reuse across various page on the app","Develop place and notification\u2019s related operations like viewing the place details, notification details and making a bookmark or subscribe operation","Develop place searching functionality based on category and keywords. This feature allow user to search and make a subscription to his/her interested place.","Develop authentication functionality such as logout, login","Develop multi language base class for handling inapp change language","Config Proguard, Firebase and Crashlytic","Develop CI & CD system with Fastlane and Travis. The script make a test to every pull request to main branch. It also ease the release process either on play store or fabic beta channel."]},{company:"If You Can, LLC",roleApp:"FuturePark",roleName:"Senior Android Developer",roleDuration:"Aug 2018 \u2013 Dec 2018",roleOverview:"Developing an Android application for broadcasting shop promotion base on nearby beacon.",roleBullets:["Develop project structure with MVI, MVVM approach","Develop beacon service and App permission for fetching promotion from beacon identifier","Develop multi language base class for handling in-app change language","Develop UI parts: Promotions, Promotion by type, Group and Friend, Group related feature such as searching for group and member, invite member to join group, request to join group","Config Proguard and Crashlytic"]},{company:"Centre for Network Research at PSU (CNR)",roleApp:"e-Health connect",roleName:"Researcher and Android Developer",roleDuration:"Jan 2017 \u2013 Oct 2018",roleOverview:"Develop android application for gathering health and device data from various Blue-tooth devices",roleBullets:["Developed android service for gathering health data from Bluetooth devices in-cluding IEEE 11073 on classical Bluetooth, GATT profile on low-energy Bluetooth, and some peripheral devices via Bluetooth socket.","Developed user interface for allowing user to manage Bluetooth connection, and data that gathering from Bluetooth device","Managed local database through Room APIs","Continuous refactored code into testable, reusable code by properly applying de-sign patterns. "]}];var E=function(e){return Object(r.jsx)("div",{className:"bg-white w-a4-w h-a4-h text-sm shadow mt-0 mb-5mm mx-auto print:p-0 print:m-0 print:mb-5mm print:shadow-none",children:e.children})},S=function(e){var t,n=e.exp,o=e.isLast,a=e.isInit;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(I,{isInit:a,isLast:o}),Object(r.jsx)(C,{children:Object(r.jsx)("div",{className:"flex flex-no-wrap",children:Object(r.jsxs)("p",{children:[Object(r.jsxs)("strong",{children:[" ",n.company," "]}),l((t=u("/ "),x(N,i(""),t)),O("roleApp"))(n)]})})})]}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(M,{isLast:o}),Object(r.jsx)(C,{children:Object(r.jsx)("div",{className:"flex flex-no-wrap text-xs text-gray-600",children:Object(r.jsxs)("p",{children:[n.roleDuration+" - "+n.roleName," "]})})})]}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(M,{isLast:o}),Object(r.jsx)(C,{children:Object(r.jsx)("div",{className:"flex flex-no-wrap ",children:Object(r.jsx)("p",{children:n.roleOverview})})})]}),Object(r.jsxs)("div",{className:"flex",children:[Object(r.jsx)(M,{isLast:o}),Object(r.jsx)(C,{children:Object(r.jsx)("div",{className:"h-5"})})]})]})},I=function(e){var t=e.isInit,n=e.isLast;return Object(r.jsxs)("div",{className:"w-4 flex flex-col items-center",children:[x(j(!0),i(Object(r.jsx)("div",{className:"mt-1"})),i(Object(r.jsx)("div",{className:"h-full border border-blue-800"})))(t),Object(r.jsx)("div",{className:"rounded-full w-1 h-1 p-1 border-2 border-blue-800 bg-gray-300 "}),x(j(!0),i(Object(r.jsx)("div",{className:"mt-1"})),i(Object(r.jsx)("div",{className:"h-full border border-blue-800"})))(n)]})},M=function(e){var t=e.isLast;return Object(r.jsx)("div",{className:"w-4 flex justify-center",children:x(j(!0),i(),i(Object(r.jsx)("div",{className:"border border-blue-800"})))(t)})},C=function(e){return Object(r.jsx)("div",{className:"pl-4 w-full",children:e.children})};t.default=function(){return Object(r.jsxs)("div",{className:"flex-col flex-1 w-full items-center justify-center bg-gray-300 print:bg-transparent py-5mm print:p-0",children:[Object(r.jsx)(E,{children:Object(r.jsxs)("div",{className:"flex h-full",children:[Object(r.jsx)("div",{className:"w-2/6 bg-blue-800 print:bg-white print:border-r-2 print:my-a4 print:border-blue-800 text-center py-a4",children:Object(r.jsx)("div",{className:"w-full flex justify-center",children:Object(r.jsx)("div",{className:"rounded-full bg-gray-300 h-32 w-32 flex items-center justify-center",children:"Avatar"})})}),Object(r.jsx)("div",{className:"w-4/6 bg-white py-a4",children:Object(r.jsxs)("div",{className:"px-4",children:[Object(r.jsx)("div",{className:"text-4xl text-blue-900 flex",children:Object(r.jsx)("p",{className:"font-bold",children:"Name Surname"})}),Object(r.jsx)("div",{className:"text-xl text-gray-400 font-bold",children:"Progressional Title"}),Object(r.jsx)("div",{className:"pt-4"}),Object(r.jsx)("div",{className:"",children:"I\u2019m a software engineer with diverse experience in devloping software applications on various programming languages. Have strong knowledge in Android development tech stack, especially in functional reactive programming. Experience in all common architectures in mobile technology. Have good knowledge to automate CI/CD via Fastlane, Travis, Gitlab."}),Object(r.jsx)("div",{className:"pt-12"}),Object(r.jsxs)("div",{className:"w-full",children:[Object(r.jsx)("div",{className:"text-2xl font-bold text-blue-900",children:"Experience"}),Object(r.jsx)("hr",{className:"border border-solid border-blue-900"}),A.map((function(e,t){return Object(r.jsx)(S,{exp:e,isInit:j(0,t),isLast:3===t},t)}))]})]})})]})}),Object(r.jsx)(E,{children:Object(r.jsx)("p",{children:"Inside"})})]})}}},[["4huZ",0,1]]]);