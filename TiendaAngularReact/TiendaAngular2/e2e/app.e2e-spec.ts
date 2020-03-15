import { TiendaAngular2Page } from './app.po';

describe('tienda-angular2 App', function() { 
  let page: TiendaAngular2Page;

  beforeEach(() => {
    page = new TiendaAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
