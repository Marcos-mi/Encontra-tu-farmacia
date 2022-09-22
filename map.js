
let  map;
let markers=[];
let autocomplete;
let watchID;
let geoLoc;
const input = document.getElementById("buscador");

const  setListener = ()=>{
    document.querySelectorAll(".farmacia__individualNames").forEach((farmaciaName, index)=>{
        farmaciaName.addEventListener("click", ()=>{
            google.maps.event.trigger(markers[index],"click")
        })
    })
}


const displayFarmaciasList = ()=>{
    let farmaciaHTML= "";
    farmacias.forEach(farmacia=>{
        farmaciaHTML += `<h4 class="farmacia__individualNames">${farmacia.name}</h4>`
    })
    document.getElementById("farmacias__names").innerHTML = farmaciaHTML;
}

const createMarker = (coord,name,address,phone)=>{
    let html = 
    `<div class="window">
        <h2>${name}</h2>
        <div class="address">
        <i class="fa-solid fa-map-pin fa-lg"></i>
        <h3>${address}</h3>
        </div>
        <div class="phone">
        <i class="fa-solid fa-phone"></i>
        <h3>${phone}</h3>
        </div>
    </div>`
    
    const marker = new google.maps.Marker({
        position: coord,
        map: map,
        icon: "./img/marker-farmacias.png"
    })
    google.maps.event.addListener(marker, "click", ()=>{
        infoWindow.setContent(html);
        infoWindow.open(map,marker);
    })
    markers.push(marker)
}

const createLocationMarkers = ()=>{
 farmacias.forEach(farmacias=>{
     let coord = new google.maps.LatLng(farmacias.lat, farmacias.lng)
     let name = farmacias.name;
     let address = farmacias.address
     let phone = farmacias.phone
     createMarker(coord,name,address,phone)
 })
}
function initMap(){
    let bsas = { lat : -34.6156625 , lng: -58.5033379 }
    map = new google.maps.Map(document.getElementById ("map"),{
        center : bsas ,
        zoom : 12,
        mapId: "a7aae35915f2a237",
    })
    createLocationMarkers()
    infoWindow = new google.maps.InfoWindow();
    displayFarmaciasList();
    setListener();
    initAutocomplete();
    getPosition();
}



function initAutocomplete()
{
    autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.addListener("place_changed",function(){
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
    })
}
function getPosition()
{
    if(navigator.geolocation){
           // ejecuta cada 60000 milisegundos ( 60 segundos , 1 minuto )
           var options = {timeout:60000};
           geoLoc = navigator.geolocation;
           watchID = geoLoc.watchPosition(showLocationOnMap,errorHandler,options);
       }else{
        alert("Lo sentimos , el explorador no soporta geolocalización ");
       }
}
function showLocationOnMap(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
                                           
    const myLatLng = {lat:latitud , lng:longitud } ;
   /*  marker.setPosition(bsas); */
    map.setCenter(bsas);
}
    function errorHandler(err) {
        if(err.code==1) {
          alert ( " Error : Acceso denegado ! " ) ;
      } else if ( err.code == 2 ) {
          alert ( " Error : Position no existe o no se encuentral " ) ;
      }
    }