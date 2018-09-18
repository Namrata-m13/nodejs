var webdriver = require('selenium-webdriver')
By = webdriver.By;
var assert=require('assert');

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('http://stormy-beyond-9729.herokuapp.com/');

// In the input box titled 'Name', type 'BrowserStack'
driver.findElement(By.id("testname")).sendKeys("BrowserStack");

// In the input box titled 'Email', type 'support@bstack.com'
driver.findElement(By.id("testemail")).sendKeys("support@bstack.com");

// Select the 'Checkbox'
driver.findElement(By.id("testcheckbox")).click();

// Click the 'Color' dropdown and select 'yellow'
driver.findElement(By.id("testcolor")).click();
driver.findElement(By.xpath("//*[@id='testcolor']/option[3]")).click();

// In the 'Colors' section select 'red' and 'gray'
driver.findElement(By.id("testmultiple")).click();
driver.findElement(By.xpath("//*[@id='testmultiple']/option[4]")).click();

// Click 'Submit'
driver.findElement(By.id("submit")).click();

// Verifies if the body contains the text --> {""testname""=>""BrowserStack"", ""testemail""=>""support@bstack.com"", ""testcheckbox""=>""true"", ""testcolor""=>""yellow"", ""testmultiple""=>[""red"", ""gray""]}"
driver.findElement(By.xpath("/html/body")).getText().then(function (ans){
    if(assert.equal('{"testname"=>"BrowserStack", "testemail"=>"support@bstack.com", "testcheckbox"=>"true", "testcolor"=>"yellow", "testmultiple"=>["red", "gray"]}',ans,"error2")=== undefined){
        console.log("Correct value");
    } 
});

driver.quit();
