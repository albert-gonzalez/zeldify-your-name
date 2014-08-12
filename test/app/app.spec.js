describe('Zeldify Your Name', function () {
    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Zeldify Your Name');
    });

    it('should have a form', function() {
        expect(element(by.id('form')).isDisplayed()).toBe(true);
    });

    it('should show an error if name is not entered', function() {
        element(by.id('button')).click();
        expect(element(by.id('nameError')).isDisplayed()).toBe(true);
    });

    it('should show a converted name if name is entered and male gender is selected', function() {
        element(by.model('formData.names')).sendKeys('Name');
        element(by.model('formData.surnames')).sendKeys('Surname');
        element(by.id('button')).click();
        expect(element(by.binding('convertedName')).getText()).toEqual('Demise Deku');
    });

    it('should show a converted name if name is entered and female gender is selected', function() {
        element(by.model('formData.names')).sendKeys('Name');
        element(by.model('formData.surnames')).sendKeys('Surname');
        element(by.id('femaleButton')).click();
        element(by.id('button')).click();
        expect(element(by.binding('convertedName')).getText()).toEqual('Nayru Deku');
    });

    it('should show return tu form when click on try again link', function() {
        element(by.model('formData.names')).sendKeys('Name');
        element(by.id('button')).click();
        element(by.id('tryAgainLink')).click();
        expect(element(by.id('form')).isDisplayed()).toBe(true);
    });
});
