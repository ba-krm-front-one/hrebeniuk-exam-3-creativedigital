(() => {
    function inicializeMap() {

        let mapLocation = {lat: -7.9298087, lng: 112.6371403};

        var map = new google.maps.Map(document.querySelector(".back-map"), {
            center: mapLocation,
            zoom: 14,
            disableDefaultUI: false,
            scrollwheel: false
        });

        var marker = new google.maps.Marker({
            position: {lat: -7.911417, lng: 112.649968},
            map: map,
            icon: "assets/images/map-marker.png"
        });

    }


    document.addEventListener('DOMContentLoaded', inicializeMap);
})();
