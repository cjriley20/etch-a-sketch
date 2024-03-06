const container = document.querySelector('div.container');

const rows = 4;
const cols = rows;

for (let row = 0; row < rows; row++) {
//     for (let col = 0; col < cols; col++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
//     }
}