import { context } from 'esbuild';
import { resolve } from 'path';

const entryPoints = ['mapa', 'mostrarMapa', 'mapaHome', 'scrollDown'].map(name => `./src/js/${name}.js`);

(async function(){
  try {
    let ctx = await context({
      entryPoints,
      bundle: true,
      outdir: resolve('public/js'),
    });

    await ctx.watch();
    
    console.log("ESBuild Watching...");
  } catch (error) {
    process.exit(1)
  }
})();
