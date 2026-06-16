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

Locator: getByText('Blue Jeans')
Expected: visible
Error: strict mode violation: getByText('Blue Jeans') resolved to 2 elements:
    1) <a href="/blue-jeans">Blue Jeans</a> aka getByRole('link', { name: 'Blue Jeans', exact: true })
    2) <a href="/tblue-jeans">TBlue Jeans</a> aka getByRole('link', { name: 'TBlue Jeans', exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Blue Jeans')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Register" [ref=e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=e13]:
          - link "Log in" [ref=e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=e44]:
        - generic [ref=e45]:
          - strong [ref=e47]: Categories
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Books" [ref=e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=e52]:
              - link "Computers" [ref=e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=e54]:
              - link "Electronics" [ref=e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=e56]:
              - link "Apparel & Shoes" [ref=e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=e58]:
              - link "Digital downloads" [ref=e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=e60]:
              - link "Jewelry" [ref=e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=e62]:
              - link "Gift Cards" [ref=e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=e64]:
          - strong [ref=e66]: Manufacturers
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "Tricentis" [ref=e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=e71]:
          - strong [ref=e73]: Newsletter
          - generic [ref=e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e77]
            - button "Subscribe" [ref=e79] [cursor=pointer]
      - generic [ref=e81]:
        - heading "Search" [level=1] [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e86]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - generic [ref=e89]: "Search keyword:"
                - textbox "Search keyword:" [ref=e90]: Blue Jeans
              - generic [ref=e91]:
                - checkbox "Advanced search" [ref=e92]
                - generic [ref=e93]: Advanced search
            - button "Search" [ref=e95] [cursor=pointer]
          - generic [ref=e96]:
            - generic [ref=e97]:
              - text: View as
              - combobox [ref=e98]:
                - option "Grid" [selected]
                - option "List"
            - generic [ref=e99]:
              - text: Sort by
              - combobox [ref=e100]:
                - option "Position" [selected]
                - 'option "Name: A to Z"'
                - 'option "Name: Z to A"'
                - 'option "Price: Low to High"'
                - 'option "Price: High to Low"'
                - option "Created on"
            - generic [ref=e101]:
              - text: Display
              - combobox [ref=e102]:
                - option "4"
                - option "8" [selected]
                - option "12"
              - text: per page
          - generic [ref=e104]:
            - generic [ref=e106]:
              - link "Picture of Blue Jeans" [ref=e108] [cursor=pointer]:
                - /url: /blue-jeans
                - img "Picture of Blue Jeans" [ref=e109]
              - generic [ref=e110]:
                - heading "Blue Jeans" [level=2] [ref=e111]:
                  - link "Blue Jeans" [ref=e112] [cursor=pointer]:
                    - /url: /blue-jeans
                - generic "662 review(s)" [ref=e113]
                - generic [ref=e116]:
                  - generic [ref=e118]: "1.00"
                  - button "Add to cart" [ref=e120] [cursor=pointer]
            - generic [ref=e122]:
              - link "Picture of TBlue Jeans" [ref=e124] [cursor=pointer]:
                - /url: /tblue-jeans
                - img "Picture of TBlue Jeans" [ref=e125]
              - generic [ref=e126]:
                - heading "TBlue Jeans" [level=2] [ref=e127]:
                  - link "TBlue Jeans" [ref=e128] [cursor=pointer]:
                    - /url: /tblue-jeans
                - generic "11 review(s)" [ref=e129]
                - generic [ref=e132]:
                  - generic [ref=e134]: "1.00"
                  - button "Add to cart" [ref=e136] [cursor=pointer]
  - generic [ref=e137]:
    - generic [ref=e138]:
      - generic [ref=e139]:
        - heading "Information" [level=3] [ref=e140]
        - list [ref=e141]:
          - listitem [ref=e142]:
            - link "Sitemap" [ref=e143] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e144]:
            - link "Shipping & Returns" [ref=e145] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e146]:
            - link "Privacy Notice" [ref=e147] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e148]:
            - link "Conditions of Use" [ref=e149] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e150]:
            - link "About us" [ref=e151] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e152]:
            - link "Contact us" [ref=e153] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e154]:
        - heading "Customer service" [level=3] [ref=e155]
        - list [ref=e156]:
          - listitem [ref=e157]:
            - link "Search" [ref=e158] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e159]:
            - link "News" [ref=e160] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e161]:
            - link "Blog" [ref=e162] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e163]:
            - link "Recently viewed products" [ref=e164] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e165]:
            - link "Compare products list" [ref=e166] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e167]:
            - link "New products" [ref=e168] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e169]:
        - heading "My account" [level=3] [ref=e170]
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link "My account" [ref=e173] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e174]:
            - link "Orders" [ref=e175] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e176]:
            - link "Addresses" [ref=e177] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e178]:
            - link "Shopping cart" [ref=e179] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e180]:
            - link "Wishlist" [ref=e181] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e182]:
        - heading "Follow us" [level=3] [ref=e183]
        - list [ref=e184]:
          - listitem [ref=e185]:
            - link "Facebook" [ref=e186] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e187]:
            - link "Twitter" [ref=e188] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e189]:
            - link "RSS" [ref=e190] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e191]:
            - link "YouTube" [ref=e192] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e193]:
            - link "Google+" [ref=e194] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e195]:
      - text: Powered by
      - link "nopCommerce" [ref=e196] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e197]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  52 |         await this.page.locator('.search-box-button').click();
> 53 |         await expect(this.page.getByText('Blue Jeans')).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  54 |         const jeansPrice = await this.page.locator('.actual-price').first().textContent();
  55 |         expect (parseFloat(jeansPrice!)).toBe(1.00);
  56 |     }
  57 | }
```