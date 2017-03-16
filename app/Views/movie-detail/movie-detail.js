// Modules
var webViewInterfaceModule = require('nativescript-webview-interface');
var page, oWebViewInterface;

exports.pageLoaded = function (args) {
    page = args.object;
    setupWebViewInterface(page);
};

function setupWebViewInterface(page, url) {
    var webView = page.getViewById('webView');
    oWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, url);
}