var e;function t(e,t,r){var c,i,n,o,a;function s(){var l=Date.now()-o;l<t&&l>=0?c=setTimeout(s,t-l):(c=null,r||(a=e.apply(n,i),n=i=null))}null==t&&(t=100);var l=function(){n=this,i=arguments,o=Date.now();var l=r&&!c;return c||(c=setTimeout(s,t)),l&&(a=e.apply(n,i),n=i=null),a};return l.clear=function(){c&&(clearTimeout(c),c=null)},l.flush=function(){c&&(a=e.apply(n,i),n=i=null,clearTimeout(c),c=null)},l}t.debounce=t,e=t;const r=[{car:"Honda",type:"Civic",price:12e3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU"},{car:"Audi",type:"Q7",price:4e4,img:"https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg"},{car:"BMW",type:"5 siries",price:9e3,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU"},{car:"Honda",type:"Accord",price:2e4,img:"https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg"},{car:"Volvo",type:"XC60",price:7e3,img:"https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320"}],c=document.querySelector("input"),i=document.querySelector(".list");function n(e){if(e.length){return e.map((({car:e,type:t,price:r,img:c})=>`<li>\n      <img src="${c}" alt="" width='300'>\n      <p class="name">${e}</p>\n      <p class="type">${t}</p>\n      <p class="price">${r}</p>\n    </li>`)).join("")}return"<li><img src='https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg' width=\"400\"></li>"}try{const e=localStorage.getItem("sorted");if(!e)throw new Error;"by_price"===e?s():l()}catch(e){}finally{i.innerHTML=n(r)}c.addEventListener("input",(0,e.debounce)((function(e){const t=document.querySelector('input[type="radio"]').checked;let c=null;t&&(c=r.filter((t=>t.type.toLowerCase().includes(e.target.value.toLowerCase()))));t||(c=r.filter((t=>t.car.toLowerCase().includes(e.target.value.toLowerCase()))));i.innerHTML=n(c),localStorage.setItem("inputsearch",JSON.stringify(c))}),1e3));document.querySelector(".lastsearch").addEventListener("click",(function(e){try{const e=JSON.parse(localStorage.getItem("inputsearch"));i.innerHTML=n(e)}catch(e){}}));const o=document.querySelector(".sort_price"),a=document.querySelector(".sort_name");function s(e){r.sort(((e,t)=>e.price-t.price)),i.innerHTML=n(r),localStorage.setItem("sorted","by_price")}function l(e){r.sort(((e,t)=>e.car.localeCompare(t.car))),i.innerHTML=n(r),localStorage.setItem("sorted","by_name")}o.addEventListener("click",s),a.addEventListener("click",l);
//# sourceMappingURL=08_31_car.75dc0370.js.map