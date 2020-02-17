const { Router } = require('express');

const login = require('../controllers/login');
const compra = require('../controllers/compraCRUD');
const horario = require('../controllers/horarioCRUD');
const movie = require('../controllers/movieCRUD');
const persona = require('../controllers/personaCRUD');
const sala = require('../controllers/salaCRUD');
const sala_movie = require('../controllers/sala_movieCRUD');
const send_mail = require('../controllers/send_mailCRUD');
const raw = require('../controllers/raw_CRUD');

const router = Router();

router.get('/', (req, res) => res.send('Bienvenido'))

router.post('/login', login.login);

router.get('/compra', compra.getData);
router.post('/compra', compra.postData);
router.put('/compra', compra.putData);
router.delete('/compra', compra.deleteData);

router.get('/horario', horario.getData);
router.post('/horario', horario.postData);
router.put('/horario', horario.putData);
router.delete('/horario', horario.deleteData);

router.get('/movie', movie.getData);
router.post('/movie', movie.postData);
router.put('/movie', movie.putData);
router.delete('/movie', movie.deleteData);

router.get('/persona', persona.getData);
router.post('/persona', persona.postData);
router.put('/persona', persona.putData);
router.delete('/persona', persona.deleteData);

router.get('/sala', sala.getData);
router.post('/sala', sala.postData);
router.put('/sala', sala.putData);
router.delete('/sala', sala.deleteData);

router.get('/sala_movie', sala_movie.getData);
router.post('/sala_movie', sala_movie.postData);
router.put('/sala_movie', sala_movie.putData);
router.delete('/sala_movie', sala_movie.deleteData);

router.post('/send_mail', send_mail.sendMail);

router.get('/raw1', raw.raw1);
router.get('/raw2', raw.raw2);
router.get('/raw3', raw.raw3);
router.get('/raw4', raw.raw4);
router.get('/raw', raw.raw);

module.exports = router;
