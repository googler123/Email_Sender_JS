// for email to be sent you have to allow "third party access" by going to Settings>>Security>>allow third party access   !!!!!

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'senderemail@gmail.com',
  to: 'receiver@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Text Message!!!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
