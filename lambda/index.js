exports.handler = function(event, context, callback) {
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');
  var AWS = require('aws-sdk');
  AWS.config.update({region: 'us-east-2'});
  var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  console.log(event)
  
  var transporter = nodemailer.createTransport(smtpTransport({
		host: "smtp.domain.com",
		port: 587,
		secure: false, // upgrade later with STARTTLS
		auth: {
			user: "noah@lozev.ski",
			pass: process.env.EMAIL_PASSWORD
		}
  }));

  var t = JSON.parse(event.body);
  var text = `${t.email || "no email"} - ${t.message || "no message"}`;
  var mailOptions;
  if (t.email === "user-agent-info") {
    mailOptions = {
    from: 'noah@lozev.ski',
    to: 'noah@lozev.ski',
    subject: 'new website visitor!',
    text: text + `${JSON.stringify(Object.assign({}, {context: event.requestContext, headers: event.headers, extraHeaders: event.multiValueHeaders}, { body: t}), null, 2)}`
  };

  }else{
    mailOptions = {
    from: 'noah@lozev.ski',
    to: 'noah@lozev.ski',
    subject: 'message from lozev.ski!',
    text: text
  };
  }
  let m;
  try{
    m = Object.assign({}, {context: event.requestContext, headers: event.headers, extraHeaders: event.multiValueHeaders}, { body: Object.assign({}, {...t}, { message: JSON.parse(t.message) })} );
    
  } catch(e) {
    
    m = Object.assign({}, {context: event.requestContext, headers: event.headers, extraHeaders: event.multiValueHeaders}, { body: Object.assign({}, {...t}, { message: t.message })} );
  }
  const marshalled = AWS.DynamoDB.Converter.marshall({ m });
  var params = {
  TableName: 'lozevski-site',
  Item: {
    'date-time' : {S: event.requestContext.requestTime || "junk"},
    'time-ms': {N: t.time_ms|| "0"},
    'data': marshalled.m
  }}
  try{
    console.log("putting in dynamodb", )
  ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
})
} catch(e) { 
  console.log(e);
};
  console.log(mailOptions)
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
        message: `Email processed succesfully!`
      }),
    };
    callback(null, response);
  });
}