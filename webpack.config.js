import path from "path"

export default {
  mode: "development",
  entry: {
    mapa: "./src/js/mapa.js"
  },
  output:{
    path: path.resolve("public/js"),
    filename: "[name].js"
  }
}