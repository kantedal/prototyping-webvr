import { PrototypingWebvrTnm100Page } from './app.po';

describe('prototyping-webvr-tnm100 App', () => {
  let page: PrototypingWebvrTnm100Page;

  beforeEach(() => {
    page = new PrototypingWebvrTnm100Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
