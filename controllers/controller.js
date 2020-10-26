//Creo una variable con las coordenadas que quiero mostrar en el centro y el zoom que mostrará
let mapPlazaCatalunya = L.map('mapid').setView([41.386982, 2.170082], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
//Este token lo he copiado de la página www.mapbox.com
    accessToken: 'pk.eyJ1Ijoic2FuYXJ2YSIsImEiOiJja2dxZjE5dGMwNGltMzFvYmpjY2xwamd3In0.WoOqdse4Q1UvHBFkG8qG8w'
}).addTo(mapPlazaCatalunya)

//Esto pone un marcador en las coordenadas que le hemos dicho (calle Balmes, 16) dentro del mapa que estamos mostrando
let marker = L.marker([41.387011, 2.166034]).addTo(mapPlazaCatalunya);

//Esto añade la descripción al marcador
marker.bindPopup("<b>Restaurant Centfocs</b><br><br>Restaurante mediterráneo<br>Carrer de Balmes, 16, 08007 Barcelona").openPopup();