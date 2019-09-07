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
