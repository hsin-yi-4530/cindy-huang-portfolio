document.getElementById('year').textContent=new Date().getFullYear();
const button=document.querySelector('.menu');const nav=document.querySelector('.nav nav');button.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
