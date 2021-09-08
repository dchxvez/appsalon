let page=1;const userDate={name:"",date:"",hour:"",services:[]};function init(){showServices(),showSection(),changeSection(),nextPage(),prevPage(),buttonPage(),showResume(),nameUserDate(),dateUserDate(),disableDates(),hourUserDate()}function showSection(){const e=document.querySelector(".show-section");e&&e.classList.remove("show-section");document.querySelector("#tab-"+page).classList.add("show-section");const t=document.querySelector(".tabs .actual");t&&t.classList.remove("actual");document.querySelector(`[data-tab="${page}"]`).classList.add("actual")}function changeSection(){document.querySelectorAll(".tabs button").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),page=parseInt(e.target.dataset.tab),showSection(),buttonPage()})})}async function showServices(){try{const e=await fetch("../../services.json"),t=await e.json(),{servicios:n}=t;n.forEach(e=>{const{id:t,nombre:n,precio:s}=e;console.log(e);const a=document.createElement("P");a.textContent=n,a.classList.add("service-name"),a.classList.add("no-margin");const c=document.createElement("P");c.textContent="$ "+s,c.classList.add("service-price"),c.classList.add("no-margin");const o=document.createElement("DIV");o.classList.add("service"),o.dataset.idService=t,o.onclick=serviceSelected,o.appendChild(a),o.appendChild(c),document.querySelector("#services").appendChild(o)})}catch(e){console.log(e)}}function serviceSelected(e){let t;if(t="P"===e.target.tagName?e.target.parentElement:e.target,t.classList.contains("selected")){t.classList.remove("selected");deleteService(parseInt(t.dataset.idService))}else{t.classList.add("selected");addService({id:parseInt(t.dataset.idService),name:t.firstElementChild.textContent,price:t.firstElementChild.nextElementSibling.textContent})}}function deleteService(e){const{services:t}=userDate;userDate.services=t.filter(t=>t.id!==e)}function addService(e){const{services:t}=userDate;userDate.services=[...t,e]}function nextPage(){document.querySelector("#next").addEventListener("click",()=>{page++,buttonPage()})}function prevPage(){document.querySelector("#prev").addEventListener("click",()=>{page--,buttonPage()})}function buttonPage(){const e=document.querySelector("#next"),t=document.querySelector("#prev");1===page?(t.classList.add("hide"),e.classList.remove("hide")):3===page?(e.classList.add("hide"),t.classList.remove("hide"),showResume()):(t.classList.remove("hide"),e.classList.remove("hide")),showSection()}function showResume(){const{name:e,date:t,hour:n,services:s}=userDate,a=document.querySelector("#tab-3");for(;a.firstChild;)a.removeChild(a.firstChild);if(Object.values(userDate).includes("")||0===userDate.services.length){const e=document.createElement("P");return e.textContent="Faltan datos de servicios, hora, fecha o nombre",e.classList.add("invalid-date"),void a.appendChild(e)}const c=document.createElement("P");c.innerHTML="<span>Nombre:</span> "+e;const o=document.createElement("P");o.innerHTML="<span>Fecha:</span> "+t;const r=document.createElement("P");r.innerHTML="<span>Hora:</span> "+n;const i=document.createElement("H3");i.textContent="Resumen Cita";const d=document.createElement("DIV");d.classList.add("services-resume");const l=document.createElement("H3");l.textContent="Servicios";let u=0;s.forEach(e=>{const t=document.createElement("DIV");t.classList.add("service-container");const n=document.createElement("P");n.textContent=e.name;const s=document.createElement("P");s.textContent=e.price,s.classList.add("service-price");const a=e.price.split("$");u+=parseInt(a[1].trim()),t.appendChild(n),t.appendChild(s),d.appendChild(t)}),a.appendChild(i),a.appendChild(c),a.appendChild(o),a.appendChild(r),a.appendChild(l),a.appendChild(d);const m=document.createElement("P");m.classList.add("total"),m.innerHTML="<span>Total a pagar: </span> $"+u,a.appendChild(m)}function nameUserDate(){document.querySelector("#name").addEventListener("change",e=>{const t=e.target.value.trim();""===t||t.length<3?showAlert("Nombre no válido","error"):userDate.name=t})}function showAlert(e,t){if(document.querySelector(".alert"))return;const n=document.createElement("DIV");n.textContent=e,n.classList.add("alert"),"error"===t&&n.classList.add("error");document.querySelector(".form").appendChild(n),setTimeout(()=>{n.remove()},3e3)}function dateUserDate(){const e=document.querySelector("#date");e.addEventListener("change",t=>{const n=new Date(t.target.value).getUTCDay();[0].includes(n)?(t.preventDefault(),e.value="",showAlert("No abrimos los Domingos","error")):userDate.date=e.value})}function disableDates(){const e=document.querySelector("#date"),t=new Date,n=t.getFullYear(),s=t.getMonth()+1,a=t.getDate()+1,c=`${n}-${s<10?"0"+s:s}-${a<10?"0"+a:a}`,o=`${n+1}-${s<10?"0"+s:s}-${a<10?"0"+a:a}`;e.min=c,e.max=o}function hourUserDate(){const e=document.querySelector("#hour");e.addEventListener("change",t=>{const n=t.target.value,s=n.split(":");s[0]<10||s[0]>=20?(t.preventDefault(),e.value="",showAlert("Abrimos 10:00 am y cerramos 8:00 pm","error")):userDate.hour=n})}document.addEventListener("DOMContentLoaded",()=>{init()});
//# sourceMappingURL=bundle.js.map
