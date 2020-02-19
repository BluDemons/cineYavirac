const db = require("../config/db");

const query1 = (req, res) => {
  const pelicula = req.query.pelicula;
  const horario = req.query.horario;

  db.sequelize
    .query(
      `select sala_peliculas.id, peliculas.titulo as titulo, horarios.hora as hora, salas.nombre as nombre, peliculas.id as idpelicula, horarios.id as idhorario from sala_peliculas join peliculas on peliculas.id = sala_peliculas.idpelicula join horarios on horarios.id = sala_peliculas.idhorario join salas on salas.id = sala_peliculas.idsala where peliculas.id=${pelicula} and horarios.id=${horario};`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then(response => {
      return res
        .status(200)
        .json({
          ok: true,
          datos: response
        })
    });
};

const query2 = (req, res) => {
  const idpelicula = req.query.idpelicula;

  db.sequelize
    .query(
      `select id, idpelicula, (select c_pelicula(idpelicula)) as idpelicula_titulo, idsala, (select c_sala(idsala)) as idsala_nombre, idhorario, (select c_horario(idhorario)) as idhorario_hora from sala_peliculas where idpelicula=${idpelicula};`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then(response => {
      return res.status(200).json({
          ok: true,
          datos: response
        })
    });
};

const query3 = (req, res) => {
  db.sequelize
    .query(
      `select id, idpelicula, (select c_pelicula(idpelicula)) as idpelicula_titulo, (select c_pelicula_imagen(idpelicula)) as imagen, idsala, (select c_sala(idsala)) as idsala_nombre, idhorario, (select c_horario(idhorario)) as idhorario_hora from sala_peliculas;`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then(response => {
      return res.status(200).json({
        ok: true,
        datos: response
      });
    })
};

const query4 = (req, res) => {
  db.sequelize
    .query(
      `select peliculas.titulo as label, peliculas.valorBoleto, sum(compras.numero_boletos) as value from compras join sala_peliculas on sala_peliculas.id = compras.idsala_peliculas join peliculas on peliculas.id = sala_peliculas.idpelicula group by peliculas.titulo, peliculas.valorBoleto;`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then(response => {
      return res.status(200).json({
        ok: true,
        datos: response
      });
    })
};

const query = (req, res) => {
  db.sequelize
    .query(
      `select peliculas.titulo as titulo,peliculas.valorBoleto as precio,sum(peliculas.valorBoleto*compras.numero_boletos) as total, sum(compras.numero_boletos) as cantidad from compras join sala_peliculas on sala_peliculas.id = compras.idsala_peliculas join peliculas on peliculas.id = sala_peliculas.idpelicula group by peliculas.titulo;`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
    .then(response => {
      return res.status(200).json({
        ok: true,
        datos: response
      });
    })
    .catch(error => {
      return response.status(500).json({
        ok: false,
        datos: null,
        mensaje: `Error del servidor: ${error}`
      });
    });
};

module.exports = {
  query,
  query1,
  query2,
  query3,
  query4
};
