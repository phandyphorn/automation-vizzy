import { Page } from "@playwright/test";
import { SignUpViewLocator } from "./signup.locator";

type BasicProfile = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type RegisterProfile = BasicProfile & {
  optInForNews: boolean;
};

export class SignUpView {
  constructor(
    private page: Page,
    private locator = new SignUpViewLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async submitSignUp(profile: RegisterProfile) {
    await this.locator.createProfile.click();
    await this.locator.allowButton.click();
    await this.locator.firstNameTextbox.fill(profile.firstName);
    await this.locator.lastNameTextbox.fill(profile.lastName);
    await this.locator.emailTextbox.fill(profile.email);
    await this.locator.passwordTextbox.fill(profile.password);
    await this.locator.tipsCheckbox.click();
    await this.locator.createAccountButton.click();
    return this;
  }

  async confirmSignUpDigit(digis: number) {
    // todo
    return this;
  }
}
