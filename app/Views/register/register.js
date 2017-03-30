
var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;
var userData = require('../../Utils/el-user-manager.js').userData;


var page;
var email;
var pwTF;
var user = new Observable({
    email: "",
    password: ""
});
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};

exports.registerAction = function() {
    email = page.getViewById("email");
    pwTF = page.getViewById("pwTF");

    var username = email.text;
    var password = pwTF.text;

    userData.tn_register(username,password,function(data){
         console.log("Successfully")
    },function(err){
        console.log("failed")
    });
    // .login(function(data){
    //     var accessToken = data.result.access_token;
    //     alert("Successfully logged the user in! Received access token: " + accessToken);
    // },function(err){
    //     alert("Unfortunately an error occurred: " + err.message);
    // });
};