import {test,expect} from "@playwright/test";
import { PageObjectManager } from "../pagemanager/pageobjectmanager";

test('my first test', async ({page}) => {
    const pageObjectManager = new PageObjectManager(page);
    const loginPage = pageObjectManager.LoginPageLocators();

//Step: Navigate to URL
await page.goto('https://beacon-accountweb-dev.azurewebsites.net/login')
//Step: Verify Title
await expect(page).toHaveTitle('Beacon | Bizbox Client Portal')
//Step: Verify Email Field is Enabled
await expect(loginPage.emailFields).toBeEnabled()
//Step: Fill Email Fields
await loginPage.emailFields.fill('johndoe@mailinator.com')
//Step: Verify Password Field is Enabled
await expect(loginPage.passwordField).toBeEnabled()
//Step: Fill Password Field
await loginPage.passwordField.fill('abcdE@123')
//Step: Verify Login Button is Visible and Click
await expect(loginPage.loginButton).toBeVisible()
await loginPage.loginButton.click()

});