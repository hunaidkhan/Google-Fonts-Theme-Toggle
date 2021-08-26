const button = document.querySelector("#theme-toggle");
const backgroundContainer = document.querySelector(".container");
const mySVG = document.querySelector("#theme-toggle > svg");
const svgCircle = document.querySelector(".toggle-circle");
const svgSun = document.querySelector(".toggle-sun");


function enableDarkMode(){
    svgCircle.style.transform = 'translate(0)';
    svgSun.style.transform = 'rotate(0.5turn)';
    button.ariaLabel  ="Switch to light theme";
}

function enableLightMode(){
    svgCircle.style.transform = 'translate(-15%)';
    svgSun.style.transform = 'rotate(0)';
    button.ariaLabel  ="Switch to dark theme";
}

button.addEventListener("click", () => {
    backgroundContainer.classList.toggle("dark-theme");
    backgroundContainer.classList.contains("dark-theme") ? enableDarkMode() : enableLightMode();

})