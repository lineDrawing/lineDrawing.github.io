import { LineDrawingPage } from './app.po';

describe('line-drawing App', function() {
  let page: LineDrawingPage;

  beforeEach(() => {
    page = new LineDrawingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
