document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    const mapImg = document.getElementById('map-img');
    
    if (!mapContainer || !mapImg) return;

    let scale = 1;
    let panning = false;
    let pointX = 0;
    let pointY = 0;
    let startX = 0;
    let startY = 0;

    function setTransform() {
        mapImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    mapContainer.onmousedown = function (e) {
        e.preventDefault();
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
        panning = true;
        mapContainer.style.cursor = 'grabbing';
    };

    mapContainer.onmouseup = function () {
        panning = false;
        mapContainer.style.cursor = 'grab';
    };

    mapContainer.onmouseleave = function () {
        panning = false;
        mapContainer.style.cursor = 'grab';
    };

    mapContainer.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) return;
        pointX = (e.clientX - startX);
        pointY = (e.clientY - startY);
        setTransform();
    };

    mapContainer.onwheel = function (e) {
        e.preventDefault();
        const xs = (e.clientX - pointX) / scale;
        const ys = (e.clientY - pointY) / scale;
        const delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        
        if (delta > 0) {
            scale *= 1.2; // zoom in
        } else {
            scale /= 1.2; // zoom out
        }
        
        // Max/Min zoom limits
        if (scale > 5) scale = 5;
        if (scale < 0.2) scale = 0.2;
        
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;
        setTransform();
    };
});
