const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg"
 ];

 const chosenImage = images[Math.floor(Math.random()*images.length)];

 const bgImage = document.createElement('img');
 bgImage.src = `img/${chosenImage}`;

//  const body = document.querySelector('body');

// document.body.appendChild(bgImage);

 console.log(bgImage);