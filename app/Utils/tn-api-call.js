var http = require('http');
var apiUrl = 'https://api-public.guidebox.com/v2/{apiName}?api_key=f2c1978f68586072a24737ca911d429a69d8bf41';

// Api object
var apiCall = {
    getData: function (apiName) {
        apiUrl = apiUrl.replace('{apiName}', apiName);
        return http.getJSON(apiUrl).then(function (response) {
            return response;
        }, function (error) {
            return error;
        });
    }
};

exports.apiCall = apiCall;