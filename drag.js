let isCollapsed = false;

function toggleContainer() {
    const container = document.getElementById('resizable-container');
    const iframe = document.getElementById('iframe');
    isCollapsed = !isCollapsed;

    if (isCollapsed) {
        container.style.width = '50px';
        container.style.height = '50px';
        iframe.style.display = 'none';
    } else {
        container.style.width = '400px';
        container.style.height = '200px';
        iframe.style.display = 'block';
    }
}

$(function() {
    $("#resizable-container").draggable();
});

