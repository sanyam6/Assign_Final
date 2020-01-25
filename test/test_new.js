
describe('file download test case', function () {
   

    const fsExtra = require('fs-extra');
    fsExtra.emptyDirSync("C:\\Users\\SANYAM\\Downloads");

    
    it('should pass', function () {

        const url = 'https://templates.office.com/en-us/';

        browser.ignoreSynchronization = true; //to tell the protractor
        //that this is a non angular page

        browser.driver.get(url);

        browser.sleep(5000);

        element(by.xpath("//*[@id='mainContent']//div[2]//div[1]//div[1]//div[1]//div//div[1]//a//div")).click();

        browser.sleep(5000);

        element(by.xpath("//*[@id='mainContent']//div[1]//section//div//div//div[1]//div//a//img")).click();

        browser.sleep(5000);

        element(by.xpath("//a[@href='https://omextemplates.content.office.net/support/templates/en-us/tf16402488.dotx']")).click();

        browser.sleep(2000);
        
      


    })


})