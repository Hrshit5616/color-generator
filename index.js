
function generate() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
   
    document.body.style.backgroundColor = rgbColor;
}


let btn = document.getElementsByClassName("btn")[0];


btn.addEventListener("click", generate);

