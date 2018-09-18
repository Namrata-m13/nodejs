var webdriver = require('selenium-webdriver')
By = webdriver.By
until = webdriver.until;
var assert=require('assert');
//const sp=require('threads');


var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('https://the-internet.herokuapp.com/dynamic_controls');

// Click 'Remove' button
driver.findElement(By.xpath('//*[@id="checkbox-example"]/button')).click();
driver.sleep(10000);

// Verify if text 'It's gone!' exist
var a=driver.findElement(By.id('message')).getText().then(function (ans1){
    if(assert.equal("It's gone!",ans1) === undefined){
        console.log("Correct value 1");
    }
});

// Click the 'Add' button
driver.findElement(By.xpath('//*[@id="checkbox-example"]/button')).click();
driver.sleep(10000);

// Verify if text 'It's back!' exist
driver.findElement(By.id('message')).getText().then(function (ans2){
    if(assert.equal("It's back!",ans2)=== undefined){
        console.log("Correct value 2");
    }
});

driver.quit();
