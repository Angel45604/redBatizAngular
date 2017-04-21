import { MyProyectPage } from './app.po';

describe('my-proyect App', () => {
  let page: MyProyectPage;

  beforeEach(() => {
    page = new MyProyectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
