exports.config = {
  capabilities: {
    'browserName': 'chrome',
  },
   directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['..\\test\\test_new.js']
};



