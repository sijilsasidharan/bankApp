import { browser, by, element, ElementFinder } from 'protractor';

export class LoginPage {
    navigateTo() {
        return browser.get('/');
    }

    getUsername(): ElementFinder {
        return element(by.id('username'));
    }

    getPassword(): ElementFinder {
        return element(by.id('password'));
    }

    getLoginButton(): ElementFinder {
        return element(by.buttonText('Login'));
    }

    getLogout(): ElementFinder {
        return element(by.buttonText('Logout'));
    }
}