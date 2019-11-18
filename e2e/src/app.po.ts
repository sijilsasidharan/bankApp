import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppTitleText() {
    return element(by.css('.title')).getText();
  }

  getFooterText() {
    return element(by.css('.copy-right')).getText();
  }
}
