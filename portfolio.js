document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const popupContainer = document.querySelector('.popup-container');
    const popupImage = document.querySelector('.popup-image');
    const popupDescription = document.querySelector('.popup-description');
    const closeButton = document.querySelector('.close-btn');

    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-img-src');
            const description = this.getAttribute('data-description');

            // Debugging logs
            console.log('Image Source:', imgSrc);
            console.log('Description:', description);

            // Check if the image source is correct
            if (imgSrc && imgSrc !== 'images/') {
                popupImage.src = imgSrc;
                popupDescription.textContent = description;

                popupContainer.style.display = 'block';
                document.body.classList.add('popup-open');
            } else {
                console.error('Image source is invalid.');
            }
        });
    });

    closeButton.addEventListener('click', function() {
        popupContainer.style.display = 'none';
        document.body.classList.remove('popup-open');
    });

    popupContainer.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
            document.body.classList.remove('popup-open');
        }
    });
});
