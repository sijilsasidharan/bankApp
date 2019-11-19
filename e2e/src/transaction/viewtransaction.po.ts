import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

export class ViewTransactionPage {
    getTable(): ElementFinder {
        return element(by.tagName('table'))
    }

    getTdList(): ElementArrayFinder {
        return element.all(by.tagName('td'));
    }

    getNext(): ElementFinder {
        return element(by.css('.mat-paginator-navigation-next'));
    }
}