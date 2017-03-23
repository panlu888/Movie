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
        alert(data);
        return data;
        
    }, function(err) {
            alert(err);
            return err;
        });
    },
};
exports.userData = userData;