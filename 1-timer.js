import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as y,i as p}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("button[data-start]"),i=document.querySelector("#datetime-picker"),D=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),v=document.querySelector("span[data-minutes]"),b=document.querySelector("span[data-seconds]"),m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){m.defaultDate>=t[0]?(r.disabled=!0,p.error({title:"Error",message:"Please choose a date in the future"})):r.disabled=!1}};y("#datetime-picker",m);function c(t){const e=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),n=Math.floor(t%864e5%36e5/6e4),a=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:o,minutes:n,seconds:a}}console.log(c(2e3));console.log(c(14e4));console.log(c(2414e4));const s=t=>t.toString().padStart(2,"0");r.addEventListener("click",g);function g(){r.disabled=!0,i.disabled=!0;const t=document.querySelector("#animatedDiv");t.classList.add("animated");const d=setInterval(()=>{const u=new Date,l=new Date(i.value)-u,{days:e,hours:o,minutes:n,seconds:a}=c(l);D.textContent=s(e),S.textContent=s(o),v.textContent=s(n),b.textContent=s(a),[e,o,n,a].every(h=>h===0)&&(clearInterval(d),i.disabled=!1,t.classList.remove("animated"))},1e3)}
//# sourceMappingURL=1-timer.js.map
