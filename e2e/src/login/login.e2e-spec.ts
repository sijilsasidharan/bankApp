import { LoginPage } from './login.po';
import { ElementFinder, browser, element, by, ExpectedConditions } from 'protractor';

describe('workspace-project App', () => {
    let page: LoginPage;
    let usernameField: ElementFinder;
    let passwordField: ElementFinder;
    let loginButton: ElementFinder;
    beforeEach(() => {
        page = new LoginPage();
        usernameField = page.getUsername();
        passwordField = page.getPassword();
        loginButton = page.getLoginButton();
    });

    it('Unautherized user should not login', () => {
        page.navigateTo();
        usernameField.sendKeys('test123')
        passwordField.sendKeys('test123');

        expect(usernameField.getAttribute('value')).toEqual('test123');
        expect(passwordField.getAttribute('value')).toEqual('test123');

        loginButton.click().then(() => {
            browser.waitForAngular();
            const snackbar = element(by.css('.mat-simple-snackbar-action'));
            browser.wait(ExpectedConditions.visibilityOf(snackbar), 2000);
            expect(page.getLogout().isPresent()).toBeFalsy()
        })
    });

    it('Autherized user should login', () => {
        page.navigateTo();
        usernameField.sendKeys('test')
        passwordField.sendKeys('test');

        expect(usernameField.getAttribute('value')).toEqual('test');
        expect(passwordField.getAttribute('value')).toEqual('test');

        loginButton.click().then(() => {
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/transaction');
            expect(page.getLogout().isPresent()).toBeTruthy()
            page.getLogout().click();
        })
    });
});