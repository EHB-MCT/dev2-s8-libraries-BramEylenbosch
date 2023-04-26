"use strict";

// de leaflet library is reeds geimporteerd, en beschikbaar als "L"
// dit via de script en css tag in de index.html, en de "map" div die werd toegevoegd.


const app = {
    map: null, // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
    init() {
        // initialise de kaart

        // voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
        // vergeet openstreetmap attributie niet
        
        // gebruik de functie "loadMarkers" om de markers toe te voegen
    },
    loadMarkers() {

        // fetch de data van opendata.brussels.be
            // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
        
        
    },
    addMarker(lat, lon) {
        // voeg een marker toe op lat, lon
    }
}

app.init();
