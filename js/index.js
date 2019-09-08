// Your code goes here






const allButtons = document.querySelectorAll ('.btn');
// 1 
allButtons.forEach((button) => (
  button.addEventListener('click', (event) => {      
    button.style.transform = 'scale(1.3)';
     button.style.transition = 'transform 0.5s'; 
  })
));

// 2 and 3
const aTags = document.querySelectorAll ('a');
aTags.forEach((nav) => {
  nav.addEventListener('mouseover', (event) => {
    nav.style.transform = 'scale(1.4)';
    nav.style.transition = 'transform 0.5s'; 
    nav.preventDefault();
  })
  aTags.forEach((nav) => {
    nav.addEventListener('mouseout', (event) => {
      nav.style.transform = 'scale(1.0)';
      nav.style.transition = 'transform 0.5s'; 
     })
  });
  });




// 4 
const imagesAll = document.querySelectorAll ('img');
imagesAll.forEach((img) => {
  img.addEventListener('dblclick', (event) => {
img.src = 'https://cdn.admonsters.com/wp-content/uploads/2018/07/doubleclick-660.png';
img.alt ='double click me'
  })
});

// 5 
const funBus = document.querySelector ('h1');
funBus.addEventListener('auxclick', (event) => {
alert ('you should not copy this');

});

//6 , 7
const highLighter = document.querySelector ('body');
highLighter.addEventListener('keydown', (event) => {
  highLighter.style.color = 'orange';
})
highLighter.addEventListener('keyup', (event) => {
  highLighter.style.color = 'black';
 
});


// scroll not working
// 8
const scrollWindow = document.querySelector ('body');
scrollWindow.addEventListener('scroll', (event) => {
  scrollWindow.style.color = 'gray';
});





//* prevent default not working

aTags.forEach((nav) => {
  nav.addEventListener('click', (event) => {
    nav.preventDefault();
  })
});