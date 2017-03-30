var Everlive = require('everlive-sdk');

var userData = {
    el_app_key: function (id) {
        return 'esdcmmd4xv91ije0';
    },

    tn_login:function(name,password,successblock,failedblock){
        var everlive = new Everlive({
        appId: 'esdcmmd4xv91ije0',
        scheme: "https"
    });
    everlive.authentication.login(name, password, function(data) {
         successblock(data);
    }, function(err) {
            failedblock(err);
        });
    },
    tn_register: function(name,pwd,successblock,failedblock){
        var everlive = new Everlive({
            appId: 'esdcmmd4xv91ije0',
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
            successblock(data);
        }, function(error) {
            failedblock(error);
        });
    },
};
exports.userData = userData;