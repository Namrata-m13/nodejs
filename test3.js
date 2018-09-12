var webdriver = require('selenium-webdriver'),By = webdriver.By;
var assert=require('assert');
var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('http://demo.guru99.com/popup.php');

// Click 'Click here'
driver.findElement(By.xpath("//*[contains(text(),'Click Here')]")).click();
var localdriver=driver.getAllWindowHandles();
var firstTab=driver.getWindowHandle();

// Switch to the new window
var secondTab=driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
    driver.switchTo().window(allhandles[allhandles.length - 1]);
});

// In the email id field, enter 'support@bstack.com', click 'Submit'
driver.findElement(By.name("emailid")).sendKeys("support@bstack.com"); 
driver.findElement(By.name("btnLogin")).click();

// Assert if 'This access is valid only for 20 days.' exist
var b=driver.findElement(By.css('h3')).getText();
assert.equal("This access is valid only for 20 days.",b.value_,"error");

// Switch to first window
driver.switchTo().window(firstTab);

// Assert if 'Click here' text exist
var c=driver.findElement(By.xpath("/html/body/p/a")).getText();
assert.equal("Click Here",c.value_,"error2"); // Assert if 'Click here' text exist

driver.quit();
