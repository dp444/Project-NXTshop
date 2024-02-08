let isDragging = false;
let offsetX, offsetY;

const container1 = document.getElementById('draggable-container');

container1.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container1.getBoundingClientRect().left;
    offsetY = e.clientY - containe1r.getBoundingClientRect().top;
    container1.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    container1.style.left = x + 'px';
    container1.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    container1.style.cursor = 'grab';
});


