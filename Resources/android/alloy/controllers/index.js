function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.ad = Ti.UI.createView({
        id: "ad",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId0.add($.__views.ad);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Admob = require("ti.admob");
    var InLocoMedia = require("InLocoMedia");
    InLocoMedia.initWithOptions({
        appId: "c1e67217086d7face84f89210130243aa8dadbf1f589d7be07c54284c130a45a",
        logsEnabled: true,
        developmentDevices: "AF9498C1A772DF286AB7E9FF8ECF426F"
    });
    var osname = "android";
    var adView;
    adView = Admob.createView("android" == osname ? {
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        publisherId: "ca-app-pub-9313505358879389/1749850559"
    } : {
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        adUnitId: "ca-app-pub-9313505358879389/9651722153"
    });
    $.ad.add(adView);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;