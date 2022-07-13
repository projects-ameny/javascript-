//check if color locale storage
let mainColors = localStorage.getItem("color_option");


console.log(mainColors);
if (mainColors !== null){
  console.log("l1",localStorage);
    console.log("l2",localStorage.getItem("color_option")) 
    
    document.documentElement.style.setProperty('--main-color', mainColors)

    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");

           //add active class on element with data-color == local storage item
           if(element.dataset.color === mainColors){
            //add active class
            element.classList.add("active");
           }
    });
 

}

//Random background option
let backgroundOption = true;

//variable to control the background interval
let backgroundInterval;
 //check if there is local storage random background item

 let backgroundLocalItem = localStorage.getItem("background_option");
 //check if Random background Local Storage is not empty

 if(backgroundLocalItem !== null){
   
    if(backgroundLocalItem === true){
        backgroundOption = true;
    }else{
        backgroundOption = false;
    }
    console.log("apres",backgroundLocalItem);
 

 //remove active class from span 

 document.querySelectorAll(".Random-background span").forEach(element => {
element.classList.remove("active")
 });


 if(backgroundLocalItem === 'true'){
    document.querySelector(".Random-background .yes").classList.add("active");
 }else{
    document.querySelector(".Random-background .no").classList.add("active");
 }
 }

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
 

        localStorage.setItem("color_option", e.target.dataset.color);
        //remove Active from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active")
    });
});


//switch  Random background option
const randombackgEl = document.querySelectorAll(".Random-background span");
//loop on all span
randombackgEl.forEach(span => {
    //click span
   span.addEventListener("click", (e) => {
      
     
        //remove Active from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);

        }else{
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
})




/* ############# end toggel ##################*/
/* ############# start landing ##################*/
//select landing ppage Element
let landingPage = document.querySelector(".landing-page");


//get array of imgs

let imgsArray  = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg"];
/*  console.log(randomNumber); */




//function to random imgs
function randomizeImgs(){
    if(backgroundOption === true){

        backgroundInterval = setInterval(() => {
            //get Random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            //change background image url
        landingPage.style.backgroundImage = 'url("imgs/' +imgsArray[randomNumber] +'")';
            
            console.log(randomNumber);
        }, 1000);
        /* ############# end landing ##################*/

    }
}
randomizeImgs();


 /* ############# start skill ##################*/ 
let ourSkills = document.querySelector(".skill");
window.onscroll = function (){
    //skill offset top
    let skillOffsetTop = ourSkills.skillOffsetTop;
//outer height skills
let skillsOuterHeight = ourSkills.offsetHeight;

//window height
let windowHeight = this.innerHeight;

// window scrollTop
let windowScrollTop = this.pageYOffset;


if ( windowScrollTop > (skillsOuterHeight )){
 let allskills = document.querySelectorAll(".skill .skill-box .skill-progress span");
 allskills.forEach(skill => {
    skill.style.width = skill.dataset.progress;
 });
}
console.log("windowScrollTop", windowScrollTop);

console.log("skillsOuterHeight", skillsOuterHeight);
console.log("windowHeight", windowHeight);


console.log("skillOffsetTop",skillOffsetTop);

};
/* ############# end skill ##################*/
/* #############start gallery ##################*/

//create popup the image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        //create overlay Element
        let overlay = document.createElement("div");
        //add class overlay
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);

        //create the popup
let popupBox = document.createElement("div");

popupBox.className ="popup-box";

if(img.alt !== null){
    //create heading
    let imgheading = document.createElement("h3");
    //create text for heading 
    let imgText = document.createTextNode(img.alt);
    //append the heading to the popup box
    imgheading.appendChild(imgText);
    // append the heading to the popup box
    popupBox.appendChild(imgheading);
}


//create the image
let popupImage = document.createElement("img");

//set image source
popupImage.src = img.src;
//add img to popup box
popupBox.appendChild(popupImage);
document.body.appendChild(popupBox);
// create the close spab 
let closeButton = document.createElement("span");
let closebuttontext = document.createTextNode("x");
//append text to close button 
closeButton.appendChild(closebuttontext);
//add close button to the popup box
closeButton.className ='close-button';
popupBox.appendChild(closeButton);
});
});
document.addEventListener("click", function (e) {

if(e.target.className == 'close-button'){
    //remove the current popup
    e.target.parentNode.remove()
    //remove overlay
    document.querySelector(".popup-overlay").remove();
}})
/* ############# end gallery ##################*/

// select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".links a");

function scroll(elements){
elements.forEach(ele => {
    ele.addEventListener("click",(e) => {
        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        });
    });  
});}
scroll(allBullets);
scroll(allLinks);

let bulletsSpan = document.querySelectorAll(".bullets-option span")
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");
if(bulletLocalItem !== null){
    console.log("not empyt");
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });
    if(bulletLocalItem === 'block'){
        bulletsContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active")


    }else{
        bulletsContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active")

    }
}

bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) =>{
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if(span.dataset.display === 'yes'){
            bulletsContainer.style.display = 'block';
            localStorage.setItem(".bullets-option", 'block');
  
  document.querySelector(".bullets-option .yes").classList.add("active");
  
        }else{
            bulletsContainer.style.display = 'none'; 
            document.querySelector(".bullets-option .no").classList.add("active");
        }
        
   
    })
})

//reset button 

document.querySelector(".reset-option").onclick = function (){
 /*    localStorage.clear(); */
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    window.location.reload();
    }
    //toggle menu 
    let toggleBtn = document.querySelector(".toggle-menu");
    let tlinks = document.querySelector(".links");

    
    toggleBtn.onclick = function (e) {
     /* e.StopPropagation(); */
     this.classList.toggle("menu-active");
        tlinks.classList.toggle("open");
    };
    document.addEventListener("click", (e) => {
        
        if(e.target !== toggleBtn && e.target !== tlinks){
    
       if(tlinks.classList.contains("open")){
        
        toggleBtn.classList.toggle("menu-active");
        tlinks.classList.toggle("open");

       }    
        }
    });
        //stop propagation on menu
      /*   tlinks.onclick = function (e){
            e.StopPropagation();
        } */


