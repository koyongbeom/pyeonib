
var position = -10800;
console.log(position);


const sliderImage = document.querySelectorAll(".sliderimage");

sliderImage.forEach(image => {
    image.style.transform = `translateX(${position}px)`
});



const leftChevron = document.querySelector(".left_chevron");

leftChevron.addEventListener("click", (a)=>{
    position = position+480;
    console.log(position);
    sliderImage.forEach(image => {
        image.style.transform = `translateX(${position}px)`
    });
})

const rightChevron = document.querySelector(".right_chevron");

rightChevron.addEventListener("click", (a)=>{
    position = position-480;
    console.log(position);
    sliderImage.forEach(image => {
        image.style.transform = `translateX(${position}px)`
    });
})