import { TransactionPage } from './transaction.po';
import { LoginPage } from '../login/login.po'
import { ElementFinder, browser } from 'protractor';
import { NewTransaction } from './newtransaction.po';

import { login } from './login';
import { makeTransaction } from './makeTransaction';
import { viewTransaction } from './viewTransaction'
import { ViewTransactionPage } from './viewtransaction.po';


describe('workspace-project App', () => {
    let transactionPage: TransactionPage;
    let loginPage: LoginPage;
    let newTransactionPage: NewTransaction;
    let viewTransactionPage: ViewTransactionPage;

    let newTransactionTab: ElementFinder;
    let viewTransactionTab: ElementFinder;
    beforeEach(() => {
        transactionPage = new TransactionPage();
        loginPage = new LoginPage();
        viewTransactionPage = new ViewTransactionPage();
        newTransactionPage = new NewTransaction();
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
            makeTransaction(newTransactionPage, newTransactionTab)
                .then(ref => {
                    // viewTransactionTab.click().then(() => {
                    //     // viewTransaction(viewTransactionPage, ref)
                    // });
                });
        });

    });

});
