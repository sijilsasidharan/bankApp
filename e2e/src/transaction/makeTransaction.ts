
import { ElementFinder, browser, element, by, ExpectedConditions } from 'protractor';
import { NewTransaction } from './newtransaction.po';
import { customer2 } from '../mock/customers';
import { DatePipe } from '@angular/common';

export const makeTransaction = (newTransactionPage: NewTransaction, newTransactionTab: ElementFinder) => {


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
        newTransactionPage.getBenificiaryBank().sendKeys('centralbank');
        newTransactionPage.getBeneficiaryAccountNumber().sendKeys(1230213);
        newTransactionPage.getTransferAmount().sendKeys(3000);
        newTransactionPage.getTransferCurrency().sendKeys('AED');
        newTransactionPage.getPaymentDetails().sendKeys('Loremipsum')
        newTransactionPage.getTransactionButton().click().then(value => {
            browser.waitForAngular();
            const snackbar = element(by.css('.mat-simple-snackbar-action'));
            browser.wait(ExpectedConditions.visibilityOf(snackbar), 2000);
        })

    })
    return newTransactionPage.getReference().getAttribute('value');

}