var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable;


var page;
var email;
var user = new Observable({
    email: "user@domain.com",
    password: "password"
});
exports.loaded = function() {
    page = args.object;
    page.bindingContext = user;
    console.log("hello");
};

exports.signIn = function() {
    email = page.getViewById("email");
    alert(email.text);
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
    alert("Registering");
};