import { browser, by, element, ElementArrayFinder } from 'protractor';

export class TransactionPage {
    getCustomMatTab(): ElementArrayFinder {
        return element.all(by.tagName('mat-tab'))
    }
}