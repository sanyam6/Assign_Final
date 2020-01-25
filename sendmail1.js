require('dotenv').config();
var nodemailer = require("nodemailer");

sendMail1();



function sendMail1() {
    var transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sanyam1043642@gmail.com',
            pass: 'Sanyam@1043642'
            // user: process.env.EMAIL,
            // pass: process.env.PASSWORD
        }
    });

    var mailOptions = {
        from: 'sanyam1043642@gmail.com', // sender address
        to: 'sanyam1043642@gmail.com', // list of receivers
        //cc:
        //bcc:
        subject: 'Test Mail', // Subject line
        text: 'PFA the file with this mail', // plaintext body
        attachments: [
            {
                'path' : 'C:\\Users\\SANYAM\\Desktop\\ABC.txt',
             //  'path': 'C:\\Users\\SANYAM\\Downloads\\tf16402488.dotx',
             
            }]
    };

    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + info);
           
        }
    });


}


