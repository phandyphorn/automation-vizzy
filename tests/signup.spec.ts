import test from "@playwright/test";
import { SignUpView } from "../pages/signup.view";
import { getTestContext } from "../utils/test-setup";

test(`sign up environment`, async ({ page }) => {
  const { url } = await getTestContext(page);

  const signUp = new SignUpView(page);
  await signUp.launch(url);
  await signUp.submitSignUp({
    firstName: "dd",
    lastName: "pp",
    email: "dd@gmail.com",
    password: "Dd1234!",
    optInForNews: false,
  });
});
