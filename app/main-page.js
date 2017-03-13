var color = require("./Utils/tn-common-util.js"),
  apiCall = require('./Utils/tn-api-call.js').apiCall,
  observable = require("data/observable"),
  _ = require('lodash');
var screen_width_inDP = require("platform").screen.mainScreen.widthPixels/require("platform").screen.mainScreen.scale;

// Create view model to expose data to view
var viewModel = new observable.Observable();

function setTabView(tabView) {
  tabView.selectedColor = color.yellowColor;
  tabView.tabsBackgroundColor = color.color_dark4;
  tabView.tabTextColor = color.whiteColor;
  tabView.tabBackgroundColor = color.color_tabground;
}
exports.selectedIndexChanged = function (args){
  page = args.object;
  if(page != undefined){
    var tabView = page.getViewById("tabView");
    var index = tabView.selectedIndex;
    var item = tabView.items[index];
    viewModel.set("naviTitle",item.title);
    if(index == 1 && (viewModel.theatres == undefined || viewModel.theatres.length <= 0)){
    apiCall.getData('shows').then(function (response) {
    viewModel.set("theatres", response.results);
  });
    }
  }
}

exports.pageLoaded = function (args) {
  page = args.object;
  var tabView = page.getViewById("tabView");
  setTabView(tabView);
  viewModel.set("naviTitle","Movies");
  viewModel.set("screenWidth",screen_width_inDP);
  viewModel.set("movies",[]);
  viewModel.set("theatres",[]);
  page.bindingContext = viewModel;
  apiCall.getData('movies').then(function (response) {
    viewModel.set("movies", response.results);

  });
};