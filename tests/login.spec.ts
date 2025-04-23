import { defineConfig, test } from "@playwright/test";
import { DataManager } from "../utils/data-manager";
import { HomePage } from "../pages/home.page";
import { getTestContext } from "../utils/test-setup";

test("post media", async ({ page }) => {
  // const testUser = DataManager.getInstance().getUserData();
  // const url = process.env.URL || "";
  // console.log(`User first name: ${testUser.email}`);
  // console.log("url: ", url);
  // const home = new HomePage(page);
  // await home.launch(url);
  // await home.clickCreateProfile();

  const { url } = await getTestContext(page);
  const home = new HomePage(page);
  await home.launch(url);
  await home.clickCreateProfile();
});