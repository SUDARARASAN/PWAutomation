//LoginPage.ts

import { Page, Locator, expect } from '@playwright/test';
import { config } from '../config/config';
 
export class LoginPage {
 
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signIn: Locator;
 
    constructor(page: Page) {
        this.page = page;
 
        this.username = page.getByRole('textbox', {
            name: 'Username or email address'
        });
 
        this.password = page.getByRole('textbox', {
            name: 'Password'
        });
 
        this.signIn = page.getByRole('button', {
            name: 'Sign in'
        });
    }
 
    async navigate() {
        await this.page.goto(config.baseUrl);
    }

    async verifyLoginPageLoaded() {
        await expect(this.username).toBeVisible();
        await expect(this.password).toBeVisible();
        await expect(this.signIn).toBeVisible();
    }
 
    async login(user: string, pass: string) {
        await this.username.fill(config.username);
        await this.password.fill(config.password);
        await this.signIn.click();
    }
 
    
}