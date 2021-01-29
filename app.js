let screen = document.querySelector('.screen');
let divGrid = document.createElement('div');
let slider = document.querySelector('.slider');
var output = document.getElementById("demo");
let clearButton = document.querySelector('.clear');
let colorPick = 'red';
let dots = document.getElementsByClassName('pixel');
output.innerHTML = slider.value;
let colorSelector = document.querySelector('.colorPicker input');
let colorSelectors = Array.from(document.querySelectorAll('.preColors button'));

function setScreen(gridSize) {
    clearScreen();
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
/* Function works*/
function clearScreen() {
    divGrid.innerHTML = '';
}

function paintPixel(e) {
    this.e.target.style.backgroundColor = '#000';
}

function getRandomColor() {
	const pastelsColors = ['FFEB00', 'FC0019', '01FF4F', 'FF01D7', '5600CC', '00EDF5'];
	let randomNumber = Math.floor(Math.random() * 6);
	return pastelsColors[randomNumber];

}



// setScreen(4);



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
        e.target.style.background = colorPick;         
    });
});

slider.addEventListener('input', e => {
    setScreen(e.target.value);
});


colorSelectors.map(color => {
    color.addEventListener('click', e => {
        let id = e.target.getAttribute('id');
        if(id === 'rainbow') {
            colorPick = 'linear-gradient(to bottom, red,orange,yellow,green,blue,indigo,violet)';
        }
        if(id === 'dark') {
            colorPick = '#3a3042';
        }
        if(id === 'random') {
            colorPick = `#${getRandomColor()}`;
        }
    });
});

colorSelector.addEventListener('change', e => {
    colorPick = e.target.value;
});


