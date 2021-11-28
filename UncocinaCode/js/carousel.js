const track= document.getElementsByClassName("carousel_track")[0];
const slides = Array.from(track.children);
const nextButton = document.getElementsByClassName("carousel_button--right")[0];
const prevButton = document.getElementsByClassName("carousel_button--left")[0];
const dotsNav = document.getElementsByClassName("carousel_nav")[0];
const dots= Array.from(document.getElementsByClassName("carousel_container-indicator")[0].children);

const slideWidth= slides[0].getBoundingClientRect().width;/*gets the slide width*/

//arrange the slides next to one another
const setSlidePosition= (slide,index) => {
    slide.style.left = slide.style.left=slideWidth * index +"px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform ="translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot,targetDot) =>{
    currentDot.classList.remove("current-slide-dot");
    targetDot.classList.add("current-slide-dot");
}

//Click left, move slides to the left
prevButton.addEventListener("click", e =>{
    const currentSlide= document.getElementsByClassName("current-slide")[0];
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);

    const currentDot= document.getElementsByClassName("current-slide-dot")[0];  
    const prevDot= currentDot.previousElementSibling;
    updateDots(currentDot, prevDot);
})

//Click right, move slides to the right
nextButton.addEventListener("click", e => {
    //Slides
    const currentSlide= document.getElementsByClassName("current-slide")[0];
    const slides= document.getElementsByClassName("carousel_slide");
    let nextSlide = currentSlide.nextElementSibling;
    //Dots
    const currentDot= document.getElementsByClassName("current-slide-dot")[0];  
    const dots=document.getElementsByClassName("carousel_indicator");
    let nextDot= currentDot.nextElementSibling;

    //Operation
    if(slides[slides.length-1]==currentSlide){
        nextSlide=slides[0];
        nextDot= dots[0];
    }
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})

dotsNav.addEventListener("click", e =>{
    const targetDot= e.target.closest("button");
    if(!targetDot) return;
    const currentSlide= document.getElementsByClassName("current-slide")[0];
    const currentDot= document.getElementsByClassName("current-slide-dot")[0];   
    const targetIndex= dots.findIndex(dot => dot ===targetDot);
    const targetSlide= slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

})


