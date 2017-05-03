var apiCall = require('../../Utils/tn-api-call.js').apiCall,
    observable = require("data/observable"),
    frameModule = require("ui/frame");
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

exports.redirect = function () {
    var showUrl = viewModel.get('showContent').url,
        topmost = frameModule.topmost();
    var navigationEntry = {
        moduleName: 'Views/show-episodes/show-episodes',
        context: {
            trailUrl: showUrl
        },
        animated: true,
        transition: {
            name: 'slide',
            duration: 380,
            curve: 'easeOut'
        }
    };
    topmost.navigate(navigationEntry);
};