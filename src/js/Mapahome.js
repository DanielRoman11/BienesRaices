(function() {
  const lng = -74.0490971;
  const lat = 4.6771137;
  var mapa = L.map('mapaHome').setView([lat, lng ], 13);

  let markers = new L.FeatureGroup().addTo(mapa)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  const mostrarPropiedades = propiedades =>{
    var markerIcon = new L.Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/9428/9428182.png',
      // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize: [25, 40],
      shadowSize: [41, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
    propiedades.forEach(propiedad => {
      new L.marker([propiedad?.lat, propiedad?.lng], 
        {
          icon: markerIcon
        })
        .addTo(mapa)
        .bindPopup(`
        <img src="/uploads/${propiedad.imagen}" alt="${propiedad.descripcion}"/>
        <br>
        - <strong>Dirección:</strong> ${propiedad.calle != "" ? propiedad.calle : "Sin dirección establecida"} <br> 
        - <strong>Precio:</strong> ${propiedad.precio.nombre} <br>
        <a href="/propiedades/propiedad/${propiedad.id}" class="bg-[#CCCBA1] block p-2 text-center font-bold uppercase text-white">Ver Propiedad</a>`
        )
      });
    }
    
    const obtenerPropiedades = async() => {
    try {
      const url = 'api/propiedades'
      const respuesta = await fetch(url)
      const propiedades = await respuesta.json();

      console.log(propiedades);
      mostrarPropiedades(propiedades)

    } catch (error) {
      console.log(error);
    }
  }

  obtenerPropiedades()

  })();