import test, { expect, Page } from "@playwright/test";
import { ProfilePageLocator } from "./profile.locator";
import path from "path";

export class ProfilePage {
  constructor(
    readonly page: Page,
    readonly locator = new ProfilePageLocator(page)
  ) {}

  async launch(url: string) {
    await this.page.goto(`${url}`);
    return this;
  }

  async addProfile() {
    await this.locator.uploadProfile.hover();
    await this.locator.addImage.click();
    await this.locator.uploadFile.click();
    await this.locator.imageField.setInputFiles(
      path.join(__dirname, "yaoyao.jpg")
    );
    await this.locator.saveProfilePicture.click();
    await this.locator.saveProfile.click({ force: true });
    await this.locator.bioCard.waitFor({ state: "hidden" });
    await expect(this.locator.bioCard).toBeHidden();
    await expect(this.locator.profileStorage).toBeVisible();
    return this;
  }

  async editProfile() {
    await this.locator.profileStorageAfterEdit.hover();
    await this.locator.editIcon.click();
    await this.locator.selectFile.click();
    await this.locator.editIconWhileHaveImg.click();
    await this.locator.showImgForEdit.waitFor({ state: "visible" });
    await this.locator.counterClockWise.click();
    await this.locator.saveProfilePicture.click();
    await this.locator.saveProfile.click({ force: true });
    await this.locator.bioCard.waitFor({ state: "hidden" });
    await expect(this.locator.bioCard).toBeHidden();
    await expect(this.locator.profileStorageAfterEdit).toBeVisible();
    return this;
  }

  async deleteProfile() {
    await this.locator.profileStorageAfterEdit.hover();
    await this.locator.editIcon.click();
    await this.locator.selectFile.click();
    await this.locator.imageForDelete.waitFor({ state: "visible" });
    await this.locator.deleteIcon.click();
    await this.locator.deleteBtn.click();
    await this.locator.saveProfile.click({ force: true });
    await expect(this.locator.bioCard).toBeHidden();
    await expect(this.locator.uploadProfile).toBeVisible();
  }

  async addVideo() {
    await this.locator.uploadProfile.hover();
    await this.locator.addImage.click();
    await this.locator.videoField.fill(
      "https://www.youtube.com/watch?v=vvKUuFk_uWI"
    );
    await this.locator.saveProfile.click({ force: true });
    await this.locator.videoPlay.click();
    await this.locator.escape.press("Escape");
    return this;
  }

  async removeVideo() {
    await this.locator.profileStoreVideo.hover();
    await this.locator.editIcon.click();
    await this.locator.selectFile.click();
    await this.locator.videoField.fill("");
    await this.locator.saveProfile.click({ force: true });
    return this;
  }

  // async addAllMedia() {
  //   await this.locator.uploadProfile.hover();
  //   await this.locator.addImage.click();
  //   await this.locator.uploadFile.click();
  //   await this.locator.imageField.setInputFiles(
  //     path.join(__dirname, "yaoyao.jpg")
  //   );
  //   await this.locator.saveProfilePicture.click();
  //   await this.locator.videoField.fill(
  //     "https://www.youtube.com/watch?v=vvKUuFk_uWI"
  //   );
  //   await this.locator.saveProfile.click({ force: true });
  //   await this.locator.videoPlay.click();
  //   await this.locator.escape.press("Escape");
  //   return this;
  // }

  async addAllMedia() {
    try {
      const l = this.locator;
      await l.uploadProfile.hover();
      await l.addImage.click();
      await l.uploadFile.click();
      await l.imageField.setInputFiles(path.join(__dirname, "yaoyao.jpg"));
      await l.saveProfilePicture.click();
      await l.videoField.fill("https://www.youtube.com/watch?v=vvKUuFk_uWI");
      await l.saveProfile.click({ force: true });
      await l.videoPlay.click();
      await l.escape.press("Escape");

      return this;
    } catch (err) {
      console.error("❌ addAllMedia failed:", err);
      throw err;
    }
  }

  async removeAllMedia() {
    await this.locator.profileStorage.hover();
    await this.locator.editIcon.click();
    await this.locator.selectFile.click();
    await this.locator.deleteIcon.click();
    await this.locator.deleteBtn.click();
    await this.locator.videoField.fill("");
    await this.locator.saveProfile.click({ force: true });
    await expect(this.locator.uploadProfile).toBeVisible();
    return this;
  }

  async addAboutYou() {
    await this.locator.uploadProfile.hover();
    await this.locator.addImage.click();
    await this.locator.selectAboutYou.click();
    // await this.locator.bio.fill("Persistent, Friendly, Work Smart");
    await this.locator.selectAboutYou.click();
    await this.locator.saveProfile.click({ force: true });
  }

  async addLanguage() {
    await this.locator.uploadProfile.hover();
    await this.locator.addImage.click();
    await this.locator.selectLanguage.click();
    await this.locator.selectLanguage.click();
  }

  async addSocial() {
    await this.locator.uploadProfile.hover();
    await this.locator.addImage.click();
    await this.locator.selectSocial.click();
    await this.locator.selectSocial.click();
    await this.locator.saveProfile.click({ force: true });
  }

  // async addWholeBio() {
  //   await this.locator.uploadProfile.hover();
  //   await this.locator.addImage.click();
  //   await this.locator.uploadFile.click();
  //   await this.locator.imageField.setInputFiles(
  //     path.join(__dirname, "yaoyao.jpg")
  //   );
  //   await this.locator.saveProfilePicture.click();
  //   await this.locator.videoField.fill(
  //     "https://www.youtube.com/watch?v=vvKUuFk_uWI"
  //   );
  //   await this.locator.selectAboutYou.click();
  //   await this.locator.selectLanguage.click();
  //   await this.locator.selectLanguage.click();

  //   await this.locator.selectSocial.click();
  //   await this.locator.selectSocial.click();
  //   await this.locator.saveProfile.click({ force: true });
  //   await expect(this.locator.profileStorageAfterEdit).toBeVisible();
  //   await this.locator.videoPlay.click();
  //   await this.locator.escape.press("Escape");
  //   return this;
  // }

  async addWholeBio() {
    const {
      uploadProfile,
      addImage,
      uploadFile,
      imageField,
      saveProfilePicture,
      videoField,
      selectAboutYou,
      selectLanguage,
      selectSocial,
      saveProfile,
      profileStorageAfterEdit,
      videoPlay,
      escape,
    } = this.locator;

    return uploadProfile
      .hover()
      .then(() => addImage.click())
      .then(() => uploadFile.click())
      .then(() => imageField.setInputFiles(path.join(__dirname, "yaoyao.jpg")))
      .then(() => saveProfilePicture.click())
      .then(() =>
        videoField.fill("https://www.youtube.com/watch?v=vvKUuFk_uWI")
      )
      .then(() => selectAboutYou.click())
      .then(() => selectLanguage.click())
      .then(() => selectLanguage.click())
      .then(() => selectSocial.click())
      .then(() => selectSocial.click())
      .then(() => saveProfile.click({ force: true }))
      .then(() => videoPlay.click())
      .then(() => escape.press("Escape"))
      .then(() => this);
  }
}
