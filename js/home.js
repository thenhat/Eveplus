// Ticker
var ticker = document.querySelector('.ticker')
    , list = document.querySelector('.ticker__list')
    , clone = list.cloneNode(true);
ticker.append(clone);

// Map
var map;
var myLatlng = {lat: 21.0288722, lng: 105.7795577};
map = new google.maps.Map(document.getElementById('map'), {
    // scaleControl: true,
    center: myLatlng,
    zoom: 16,
});
var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
});