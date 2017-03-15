import { Bloomingbeach54595Page } from './app.po';

describe('bloomingbeach54595 App', () => {
  let page: Bloomingbeach54595Page;

  beforeEach(() => {
    page = new Bloomingbeach54595Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
