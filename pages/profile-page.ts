import { type Locator, type Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly getUploadCVButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUploadCVButton = page.getByRole('button', {name: 'Upload CV Beta'});
  }

  async launch(): Promise<ProfilePage>{
    await this.page.goto('https://beta.vizzy.com/profile');
    return this;
  }
}
