const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const clearBtn = document.querySelector('#clearBtn');
const inputBtn = document.querySelector("#inputBtn");
const inputSize = document.querySelector('#gridSize')

const DEFAULT_SIZE = 20;

let currentSize = DEFAULT_SIZE;


let mouseDown = 0;
document.body.onmousedown = function() {
    ++mouseDown;
}
document.body.onmouseup = function() {
    --mouseDown;
}

function populateGrid(n) {

    grid.style.gridTemplateRows = `repeat(${n},${65/n}vh)`;
    grid.style.gridTemplateColumns = `repeat(${n},${65/n}vw)`;

    for(let i=0; i<n; i++) {

        for(let j=0; j<n; j++) {

            let newCell = document.createElement('div');

            newCell.classList.add('cell');
            newCell.setAttribute('id',`r${i+1}c${j+1}`);

            newCell.addEventListener('mousedown', function() {

                newCell.style.backgroundColor ='black';
                
            });
            newCell.addEventListener('mouseover', function() {
                if (mouseDown) {
                    newCell.style.backgroundColor ='black';
                }
                
            });
            

            grid.appendChild(newCell);


        }
    }
}


function clearGrid() {
    grid.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    populateGrid(currentSize);
}

function changeSize(n) {
    currentSize = n;
    reloadGrid();

}

clearBtn.onclick = () => reloadGrid();

inputBtn.onclick = () => changeSize(inputSize.value); 

populateGrid(DEFAULT_SIZE);




