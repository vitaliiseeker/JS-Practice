const o=[{id:"sku1",qty:1},{id:"sku2",qty:2},{id:"sku3",qty:3},{id:"sku1",qty:6},{id:"sku1",qty:8},{id:"sku2",qty:19},{id:"sku4",qty:1}];var l;console.log(o),console.log(((l=o).forEach((function(o,s,t){console.log(s),console.log(l[s].qty),l[s].qty+=l.splice(t.slice(s+1).reduce(((t,c,q,y)=>(c.id===o.id&&(console.log(t),console.log(c.qty),console.log(l[s].qty),l[s].qty+=c.qty,console.log(l[s].qty),l.splice(q-s+1,1)),t)),l[s].qty))})),l));
//# sourceMappingURL=09_02_sort_products.eacefe9b.js.map