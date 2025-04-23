import test, { chromium, expect } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { getTestContext } from "../utils/test-setup";

// ======= Do anything on two tabs are user and admin ========

test("clean up storage state after login on home page", async ({ page }) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const pageContext = await context.newPage();
  const { url } = await getTestContext(page);

  await pageContext.goto(url);
  // Clear cookies
  await context.clearCookies();

  // Clear localStorage and sessionStorage
  await pageContext.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  await browser.close();
});

test("login as user and admin in different contexts", async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 });

  // USER CONTEXT
  const contextUser = await browser.newContext();
  const pageUser = await contextUser.newPage();
  const { url, user, admin } = await getTestContext(pageUser);
  const userHomePage = new HomePage(pageUser);

  await userHomePage.launch(url);
  console.log("Logging in as user...");
  await userHomePage.loginByRole(user);
  await contextUser.storageState({ path: "userStorage.json" });

  // ADMIN CONTEXT
  const contextAdmin = await browser.newContext();
  const pageAdmin = await contextAdmin.newPage();
  const adminHomePage = new HomePage(pageAdmin);

  await adminHomePage.launch(url);
  console.log("Logging in as admin...");
  await adminHomePage.loginByRole(admin);
  await contextAdmin.storageState({ path: "adminStorage.json" });

  await browser.close();
});
