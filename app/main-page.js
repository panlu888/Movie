var createViewModel = require("./main-view-model").createViewModel;
var color = require("./Utils/tn-common-util.js");

function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}
exports.pageLoaded = function(args) {
  page = args.object;
  var tabView = page.getViewById("tabView");
  tabView.selectedColor = color.yellowColor;
  
  tabView.tabsBackgroundColor = color.color_dark4;
  tabView.tabTextColor = color.whiteColor;
  tabView.tabBackgroundColor = color.color_tabground;
  tabView.selectedColor = color.yellowColor;
  tabView.selectedColor = color.yellowColor;
};
exports.onNavigatingTo = onNavigatingTo;