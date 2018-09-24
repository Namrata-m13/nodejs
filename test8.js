var webdriver = require('selenium-webdriver'),
By = webdriver.By;
var assert=require('assert');
//var event = document.createEvent("MouseEvents");

var capabilities = {
 'browserName' : 'firefox'
}

var driver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();

driver.get('https://the-internet.herokuapp.com/context_menu');

// Right-click in the square box
var element1=driver.findElement(By.id("hot-spot"));
//driver.actions().click(element1,webdriver.Button.right).perform();
driver.actions().click(webdriver.Button.RIGHT).perform().then(function (){
   window.oncontextmenu=function(){
       return true;
   }
});

driver.actions().mouseMove(element1).click(webdriver.Button.right).perform()

// Select the context menu option 'the-internet' with keyboard keys

// Verify if JavaScript alert appears

// Grab the text from the JavaScript alert

// Assert that the text from the alert is 'You selected a context menu'"

driver.quit();
