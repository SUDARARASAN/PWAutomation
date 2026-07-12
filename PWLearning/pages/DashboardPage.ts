//DashboardPage.ts need to update
import { expect, Page } from "@playwright/test";

export class DashboardPage {
  constructor(private page: Page) {}

  async verifyDashboardLoaded()
    {
        await expect(this.page).toHaveURL(/dashboard\/home/, {timeout: 30000})
    }

  async verifyLoggedInUser(displayName: string) 
  {
        await expect(this.page.getByText(displayName)).toBeVisible({timeout:30000});
  }
}
