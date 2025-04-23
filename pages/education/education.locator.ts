import { Locator, Page } from "@playwright/test";

export class EducationPageLocator {
  constructor(readonly page: Page) {}

  get actionAddEdu(): Locator {
    return this.page.getByRole("button", { name: "action_new" });
  }

  get institution(): Locator {
    return this.page.getByRole("textbox", {
      name: "Institution(this field is",
    });
  }

  get qualification(): Locator {
    return this.page.getByRole("textbox", {
      name: "Qualification(this field is",
    });
  }

  get grade(): Locator {
    return this.page.getByRole("textbox", { name: "Grade" });
  }

  get fieldOfStudy(): Locator {
    return this.page.getByRole("textbox", {
      name: "Field of study",
    });
  }
  get startDate(): Locator {
    return this.page.getByRole("textbox", { name: "Start date(this field is" });
  }

  get endDate(): Locator {
    return this.page.getByRole("textbox", { name: "End date (if applicable)" });
  }

  get description(): Locator {
    return this.page.getByRole("paragraph").filter({ hasText: /^$/ });
  }

  get saveBtn(): Locator {
    return this.page.getByRole("button", { name: "Save", exact: true });
  }
}
