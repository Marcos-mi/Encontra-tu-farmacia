
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
const displayFarmaciasListZo = ()=>{
    let farmaciaHTML= "";
    farmaciasZo.forEach(farmaciasZo=>{
        farmaciaHTML += `<h4 class="farmacia__individualNames">${farmaciasZo.name}</h4>`
    })
    document.getElementById("farmacias__names2").innerHTML = farmaciaHTML;
}

const createMarker = (coord,name,address,phone,lng,lat)=>{
    let html = 
    `<div class="window">
        <h2>${name}</h2>
        <div class="address">
        <i class="fa-solid fa-map-pin fa-lg"></i>
        <h3>${address}</h3>
        </div>
        <div class="phone">
        <i class="fa-solid fa-phone fa-lg"></i>
        <h3>${phone}</h3> 
        </div>
        <div>
        <a href="https://www.google.com/maps/dir//${address}/@${lng},${lat},17z" class="btn ubi"  target="_blank">¿Cómo llegar?</a>
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
const createLocationMarkersZo = ()=>{
 farmaciasZo.forEach(farmaciasZo=>{
     let coord = new google.maps.LatLng(farmaciasZo.lat, farmaciasZo.lng)
     let name = farmaciasZo.name;
     let address = farmaciasZo.address
     let phone = farmaciasZo.phone
     createMarker(coord,name,address,phone)
 })
}
//Se crea función la para que cuando el usuario haga click sobre el boton de busqueda se cree una marcador en su ubicación
function mostrarUbicacionDelUsuario(map, marker){
    if ( navigator.geolocation ) {
        navigator.geolocation.getCurrentPosition(
          ({ coords : { latitude , longitude } } ) => {
            const coords = {
              lat : latitude,
              lng : longitude,
            };
            map.setCenter(coords);
            map.setZoom(14);
            marker.setPosition(coords);
          },
          ()=> { 
            alert("Tu navegador esta bien , pero ocurrio un error ");
        }
        );
        }else {
        alert("Tu navegador no dispone de la geolocalizcion , actualizalo");
        } 
}
//Se llama al mapa y se le pasan los parametros y funciones que se tienen que ejecutar al inicializarlo
function initMap(){
    const bsas = { lat : -34.6156625 , lng: -58.5033379 }
    map = new google.maps.Map(document.getElementById ("map"),{
        center : bsas ,
        zoom : 12,
        mapId: "a7aae35915f2a237",
    });
    const marker = new google.maps.Marker({
        position: "",
        map,
    })
    //Se llama a la función que crea los markers
    createLocationMarkers()
    createLocationMarkersZo()
    infoWindow = new google.maps.InfoWindow();
    displayFarmaciasList();
    displayFarmaciasListZo();
    setListener();
    //Se llama a la funcion de autocompletado
    initAutocomplete();
    //Se crea el evento y se llama  para que cuando el usuario haga click sobre el boton de busqueda se cree una marcador en su ubicación
    button.addEventListener("click", () =>{
        mostrarUbicacionDelUsuario(map, marker);
    }); 
}

//Se crea la funcion para autocompletar el input de busqueda de localidades y se resetean valoren que ya habian sido definidos en otras funciones anteriormente
function initAutocomplete()
{
    autocomplete = new google.maps.places.Autocomplete(input)
    //utilizo bounds estrictos.
    strictBounds: true,
    //defino los bunds de limites
    autocomplete.bindTo("bounds", map)

    //autocompleado
    autocomplete.addListener("place_changed",function(){
        const place = autocomplete.getPlace();
        const {geometry} = place;
        const {vieport, location} = geometry;
        //reseteo localizacion y zoom cuando el usuario busca X lugar
        map.setCenter(location);
        map.setZoom(13);

        //movemos los limites de la busqueda mediante la vista del viewport y lo vinculamos al autocompletado
        map.fitBound(vieport)
    })
}

       