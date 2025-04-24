import { Locator, Page } from "@playwright/test";

export class SettingPageLocator {
  constructor(readonly page: Page) {}

  get settingMenu(): Locator {
    return this.page.getByRole("link", { name: "Settings" });
  }

  get settingSidebar(): Locator {
    return this.page.getByRole("complementary");
  }

  get myAccountMenu(): Locator {
    return this.page.getByRole("link", { name: "My account" });
  }

  get logOutMenu(): Locator {
    return this.page.getByRole("link", { name: "Log out" });
  }
}
