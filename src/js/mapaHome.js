(async function () {
  let useLocation = []
  let lat = 4.6771137
  let lng = -74.0490971

  var mapa = L.map('mapaHome').setView([lat, lng], 13);
  let markers = new L.FeatureGroup().addTo(mapa);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mapa);

  async function getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          useLocation = [coords.latitude, coords.longitude]
          resolve(useLocation)
        },
        (error) => {
          console.error(error)
          alert("No se pudo obtener la información de geolocalización")

          useLocation = [4.6771137, -74.0490971]
          reject()
        }
      )
    })
  }

  if(!navigator.geolocation){
    useLocation = [4.6771137, -74.0490971]
  } else{
    await getUserLocation()
  }

  lat = useLocation[0]
  lng = useLocation[1]

  mapa.setView(useLocation, 13)
  
  const filtros = {
    categoria: '',
    precio: ''
  }

  let propiedades = [];

  const categoriasSelect = document.getElementById('categorias');
  const preciosSelect = document.getElementById('precios');

  const mostrarPropiedades = propiedades => {
    //? Limpiando los markers cada vez que se itera sobre un arreglo de propiedades
    markers.clearLayers();

    var markerIcon = new L.Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/9428/9428182.png',
      iconSize: [25, 40],
      shadowSize: [41, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });
    propiedades.forEach(propiedad => {
      // console.log(propiedad);
      const marker = new L.marker([propiedad?.lat, propiedad?.lng],
        {
          icon: markerIcon
        })
        .addTo(mapa)
        .bindPopup(`
      <div class="w-[250px] bg-primary/50 p-2 text-white rounded">
      <img src= ${propiedad.imagenes.length > 0 ? propiedad.imagenes[0].ruta : "https://res.cloudinary.com/dakerpersonalspace/image/upload/v1707755538/kgzjptrvcz3xcmlgmclt.webp"} alt= ${propiedad.titulo} class="h-48 w-full"}>
      <br>
      <strong class="text-secondary">Dirección:</strong> ${propiedad.calle != "" ? propiedad.calle : "Dirección no disponible"} <br> 
      <strong class="text-secondary">Precio:</strong> ${propiedad.precio.nombre} <br>
      <strong class="text-secondary">Tratante:</strong> ${propiedad.usuario.nombre} <br>
      <a href="/propiedades/propiedad/${propiedad.id}" class="border-2 border-secondary !text-secondary block p-2 text-center font-bold uppercase">Ver Propiedad</a>
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

  const obtenerPropiedades = async () => {
    try {
      const url = 'api/propiedades';
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        throw new Error(`Error al obtener propiedades. Estado: ${respuesta.status}`);
      }

      propiedades = await respuesta.json();

      mostrarPropiedades(propiedades)

    } catch (error) {
      console.error('Error al obtener propiedades:', error);
    }
  }

  const cantidad_propiedades = document.createElement("p");
  cantidad_propiedades.classList.add('pt-5', 'text-background', 'font-semibold')
  const filtrarPropiedades = () => {
    const resultado = propiedades
      .filter(propiedad => filtros.categoria ? filtros.categoria === propiedad.categoriaID : propiedad)
      .filter(propiedad => filtros.precio ? filtros.precio === propiedad.precioID : propiedad)

    mostrarPropiedades(resultado)

    if(resultado.length > 0)
      mapa.setView([resultado[0].lat, resultado[0].lng], 13)
    
    const filterbox = document.getElementById("filterbox");

    if (cantidad_propiedades.innerText == "") {
      filterbox.insertAdjacentElement('afterend', cantidad_propiedades)
      cantidad_propiedades.innerText = `Propiedades mostradas: ${resultado.length}`;
    } else {
      cantidad_propiedades.innerText = `Propiedades mostradas: ${resultado.length}`;
    }
  }

  obtenerPropiedades();
})();