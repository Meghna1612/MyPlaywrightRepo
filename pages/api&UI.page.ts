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

export class appearlSection{

    page:Page;

    constructor(page:Page){

        this.page=page;
    }

    async navigateJeans() {
        await this.page.goto('https://demowebshop.tricentis.com/apparel-shoes');
        await this.page.locator('#small-searchterms').fill('Blue Jeans');
        await this.page.locator('.search-box-button').click();
        await expect(this.page.getByText('Blue Jeans').first()).toBeVisible();
        const jeansPrice = await this.page.locator('.actual-price').first().textContent();
        expect (parseFloat(jeansPrice!)).toBe(1.00);
    }

    async addToCart() {
        await this.page.goto('https://demowebshop.tricentis.com/apparel-shoes');
        await this.page.locator('[data-productid="36"]').click();
        await this.page.locator('#add-to-cart-button-36').click();
        // await this.page.locator('.cart-label').hover();
        await expect(this.page.locator('.cart-qty')).toHaveText('(1)');
        const cartQty = await this.page.locator('.cart-qty').innerText();
        expect (cartQty).toBe('(1)');
        console.log('Shopping cart qnty:',cartQty);
    }

    async verifyCart() {
        await this.page.goto('https://demowebshop.tricentis.com/cart');
        expect(this.page.locator('.product-name')).toBeVisible;
        // await this.page.locator('//input[@type = "checkbox"]').click();
        await this.page.locator('input[type="checkbox"]').first().check();
        await this.page.locator('.update-cart-button').click();
        const cartQty = await this.page.locator('.cart-qty').innerText();
        expect(cartQty).toBe('(0)');
        console.log('Your cart is empty', cartQty);
    }

    async checkoutFlow() {
        await this.page.goto('https://demowebshop.tricentis.com/cart');
        await this.page.locator('input[id="termsofservice"]').click();
        await this.page.locator('#checkout').click();
        await expect(this.page.locator('.step-title')).toContainText('Billing address');
    }
}

