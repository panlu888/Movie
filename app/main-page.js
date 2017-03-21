var color = require("./Utils/tn-common-util.js"),
  apiCall = require('./Utils/tn-api-call.js').apiCall,
  observable = require("data/observable"),
  utilityModule = require("utils/utils"),
  frameModule = require("ui/frame"),
  _ = require('lodash');

var screen_width_inDP = require("platform").screen.mainScreen.widthPixels / require("platform").screen.mainScreen.scale;

// Create view model to expose data to view
var viewModel = new observable.Observable();

function setTabView(tabView) {
  tabView.selectedColor = color.yellowColor;
  tabView.tabsBackgroundColor = color.color_dark4;
  tabView.tabTextColor = color.whiteColor;
  tabView.tabBackgroundColor = color.color_tabground;
}

exports.selectedIndexChanged = function (args) {
  page = args.object;
  if (page != undefined) {
    var tabView = page.getViewById("tabView");
    var index = tabView.selectedIndex;
    var item = tabView.items[index];
    viewModel.set("naviTitle", item.title);
    if (index == 1 && (viewModel.shows == undefined || viewModel.shows.length <= 0)) {
      apiCall.getData('shows').then(function (response) {
        viewModel.set("shows", response.results);
      });
    }
  }
};

exports.gridViewItemTap = function (args) {
  var selectedItem = _.get(viewModel.get('movies'), args.index),
    topmost = frameModule.topmost();
  var navigationEntry = {
    moduleName: 'Views/movie-detail/movie-detail',
    context: {
      trailUrl: _.get(selectedItem, 'metacritic')
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

exports.showsItemTap = function (args) {
  var selectedItem = _.get(viewModel.get('shows'), args.index),
  topmost = frameModule.topmost();

  var navigationEntry = {
    moduleName: 'Views/show-detail/show-detail',
    context: {
      item: selectedItem
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
function refreshProfile(){
  var infos = [
    {"icon":"icon1","title":"User Login","sorrow":"so"},
    {"icon":"icon1","title":"Settings","sorrow":"so"},
    {"icon":"icon1","title":"Clear Cache Data","sorrow":"so"},
    {"icon":"icon1","title":"About Us","sorrow":"so"},
    ];
    viewModel.set("infos",infos);
}
exports.pageLoaded = function (args) {
  page = args.object;
  var tabView = page.getViewById("tabView");
  setTabView(tabView);
  viewModel.set("naviTitle", "Movies");
  viewModel.set("screenWidth", screen_width_inDP);

  refreshProfile();

  page.bindingContext = viewModel;
  apiCall.getData('movies').then(function (response) {
    viewModel.set("movies", response.results);
  });
};