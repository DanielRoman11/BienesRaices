(() => {
  // src/js/mapa.js
  (function() {
    const lat = document.querySelector("#lat").value || 4.6771137;
    const lng = document.querySelector("#lng").value || -74.0490971;
    var mapa = L.map("mapa").setView([lat, lng], 13);
    const geocodeService = L.esri.Geocoding.geocodeService();
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);
    let marker = new L.marker([lat, lng], {
      color: "green",
      fillColor: "#2ADB3B",
      draggable: true,
      autoPan: true
    }).addTo(mapa);
    marker.on("moveend", function(e) {
      marker = e.target;
      const posicion = marker.getLatLng();
      mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));
      geocodeService.reverse().latlng(posicion, 13).run(function(error, resultado) {
        marker.bindPopup(resultado.address.LongLabel).openPopup();
        document.querySelector(".calle").textContent = resultado?.address?.Address ?? "";
        document.querySelector("#calle").value = resultado?.address?.Address ?? "";
        let lat2 = document.getElementById("lat").value = resultado?.latlng?.lat ?? "";
        let lng2 = document.getElementById("lng").value = resultado?.latlng?.lng ?? "";
      });
    });
    function onMapClick(e) {
      marker.setLatLng(e.latlng);
      const posicion = marker.getLatLng();
      console.log(posicion);
      geocodeService.reverse().latlng(posicion, 12).run(function(error, resultado) {
        marker.bindPopup(resultado.address.LongLabel).openPopup();
        document.querySelector(".calle").textContent = resultado?.address?.Address ?? "";
        document.querySelector("#calle").value = resultado?.address?.Address ?? "";
        let lat2 = document.getElementById("lat").value = resultado?.latlng?.lat ?? "";
        let lng2 = document.getElementById("lng").value = resultado?.latlng?.lng ?? "";
      });
    }
    mapa.on("click", onMapClick);
  })();
})();
//! Evento de arrastrar el marcador
//! Función para mover el marcador dando un click
