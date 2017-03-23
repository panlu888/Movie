var Everlive = require('everlive-sdk');

var userData = {
    el_app_key: function (id) {
        return 'esdcmmd4xv91ije0';
    },
    tn_login:function(name,password){
        var everlive = new Everlive({
        appId: this.el_app_key,
        scheme: "https"
        });
        return everlive.authentication.login(name, password, function(data) {
        return data;
        
    }, function(err) {
            return err;
        });
    },
    tn_register:function(name,pwd){
        var everlive = new Everlive({
        appId: this.el_app_key,
        scheme: "https"
        });
        var attrs = {
            Email: name,
            //DisplayName: name
        };
        everlive.Users.register(name,
        pwd,
        attrs,
        function(data) {
            alert(JSON.stringify("sussce"+data));
        },
        function(error) {
            alert(JSON.stringify("======"+error));
        });
    },
};
exports.userData = userData;