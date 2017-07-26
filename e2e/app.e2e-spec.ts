import { I18nSampleAngularPage } from './app.po';

describe('i18n-sample-angular App', () => {
  let page: I18nSampleAngularPage;

  beforeEach(() => {
    page = new I18nSampleAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
