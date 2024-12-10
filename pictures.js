const images = [
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
    "https://cdn.pixabay.com/photo/2023/10/13/16/42/tree-8313094_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/25/13/02/sunrise-274257_640.jpg",
    "https://cdn.pixabay.com/photo/2020/02/08/07/48/daybreak-4829319_640.jpg"
];

let currentIndex = 0;

const imgElement = document.querySelector("#pic");
const btnBack = document.querySelector("#btnback");
const btnForward = document.querySelector("#btnfor");

btnBack.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = 3; 
    } else {
        currentIndex--; 
    }
    if (imgElement) {
        imgElement.src = images[currentIndex]; 
    }
});

btnForward.addEventListener("click", () => {
    if (currentIndex === 3) {
        currentIndex = 0; 
    } else {
        currentIndex++; 
    }
    if (imgElement) {
        imgElement.src = images[currentIndex]; 
    }
});

