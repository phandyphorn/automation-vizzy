import test from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { ContentPage } from "../pages/content/content.page";
import { WorkPage } from "../pages/work/work.page";
test.describe("user only everything in content", () => {
  test.use({ storageState: "storage/userStorage.json" });

  test(`Work flow content `, async ({ page }) => {
    const { url } = await getTestContext(page);
    const content = new ContentPage(page);

    const work = new WorkPage(page);
    console.log("Working on content...");
    await content.launch(url);
    await content.addWorkViaContent();
    await work.fillWorkDetails();
  });
});
