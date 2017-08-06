import { TavantsupportPage } from './app.po';

describe('tavantsupport App', () => {
  let page: TavantsupportPage;

  beforeEach(() => {
    page = new TavantsupportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
