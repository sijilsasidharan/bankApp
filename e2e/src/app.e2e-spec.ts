import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show label bankApp in header', () => {
    page.navigateTo();
    expect(page.getAppTitleText()).toEqual('BankApp');
  });

  it('should show label Coding©problem in footer', () => {
    page.navigateTo();
    expect(page.getFooterText()).toEqual('Coding©problem');
  });

});
