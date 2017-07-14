import { UserCrudPage } from './app.po';

describe('user-crud App', () => {
  let page: UserCrudPage;

  beforeEach(() => {
    page = new UserCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
