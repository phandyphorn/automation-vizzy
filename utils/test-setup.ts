import { Browser, BrowserContext, Page } from "@playwright/test";
import { DataManager } from "../utils/data-manager";
import { User } from "../test-data/types";

export const getTestContext = async (page: Page) => {
  const url = process.env.URL || "";
  const env = process.env.ENV_NAME || "";

  const superAdmin = DataManager.getInstance().getSuperAdmin() as User;
  const user = DataManager.getInstance().getUser() as User;
  const admin = DataManager.getInstance().getAdmin() as User;

  return {
    url,
    env,
    page,
    superAdmin,
    user,
    admin,
  };
};
