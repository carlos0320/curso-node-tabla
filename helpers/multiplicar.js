const { rejects } = require('assert');
const fs = require('fs');
const colors = require( 'colors' );

const crearArchivo =  async( base = 5, listar, hasta) => {

    try {

        let salida = '';
        let consola = '';        
        
        for (let i = 1; i <= hasta; i++){
            
            consola += `${ base } ${colors.red('X')} ${ i }  ${colors.red('=')} ${ base * i }\n`;
            salida += `${ base } X ${ i } = ${ base * i }\n`;
            
        }
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        if( listar ){
            console.log("==================".green);
            console.log(`${ colors.green(' Tabla del: ')}  ${colors.blue( base ) }`);
            console.log("==================".green);
            console.log( consola );
        }

        return `tabla-${ base }.txt creado!`;  
        
    } catch (error) {
        throw error;
    }


}

module.exports = {

    crearArchivo

}

