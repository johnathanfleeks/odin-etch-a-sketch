'use strict';

const gridContainer = document.querySelector('.grid-container');
const newBtn = document.querySelector('.create-grid');
const deleteBtn = document.querySelector('.delete-grid');


newBtn.addEventListener('click', () => {
    let height = Number(prompt('How Many Rows? 0 - 100'));
    while(height > 100 || height < 0) {
        height = Number(prompt('Not within range... How Many Rows?'))
    }

    let width = Number(prompt('How Many Columns? 0 - 100'));
    while(width > 100 || width < 0) {
        width = Number(prompt('Not within range... How Many Columns?'))
    }
    gridContainer.textContent = '';
    createGrid(height, width);
})


function createGrid(height, width) {
    for(let i = 1; i <= height; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        
        for(let j = 0; j <+ width; j++) {
            const tile = document.createElement('div');
            tile.id = 'grid';

            row.appendChild(tile);
        }

        gridContainer.appendChild(row);
    }
}

gridContainer.addEventListener('mouseover', (event) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const isTile = event.target.id === 'grid';

    if(!isTile) {
        return;
    }

    event.target.style.backgroundColor = `#${randomColor}`;
});


deleteBtn.addEventListener('click', () => {
    gridContainer.textContent = '';
})