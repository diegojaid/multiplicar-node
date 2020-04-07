const opciones = {
    base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'imprime en consola una tabla de multiplicar', opciones)
    .command('crear', 'crea una tabla de multiplicar', opciones)
    .help()
    .argv;



module.exports = {
    argv
}