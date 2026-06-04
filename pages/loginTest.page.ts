import { Page } from "@playwright/test";

export class login {

    page:Page;

    constructor(page:Page){

        this.page= page;
    }

    async navigateLogin() {
        await this.page.goto('/login');
    }

    async loginFunc(email:string, password:string) {
        await this.page.locator('#Email').fill(email);
        await this.page.locator('#Password').fill(password);
    }

}