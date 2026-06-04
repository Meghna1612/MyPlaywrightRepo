import { Page, expect } from "@playwright/test";

export class allBooks {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateBooksCategory() {
        await this.page.goto('/books');
        await expect(this.page.getByText('Demo Web Shop')).toBeVisible();
    }

    async selectBooksCategory() {
        await this.page.locator("//a[contains(text(),'Books')]").first().click();
        await this.page.locator('#products-orderby').selectOption('Name: A to Z');
        await this.page.locator('.picture').first().click();
        await this.page.locator('#add-to-cart-button-13').click();
    }


}