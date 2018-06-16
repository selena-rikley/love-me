import { LoveMePage } from './app.po';

describe('love-me App', () => {
  let page: LoveMePage;

  beforeEach(() => {
    page = new LoveMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
