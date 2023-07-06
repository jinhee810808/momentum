// const images = [
//     "1.jpeg",
//     "2.jpeg",
//     "3.jpeg",
//     "4.jpeg",
//     "5.jpeg",
//     "6.jpeg",
//     "7.jpeg",
//     "8.jpeg",
//     "9.jpeg",
//     "10.jpeg",
//     "11.jpeg",
//     "12.jpeg",
//     "13.jpeg",
//     "14.jpeg",
//     "15.jpeg"
//  ];

 const images = [
    ["1.jpeg","해리포터스튜디오"],
    ["2.jpeg","해리포터스튜디오"],
    ["3.jpeg","노팅힐서점"],
    ["4.jpeg","타워브릿지"],
    ["5.jpeg","윈저성"],
    ["6.jpeg","윈저성"],
    ["7.jpeg","대영박물관"],
    ["8.jpeg","빅벤"],
    ["9.jpeg","템즈강"],
    ["10.jpeg","타워브릿지"],
    ["11.jpeg","윈저성"],
    ["12.jpeg","타워브릿지"],
    ["13.jpeg","윈저성"],
    ["14.jpeg","해리포터스튜디오"],
    ["15.jpeg","빅벤"]
    
 ]

 const chosenImage = Math.floor(Math.random()*images.length);

 const bgImage = document.createElement('img');
 bgImage.src = `img/${images[chosenImage][0]}`;

 const body = document.querySelector('body');
 const where = document.querySelector('.where');

 where.innerText = images[chosenImage][1];

document.body.appendChild(bgImage);

//  console.log(bgImage);