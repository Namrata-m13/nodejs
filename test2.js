var webdriver = require('selenium-webdriver');
var assert=require('assert');
	By = webdriver.By;
until = webdriver.until;


var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
driver.get('https://the-internet.herokuapp.com/javascript_alerts');
driver.getCurrentUrl();

// Click 'Click for JS Alert'.
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Alert')]")).click();
driver.switchTo().alert().accept();

// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Confirm')]")).click();
driver.switchTo().alert().accept();
driver.findElement(By.id("result")).getText().then(function (ans1){
	if(assert.equal("You clicked: Ok",ans1,"error1")=== undefined)
	{
		console.log("Correct value 1");
	}

});


// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.
driver.findElement(By.xpath("//*[contains(text(),'Click for JS Prompt')]")).click();
driver.switchTo().alert().sendKeys("BrowserStack");
driver.switchTo().alert().accept();
driver.findElement(By.id("result")).getText().then(function (ans2){
	if(assert.equal("You entered: BrowserStack",ans2,"error2")=== undefined)
	{
		console.log("Correct value 2");
	}

});

driver.quit();
