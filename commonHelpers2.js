import"./assets/style-2f318007.js";import{i as o}from"./assets/vendor-77e16229.js";const r=document.querySelector("form"),n=document.querySelector("button");n.addEventListener("click",e=>{(!r.elements.delay.value||!r.elements.state.value)&&o.warning({class:"warning-alert",title:"Caution",titleColor:"white",message:"You forgot important data",messageColor:"white",position:"topRight"})});const a=(e,t)=>e==="fulfilled"?Promise.resolve(t):Promise.reject(t);r.addEventListener("submit",e=>{e.preventDefault();const t=e.target,i=t.elements.delay.value,l=t.elements.state.value;a(l,i).then(s=>setTimeout(()=>{o.success({class:"success-alert",title:"OK",titleColor:"white",message:`Fulfilled promise in ${s}ms`,messageColor:"white",position:"topRight"})},s)).catch(s=>setTimeout(()=>{o.error({class:"error-alert",title:"Error",titleColor:"white",message:`Rejected promise in ${s}ms`,messageColor:"white",position:"topRight"})},s))});
//# sourceMappingURL=commonHelpers2.js.map
