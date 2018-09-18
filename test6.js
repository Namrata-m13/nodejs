
var webdriver = require('selenium-webdriver')
By = webdriver.By,
Key = webdriver.Key;
var assert=require('assert');


var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://the-internet.herokuapp.com/key_presses');
driver.sleep(10000);

// Send 'ENTER' key on the page
driver.actions().sendKeys(Key.ENTER).perform();
driver.sleep(10000);


// Verify if text 'You entered: ENTER' exist
driver.findElement(By.id("result")).getText().then(function (ans){
    if(assert.equal("You entered: ENTER",ans)=== undefined){
        console.log("Correct value");
    }
});

driver.quit();
