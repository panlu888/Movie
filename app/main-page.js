var color = require("./Utils/tn-common-util.js"),
  apiCall = require('./Utils/tn-api-call.js').apiCall,
  observable = require("data/observable"),
  _ = require('lodash');

// Create view model to expose data to view
var viewModel = new observable.Observable();

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
  setTabViewColor(page.getViewById("tabView"));
  apiCall.getData('movies').then(function (response) {
    viewModel.set("myItems", response.results);
    //bind viewModel to page binding context
    page.bindingContext = viewModel;
  });
};