import { Locator, Page } from "@playwright/test";

export class WorkPageLocator {
  constructor(readonly page: Page) {}

  get workCard(): Locator {
    return this.page.getByText("WorkAdd any work experience");
  }

  get workIcon(): Locator {
    return this.page.getByRole("button", { name: "Work" });
  }

  get workIconAfterAlreadyHave(): Locator {
    return this.page.getByRole("button", { name: "action_new" }).nth(1);
  }

  get companyName(): Locator {
    return this.page.getByRole("textbox", {
      name: "Company name(this field is",
    });
  }

  get companyURL(): Locator {
    return this.page.getByRole("textbox", { name: "Company URL" });
  }

  get title(): Locator {
    return this.page.getByRole("textbox", {
      name: "Title(this field is required)",
    });
  }

  get location(): Locator {
    return this.page.getByRole("textbox", { name: "Location" });
  }

  get startDateWork(): Locator {
    return this.page.getByRole("textbox", { name: "Start date(this field is" });
  }

  get endDateWork(): Locator {
    return this.page.getByRole("textbox", { name: "End date (if applicable)" });
  }

  get descriptionIcon(): Locator {
    return this.page
      .locator("div")
      .filter({ hasText: /^DescriptionMax 0 \/ 2000 characters$/ })
      .getByRole("button");
  }
  get descriptionWork(): Locator {
    return this.page.locator(".Editor_editorContent__bK96n > .tiptap");
  }

  get logoCompanyAdd(): Locator {
    return this.page.locator('input[name="logo"]');
  }

  get logoField(): Locator {
    return this.page.getByRole("textbox", { name: "File field" });
  }

  get saveLogo(): Locator {
    return this.page.getByRole("button", { name: "Save" }).nth(2);
  }

  get saveWork(): Locator {
    return this.page.getByRole("button", { name: "Save", exact: true });
  }

  get addWorkAfterAlreadyHave(): Locator {
    return this.page.getByRole("button", { name: "action_new" }).nth(1);
  }
}
