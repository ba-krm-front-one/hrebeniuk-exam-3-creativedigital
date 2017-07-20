(() => {
    function sliderWorks() {

        var elem = document.querySelector('.works-slider');
        var flkty = new Flickity( elem,  {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: true,
            autoPlay: 3000,
            wrapAround: true,
            arrowShape: {
                x0: 10,
                x1: 60, y1: 50,
                x2: 60, y2: 45,
                x3: 15
            }
        });

    }



    document.addEventListener('DOMContentLoaded', sliderWorks);
})();