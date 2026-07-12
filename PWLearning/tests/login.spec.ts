//login.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {DashboardPage} from '../pages/DashboardPage'
import { config } from '../config/config';

test('Verify User can login successfully', async ({ page }) => {
 
    const loginpage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
 
    //Loading the Landingpage
    await loginpage.navigate();
    
    //Verify that the login page is loaded 
    await loginpage.verifyLoginPageLoaded();
 
    //Enter the Username and credentials which are stored on .env file
    await loginpage.login(config.username, config.password);

    
 
    await dashboardPage.verifyDashboardLoaded();

    await dashboardPage.verifyLoggedInUser(config.displayName);
 
});
