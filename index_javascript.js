
var position;
// var position = -10800;
// // var position = 0;
// console.log(position);


const sliderImages = document.querySelectorAll(".sliderimage");

// sliderImage.forEach(image => {
//     image.style.transform = `translateX(${position}px)`
// });

const layer2 = document.querySelector(".layer2");
const layer3 = document.querySelector(".layer3");
const leftChevron = document.querySelector(".left_chevron");
const rightChevron = document.querySelector(".right_chevron");


console.log(window.innerWidth);

function sliderResize(windowWidth){
    const imageSize = windowWidth/4;
    const layerSize = imageSize;
    position = -45/2*imageSize; //사진수 바꼇을때 여기만 바꿔주면 됨
    console.log(imageSize);
    console.log(layerSize);
    console.log(position);
    
    console.log(sliderImages);
    sliderImages.forEach((sliderImage)=>{
        sliderImage.style.width = `${imageSize}px`;
        sliderImage.style.transform = `translateX(${position}px)`
    })
    layer2.style.width = `${layerSize}px`;
    layer3.style.width = `${layerSize}px`;
    leftChevron.style.left = `${layerSize}px`;
    rightChevron.style.right = `${layerSize}px`;
}

document.getElementsByTagName("BODY")[0].onresize = function(){
    sliderResize(window.innerWidth);};

sliderResize(window.innerWidth);


// const leftChevron = document.querySelector(".left_chevron");


leftChevron.addEventListener("click", (a)=>{
    position = position+window.innerWidth/4;
    console.log(position);
    sliderImages.forEach(image => {
        image.style.transform = `translateX(${position}px)`
    });
})

// const rightChevron = document.querySelector(".right_chevron");

rightChevron.addEventListener("click", (a)=>{
    position = position-window.innerWidth/4;
    console.log(position);
    sliderImages.forEach(image => {
        image.style.transform = `translateX(${position}px)`
    });
})




