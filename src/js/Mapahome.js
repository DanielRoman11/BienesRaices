(function() {
  const lng = -74.0490971;
  const lat = 4.6771137;
  var mapa = L.map('mapaHome').setView([lat, lng ], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  try {
    const obtenerPropiedades = async() => {
      const url = 'api/propiedades'
      const respuesta = await fetch(url)
      if(!respuesta.ok){
        console.error(error);
      }
      const data = await respuesta.json();
    }

  } catch (error) {
    console.log(error);
  }
})();