import { Page } from "@playwright/test";
import { LoginPage } from "../pageobject/loginpage";

export class PageObjectManager {
    readonly page: Page;
    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
    };

    LoginPageLocators () {
        return this.loginPage;
    };
};