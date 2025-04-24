import { expect, Page } from "@playwright/test";
import { WorkPageLocator } from "./work.locator";
import path from "path";

export class WorkPage {
  constructor(
    readonly page: Page,
    readonly locator = new WorkPageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async addWorkWithThen() {
    const filePath = path.join(__dirname, "upload_video.jpg");
    return this.locator.workCard
      .hover()
      .then(() => this.locator.workIcon.click())
      .then(() => this.locator.companyName.fill("JakSmok"))
      .then(() => this.locator.companyURL.fill(""))
      .then(() => this.locator.title.fill("Software Engineer"))
      .then(() => this.locator.location.fill("Phnom Penh, Cambodia"))
      .then(() => this.locator.startDateWork.fill("02/2023"))
      .then(() => this.locator.endDateWork.fill(""))
      .then(() => this.locator.descriptionIcon.click())
      .then(() => this.locator.descriptionWork.fill("This is my description"))
      .then(() => this.locator.logoCompanyAdd.click())
      .then(() => this.locator.logoField.setInputFiles(filePath))
      .then(() => this.locator.saveLogo.click())
      .then(() => this.locator.saveWork.click())
      .then(() => this)
      .catch((error) => {
        console.error("❌ Failed to add work:", error);
        throw error;
      });
  }

  // async addWork() {
  //   const filePath = path.join(__dirname, "upload_video.jpg");
  //   const l = this.locator;
  //   if (l.addWorkAfterAlreadyHave) {
  //     await l.workIcon.click();
  //     await l.companyName.fill("JakSmok");
  //     await l.companyURL.fill("");
  //     await l.title.fill("Software Engineer");
  //     await l.location.fill("Phnom Penh, Cambodia");
  //     await l.startDateWork.fill("02/2023");
  //     await l.endDateWork.fill("");
  //     await l.descriptionIcon.click();
  //     await l.descriptionWork.fill("This is my description");
  //     await l.logoCompanyAdd.click();
  //     await l.logoField.setInputFiles(filePath);
  //     await l.saveLogo.click();
  //     await l.saveWork.click();
  //     return this;
  //   }

  //   await l.workCard.hover();
  //   await l.workIcon.click();
  //   await l.companyName.fill("JakSmok");
  //   await l.companyURL.fill("");
  //   await l.title.fill("Software Engineer");
  //   await l.location.fill("Phnom Penh, Cambodia");
  //   await l.startDateWork.fill("02/2023");
  //   await l.endDateWork.fill("");
  //   await l.descriptionIcon.click();
  //   await l.descriptionWork.fill("This is my description");
  //   await l.logoCompanyAdd.click();
  //   await l.logoField.setInputFiles(filePath);
  //   await l.saveLogo.click();
  //   await l.saveWork.click();

  //   return this;
  // }
  // catch(error: string) {
  //   console.error("❌ Failed to add work:", error);
  //   throw error; // rethrow so upstream functions can handle it if needed
  // }

  async fillWorkDetails() {
    const filePath = path.join(__dirname, "upload_video.jpg");
    const l = this.locator;

    await l.companyName.fill("JakSmok");
    await l.companyURL.fill("");
    await l.title.fill("Software Engineer");
    await l.location.fill("Phnom Penh, Cambodia");
    await l.startDateWork.fill("02/2023");
    await l.endDateWork.fill("");
    await l.descriptionIcon.click();
    await l.descriptionWork.fill("This is my description");

    await l.logoCompanyAdd.click();
    await l.logoField.setInputFiles(filePath);
    await l.saveLogo.click();
    await l.saveWork.click();
  }

  async addWork() {
    const l = this.locator;

    try {
      if (!l.addWorkAfterAlreadyHave) {
        await l.workCard.hover();
        await l.workIcon.click();
      }

      await l.workIconAfterAlreadyHave.click();
      await this.fillWorkDetails();

      return this;
    } catch (error) {
      console.error("❌ Failed to add work:", error);
      throw error;
    }
  }

  // async addWork() {
  //   const filePath = path.join(__dirname, "upload_video.jpg");
  //   const l = this.locator;

  //   try {
  //     if (!l.addWorkAfterAlreadyHave) {
  //       await l.workCard.hover();
  //       await l.workIcon.click();
  //     }
  //     await l.workIconAfterAlreadyHave.click();
  //     await l.companyName.fill("JakSmok");
  //     await l.companyURL.fill("");
  //     await l.title.fill("Software Engineer");
  //     await l.location.fill("Phnom Penh, Cambodia");
  //     await l.startDateWork.fill("02/2023");
  //     await l.endDateWork.fill("");
  //     await l.descriptionIcon.click();
  //     await l.descriptionWork.fill("This is my description");

  //     await l.logoCompanyAdd.click();
  //     await l.logoField.setInputFiles(filePath);
  //     await l.saveLogo.click();
  //     await l.saveWork.click();

  //     return this;
  //   } catch (error) {
  //     console.error("❌ Failed to add work:", error);
  //     throw error;
  //   }
  // }
}
