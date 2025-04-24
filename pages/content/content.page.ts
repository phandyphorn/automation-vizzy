import { Page } from "@playwright/test";
import { ContentPageLocator } from "./conetent.locator";

export class ContentPage {
  constructor(
    readonly page: Page,
    readonly locator = new ContentPageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async addWorkViaContent() {
    await this.locator.contentButton.click();
    await this.locator.addWorkBtn.click();
    // await this.locator.cancelButton.click();
    // return this;
  }

  async addEducationViaContent() {
    await this.locator.contentButton.click();
    await this.locator.addEducationBtn.click();
    await this.locator.cancelButton.click();
    return this;
  }

  async addProjectViaContent() {
    await this.locator.contentButton.click();
    await this.locator.addProjectBtn.click();
    return this;
  }

  async addSkill() {
    await this.locator.contentButton.click();
    await this.locator.addSkillBtn.click();
    await this.locator.cancelButton.click();
    return this;
  }

  async addMedia() {
    await this.locator.contentButton.click();
    await this.locator.addMediaBtn.click();
    await this.locator.cancelButton.click();
    return this;
  }

  async addQA() {
    await this.locator.contentButton.click();
    await this.locator.addQABtn.click();
    await this.locator.cancelButton.click();
    return this;
  }
}
