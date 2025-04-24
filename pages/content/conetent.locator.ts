import { Locator, Page } from "@playwright/test";

export class ContentPageLocator {
  constructor(readonly page: Page) {}

  get addWorkBtn(): Locator {
    return this.page.getByRole("button", {
      name: "Work Showcase your work with",
    });
  }

  get contentButton(): Locator {
    return this.page.getByRole("button", { name: "Content", exact: true });
  }

  get addEducationBtn(): Locator {
    return this.page.getByRole("button", { name: "Education Bring your" });
  }

  get addProjectBtn(): Locator {
    return this.page.getByRole("button", {
      name: "Project Share your projects",
    });
  }

  get addSkillBtn(): Locator {
    return this.page.getByRole("button", { name: "Skills Highlight all your" });
  }

  get addMediaBtn(): Locator {
    return this.page.getByRole("button", { name: "Media card Share your" });
  }

  get addQABtn(): Locator {
    return this.page.getByRole("button", {
      name: "Q&A Answer the questions you'",
    });
  }

  get cancelButton(): Locator {
    return this.page.getByRole("button", { name: "Cancel" });
  }
}
