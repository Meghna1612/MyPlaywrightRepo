# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api&UI.spec.ts >> Computer section testcases >> Blue jeans sorting
- Location: tests\api&UI.spec.ts:103:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.price-value-36')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.price-value-36')

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Search" [level=1]
- text: "Search keyword:"
- textbox "Search keyword:": Blue Jeans
- checkbox "Advanced search"
- text: Advanced search
- button "Search"
- text: View as
- combobox:
  - option "Grid" [selected]
  - option "List"
- text: Sort by
- combobox:
  - option "Position" [selected]
  - 'option "Name: A to Z"'
  - 'option "Name: Z to A"'
  - 'option "Price: Low to High"'
  - 'option "Price: High to Low"'
  - option "Created on"
- text: Display
- combobox:
  - option "4"
  - option "8" [selected]
  - option "12"
- text: per page
- link "Picture of Blue Jeans":
  - /url: /blue-jeans
  - img "Picture of Blue Jeans"
- heading "Blue Jeans" [level=2]:
  - link "Blue Jeans":
    - /url: /blue-jeans
- text: "1.00"
- button "Add to cart"
- link "Picture of TBlue Jeans":
  - /url: /tblue-jeans
  - img "Picture of TBlue Jeans"
- heading "TBlue Jeans" [level=2]:
  - link "TBlue Jeans":
    - /url: /tblue-jeans
- text: "1.00"
- button "Add to cart"
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {Page, test, expect} from '@playwright/test';
  2  | 
  3  | export class computerSection{
  4  | 
  5  |     page:Page;
  6  | 
  7  |     constructor(page:Page) {
  8  |         this.page =page;
  9  |     }
  10 | 
  11 |     async navigateComputers() {
  12 |         await this.page.goto('https://demowebshop.tricentis.com/computers');
  13 |     }
  14 | 
  15 |     async computerDropdown() {
  16 |         await this.page.getByText('Computers').first().hover();
  17 |         await this.page.getByText('Desktops').first().click();   
  18 |         await expect(this.page.locator('//div[@class = "page-title"]')).toBeVisible();
  19 |     } 
  20 | 
  21 |     async computerChoice() {
  22 |         await this.page.locator('[data-productid="74"]').click();
  23 |         await this.page.waitForLoadState('networkidle');
  24 |     }
  25 | 
  26 |     async selectOptions() {
  27 |         // await this.page.getByLabel('Medium  [+15.00]').click();
  28 |         // await this.page.getByLabel('4GB  [+20.00]').click();
  29 |         // await this.page.getByLabel('320 GB').click();
  30 |         // await this.page.getByLabel('Office Suite  [+100.00]').click();
  31 |         await this.page.locator('#add-to-cart-button-74').click();
  32 |     }
  33 | 
  34 |     async getComputerName() {
  35 |     return await this.page.locator('.product-name h1').innerText();
  36 |     }
  37 | 
  38 | }
  39 | 
  40 | export class appearlSection{
  41 | 
  42 |     page:Page;
  43 | 
  44 |     constructor(page:Page){
  45 | 
  46 |         this.page=page;
  47 |     }
  48 | 
  49 |     async navigateJeans() {
  50 |         await this.page.goto('https://demowebshop.tricentis.com/apparel-shoes');
  51 |         await this.page.locator('#small-searchterms').fill('Blue Jeans');
  52 |         // await expect(this.page.locator('#ui-id-1')).toHaveText('Blue Jeans');
  53 |         await this.page.locator('.search-box-button').click();
> 54 |         await expect(this.page.locator('.price-value-36')).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  55 |         const jeansPrice = await this.page.locator('.product-price').first().textContent();
  56 |         expect (parseFloat(jeansPrice!)).toBe(1.00);
  57 |     }
  58 | }
```