const mongoose = require('mongoose')
const url_db = 'mongob://localhost:27017/utma'

mongoose.connect(url_db)
.then(() => {
    console.log('conexion exitosa')
})
.catch ((err) => {
    console.log('no jalo')
})

const alumnos_esquema = new mongoose.Schema(
    {
    name: {
        type:String
    },
    apepat: {
        type:String
    },
    numerotel: {
        type:Number
    }
    }
)

const alumnos = new mongoose.model ('tabla de registro de alumnos', alumnos_esquema)

alumnos.create(
   {
    name:'jesus',
    apepat:'Salazar',
    numerotel:'8364898'
    }
)