(() => {
    function sliderCarusel() {

        var elem = document.querySelector('.team-slider');
        var flkty = new Flickity( elem,  {
            // options
            cellAlign: 'left',
            contain: true,
            setGallerySize: false,
            prevNextButtons: true,
            autoPlay: 3000,
            wrapAround: true,
            pageDots: false,
            arrowShape: {
                x0: 10,
                x1: 60, y1: 50,
                x2: 60, y2: 45,
                x3: 15
            }
        });

    }



    document.addEventListener('DOMContentLoaded', sliderCarusel);
})();