import test, { chromium, expect } from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { EducationPage } from "../pages/education/education.page";

test.describe("user only tests on education", () => {
  test.use({ storageState: "storage/userStorage.json" });

  test(`Add Education`, async ({ page }) => {
    const education = new EducationPage(page);
    const { url } = await getTestContext(page);
    await education.launch(url);
    await education.addEducation();
  });
});
