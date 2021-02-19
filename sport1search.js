describe('Sporting Goods', () => {
    it('should show the banner container', () => {
          browser.url('https://www.ebay.com/b/Sporting-Goods/888/bn_1865031');
          const promoBanner = $('.title-banner__layer');
        expect(promoBanner).toBeDisplayed();
    })

    it('should show the banner title', () => {
           const infoTitle = $('.title-banner__title');
           expect(infoTitle).toHaveTextContaining('Sporting Goods');
     })

    it('should contain link on banner button and verify its clickable', () => {
        const bannerLink = $('.b-eventbanner');
        expect(bannerLink).toHaveLinkContaining('/15273/');
        expect(bannerLink).toHaveLinkContaining('https://www.ebay.com/b/Fitness-Running-Yoga-Equipment/15273/bn_1855426');
        expect(bannerLink).toBeClickable();
     //   bannerLink.click();
    })

    it('should click on banner and verify new url', () => {
        const clickBannerUrl = $('.b-eventbanner');
        clickBannerUrl.click();
        expect(browser).toHaveUrl('https://www.ebay.com/b/Fitness-Running-Yoga-Equipment/15273/bn_1855426');  
    })

    it('should contain a specific category', () => {
        const checkCategory = $('span.b-breadcrumb__text.b-link--tertiary.truncate');
        expect(checkCategory).toHaveTextContaining('Fitness, Running & Yoga Equipment');
  })   

});

// npx wdio wdio.conf.js
