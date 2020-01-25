
var nodemailer = require("nodemailer");

sendMail1();

function sendMail1() {
    var transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "sanyam1043642@gmail.com",
            pass: "Sanyam@1043642"
        }
    });

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email', // host address
        port: 587,  // mostly same number, rarely changes
        secure: false, // true for 465, false for other ports
        auth: {
            user: "sanyam1043642@gmail.com",
            pass: "Sanyam@1043642"
        }
    });

    var mailOptions = {
        from: 'sanyam1043642@gmail.com', // sender address
        to: 'sanyam1043642@gmail.com', // list of receivers
        subject: 'Test Mail', // Subject line
        //text: info.body,
        text: 'PFA the file with this mail', // plaintext body
        attachments: [
            {
              //  'path' : 'C:\\Users\\SANYAM\\Desktop\\ABC.txt',
               'path': 'C:\\Users\\SANYAM\\Downloads\\tf16402488.dotx',
             //  'path' : 'C:\\Users\\SANYAM\\Downloads\\Test\\tf16402488.dotx'
            }]
    };

    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
         
        } else {
            console.log("Message sent: " + info.response);
           
        }
    });


}


