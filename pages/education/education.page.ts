import { expect, Page } from "@playwright/test";
import { EducationPageLocator } from "./education.locator";

export class EducationPage {
  constructor(
    readonly page: Page,
    readonly locator = new EducationPageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async addEducation() {
    await this.locator.actionAddEdu.click();
    await this.locator.institution.fill("PNC");
    await this.locator.qualification.fill("Bachelor Degree");
    await this.locator.grade.fill("A+");
    await this.locator.fieldOfStudy.fill("Computer Science");
    await this.locator.startDate.fill("02/2022");
    await this.locator.endDate.fill("02/2024");
    await this.locator.description.fill("I studied Computer Science at PNC");
    await this.locator.saveBtn.click();
    return this;
  }
}
