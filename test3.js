var webdriver = require('selenium-webdriver'),
By = webdriver.By;
var assert=require('assert');
var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('http://demo.guru99.com/popup.php');

// Click 'Click here'
driver.findElement(By.xpath("//*[contains(text(),'Click Here')]")).click();

driver.getAllWindowHandles().then(function gotWindowHandles(allHandles){
var parent= driver.getWindowHandle();
driver.getTitle().then(function (text){console.log('Parent window: ' + text);});
driver.switchTo().window(allHandles[allHandles.length - 1]); // Switch to the new window
driver.findElement(By.name("emailid")).sendKeys("support@bstack.com"); // In the email id field, enter 'support@bstack.com', click 'Submit'
driver.findElement(By.name("btnLogin")).click();
});
var b=driver.findElement(By.css('h3')).getText();
assert.equal("This access is valid only for 20 days.",b.value_,"error"); // Assert if 'This access is valid only for 20 days.' exist

driver.switchTo().window(parent);// Switch to first window

var c=driver.findElement(By.xpath("//*[contains(text(),'Click Here')]")).getText();
assert.equal("Click Here",c.value_,"error2"); // Assert if 'Click here' text exist
driver.quit();
