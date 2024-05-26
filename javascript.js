const icon1 = document.querySelector('.fa-star')
const icon2 = document.querySelector('.fa-heart')
const icon3 = document.querySelector('.fa-bars-staggered')
const menu = document.querySelector('.menu')
const span1 = document.querySelector('.span1')
const Support = document.querySelector('.Support')
const xmarks = document.querySelector('.fa-xmark')
const span2 = document.querySelector('#span2')
const add = document.querySelector('#add')



icon1.addEventListener('click', () => {
    span1.style.display = 'none';
    icon1.style.color = 'yellow';
    Support.style.display = 'block'
    setTimeout(()=>{
        Support.style.display= "none";
    },2000);
});

icon2.addEventListener('click', ()=>{
    icon2.style.color='red';
});

icon3.addEventListener('click',()=>{
    menu.style.display = 'block'
})

xmarks.addEventListener('click',()=>{
    menu.style.display = 'none'
})

add.addEventListener('click',()=>{
    span2.style.display = 'block'
    console.log('evrythink')
})


