var webdriver = require('selenium-webdriver');
var assert=require('assert');
	By = webdriver.By;
until = webdriver.until;


var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
driver.get('https://the-internet.herokuapp.com/javascript_alerts');

// Click 'Click for JS Alert'.
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Alert')]")).click();
driver.switchTo().alert().accept();

// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Confirm')]")).click();
driver.switchTo().alert().accept();
var a=driver.findElement(By.id("result")).getText();
assert.equal("You clicked: Ok",a.value_,"error1");

// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Prompt')]")).click();
driver.switchTo().alert().sendKeys("BrowserStack");
driver.switchTo().alert().accept();
var b=driver.findElement(By.id("result")).getText();
assert.equal("You entered: BrowserStack",b.value_,"error2");

driver.quit();
