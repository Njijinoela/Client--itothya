// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(1.2849, 36.8198),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}