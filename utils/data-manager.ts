import { getData } from "../test-data/data";
import { TestData } from "../test-data/types";

export class DataManager {
  private static instance: DataManager;
  private testData: TestData = getData();

  private constructor() {}

  public static getInstance(): DataManager {
    if (!DataManager.instance) {
      DataManager.instance = new DataManager();
    }
    return DataManager.instance;
  }

  public getSuperAdmin() {
    return this.testData.users.find((user) => user.role === "super admin");
  }

  public getUser() {
    return this.testData.users.find((user) => user.role === "user");
  }

  public getAdmin() {
    return this.testData.users.find((user) => user.role === "admin");
  }
}
