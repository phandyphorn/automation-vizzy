import test, { chromium } from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { ApplicationPage } from "../pages/application/application.page";

// ===================== Use anything in signin-spec.ts, but it work on two tabs different. ====================
test.skip(`Go to my application`, async () => {
  const browser = await chromium.launch();
  // ===================== ADMIN CONTEXT ====================
  const context = await browser.newContext({
    storageState: "userStorage.json", // Replace with your actual path
  });
  // Create a new page with this pre-authenticated context
  const newPage = await context.newPage();
  // Get the URL and set up your page object
  const { url } = await getTestContext(newPage);
  const application = new ApplicationPage(newPage);

  // Launch and navigate to the application as a logged-in user/admin
  await application.launch(url);
  await application.navigateToApplication();
});

// ===================== Use global and run one by one without separate ====================
test.describe.skip("admin only tests", () => {
  test.use({ storageState: "storage/adminStorage.json" });

  test(`Go to my application`, async ({ page }) => {
    const { url } = await getTestContext(page);
    const application = new ApplicationPage(page);

    // Launch and navigate to the application as a logged-in user/admin
    await application.launch(url);
    await application.navigateToApplication();
  });
});

test.describe("user only tests", () => {
  test.use({ storageState: "storage/userStorage.json" });

  test(`Go to my application`, async ({ page }) => {
    const { url } = await getTestContext(page);
    const application = new ApplicationPage(page);

    // Launch and navigate to the application as a logged-in user/admin
    await application.launch(url);
    await application.navigateToApplication();
  });
});

// ===================== Use global and run one by one with separate ====================
test.describe.skip("admin and user tests", () => {
  // Run tests in parallel, one for the admin and one for the user
  test("admin and user tabs", async ({ browser }) => {
    const adminContext = await browser.newContext({
      storageState: "storage/adminStorage.json",
    });
    const userContext = await browser.newContext({
      storageState: "storage/userStorage.json",
    });

    // Create two pages, one for admin and one for user
    const adminPage = await adminContext.newPage();
    const userPage = await userContext.newPage();

    const { url } = await getTestContext(adminPage);
    const adminApplication = new ApplicationPage(adminPage);
    // Launch and navigate to the application as an admin
    await adminApplication.launch(url);
    await adminApplication.navigateToApplication();

    const userApplication = new ApplicationPage(userPage);
    // Launch and navigate to the application as a user
    await userApplication.launch(url);
    await userApplication.navigateToApplication();

    // You can perform additional assertions or actions for each page here.
  });
});

// ===================== Use global and run one by one with separate at the same time ====================
test.describe("admin and user tests", () => {
  test("admin and user tabs in parallel", async ({ browser }) => {
    // Create two browser contexts for admin and user
    const adminContext = await browser.newContext({
      storageState: "storage/adminStorage.json",
    });
    const userContext = await browser.newContext({
      storageState: "storage/userStorage.json",
    });

    // Create two pages, one for admin and one for user
    const adminPage = await adminContext.newPage();
    const userPage = await userContext.newPage();

    const { url } = await getTestContext(adminPage); // Assuming both should open the same URL
    const applicationAdmin = new ApplicationPage(adminPage);
    const applicationUser = new ApplicationPage(userPage);

    // Launch and navigate to the application as admin and user in parallel
    await Promise.all([
      (async () => {
        await applicationAdmin.launch(url);
        await applicationAdmin.navigateToApplication();
      })(),
      (async () => {
        await applicationUser.launch(url);
        await applicationUser.navigateToApplication();
      })(),
    ]);
  });
});
