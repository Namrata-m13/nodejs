describe("This test is to check clicks",function(){

    it("should check for Action Unsuccessful",function(){
        browser.ignoreSynchronization = true;
        browser.get("http://the-internet.herokuapp.com/notification_message_rendered");
        startagain();
        function startagain()
        {
        element(by.partialLinkText('Click')).click();
        element(by.id("flash")).getText().then(function(ans){
            if(ans.includes("Action successful"))
            {
                console.log("Successful");
                startagain();
            }
            else {
            console.log("Action is unsuccessful");
            }
    
            });
   
        }   
    
    });
    
    
});
    