// global-setup.ts
import { chromium } from "@playwright/test";
import fs from "fs";
import { User } from "../test-data/types";
import { getTestContext } from "./test-setup";
import { HomePage } from "../pages/home.page";
import path from "path";

async function saveStorageState(
  loginUrl: string,
  storagePath: string,
  role: User
) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const homePage = new HomePage(page);
  await homePage.launch(loginUrl);
  await homePage.loginByRole(role);
  console.log(`Saving storage state for ${role.role}...`);

  await page.context().storageState({ path: storagePath });
  await browser.close();
}

export default async ({ page }) => {
  const { url, user, admin } = await getTestContext(page);
  // Ensure the "storage" folder exists
  const storageDir = path.resolve("storage");
  if (!fs.existsSync(storageDir)) {
    fs.mkdirSync(storageDir);
  }

  // Save user and admin storage states
  await saveStorageState(url, path.join(storageDir, "userStorage.json"), user);
  await saveStorageState(
    url,
    path.join(storageDir, "adminStorage.json"),
    admin
  );
};
