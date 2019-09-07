// Your code goes here






const allButtons = document.querySelectorAll ('.btn');

allButtons.forEach((button) => (
  button.addEventListener('click', (event) => {      
    button.style.transform = 'scale(1.3)';
     button.style.transition = 'transform 0.5s'; 
  })
));

const aTags = document.querySelectorAll ('a');
aTags.forEach((nav) => {
  nav.addEventListener('mouseover', (event) => {
    nav.style.transform = 'scale(1.4)';
    nav.style.transition = 'transform 0.5s'; 
 
  })
 
});


aTags.forEach((nav) => {
  nav.addEventListener('mouseout', (event) => {
    nav.style.transform = 'scale(1.0)';
    nav.style.transition = 'transform 0.5s'; 
  })
});



const imagesAll = document.querySelectorAll ('img');
imagesAll.forEach((img) => {
  img.addEventListener('dblclick', (event) => {
img.src = 'https://cdn.admonsters.com/wp-content/uploads/2018/07/doubleclick-660.png';
img.alt ='double click me'
  })
});


const funBus = document.querySelector ('h1');
funBus.addEventListener('auxclick', (event) => {
alert ('you should not copy this');

})






//* prevent default not working

aTags.forEach((nav) => {
  nav.addEventListener(click, (event) => {
    nav.preventDefault();
  })
});