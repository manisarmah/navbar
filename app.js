const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const logo = document.querySelector('.navbar-brand');

hamburger.addEventListener('click',()=>
{
    navLinks.classList.toggle("open");
    links.forEach(link=>{
        link.classList.toggle("fade");
    })
})
 
logo.addEventListener('click',()=>
{
    navLinks.classList.toggle("add");
    
})
