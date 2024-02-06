let isDragging = false;
let offsetX, offsetY;

const container = document.getElementById('draggable-container');

container.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container.getBoundingClientRect().left;
    offsetY = e.clientY - container.getBoundingClientRect().top;
    container.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    container.style.left = x + 'px';
    container.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});


