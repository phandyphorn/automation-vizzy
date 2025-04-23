import { Locator, Page } from "@playwright/test";

export class ProfilePageLocator {
  constructor(private page: Page) {}

  get uploadProfile(): Locator {
    return this.page.getByText("ImageAdd an image or a cover");
  }

  get editIcon(): Locator {
    return this.page
      .getByRole("complementary")
      .getByRole("button", { name: "Edit" });
  }

  get addImage(): Locator {
    return this.page.getByRole("button", { name: "Image" });
  }

  get selectFile(): Locator {
    return this.page.getByRole("button", {
      name: "Profile picture",
    });
  }
  get uploadFile(): Locator {
    return this.page
      .locator("div")
      .filter({ hasText: /^1x1 \(Square\) recommended Max 10MB$/ })
      .locator("div");
  }

  get imageField(): Locator {
    return this.page.getByRole("textbox", {
      name: "Profile picture 1x1 (Square)",
    });
  }

  get profileImage(): Locator {
    return this.page
      .locator("#modal-lightbox")
      .getByRole("button", { name: "Edit" });
  }

  get saveProfilePicture(): Locator {
    return this.page.getByRole("button", { name: "Save" }).nth(1);
  }

  get saveProfile(): Locator {
    return this.page.getByRole("button", { name: "Save" });
  }

  get profileStorage(): Locator {
    return this.page.getByRole("img", { name: "Piseth" });
  }

  get profileStorageAfterEdit(): Locator {
    return this.page.getByRole("complementary").locator("img");
  }

  get bioCard(): Locator {
    return this.page.getByText("Bio cardProfile");
  }

  get editIconWhileHaveImg(): Locator {
    return this.page
      .locator("#modal-lightbox")
      .getByRole("button", { name: "Edit" });
  }

  get counterClockWise(): Locator {
    return this.page.locator(".ImageCrop_button__POKqg").first();
  }

  get showImgForEdit(): Locator {
    return this.page.locator(".cropper-drag-box");
  }
  // ======= Delete profile
  get deleteIcon(): Locator {
    return this.page.getByRole("button", { name: "common:action_remove" });
  }

  get deleteBtn(): Locator {
    return this.page.getByRole("button", { name: "Delete" });
  }

  get deleteModal(): Locator {
    return this.page.getByText("Delete image Are you sure you");
  }

  get imageForDelete(): Locator {
    return this.page.getByRole("img", { name: "Profile picture" });
  }

  // ========= Add video
  get videoField(): Locator {
    return this.page.getByRole("textbox", {
      name: "Bring your profile to life",
    });
  }

  get videoPlay(): Locator {
    return this.page.getByRole("button", { name: "Play video" });
  }

  get escape(): Locator {
    return this.page.getByRole("button", { name: "Play video" });
  }

  get profileStoreVideo(): Locator {
    return this.page.getByTestId("video-player").locator("div").nth(2);
  }

  // ======== About you
  get selectAboutYou(): Locator {
    return this.page.getByRole("button", { name: "About you*" });
  }

  get bio(): Locator {
    return this.page.getByRole("paragraph", { name: "Persistent, Friendly" });
  }

  // ======== Language
  get selectLanguage(): Locator {
    return this.page.getByRole("button", {
      name: "Languages, Nationality, and",
    });
  }

  // ======== Social Media
  get selectSocial(): Locator {
    return this.page.getByRole("button", { name: "Social media and weblinks" });
  }
}
