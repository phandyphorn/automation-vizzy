import test from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { ProfilePage } from "../pages/profile/profile.page";

test.describe("user only tests on profile", () => {
  test.use({ storageState: "storage/userStorage.json" });

  let url: string;
  let profile: ProfilePage;

  test.beforeEach(async ({ page }) => {
    ({ url } = await getTestContext(page));
    profile = new ProfilePage(page);
    await profile.launch(url);
  });

  test.skip(`Test on profile picture `, async () => {
    await profile.launch(url);
    console.log("Adding profile...");
    await profile.addProfile();

    console.log("Editing profile...");
    await profile.editProfile();

    console.log("Deleting profile...");
    await profile.deleteProfile();
  });

  test(`Test on add the whole bio`, async () => {
    console.log("Adding the whole info of bio...");
    await profile.addWholeBio();
  });

  test.skip(`Remove all medias`, async () => {
    console.log("Deleting the whole info of bio...");
    await profile.removeAllMedia();
  });
});
