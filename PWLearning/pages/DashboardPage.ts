//DashboardPage.ts
import { expect, Page } from '@playwright/test';
 
export class DashboardPage {
 
    constructor(private page: Page) {}
 
    async verifyDashboardLoaded() {
        await expect(this.page).toHaveURL("https://www.prudentplus.in/dashboard/home");
    }
 
    async verifyLoggedInUser(userName: string) {
        await expect(this.page.getByText(userName)).toBeVisible();
    }
 
}