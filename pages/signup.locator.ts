import { Locator, Page } from "@playwright/test";

export class SignUpViewLocator {
  constructor(readonly page: Page) {}
  get createProfile(): Locator {
    return this.page.getByRole("button", { name: "Create your free profile" });
  }
  get allowButton(): Locator {
    return this.page.getByRole("button", { name: "Allow all" });
  }
  get firstNameTextbox(): Locator {
    return this.page.getByRole("textbox", { name: "First name(this field is" });
  }
  get lastNameTextbox(): Locator {
    return this.page.getByRole("textbox", { name: "Last name(this field is" });
  }
  get emailTextbox(): Locator {
    return this.page.getByRole("textbox", {
      name: "Email",
    });
  }
  get passwordTextbox(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }
  get tipsCheckbox(): Locator {
    return this.page.locator("#modal-lightbox").getByRole("img");
  }

  get createAccountButton(): Locator {
    return this.page.getByRole("button", { name: "Create my account" });
  }
}
