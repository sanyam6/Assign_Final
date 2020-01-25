exports.config = {
  capabilities: {
    'browserName': 'chrome',
    },
   
    directConnect: true,
    jasmineNodeOpts: {defaultTimeoutInterval: 100000},
  specs: ['..\\test\\test_new.js']
};



