import { Locator,Page } from "@playwright/test";

export class LoginPage {
    readonly page:Page;
    readonly emailFields: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page=page;
        this.emailFields=page.locator('#email');
        this.passwordField=page.locator('#password');
        this.loginButton=page.locator('#btn-accounts-login');
    }
}