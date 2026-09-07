
const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
