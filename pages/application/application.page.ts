import { expect, Page } from "@playwright/test";
import { ApplicationPageLocator } from "./application.locator";

export class ApplicationPage {
  constructor(
    readonly page: Page,
    readonly locator = new ApplicationPageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async navigateToApplication() {
    await this.locator.applicationMenu.click();
    await expect(this.locator.applicationContent).toBeVisible();
    return this;
  }
}
