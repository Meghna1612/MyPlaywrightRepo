import {Page, test, expect} from '@playwright/test';

export class computerSection{

    page:Page;

    constructor(page:Page) {
        this.page =page;
    }

    async navigateComputers() {
        await this.page.goto('https://demowebshop.tricentis.com/computers');
    }

    async computerDropdown() {
        await this.page.getByText('Computers').first().hover();
        await this.page.getByText('Desktops').first().click();   
        await expect(this.page.locator('//div[@class = "page-title"]')).toBeVisible();
    } 

    async computerChoice() {
        await this.page.locator('[data-productid="74"]').click();
        await this.page.waitForLoadState('networkidle');
    }

    async selectOptions() {
        // await this.page.getByLabel('Medium  [+15.00]').click();
        // await this.page.getByLabel('4GB  [+20.00]').click();
        // await this.page.getByLabel('320 GB').click();
        // await this.page.getByLabel('Office Suite  [+100.00]').click();
        await this.page.locator('#add-to-cart-button-74').click();
    }

    async getComputerName() {
    return await this.page.locator('.product-name h1').innerText();
    }

}