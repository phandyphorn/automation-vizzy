import test from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { WorkPage } from "../pages/work/work.page";

test.describe("user only tests on work", () => {
  test.use({ storageState: "storage/userStorage.json" });

  test(`Add work `, async ({ page }) => {
    const { url } = await getTestContext(page);
    const work = new WorkPage(page);
    console.log("Adding work...");
    await work.launch(url);
    await work.addWork();
  });
});
