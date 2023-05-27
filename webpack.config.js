import path from "path"

export default {
  mode: "development",
  entry: {
    mapa: "./src/js/mapa.js",
    agregarImagen: "./src/js/agregarImagen.js"
  },
  output:{
    path: path.resolve("public/js"),
    filename: "[name].js"
  }
}