import path from "path"

export default {
  mode: "development",
  entry: {
    mapa: "./src/js/mapa.js",
    agregarImagen: "./src/js/agregarImagen.js",
    mostrarMapa: "./src/js/mostrarMapa.js",
    mapaHome: "./src/js/Mapahome.js",
  },
  output:{
    path: path.resolve("public/js"),
    filename: "[name].js"
  }
}