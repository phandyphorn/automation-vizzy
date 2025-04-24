import test from "@playwright/test";
import { getTestContext } from "../utils/test-setup";
import { SettingPage } from "../pages/setting/setting.page";

test.describe("user only tests on setting", () => {
  test.use({ storageState: "storage/userStorage.json" });

  let url: string;
  let setting: SettingPage;

  test.beforeEach(async ({ page }) => {
    ({ url } = await getTestContext(page));
    setting = new SettingPage(page);
    await setting.launch(url);
  });

  test(`Go to setting and sub menu`, async () => {
    await setting.navigateToSetting();
    await setting.navigateToMyAccount();
    await setting.navigateToLogOut();
  });
});
