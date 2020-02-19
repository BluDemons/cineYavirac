const nodemailer = require("nodemailer");

const sendMail = (req, res) => {
  const datos = req.body.datos;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: "jar.salazar@yavirac.edu.ec",
      pass: "*****"
    },
    tls: {
      // no fallar en certs inválidos
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: '"Cine Yavirac 👻" <jar.salazar@yavirac.edu.ec>',
    to: datos.correo,
    subject: "Cine Yavirac",
    html: `
    <h1>CINE YAVIRAC</h1><br/>
    <strong>Sala:</strong> ${datos.sala}<br/>
    <strong>Película:</strong> ${datos.pelicula}<br/>
    <strong>Horario:</strong> ${datos.horario}<br/>
    <strong>Número de Boletos:</strong> ${datos.boletos}<br/>
    <strong> Total:</strong>${datos.total}`
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, function(err, datos) {
    if (err) {
        console.log('Error occurred');
        console.log(err.message);
        return process.exit(1);
    }

    console.log('Message sent successfully!');
    console.log(nodemailer.getTestMessageUrl(datos));

    // only needed when using pooled connections
    //transporter.close();
  });
};

module.exports = {
  sendMail
};
