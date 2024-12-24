const container = document.getElementById('container');
const button = document.getElementById('size-btn');
let gridSize = 10;

button.addEventListener('click', () => {
    container.innerHTML = '';
    gridSize = prompt('Type in new grid size. (2-100) ');
    createGrid(gridSize);

})

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            const newDiv = document.createElement('div');
            let divSize = 800 / gridSize;
            newDiv.style.height = `${divSize}px`;
            newDiv.style.width = `${divSize}px`;
            newDiv.style.border = 'solid 2px black';
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = 'red';
            });
    
            container.appendChild(newDiv);
        }
    }
}

