(function() {
  const lat = document.getElementById("lat").textContent;
  const lng = document.getElementById("lng").textContent;
  var mapa = L.map('mapa').setView([lat, lng ], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  //* Crear Marcador
  let marker = new L.marker([lat, lng], {
    color: 'green',
    fillColor: '#2ADB3B',
    draggable: false,
  }).addTo(mapa);
})