import { XPage } from './app.po';

describe('x App', () => {
  let page: XPage;

  beforeEach(() => {
    page = new XPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
