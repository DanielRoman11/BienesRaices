(function() {
  const lat = document.getElementById("lat").textContent;
  const lng = document.getElementById("lng").textContent;

  const calle = document.getElementById("calle").textContent;

  var mapa = L.map('mapa', {
    fullscreenControl: {
      pseudoFullscreen: false
    }
  }).setView([lat, lng ], 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  //* Crear Marcador
  let marker = new L.marker([lat, lng], {
    color: 'red',
    fillColor: '#fffff',
    fillOpacity: 0.4,
    draggable: false,
  }).addTo(mapa);

  marker.bindPopup(`Dirección: ${calle}`);
})();