import { type Locator, type Page } from "@playwright/test";

export class HomePageLocator {
  constructor(readonly page: Page) {}

  get loginButton(): Locator {
    return this.page.getByRole("button", { name: "Log in" });
  }
  get emailTextbox(): Locator {
    return this.page.getByRole("textbox", { name: "Email" });
  }
  get passwordTextbox(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }
  get signInButton(): Locator {
    return this.page.getByRole("button", { name: "Sign in" });
  }
  get cookieDenyButton(): Locator {
    return this.page.getByRole("button", { name: "No cookies for me thanks" });
  }
  get createAccountButton(): Locator {
    return this.page.getByRole("button", { name: "Create your free profile" });
  }
  get allowButton(): Locator {
    return this.page.getByRole("button", { name: "Allow all" });
  }
  get uploadCV(): Locator {
    return this.page.getByRole("button", { name: "Upload CV Beta" });
  }
  get profile(): Locator {
    return this.page
      .locator("div")
      .filter({ hasText: /^My profile$/ })
      .nth(1);
  }

  get application(): Locator {
    return this.page.getByRole("link", { name: "My applications" });
  }

  get setting(): Locator {
    return this.page.getByRole("link", { name: "Setting" });
  }

  get help(): Locator {
    return this.page.getByRole("link", { name: "Help - open in a new tab" });
  }
}
