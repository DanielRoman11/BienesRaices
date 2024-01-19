import { context } from 'esbuild';
import { resolve } from 'path';

// Define tus puntos de entrada
const entryPoints = ['mapa', 'agregarImagen', 'mostrarMapa', 'mapaHome'].map(name => `./src/js/${name}.js`);

(async function(){
  let ctx = await context({
    entryPoints,
    bundle: true,
    outdir: resolve('public/js'),
  }).catch(() => process.exit(1));
  await ctx.watch();
  console.log("ESBuild Watching...");
})()
