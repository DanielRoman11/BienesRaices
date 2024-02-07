import { exit } from "node:process"
import db from "../config/dbs.js"
//? Importando tablas
import categorias from "./categoria.js"
import precios from "./precio.js"
import usuarios from "./usuarios.js"

import { Categoria, Precio, Usuario } from "../models/index.js"

const importarDatos = async () =>{
    try {
        // Autenticar en la base de datos
        await db.authenticate()
        
        // Generar Columnas en la base de datos
        await db.sync()
        
        // Insertar columnas
        await Promise.all([
            Categoria.bulkCreate(categorias),
            Precio.bulkCreate(precios),
            Usuario.bulkCreate(usuarios)
        ]);

        console.log("Datos importados correctamente");
        exit();

    } catch (error) {
        console.error(error);
        exit(1);
    }
}

const eliminarDatos = async() => {
    try {
        // await Promise.all([
        //     Categoria.destroy({where: {}, truncate: true}),
        //     Precio.destroy({where: {}, truncate: true})
        // ]);

        await db.sync({force: true})
        console.log("Datos eliminados correctamente 🧹");
        exit()
    } catch (error) {
        console.error();
        exit(1);
    }
}


if(process.argv[2] === "-i"){
    importarDatos();
}

if(process.argv[2] === "-e"){
    eliminarDatos();
}