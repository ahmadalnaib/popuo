const button=document.querySelector('button');
const popup1=document.querySelector('.contact-popup');
const close=document.querySelector('.popup-close');


button.addEventListener('click',()=>{
popup1.style.display='block';
});

close.addEventListener('click',()=>{
popup1.style.display='none';
});