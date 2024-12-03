const gridContainer = document.querySelector('.grid-container');


const rows = 15;
const columns = 20;

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        gridContainer.appendChild(cell);
    }
}

const colors = ['yellow', 'red', 'blue', 'green', 'purple', 'cyan', 'orange', 'pink', 'brown', 'white'];


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function animateRandomColumns() {
    const cells = document.querySelectorAll('.grid-cell');
    
    const numColumns = Math.floor(Math.random() * 5) + 1;
    const columnIndices = [];
    

    while (columnIndices.length < numColumns) {
        const rand = Math.floor(Math.random() * columns);
        if (!columnIndices.includes(rand)) columnIndices.push(rand);
    }


    columnIndices.forEach(columnIndex => {
        const randomColor = getRandomColor();
        

        for (let i = 0; i < rows; i++) {
            const cell = cells[columnIndex + i * columns];
            cell.style.backgroundColor = 'black';  
            cell.style.opacity = 0;


            setTimeout(() => {
                cell.style.animation = 'none';
                cell.offsetHeight; 
                cell.style.animation = 'colorFall 1s forwards';  
                cell.style.backgroundColor = randomColor;  
                cell.style.opacity = 1;  
            }, 200 * i);  
            
        }
        
        // After the column is filled, reset the column for further filling
        setTimeout(() => {
            resetColumn(columnIndex); 
        }, 200 * rows);  
    });

    // After the columns are filled, start the next cycle
    setTimeout(animateRandomColumns, 2000);  
}

// Function to reset a column after it has been filled
function resetColumn(columnIndex) {
    const cells = document.querySelectorAll('.grid-cell');
    
  
    for (let i = 0; i < rows; i++) {
        const cell = cells[columnIndex + i * columns];
        cell.style.backgroundColor = '#333';
        cell.style.opacity = 0; 
    }
}


function resetGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    
  
    cells.forEach(cell => {
        cell.style.backgroundColor = '#333';
        cell.style.opacity = 1; 
    });
}


resetGrid();
setTimeout(animateRandomColumns, 1000);  
