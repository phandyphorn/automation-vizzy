import { expect, Page } from "@playwright/test";
import { SettingPageLocator } from "./setting.locator";

export class SettingPage {
  constructor(
    readonly page: Page,
    readonly locator = new SettingPageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async navigateToSetting() {
    await this.locator.settingMenu.click();
    await expect(this.locator.settingSidebar).toBeVisible();
    return this;
  }

  async navigateToMyAccount() {
    await expect(this.locator.myAccountMenu).toBeVisible();
    await this.locator.myAccountMenu.click();
    return this;
  }

  async navigateToLogOut() {
    await expect(this.locator.logOutMenu).toBeVisible();
    await this.locator.logOutMenu.click();
    return this;
  }
}
