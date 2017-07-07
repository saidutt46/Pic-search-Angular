import { PixSearchPage } from './app.po';

describe('pix-search App', () => {
  let page: PixSearchPage;

  beforeEach(() => {
    page = new PixSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
