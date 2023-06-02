const images = document.querySelectorAll('.image');

images.forEach(function (image) {
    image.addEventListener('click', function () {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const overlayImage = document.createElement('img');
        overlayImage.src = this.getAttribute('src');
        overlay.appendChild(overlayImage);
        document.body.appendChild(overlay);
        overlay.addEventListener('click', function () {
            this.remove();
        });
    });
});