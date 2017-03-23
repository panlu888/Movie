var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var apiCall = require('../../Utils/tn-api-call.js').apiCall;
var userData = require('../../Utils/el-user-manager.js').userData;


var page;
var email;
var pwTF;
var user = new Observable({
    email: "user@domain.com",
    password: "password"
});
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.signIn = function() {
    email = page.getViewById("email");
    pwTF = page.getViewById("pwTF");

    var username = email.text;
    var password = pwTF.text;

    userData.tn_login(username,password);
    // .login(function(data){
    //     var accessToken = data.result.access_token;
    //     alert("Successfully logged the user in! Received access token: " + accessToken);
    // },function(err){
    //     alert("Unfortunately an error occurred: " + err.message);
    // });
};

exports.register = function() {
    topmost = frameModule.topmost();
    var navigationEntry = {
    moduleName: 'views/register/register',
    context: {
      
    },
    animated: true,
    transition: {
      name: 'slide',
      duration: 300,
      curve: 'easeOut'
    }
  };
  topmost.navigate(navigationEntry);
};