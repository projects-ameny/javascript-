//select landing ppage Element
let landingPage = document.querySelector(".landing-page");


//get array of imgs

let imgsArray  = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg"];


 

/*  console.log(randomNumber); */
setInterval(() => {
    //get Random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    //change background image url
landingPage.style.backgroundImage = 'url("imgs/' +imgsArray[randomNumber] +'")';
    
    console.log(randomNumber);
}, 2000);
