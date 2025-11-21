const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const co=document.getElementById('close');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(co){
    co.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}
