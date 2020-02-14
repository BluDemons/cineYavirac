const SalaMovie = require('../models/sala_pelicula');

const getData = (req, res) => {
    const { query } =('select peliculas.titulo,salas.descripcion,horarios.hora from sala_peliculas join peliculas on peliculas.id=idpelicula join salas on salas.id=idsala join horarios on horarios.id=idhorario');
    SalaMovie.findAll({ query })
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: response
        }) 
    })
    .catch( error => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${ error }` 
        })
    });
}

const postData = (req, res) => {
    const datos = req.body.datos

    if (!datos) {
        res.status(400);
        res,
            json({
                error: "Bad Request"
            });
    } else {
        SalaMovie.create(datos)
            .then( response => {
                return res.status(200).json({
                    ok: true,
                    datos: response
                })
            })
            .catch( error => {
                return res.status(500).json({
                    ok: false,
                    datos: null,
                    mensaje: `Error del servidor: ${ error }` 
                })
            });
    }
}

const putData = (req, res) => {
    const id = req.query.id
    const datos = req.body.datos
    SalaMovie.update(datos, { where: { id }})
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: datos
        })
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            datos: null,
            mensaje: `Error del servidor: ${ error }` 
        })
    })
}

const deleteData = (req, res) => {
    const { id } = req.query;
    
    SalaMovie.destroy({ where: { id } })
    .then( response => {
        return res.status(200).json({
            ok: true,
            datos: "Eliminado"
        })
        .catch((error) => {
            return response.status(500).json({
                ok: false,
                datos: null,
                mensaje: `Error del servidor: ${ error }` 
            })
        })
    })
}

module.exports = {
    getData,
    postData,
    putData,
    deleteData,
}
