import test, { chromium, expect } from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { projectPage } from "../pages/project/project.page";

test(`Add Project`, async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    storageState: "userStorage.json",
  });
  // Create a new page with this pre-authenticated context
  const newPage = await context.newPage();
  const project = new projectPage(page);
  const { url } = await getTestContext(newPage);
  await project.launch(url);
  await project.addProject();
});
