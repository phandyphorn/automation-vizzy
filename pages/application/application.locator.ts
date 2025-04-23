import { Locator, Page } from "@playwright/test";

export class ApplicationPageLocator {
  constructor(readonly page: Page) {}

  get applicationMenu(): Locator {
    return this.page.getByRole("link", { name: "My applications" });
  }

  get applicationContent(): Locator {
    return this.page.getByText("My applicationsIf a business");
  }
}
