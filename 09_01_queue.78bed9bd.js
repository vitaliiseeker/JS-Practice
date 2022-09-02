function o(o,n){const c={};for(let o=1;o<=n;o++)c[o]=0;return o.forEach((o=>{const n=Object.values(c),e=n.indexOf(Math.min(...n));c[e+1]+=o})),c}console.log(o([12,3,5,6,2,15,7],2)),console.log(o([12,3,5,6,2,15,7],3));
//# sourceMappingURL=09_01_queue.78bed9bd.js.map
