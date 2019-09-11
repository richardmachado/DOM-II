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
   
  })
  aTags.forEach((nav) => {
    nav.addEventListener('mouseout', (event) => {
      nav.style.transform = 'scale(1.0)';
      nav.style.transition = 'transform 0.5s'; 
     })
  });
  });



  // 4
const funBus = document.querySelector ('h1');
funBus.addEventListener('auxclick', (event) => {
alert ('you should not copy this');

});

//5,6
const highLighter = document.querySelector ('body');
highLighter.addEventListener('keydown', (event) => {
  highLighter.style.color = 'orange';
})
highLighter.addEventListener('keyup', (event) => {
  highLighter.style.color = 'black';
 
});


// scroll not working
// 7,8
const scrollWindow = document.querySelector ('.footer');
scrollWindow.addEventListener('wheel', (event) => {
  scrollWindow.style.transform = 'scale(1.4)';
 
});
scrollWindow.addEventListener('click', (event) => {
  scrollWindow.style.transform = 'scale(1.0)';
});
 
// 9, 10

const imagesAll = document.querySelectorAll ('img');
imagesAll.forEach((img) => {
  img.addEventListener('dblclick', (event) => {
img.src = 'https://cdn.admonsters.com/wp-content/uploads/2018/07/doubleclick-660.png';
img.alt ='double click me'
  })
  imagesAll.forEach((img) => {
    img.addEventListener('drag', (event) => {
console.log('it is working');
})
});
});




aTags.forEach((nav) => {
  nav.addEventListener('click', (event) => {
    event.preventDefault();
  })
});