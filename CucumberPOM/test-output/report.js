$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ADMIN/eclipse-workspace1/CucumberPOM/src/main/java/com/qa/feature/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon application Test",
  "description": "",
  "id": "amazon-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Amazon Home page Test",
  "description": "",
  "id": "amazon-application-test;validate-amazon-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user validate login page title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User validate username on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_open_the_browser()"
});
formatter.result({
  "duration": 55735223800,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_validate_login_page_title()"
});
formatter.result({
  "duration": 35132900,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_click_on_login_button()"
});
formatter.result({
  "duration": 7973854600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_validate_username_on_home_page()"
});
formatter.result({
  "duration": 40486700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"nav-link-accountList\"]/span[1]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-2\u0027, revision: \u0027f148142cf8\u0027, time: \u00272019-07-01T20:55:26\u0027\nSystem info: host: \u0027DESKTOP-CRT2G8C\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\ADMIN\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63907}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8df093d76a96042a670d34009ff2df89\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"nav-link-accountList\"]/span[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:106)\r\n\tat com.sun.proxy.$Proxy16.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:195)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\r\n\tat com.qa.pages.HomePage.verifyusername(HomePage.java:31)\r\n\tat com.qa.StepDefinition.HomePage_StepDefinitionFile.user_validate_username_on_home_page(HomePage_StepDefinitionFile.java:54)\r\n\tat ✽.Then User validate username on home page(C:/Users/ADMIN/eclipse-workspace1/CucumberPOM/src/main/java/com/qa/feature/amazon.feature:8)\r\n",
  "status": "failed"
});
});