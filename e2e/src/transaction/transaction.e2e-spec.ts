import { TransactionPage } from './transaction.po';
import { LoginPage } from '../login/login.po'
import { ElementFinder, browser, element, by, ExpectedConditions } from 'protractor';
import { NewTransaction } from './newtransaction.po';
import { DatePipe } from '@angular/common';
import { customer2 } from '../mock/customers'


describe('workspace-project App', () => {
    let transactionPage: TransactionPage;
    let loginPage: LoginPage;
    let newTransactionPage: NewTransaction;

    let newTransactionTab: ElementFinder;
    let viewTransactionTab: ElementFinder;
    beforeEach(() => {
        transactionPage = new TransactionPage();
        loginPage = new LoginPage();
        newTransactionPage = new NewTransaction()
        newTransactionTab = transactionPage.getCustomMatTab().get(0);
        viewTransactionTab = transactionPage.getCustomMatTab().get(1);
        // loginButton = page.getLoginButton();
    });

    it('Make a transaction', () => {
        login(loginPage).then(() => {
            // make transaction
            browser.waitForAngular();
            expect(browser.driver.getCurrentUrl()).toMatch('/transaction');
            expect(loginPage.getLogout().isPresent()).toBeTruthy();
            makeTransaction(newTransactionPage, newTransactionTab);
        });

    });

});

const login = (loginPage) => {
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

const makeTransaction = (newTransactionPage: NewTransaction, newTransactionTab: ElementFinder) => {


    newTransactionPage.getCustomerNumber().sendKeys(customer2.customer_number);
    const reference = newTransactionPage.getReference().getText();
    reference.then(value => {
        browser.waitForAngular();
        if (value) {
            const date = new DatePipe('en');
            expect(value.substring(0, 3)).toEqual('CUS');
            expect(value.substring(4, 12)).toEqual(date.transform(new Date(), 'yyyymmdd'));
        }
        expect(newTransactionPage.getName().getAttribute('value')).toEqual(customer2.name);
        expect(newTransactionPage.getAddress().getAttribute('value')).toEqual(customer2.address);
        expect(newTransactionPage.getPhone().getAttribute('value')).toEqual(customer2.phone);
        newTransactionPage.getBenificiaryBank().sendKeys('Central Bank');
        newTransactionPage.getBeneficiaryAccountNumber().sendKeys('1230213');
        newTransactionPage.getTransferAmount().sendKeys(3000);
        newTransactionPage.getTransferCurrency().sendKeys('AED');
        newTransactionPage.getPaymentDetails().sendKeys('Lorem ipsum')
        newTransactionPage.getTransactionButton().click().then(value => {
            browser.waitForAngular();
            const snackbar = element(by.css('.mat-simple-snackbar-action'));
            browser.wait(ExpectedConditions.visibilityOf(snackbar), 2000);
        })

    })

}