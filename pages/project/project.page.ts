import { expect, Locator, Page } from "@playwright/test";
import { ProjectPageLocator } from "./project.locator";
import path from "path";

export class projectPage {
  constructor(
    readonly page: Page,
    readonly locator = new ProjectPageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async addProject() {
    await this.locator.content.click();
    await this.locator.addProject.click();
    await this.locator.file.setInputFiles(
      path.join(__dirname, "5000៛ - PNC Songkran Voucher 2025.pdf")
    );
    await this.locator.fileStorage.waitFor({ state: "visible" });
    await this.locator.deadline.fill("My deadline is on 08/2025");
    await this.locator.startDate.fill("04/2025");
    await this.locator.description.fill(
      "Alumni Management System of PN Cambodia"
    );
    await this.locator.background.check();
    await this.locator.save.click({ force: true });
    await expect(this.locator.projectCard).toBeVisible();
    return this;
  }

  async deleteProject() {
    await this.locator.projectCardCreated.hover();
    await this.locator.removeBtn.click();
    await this.locator.deleteBtn.click({ force: true });
  }
}
