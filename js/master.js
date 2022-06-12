/* ############# start toggel ##################*/
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
//loop on all list items
colorsLi.forEach(li => {
    //click list items
    li.addEventListener("click", (e) => {
      
        //set color on root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)

    });
})



/* ############# end toggel ##################*/
/* ############# start landing ##################*/
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
/* ############# end landing ##################*/