import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
 
test('User can login successfully', async ({ page }) => {
 
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
 
    await login.navigate();
 
    await login.verifyLoginPageLoaded();
 
    await login.login('name', 'pass');
 
    await dashboard.verifyDashboardLoaded();
 
});
