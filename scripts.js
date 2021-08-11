const container = document.querySelector('.container');
const grid = document.querySelector('.grid');

function populateGrid(n) {

    grid.style.gridTemplateRows = `repeat(${n},${65/n}vh)`;
    grid.style.gridTemplateColumns = `repeat(${n},${65/n}vw)`;

    for(let i=0; i<n; i++) {

        for(let j=0; j<n; j++) {

            let newCell = document.createElement('div');

            newCell.classList.add('cell');
            newCell.setAttribute('id',`r${i+1}c${j+1}`);
            

            grid.appendChild(newCell);


        }
    }
}

populateGrid(20);

const cells = document.querySelectorAll('.cell');

let mouseDown = 0;
document.body.onmousedown = function() {
    ++mouseDown;
}
document.body.onmouseup = function() {
    --mouseDown;
}

cells.forEach( (cell) => {
    cell.addEventListener('mousedown', function() {

        cell.style.backgroundColor ='black';
        
    });

    cell.addEventListener('mouseover', function() {
        if (mouseDown) {
            cell.style.backgroundColor ='black';
        }
        
    });
});