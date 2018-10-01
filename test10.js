describe('This is a test to check for images', function (){
    it('should store tha failed images',function (){
        browser.ignoreSynchronization = true;
        browser.get('http://the-internet.herokuapp.com/broken_images');
        browser.executeAsyncScript(function (callback) {
            var imgs = document.getElementsByTagName('img'),
                loaded = 0;
            for (var i = 0; i < imgs.length; i++) {
                if (imgs[i].naturalWidth > 0) {
                    loaded = loaded + 1;
                };
            };
            callback(imgs.length - loaded);
         }).then(function (brokenImagesCount) {
            expect(brokenImagesCount).toBe(2);
            console.log("Images broken " + brokenImagesCount);
        });

 });
});