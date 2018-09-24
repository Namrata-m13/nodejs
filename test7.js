var webdriver = require('selenium-webdriver');
var assert = require('assert');
var capabilities = {
  'browserName' : 'chrome'

}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('https://the-internet.herokuapp.com/hovers');

driver.sleep(10000);
// Hover the mouse on first image
driver.findElement({xpath : '//div[@class = "example"]/div[1]/img'})
.then(function(elem){
  driver.actions().mouseMove(elem).perform().then(function(){
    driver.findElement({xpath:"//div[@class = 'example']/div[1]/div/h5"}).getText().then(function(ans){
      // Assert if 'name: user1' exist
      if(assert.equal("name: user1",ans) == undefined)
      {
        console.log("Success, value is asserted");
      }
    });
  });

});

driver.quit();







