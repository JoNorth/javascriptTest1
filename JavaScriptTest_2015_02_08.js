 // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (base map)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker
    var marker = L.marker([51.5, -0.1]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // Add a circle
    var circle = L.circle([51.508, -0.11], {
        color: 'green',
        fillColor: '#f43',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    circle.bindPopup("I am a circle.");

    // Add a polygon
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
    polygon.bindPopup("I am a polygon.");