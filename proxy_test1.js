var webdriver = require('selenium-webdriver'),proxy = require('selenium-webdriver/proxy'),By = webdriver.By;


var capabilities ={
'browserName': 'firefox'
}
//var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
//var driver = new webdriver.Builder().forBrowser('firefox').setProxy(proxy.manual({http: '127.0.0.1:8118'})).build();
//var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).usingWebDriverProxy("10.100.100.226:8118").build();
var driver = new webdriver.Builder().
  usingServer('http://10.100.100.226:4444/wd/hub').
  withCapabilities(capabilities).
  usingWebDriverProxy("http://127.0.0.1:8118").
  build();
     
driver.get('https://www.facebook.com');
driver.get('https://www.browserstack.com');


driver.quit();
