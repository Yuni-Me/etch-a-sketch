let screen = document.querySelector('.screen');
let divGrid = document.createElement('div');

function setScreen(gridSize) {

    divGrid.classList.add('divGrid');
    for (let i = 0; i < gridSize * gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        divGrid.appendChild(pixel);
        pixel.style.width = `${(560 - (gridSize * 2))/gridSize}px`;
        pixel.style.height = `${(500 - (gridSize * 2))/gridSize}px`;
    }
    // console.log(divGrid);
    screen.appendChild(divGrid);
    
}

function clearScreen() {
    pixel.style.backgroundColor = '#e5e5e5';
}

function paintPixel(e) {
    e.target.style.backgroundColor = '#000';
}

let slider = document.querySelector('.slider');
var output = document.getElementById("demo");
let clearButton = document.querySelector('.clear');
output.innerHTML = slider.value;

setScreen(32);

let dots = document.getElementsByClassName('pixel');
console.log(divGrid);
console.log(dots);

slider.oninput = function() {
  output.innerHTML = this.value;
}
let pixels = Array.from(dots)
clearButton.addEventListener('click', () => {
    pixels.forEach( pixel => {
        pixel.style.background = '#e5e5e5';
    });
});
pixels.map( dot => {
    dot.addEventListener('mouseover', e => {
        e.target.style.background = '#3a3042';
        // e.target.style.background = 'linear-gradient(to bottom, red,orange,yellow,green,blue,indigo,violet)';
        // e.target.style.background = 'repeating-linear-gradient(red, yellow 10%, green 20%)';
    });
});
// addEventListener('onmouseover', () => {
//     this.style.backgroundColor = "#000";
// });
// setScreen(slider.value);
// setScreen(16);

