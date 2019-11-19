
import { browser, by, element, ElementFinder, } from 'protractor';
import { ViewTransactionPage } from './viewtransaction.po';

export const viewTransaction = (viewTransactionPage: ViewTransactionPage, referenceNUmber) => {
    const list = viewTransactionPage.getTdList();
    list.map(element => {
        expect(element.getText()).toEqual(referenceNUmber);
    })
}