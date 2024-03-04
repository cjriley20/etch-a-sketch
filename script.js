const container = document.querySelector('div.container');

const containerStyles = window.getComputedStyle(container);
const containerWidth = containerStyles.getPropertyValue('width');
console.log(`Container width = ${containerWidth}`);

const rows = 4;
const cols = rows;

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const square = document.createElement('div');

        container.appendChild(square);
    }
}