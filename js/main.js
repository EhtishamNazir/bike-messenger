// Navbar Script
const navToggler = document.querySelector(".nav-toggler");
const nav2 = document.querySelector(".nav-2");
const downloadText = document.querySelector(".download-text");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    nav2.style.display = "block";
    downloadText.style.display = "block";
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";

    }
    else{
    	nav.removeAttribute("style");
      nav2.style.display = "none";
      downloadText.style.display = "none";
    }
 }

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("fixed", window.scrollY > 0)
})

 // Slider Script
 

 const slides=document.querySelector(".slider").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const indicator=document.querySelector(".indicator");
 let index=0;


   prev.addEventListener("click",function(){
       prevSlide();
       updateCircleIndicator(); 
       resetTimer();
   })

   next.addEventListener("click",function(){
      nextSlide(); 
      updateCircleIndicator();
      resetTimer();
      
   })

   // create circle indicators
    function circleIndicator(){
        for(let i=0; i< slides.length; i++){
          const div=document.createElement("div");
                // div.innerHTML=i+1;
                div.setAttribute("onclick","indicateSlide(this)")
                div.id=i;
                if(i==0){
                  div.className="active";
                }
               indicator.appendChild(div);
        }
    }
    circleIndicator();

    function indicateSlide(element){
         index=element.id;
         changeSlide();
         updateCircleIndicator();
         resetTimer();
    }
     
    function updateCircleIndicator(){
      for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
      }
      indicator.children[index].classList.add("active");
    }

   function prevSlide(){
     if(index==0){
      index=slides.length-1;
     }
     else{
      index--;
     }
     changeSlide();
   }

   function nextSlide(){
      if(index==slides.length-1){
        index=0;
      }
      else{
        index++;
      }
      changeSlide();
   }

   function changeSlide(){
           for(let i=0; i<slides.length; i++){
             slides[i].classList.remove("active");
           }

       slides[index].classList.add("active");
   }

   function resetTimer(){
      // when click to indicator or controls button 
      // stop timer 
      clearInterval(timer);
      // then started again timer
      timer=setInterval(autoPlay,4000);
   }
 
  
  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,4000);


 



 