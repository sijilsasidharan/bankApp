
import { LoginPage } from '../login/login.po';
import { ElementFinder } from 'protractor';

export const login = (loginPage: LoginPage) => {
    let usernameField: ElementFinder;
    let passwordField: ElementFinder;
    let loginButton: ElementFinder;
    usernameField = loginPage.getUsername();
    passwordField = loginPage.getPassword();
    loginButton = loginPage.getLoginButton();
    usernameField.sendKeys('test')
    passwordField.sendKeys('test');

    expect(usernameField.getAttribute('value')).toEqual('test');
    expect(passwordField.getAttribute('value')).toEqual('test');

    return loginButton.click();
}