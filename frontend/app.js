// Image Slider

const slides = document.querySelectorAll(".slide")
let counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`;
    }
);

const GoPrev = () =>{
    if(counter===0){
        counter=slides.length-1;
        SlideImage();
    }
    else{
    counter--;
    SlideImage();
    }
} 

const GoNext = () =>{
    if(counter==slides.length-1){
        counter=0;
        SlideImage();
    }
    else{
    counter++;
    SlideImage();
    }
} 

const SlideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}





// New arrival div slider

const divSlides = document.querySelectorAll(".divSlide");
// console.log(divSlides);

let counter1 = 0;

divSlides.forEach(
    (divSlide,index) =>{
        divSlide.style.left = `${index*100}%`
    }
)

const divGoprev = () =>{
    if(counter1===0){
        counter1=0;
        slideDiv();
    }
    else{
    counter1--;
    slideDiv();
    }
}

const divGonext = () =>{
    if(counter1==divSlides.length-1){
        counter1=divSlides.length-1;
        slideDiv();
    }
    else{
    counter1++;
    slideDiv();
    }
}

const slideDiv = () =>{
    divSlides.forEach(
        (divSlide) =>{
            divSlide.style.transform = `translateX(-${counter1*100}%)`
        }
    )
}





// fandom section divslide

const fandomSlides = document.querySelectorAll(".fandomDiv");
// console.log(fandomSlides);

let counter3 = 0;

fandomSlides.forEach(
    (fandomSlide,index) =>{
        fandomSlide.style.left = `${index*100}%`
    }
)


const fandomdivGoprev = () =>{
    if(counter3===0){
        counter3=0;
        fandomSlideDiv();
    }
    else{
    counter3--;
    fandomSlideDiv();
    }
}

const fandomdivGonext = () =>{
    if(counter3==fandomSlides.length-1){
        counter3=fandomSlides.length-1;
        fandomSlideDiv();
    }
    else{
    counter3++;
    fandomSlideDiv();
    }
}


const fandomSlideDiv = () =>{
    fandomSlides.forEach(
        (fandomSlide) =>{
            fandomSlide.style.transform = `translateX(-${counter3*100}%)`
        }
    )
}
