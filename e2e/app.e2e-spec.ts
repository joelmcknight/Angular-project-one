import { PROJECTONEPage } from './app.po';

describe('project-one App', () => {
  let page: PROJECTONEPage;

  beforeEach(() => {
    page = new PROJECTONEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
