import test from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { ProfilePage } from "../pages/profile/profile.page";

test.describe("user only tests on profile", () => {
  test.use({ storageState: "storage/userStorage.json" });

  test(`Test on profile picture `, async ({ page }) => {
    const { url } = await getTestContext(page);
    const profile = new ProfilePage(page);

    await profile.launch(url);
    console.log("Adding profile...");
    await profile.addProfile();

    console.log("Editing profile...");
    await profile.editProfile();

    console.log("Deleting profile...");
    await profile.deleteProfile();
  });

  test(`Test on add the whole bio`, async ({ page }) => {
    const { url } = await getTestContext(page);
    const profile = new ProfilePage(page);

    console.log("Adding the whole info of bio...");
    await profile.launch(url);
    await profile.addWholeBio();
  });
});

// const setupProfilePage = async (page) => {
//   // Reuse the same page and context
//   const profile = new ProfilePage(page);
//   const { url } = await getTestContext(page);
//   await profile.launch(url);
//   return profile;
// };

// test(`profile page test`, async ({ page }) => {
//   const profile = await setupProfilePage(page);

//   console.log("Adding profile...");
//   await profile.addProfile();

//   console.log("Editing profile...");
//   await profile.editProfile();

//   console.log("Deleting profile...");
//   await profile.deleteProfile();
// });

// test(`add about you`, async ({ page }) => {
//   const profile = await setupProfilePage(page);
//   await profile.addAboutYou();
// });

// const setupProfilePage = async (page) => {
//   const context = await page.context().browser().newContext({
//     storageState: "userStorage.json",
//   });
//   const newPage = await context.newPage();
//   const profile = new ProfilePage(newPage);
//   const { url } = await getTestContext(newPage);
//   await profile.launch(url);
//   return profile;
// };

// test(`profile page test`, async ({ page }) => {
//   const profile = await setupProfilePage(page);

//   console.log("Adding profile...");
//   await profile.addProfile();

//   console.log("Editing profile...");
//   await profile.editProfile();

//   console.log("Deleting profile...");
//   await profile.deleteProfile();
// });

// test(`add about you`, async ({ page }) => {
//   const profile = await setupProfilePage(page);
//   await profile.addAboutYou();
// });

// test(`add about you`, async ({ page }) => {
//     const browser = await chromium.launch();
//    const context = await browser.newContext({
//      storageState: "userStorage.json",
//    });

//    // Create a new page with this pre-authenticated context
//    const newPage = await context.newPage();
//    const profile = new ProfilePage(newPage);
//    const { url } = await getTestContext(newPage);
//    await profile.launch(url);
//    //   // if run one by one, work as normal, if run all, not work correctly.
//    //   console.log("Adding profile...");
//    //   await profile.addProfile();
//    //   console.log("Editing profile...");
//    //   await profile.editProfile();

//    //   console.log("deleting profile...");
//    //   await profile.deleteProfile();
//    // await profile.locator.saveProfile.click();

//    // await profile.addVideo();
//    // await profile.removeVideo();
//    // await profile.addAllMedia();
//    // await profile.removeAllMedia();
//    await profile.addAboutYou();
//    // await profile.addLanguage();
//    // await profile.addSocial();

//    // await profile.addWholeBio();
//    // await project.addProject();
//  });
