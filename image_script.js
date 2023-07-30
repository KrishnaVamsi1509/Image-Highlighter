const current = document.querySelector("#current");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const opacity = 0.3;
imgs.addEventListener("click",(event)=>{
    img.forEach((imgElem)=>{
        imgElem.style.opacity = 1;
    });
    const clickedURL = event.target.src;
    current.src = clickedURL;
    current.classList.add("fade-in");
    setTimeout(()=>{
        current.classList.remove("fade-in");
    },500);

event.target.style.opacity = opacity;
});