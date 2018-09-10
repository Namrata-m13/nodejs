var webdriver = require('selenium-webdriver');
var assert=require('assert');
	By = webdriver.By;
until = webdriver.until;

//var TimeUnit = SECONDS;

var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

//driver.manage().timeouts().implicitlyWait(3);

driver.get('https://the-internet.herokuapp.com/javascript_alerts');
//driver.wait(5000);

//driver.switchTo().alert().accept();
//driver.manage().timeouts().implicitlyWait(5);
// Click 'Click for JS Alert'.

//driver.manage().timeouts().implicitlyWait(10000);
//driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
// driver.wait(function() {}, 3);
//driver.manage().timeouts().implicitlyWait(5);
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Alert')]")).click();
driver.switchTo().alert().accept();
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Confirm')]")).click();
driver.switchTo().alert().accept();
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Prompt')]")).click();
driver.switchTo().alert().sendKeys("BrowserStack");
driver.switchTo().alert().accept();

//var b=driver.switchTo().alert().getText();
var b=driver.findElement(By.id("result")).getText();
assert.equal("You entered: BrowserStack",b.value_,"error");


// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'

// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.

driver.quit();
