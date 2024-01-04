(function() {
  const lat = document.querySelector("#lat").value || 4.6771137;
  const lng = document.querySelector("#lng").value || -74.0490971;
  var mapa = L.map('mapa').setView([lat, lng ], 13);

  // Utilizando Provider y Geocoder
  const geocodeService = L.esri.Geocoding.geocodeService();

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  //* Crear Marcador
  let marker = new L.marker([lat, lng], {
    color: 'green',
    fillColor: '#2ADB3B',
    draggable: true,
    autoPan: true
  }).addTo(mapa);

  //! Evento de arrastrar el marcador
  marker.on('moveend', function(e){
    marker = e.target;
    const posicion = marker.getLatLng();
    mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));
    //? Obtener información del las calles
    geocodeService.reverse().latlng(posicion, 13).run(function(error, resultado){
      marker.bindPopup(resultado.address.LongLabel).openPopup();
      
      document.querySelector(".calle").textContent = resultado?.address?.Address ?? "";
      document.querySelector("#calle").value = resultado?.address?.Address ?? "";
      let lat = document.getElementById("lat").value = resultado?.latlng?.lat ?? "";
      let lng = document.getElementById("lng").value = resultado?.latlng?.lng ?? "";
    });
  })
  
  //! Función para mover el marcador dando un click
  function onMapClick(e){
    marker.setLatLng(e.latlng)
    const posicion = marker.getLatLng();

    console.log(posicion);

    geocodeService.reverse().latlng(posicion, 12).run(function(error, resultado){//? Esto regresa las propiedades de la ubicación del marcador 
      marker.bindPopup(resultado.address.LongLabel).openPopup(); //? Obtener Información de la ubicación

      //* Para mostrar en la vista
      document.querySelector(".calle").textContent = resultado?.address?.Address ?? "";

      //* Para almacenar en la base de datos
      document.querySelector("#calle").value = resultado?.address?.Address ?? "";
      let lat = document.getElementById("lat").value = resultado?.latlng?.lat ?? "";
      let lng = document.getElementById("lng").value = resultado?.latlng?.lng ?? "";
    });
  }
  mapa.on('click', onMapClick);
})();