import { expect, type Page } from "@playwright/test";
import { HomePageLocator } from "./home.locator";

export class HomePage {
  // =====first way.
  // private readonly locator: HomePageLocator;

  // constructor(private readonly page: Page) {
  //   this.locator = new HomePageLocator(page);
  // }

  // ===== The way ban mk pi bong Seth

  constructor(
    readonly page: Page,
    readonly locator = new HomePageLocator(page)
  ) {}

  async launch(url: string) {
    // await this.page.goto("https://beta.vizzy.com");
    await this.page.goto(`${url}`);
    return this;
  }

  async clickCreateProfile() {
    await this.locator.createAccountButton.click();
    return this;
  }

  // async login(email: string, password: string) {
  //   await this.locator.loginButton.click();
  //   await this.locator.allowButton.click();
  //   await this.locator.emailTextbox.fill(email);
  //   await this.locator.passwordTextbox.fill(password);
  //   await this.locator.signInButton.click();
  //   await expect(this.locator.uploadCV).toBeVisible();
  //   return this;
  // }

  async loginByRole(superAdmin: { email: string; password: string }) {
    await this.locator.loginButton.click();
    await this.locator.allowButton.click();
    await this.locator.emailTextbox.fill(superAdmin.email);
    await this.locator.passwordTextbox.fill(superAdmin.password);
    await this.locator.signInButton.click();
    await expect(this.locator.uploadCV).toBeVisible();
    // return this;
  }
}
