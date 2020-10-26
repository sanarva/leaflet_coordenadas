 //Creo una variable con las coordenadas que quiero mostrar en el centro y el zoom que mostrará
let mapPlazaCatalunya = L.map('mapid').setView([41.386982, 2.170082], 16);

//Le añado la capa del mapa
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //En el id también podríamos poner 'mapbox/satellite-v9' para ver el mapa por satélite
    id: 'mapbox/streets-v11',
    //Como esta API devuelve 512x512 de tamaño de mosaico (tile) por defecto, en lugar de 256x256,  
    //tendremos que especificar esto explícitamente y compensar nuestro zoom con un valor de -1.
    tileSize: 512,
    zoomOffset: -1,
    //Este token lo he copiado de la página www.mapbox.com
    accessToken: 'pk.eyJ1Ijoic2FuYXJ2YSIsImEiOiJja2dxZjE5dGMwNGltMzFvYmpjY2xwamd3In0.WoOqdse4Q1UvHBFkG8qG8w'
}).addTo(mapPlazaCatalunya)



let previousMarker;
 
function onMapClick(e) {

    //Comprobamos si ya se ha añadido un marcador y si es así, se elimina)
    if (previousMarker != undefined) {
        mapPlazaCatalunya.removeLayer(previousMarker);
    }

    //Agregamos un nuevo marcador al mapa
    let marker = L.marker(e.latlng).addTo(mapPlazaCatalunya);

    //Agregamos ese marcador a una capa (para luego poder eliminar el marcador antes de añadir otro)
    mapPlazaCatalunya.addLayer(marker);
    
    //Con esto añadimos una descripción a ese marcador
    marker.bindPopup("Mis coordenadas son: <br> <strong>" + "Lat: " + e.latlng.lat + " Lng: " + e.latlng.lng +"</strong>").openPopup();
    
    //Usamos la variable previousMarker para saber cuál es el marcador previo y poder eliminarlo
    previousMarker = marker;

    //Con esto ponemos el centro del mapa donde esté el marcador y le damos un zoom máximo (18)
    mapPlazaCatalunya.setView([e.latlng.lat, e.latlng.lng], 18);
     
}

mapPlazaCatalunya.on('click', onMapClick); 

