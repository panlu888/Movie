var apiCall = require('../../Utils/tn-api-call.js').apiCall,
    observable = require("data/observable");

var viewModel = new observable.Observable();
exports.onPageLoaded = function (args) {
    page = args.object;

    var context = page.navigationContext;

    viewModel.set("id", context.item.id);
    viewModel.set("naviTitle", context.item.title);
    page.bindingContext = viewModel;
    apiCall.getDetailShow(viewModel.id).then(function (response) {
        viewModel.set("showContent", response);
    });
};