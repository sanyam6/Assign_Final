describe('test case', function () {
    
    const fsExtra = require('fs-extra');
    fsExtra.emptyDirSync("C:\\Users\\SANYAM\\Downloads");

    var originalTimeout;
    beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    
    it('should pass', function () {

        const url = 'https://templates.office.com/en-us/';

        browser.ignoreSynchronization = true;
        browser.driver.get(url);

        browser.sleep(5000);

        element(by.xpath("//*[@id='mainContent']//div[2]//div[1]//div[1]//div[1]//div//div[1]//a//div")).click();

        browser.sleep(5000);

        element(by.xpath("//*[@id='mainContent']//div[1]//section//div//div//div[1]//div//a//img")).click();

        browser.sleep(5000);

        element(by.xpath("//a[@href='https://omextemplates.content.office.net/support/templates/en-us/tf16402488.dotx']")).click();

        browser.sleep(10000);
        
      //  sendMail();


    })


})


var nodemailer = require("nodemailer");


function sendMail() {
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
             // "C:\Users\SANYAM\Downloads\tf16402488.dotx" 
              'path': 'C:\\Users\\SANYAM\\Downloads\\tf16402488.dotx',
             //  'path' : 'C:\\Users\\SANYAM\\Downloads\\Test\\tf16402488.dotx'
            }]
    };

    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
          //  response.send(error);
        } else {
            console.log("Message sent: " + info.response);
        //    response.send(info);
        }
    });


}


