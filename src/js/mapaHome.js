(function() {
  const lng = -74.0490971;
  const lat = 4.6771137;
  var mapa = L.map('mapaHome').setView([lat, lng ], 13);

  let markers = new L.FeatureGroup().addTo(mapa);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  const filtros = {
    categoria: '',
    precio: ''
  }

  let propiedades = [];

  const categoriasSelect = document.getElementById('categorias');
  const preciosSelect = document.getElementById('precios');

  const mostrarPropiedades = propiedades =>{
    //? Limpiando los markers cada vez que se itera sobre un arreglo de propiedades
    markers.clearLayers();

    var markerIcon = new L.Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/9428/9428182.png',
      // shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize: [25, 40],
      shadowSize: [41, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
    propiedades.forEach(propiedad => {
      const marker = new L.marker([propiedad?.lat, propiedad?.lng], 
        {
          icon: markerIcon
        })
        .addTo(mapa)
        .bindPopup(`<div class="text-xs">
        <img src="${propiedad.imagenes[0].ruta}" class="max-h-32 block mx-auto" alt="${propiedad.descripcion}"/>
        <br>
        <strong>Dirección:</strong> ${propiedad.calle != "" ? propiedad.calle : "Dirección no disponible"} <br> 
        <strong>Precio:</strong> ${propiedad.precio.nombre} <br>
        <strong>Tratante:</strong> ${propiedad.usuario.nombre} <br>
        <strong>Última Actualización:</strong> ${new Date(propiedad.updatedAt).toLocaleDateString()} <br>
        <a href="/propiedades/propiedad/${propiedad.id}" class="border-2 border-[#706f2b] block p-2 text-center font-bold uppercase">Ver Propiedad</a>
        </div>`
       )

       markers.addLayer(marker);
    });
  }

  categoriasSelect.addEventListener("change", (e) => {
    filtros.categoria = +e.target.value;
    filtrarPropiedades();
  });

  preciosSelect.addEventListener("change", (e) => {
    filtros.precio = +e.target.value
    filtrarPropiedades();
  });

  const obtenerPropiedades = async() => {
    try {
      const url = 'api/propiedades';
      const respuesta = await fetch(url);
      propiedades = await respuesta.json();

      mostrarPropiedades(propiedades)

    } catch (error) {
      console.error(error);
    }
  }

  const cantidad_propiedades = document.createElement("p");
  cantidad_propiedades.classList.add('pt-5')
  const filtrarPropiedades = () => {
    const resultado = propiedades
      .filter(propiedad => filtros.categoria ? filtros.categoria === propiedad.categoriaID : propiedad)
      .filter(propiedad => filtros.precio ? filtros.precio === propiedad.precioID : propiedad)
    
    mostrarPropiedades(resultado)

    const filterbox = document.getElementById("filterbox");
    
    if(cantidad_propiedades.innerText == ""){
      filterbox.insertAdjacentElement('afterend', cantidad_propiedades)
      cantidad_propiedades.innerText = `Propiedades mostradas: ${resultado.length}`;
    } else {
      cantidad_propiedades.innerText = `Propiedades mostradas: ${resultado.length}`;
    }
  }

  
  obtenerPropiedades();
})();