import { Locator, Page } from "@playwright/test";

export class ProjectPageLocator {
  constructor(readonly page: Page) {}

  get content(): Locator {
    return this.page.getByRole("button", { name: "Content", exact: true });
  }

  get contentCard(): Locator {
    return this.page.getByRole("button", { name: "Content", exact: true });
  }

  get addProject(): Locator {
    return this.page.getByRole("button", {
      name: "Project Share your projects",
    });
  }

  get file(): Locator {
    return this.page.locator('input[type="file"]');
  }

  get fileStorage(): Locator {
    return this.page.getByRole("img", { name: "1" });
  }

  get deadline(): Locator {
    return this.page.getByRole("textbox", {
      name: "Project headline(this field",
    });
  }

  get startDate(): Locator {
    return this.page.getByRole("textbox", { name: "Start date(this field is" });
  }

  get description(): Locator {
    return this.page.getByRole("paragraph").filter({ hasText: /^$/ });
  }

  get background(): Locator {
    return this.page.getByRole("radio", { name: "orange", exact: true });
  }

  get projectCard(): Locator {
    return this.page.getByText("Add project cardShowcase your");
  }

  get save(): Locator {
    return this.page.getByRole("button", { name: "Save" });
  }

  get projectCardCreated(): Locator {
    return this.page.getByText(
      "ProjectDeadline is on 09/2025Apr 25 PresentFootball event of PN Cambodia"
    );
  }

  get removeBtn(): Locator {
    return this.page.getByRole("button", { name: "Remove" });
  }

  get deleteBtn(): Locator {
    return this.page.getByRole("button", { name: "Delete" });
  }
}
