(function() {
  const lng = -74.0490971;
  const lat = 4.6771137;
  var mapa = L.map('mapaHome').setView([lat, lng ], 13);

  let markers = new L.FeatureGroup().addTo(mapa)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  let propiedades = [];

  const filtros = {
    categoria: '',
    precio: ''
  }

  const categoriasSelect = document.getElementById('categorias');
  const preciosSelect = document.getElementById('precios');

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
        .bindPopup(`<div class="text-xs">
        <img src="/uploads/${propiedad.imagen}" class="max-h-32 block mx-auto" alt="${propiedad.descripcion}"/>
        <br>
        <strong>Dirección:</strong> ${propiedad.calle != "" ? propiedad.calle : "Dirección no disponible"} <br> 
        <strong>Precio:</strong> ${propiedad.precio.nombre} <br>
        <strong>Tratante:</strong> ${propiedad.usuario.nombre} <br>
        <strong>Última Actualización:</strong> ${new Date(propiedad.updatedAt).toLocaleDateString()} <br>
        <a href="/propiedades/propiedad/${propiedad.id}" class="border-2 border-[#706f2b] block p-2 text-center font-bold uppercase">Ver Propiedad</a>
        </div>`
       )
    });
  }

  categoriasSelect.addEventListener("change", (e) =>{
    filtros.categoria = +e.target.value;
    filtrarPropiedades();
  });
  preciosSelect.addEventListener("change", (e) =>{
    filtros.precios = +e.target.value
    filtrarPropiedades();
  });

  const obtenerPropiedades = async() => {
    try {
      const url = 'api/propiedades';
      const respuesta = await fetch(url);
      propiedades = await respuesta.json();

      mostrarPropiedades(propiedades)

    } catch (error) {
      console.log(error);
    }
  }

  const filtrarPropiedades =() =>{
    const resultado = propiedades.filter(propiedad => 
      filtros.categoria ? propiedad.categoriaId === filtros.categoria : propiedad );
    
      console.log(resultado);
  }

  const filtrarCategoria = propiedad => filtros.categoria ? propiedad.categoriaId === filtros.categoria : propiedad

  obtenerPropiedades();

  })();
  