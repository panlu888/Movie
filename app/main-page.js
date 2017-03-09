var createViewModel = require("./main-view-model").createViewModel;
var color = require("./Utils/tn-common-util.js"),
    apiCall = require('./Utils/tn-api-call.js').apiCall,
    _ = require('lodash');

function onNavigatingTo(args) {
  var page = args.object;
  page.bindingContext = createViewModel();
}

function setTabViewColor(tabView) {
  tabView.selectedColor = color.yellowColor;
  tabView.tabsBackgroundColor = color.color_dark4;
  tabView.tabTextColor = color.whiteColor;
  tabView.tabBackgroundColor = color.color_tabground;
  tabView.selectedColor = color.yellowColor;
  tabView.selectedColor = color.yellowColor;
}

exports.pageLoaded = function (args) {
  page = args.object;
  var tabView = page.getViewById("tabView");
  setTabViewColor(tabView);
  apiCall.getData('movies').then(function (response) {
    // here is the response from movies api
  }, function (error) {
    
  });
};

exports.onNavigatingTo = onNavigatingTo;