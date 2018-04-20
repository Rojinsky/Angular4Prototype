import { PrototypeV1Page } from './app.po';

describe('prototype-v1 App', function() {
  let page: PrototypeV1Page;

  beforeEach(() => {
    page = new PrototypeV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
