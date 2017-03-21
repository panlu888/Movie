/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
var application = require("application");
var Firebase = require("nativescript-plugin-firebase-common").Firebase;

// var firebase = Firebase.createNew({
//     url: 'https://tn-ns-f0d64.firebaseio.com',
//     persist: false // turn off offline disk persistence 
//   });

application.start({ moduleName: "main-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
