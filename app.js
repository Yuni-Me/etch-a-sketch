const output = document.getElementById("demo");
const colorSelector = document.querySelector('.colorPicker input');
const colorSelectors = Array.from(document.querySelectorAll('.preColors button'));
let divGrid = document.createElement('div');
let slider = document.querySelector('.slider');
let colorPick = 'tomato';
let selection = '#e66465';

/* FUNCTIONS */
/* Set the grid system on the screen and pixels functionality */
function setScreen(gridSize) {
    const screen = document.querySelector('.screen');
    const clearButton = document.querySelector('.clear');
    clearScreen();
    divGrid.classList.add('divGrid');
    for (let i = 0; i < gridSize * gridSize; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        divGrid.appendChild(pixel);
        pixel.style.width = `${(screen.clientWidth - (gridSize * 2))/gridSize}px`;
        pixel.style.height = `${(screen.clientHeight - (gridSize * 2))/gridSize}px`;
    }
    screen.appendChild(divGrid);
    let dots = document.getElementsByClassName('pixel'); // THIS IS THE PROBLEM
    let pixels = Array.from(dots)
    clearButton.addEventListener('click', () => {
        pixels.forEach( pixel => {
            pixel.style.background = '#e5e5e5';
        });
    });
    pixels.map( dot => {
        dot.addEventListener('mouseover', changeColor);
    });
}
/* Clear the screen */
function clearScreen() {
    divGrid.innerHTML = '';
}

function changeColor(e) {
    if(colorPick === 'rainbow') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360 }, 100%, 50%)`;
    } else if(colorPick === 'dark') {
        e.target.style.backgroundColor = '#3a3042';
    } else if(colorPick === 'eraser') {
        e.target.style.backgroundColor = '#e5e5e5';
    } else if(colorPick === 'pick') {
        e.target.style.backgroundColor = selection;
    } else {
        e.target.style.backgroundColor = '#e66465';
    }
}

// show the slider's value selection
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }

/* Event Listeners */ 
// After slider selection the screen rebuilds with new value
slider.addEventListener('input', e => {
    setScreen(e.target.value);
});

// Color selection
colorSelectors.map(color => {
    color.addEventListener('click', e => {
        let id = e.target.getAttribute('id');
        if(id === 'rainbow') {
            colorPick = 'rainbow'
        }
        if(id === 'dark') {
            colorPick = 'dark'
        }
        if(id === 'eraser') {
            colorPick = 'eraser'
        }
    });
});

colorSelector.addEventListener('change', e => {
    colorPick = 'pick';
    selection = e.target.value;
});

// On Page Load - default size
setScreen(16);
