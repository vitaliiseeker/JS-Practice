!function(){function e(e){return e&&e.__esModule?e.default:e}var t;function n(e,t,n){var u,r,o,l,i;function c(){var a=Date.now()-l;a<t&&a>=0?u=setTimeout(c,t-a):(u=null,n||(i=e.apply(o,r),o=r=null))}null==t&&(t=100);var a=function(){o=this,r=arguments,l=Date.now();var a=n&&!u;return u||(u=setTimeout(c,t)),a&&(i=e.apply(o,r),o=r=null),i};return a.clear=function(){u&&(clearTimeout(u),u=null)},a.flush=function(){u&&(i=e.apply(o,r),o=r=null,clearTimeout(u),u=null)},a}n.debounce=n,t=n;var u=document.querySelector(".js-password"),r=document.querySelector(".js-error");document.querySelector("form").addEventListener("submit",(function(e){return e.preventDefault()})),u.addEventListener("input",e(t)((function(e){if(e.target.value.split("").some((function(e){return!isNaN(Number(e))})))return r.textContent="Ok",void(r.style.color="green");r.style.color="red",r.textContent="ERROR",setTimeout((function(){return r.textContent=""}),3e3)}),1e3))}();
//# sourceMappingURL=09_01_passwordvalid.e0b53fe3.js.map
