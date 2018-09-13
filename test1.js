var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://www.facebook.com');
driver.get('https://www.browserstack.com');
driver.navigate().back();
//Page should go forward
driver.navigate().forward();
driver.navigate().back();
driver.getTitle().then(function (websiteTitle) {
    console.log(websiteTitle);
});
driver.wait(until.titleIs('Facebook – log in or sign up'), 2000)
    .then(function () {
        console.log('Page title is: Facebook – log in or sign up');
    });

//Print Current URL of page
driver.getCurrentUrl().then(url => {console.log('current url: "' + url + '"');})

//If current URL is https://www.facebook.com/ then print -> URL is: https://www.facebook.com/
driver.wait(until.urlIs('https://www.facebook.com/'), 2000)
    .then(function () {
        console.log('URL is https://www.facebook.com/');
    });

driver.quit();