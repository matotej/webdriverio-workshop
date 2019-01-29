//METAMASK SETUP + CHANGE TABS
describe('webdriver.io page', function() {
    it('should open Metamask and log in', function () {


    	// browser.pause(20000);      
        //should scroll down to activate Accept button
        browser1.url('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html');

		var tabs = browser1.getTabIds();
        browser1.switchTab(tabs[0]);




        



//should scroll down to activate Accept button
        browser1.execute(function() {
            var element1 = document.querySelector("div > p:nth-child(89) > strong > a");
            element1.scrollIntoView();
        });

browser1.pause(2000);

        var tabs = browser1.getTabIds();
        browser1.switchTab(tabs[1]);

browser1.pause(2000);

        browser1.url('https://www.rtvslo.si');
        //var lastLink = browser1.$('a=Attributions');
        // lastLink.scroll();
        // browser1.scroll('#app-content > div > div.app-primary.from-right > div > div.flex-column.flex-center.flex-grow > div', 0, 200);
        browser1.pause(50000);

        //*[@id="app-content"]/div/div[4]/div/div[1]/div/div/p[55]/strong/a


        /*
        helperFunctions.mungoparcTabs(0)
        console.log('tabs changed');
        browser1.pause(500);        
        helperFunctions.mungoparcMetamask();
        console.log('Metamask set');

        console.log(print('should open Metamask and import info'));
        */
    });
});

