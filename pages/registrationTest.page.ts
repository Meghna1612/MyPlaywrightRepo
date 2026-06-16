import { Page, expect } from "@playwright/test";

export class userRegistration {
   
    page:Page;
    users: any;

    constructor (page:Page) {
        this.page = page;
    }

    async navigateToRegister(){

        await this.page.goto('/');
        await this.page.getByText('Register').click();
    }

    async register(firstname: string,
        lastname: string,
        email: string,
        password: string){
        await this.page.getByLabel('Female').click();
        await this.page.getByText('First name:').fill(firstname);
        await this.page.locator('#LastName').fill(lastname);
        await this.page.getByLabel('Email:').fill(email);
        await this.page.locator('#Password').fill(password);
        await this.page.locator('#ConfirmPassword').fill(password);
        await this.page.locator('#register-button').click();
        const registerName = this.page.locator('.account').first();
        expect(registerName).toHaveText(email);
        console.log('Register User is:', email);
    }
}