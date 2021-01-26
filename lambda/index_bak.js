exports.handler = function(event, context, callback) {
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');

  var transporter = nodemailer.createTransport(smtpTransport({
		host: "smtp.domain.com",
		port: 587,
		secure: true, // upgrade later with STARTTLS
		auth: {
			user: "noah@lozev.ski",
			pass: process.env.EMAIL_PASSWORD
		}
  }));

  var text = `${event.email} - ${event.message}`;

  var mailOptions = {
    from: 'noah@lozev.ski',
    to: 'noah@lozev.ski',
    subject: 'message from lozev.ski!',
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message,
					message: mailOptions
        }),
      };
      callback(null, response);
    }
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Email processed succesfully!`,
				message2: mailOptions
      }),
    };
    callback(null, response);
  });
}