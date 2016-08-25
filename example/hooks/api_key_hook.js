module.exports = function(context) {
  var cordovaUtil = context.requireCordovaModule("cordova-lib/src/cordova/util");
  var cordovaCommon = context.requireCordovaModule("cordova-common");
  var projectRoot = cordovaUtil.isCordova();
  var xml = cordovaUtil.projectConfig(projectRoot);
  var cfg = new cordovaCommon.ConfigParser(xml);

  var plugin = cfg.doc.findall("plugin/[@name='com.eclipsesource.tabris.maps']");
  if (plugin.length > 0) {
    var variable = plugin[0].findall("variable/[@name='ANDROID_API_KEY']");
    if (variable.length > 0) {
      variable[0].set("value", process.env.ANDROID_API_KEY);
      cfg.write();
      console.log("Setting API key to: " + cfg.doc
          .findall("plugin/[@name='com.eclipsesource.tabris.maps']")[0]
          .findall("variable/[@name='ANDROID_API_KEY']")[0]
          .get("value")
      );
    }
  }

};
