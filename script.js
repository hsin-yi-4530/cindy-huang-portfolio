document.getElementById('year').textContent=new Date().getFullYear();
const button=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
button.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const toggle=document.querySelector('.archive-toggle');
const archive=document.getElementById('videoArchive');
if(toggle&&archive){toggle.addEventListener('click',()=>{const opening=archive.hidden;archive.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));toggle.textContent=opening?'Hide additional videos':'View all 12 more videos';if(opening){archive.querySelectorAll('iframe[data-src]').forEach(frame=>{frame.src=frame.dataset.src;frame.removeAttribute('data-src');});}});}
