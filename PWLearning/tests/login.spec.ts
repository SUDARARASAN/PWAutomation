//login.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {DashboardPage} from '../pages/DashboardPage'
import { config } from '../config/config';

//import { DashboardPage } from '../pages/DashboardPage';
 
test('Verify User can login successfully and check Dashboard is loaded', async ({ page }) => {
 
    const loginpage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
 
    await loginpage.navigate();
 
    await loginpage.verifyLoginPageLoaded();
 
    await loginpage.login(config.username, config.password);
 
    await dashboardPage.verifyDashboardLoaded();

    await dashboardPage.verifyLoggedInUser(config.displayName);
 
});
