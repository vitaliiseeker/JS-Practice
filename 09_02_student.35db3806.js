!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("jdVyQ",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}})),o.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=u(o("ds8z5")),n=u(o("l5bVx"));function u(e){return e&&e.__esModule?e:{default:e}}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var r=i.default(e,t,"get");return a.default(e,r)};var i=f(o("1UHsN")),a=f(o("ffZzF"));function f(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,r){d.default(e,t),t.set(e,r)};var c,d=(c=o("5k7tO"))&&c.__esModule?c:{default:c};var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,r){var n=v.default(e,t,"set");return _.default(e,n,r),r};var v=y(o("1UHsN")),_=y(o("jdVyQ"));function y(e){return e&&e.__esModule?e:{default:e}}var b={};function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(e,t,r){t&&g(e.prototype,t);r&&g(e,r);return e};var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O.default(e,t)};var O=function(e){return e&&e.__esModule?e:{default:e}}(o("gD1JV"));var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e){var t=w.default();return function(){var r,n=j.default(e);if(t){var o=j.default(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return M.default(this,r)}};var w=P(o("aTHs7")),j=P(o("fVNic")),M=P(o("jmhxu"));function P(e){return e&&e.__esModule?e:{default:e}}var m=new WeakMap,T=new WeakMap,N=function(t){"use strict";e(h)(n,t);var r=e(x)(n);function n(t,o,l){var i;return e(u)(this,n),(i=r.call(this,t,o)).year=l,i}return e(b)(n,[{key:"getCourse",value:function(){var e=(new Date).getFullYear()-this.year;return e<1?"The student is a freshman":e<=5?"".concat(e," course"):"The student is a graduate"}}]),n}(function(){"use strict";function t(r,n){e(u)(this,t),e(s)(this,m,{writable:!0,value:void 0}),e(s)(this,T,{writable:!0,value:void 0}),e(p)(this,m,r),e(p)(this,T,n)}return e(b)(t,[{key:"getFullName",value:function(){return"".concat(e(l)(this,m)," ").concat(e(l)(this,T))}}]),t}()),k=new N("Петрик","Пяточкин",2019),E=new N("Mark","Ivanov",2017),F=new N("Марія","Золоткова",2022);console.log(k.getFullName()),console.log(k.getCourse()),console.log(E.getFullName()),console.log(E.getCourse()),console.log(F.getFullName()),console.log(F.getCourse())}();
//# sourceMappingURL=09_02_student.35db3806.js.map