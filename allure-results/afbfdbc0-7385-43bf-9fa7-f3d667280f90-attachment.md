# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api&UI.spec.ts >> Computer section testcases >> Add jeans to cart and verify count
- Location: tests\api&UI.spec.ts:110:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "(1)"
Received: "(0)"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic "Close" [ref=e3] [cursor=pointer]
    - paragraph [ref=e4]:
      - text: The product has been added to your
      - link "shopping cart" [ref=e5] [cursor=pointer]:
        - /url: /cart
  - generic [ref=e6]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Tricentis Demo Web Shop" [ref=e10] [cursor=pointer]:
          - /url: /
          - img "Tricentis Demo Web Shop" [ref=e11]
        - list [ref=e14]:
          - listitem [ref=e15]:
            - link "Register" [ref=e16] [cursor=pointer]:
              - /url: /register
          - listitem [ref=e17]:
            - link "Log in" [ref=e18] [cursor=pointer]:
              - /url: /login
          - listitem [ref=e19]:
            - link "Shopping cart (1)" [ref=e20] [cursor=pointer]:
              - /url: /cart
              - generic [ref=e21]: Shopping cart
              - generic [ref=e22]: (1)
          - listitem [ref=e23]:
            - link "Wishlist (0)" [ref=e24] [cursor=pointer]:
              - /url: /wishlist
              - generic [ref=e25]: Wishlist
              - generic [ref=e26]: (0)
        - generic [ref=e28]:
          - status [ref=e29]
          - textbox [ref=e30]: Search store
          - button "Search" [ref=e31] [cursor=pointer]
      - list [ref=e33]:
        - listitem [ref=e34]:
          - link "Books" [ref=e35] [cursor=pointer]:
            - /url: /books
        - listitem [ref=e36]:
          - link "Computers" [ref=e37] [cursor=pointer]:
            - /url: /computers
        - listitem [ref=e38]:
          - link "Electronics" [ref=e39] [cursor=pointer]:
            - /url: /electronics
        - listitem [ref=e40]:
          - link "Apparel & Shoes" [ref=e41] [cursor=pointer]:
            - /url: /apparel-shoes
        - listitem [ref=e42]:
          - link "Digital downloads" [ref=e43] [cursor=pointer]:
            - /url: /digital-downloads
        - listitem [ref=e44]:
          - link "Jewelry" [ref=e45] [cursor=pointer]:
            - /url: /jewelry
        - listitem [ref=e46]:
          - link "Gift Cards" [ref=e47] [cursor=pointer]:
            - /url: /gift-cards
      - generic:
        - generic [ref=e50]:
          - generic [ref=e51]:
            - strong [ref=e53]: Categories
            - list [ref=e55]:
              - listitem [ref=e56]:
                - link "Books" [ref=e57] [cursor=pointer]:
                  - /url: /books
              - listitem [ref=e58]:
                - link "Computers" [ref=e59] [cursor=pointer]:
                  - /url: /computers
              - listitem [ref=e60]:
                - link "Electronics" [ref=e61] [cursor=pointer]:
                  - /url: /electronics
              - listitem [ref=e62]:
                - link "Apparel & Shoes" [ref=e63] [cursor=pointer]:
                  - /url: /apparel-shoes
              - listitem [ref=e64]:
                - link "Digital downloads" [ref=e65] [cursor=pointer]:
                  - /url: /digital-downloads
              - listitem [ref=e66]:
                - link "Jewelry" [ref=e67] [cursor=pointer]:
                  - /url: /jewelry
              - listitem [ref=e68]:
                - link "Gift Cards" [ref=e69] [cursor=pointer]:
                  - /url: /gift-cards
          - generic [ref=e70]:
            - strong [ref=e72]: Manufacturers
            - list [ref=e74]:
              - listitem [ref=e75]:
                - link "Tricentis" [ref=e76] [cursor=pointer]:
                  - /url: /tricentis
          - generic [ref=e77]:
            - strong [ref=e79]: Newsletter
            - generic [ref=e81]:
              - text: "Sign up for our newsletter:"
              - textbox [ref=e83]
              - button "Subscribe" [ref=e85] [cursor=pointer]
        - generic [ref=e86]:
          - list [ref=e88]:
            - listitem [ref=e89]:
              - link "Home" [ref=e91] [cursor=pointer]:
                - /url: /
              - text: /
            - listitem [ref=e92]:
              - link "Apparel & Shoes" [ref=e94] [cursor=pointer]:
                - /url: /apparel-shoes
              - text: /
            - listitem [ref=e95]:
              - strong [ref=e96]: Blue Jeans
          - generic [ref=e100]:
            - generic [ref=e101]:
              - img "Picture of Blue Jeans" [ref=e104]
              - generic [ref=e105]:
                - heading "Blue Jeans" [level=1] [ref=e107]
                - generic [ref=e108]: Jeans
                - generic [ref=e109]: "Availability: In stock"
                - generic [ref=e114]:
                  - link "662 review(s)" [ref=e115] [cursor=pointer]:
                    - /url: /productreviews/36
                  - text: "|"
                  - link "Add your review" [ref=e116] [cursor=pointer]:
                    - /url: /productreviews/36
                - generic [ref=e118]: "1.00"
                - generic [ref=e120]:
                  - text: "Qty:"
                  - textbox "Qty:" [ref=e121]: "1"
                  - button "Add to cart" [active] [ref=e122] [cursor=pointer]
                - button "Email a friend" [ref=e124] [cursor=pointer]
                - button "Add to compare list" [ref=e126] [cursor=pointer]
              - paragraph [ref=e128]: Stylish Jeans
            - generic [ref=e129]:
              - generic [ref=e130]:
                - strong [ref=e132]: Product tags
                - generic:
                  - list:
                    - listitem [ref=e133]:
                      - link "cool" [ref=e134] [cursor=pointer]:
                        - /url: /producttag/3/cool
                      - text: (17)
                    - listitem [ref=e135]: ","
                    - listitem [ref=e136]:
                      - link "apparel" [ref=e137] [cursor=pointer]:
                        - /url: /producttag/4/apparel
                      - text: (12)
                    - listitem [ref=e138]: ","
                    - listitem [ref=e139]:
                      - link "jeans" [ref=e140] [cursor=pointer]:
                        - /url: /producttag/14/jeans
                      - text: (3)
              - generic [ref=e141]:
                - strong [ref=e143]: Customers who bought this item also bought
                - generic [ref=e145]:
                  - link "Picture of Blue and green Sneaker" [ref=e147] [cursor=pointer]:
                    - /url: /blue-and-green-sneaker
                    - img "Picture of Blue and green Sneaker" [ref=e148]
                  - generic [ref=e149]:
                    - heading "Blue and green Sneaker" [level=2] [ref=e150]:
                      - link "Blue and green Sneaker" [ref=e151] [cursor=pointer]:
                        - /url: /blue-and-green-sneaker
                    - generic "360 review(s)" [ref=e152]
                    - generic [ref=e155]:
                      - generic [ref=e157]: "11.00"
                      - button "Add to cart" [ref=e159] [cursor=pointer]
                - generic [ref=e161]:
                  - link "Picture of Computing and Internet" [ref=e163] [cursor=pointer]:
                    - /url: /computing-and-internet
                    - img "Picture of Computing and Internet" [ref=e164]
                  - generic [ref=e165]:
                    - heading "Computing and Internet" [level=2] [ref=e166]:
                      - link "Computing and Internet" [ref=e167] [cursor=pointer]:
                        - /url: /computing-and-internet
                    - generic "2542 review(s)" [ref=e168]
                    - generic [ref=e171]:
                      - generic [ref=e172]:
                        - generic [ref=e173]: "30.00"
                        - generic [ref=e174]: "10.00"
                      - button "Add to cart" [ref=e176] [cursor=pointer]
                - generic [ref=e178]:
                  - link "Picture of 14.1-inch Laptop" [ref=e180] [cursor=pointer]:
                    - /url: /141-inch-laptop
                    - img "Picture of 14.1-inch Laptop" [ref=e181]
                  - generic [ref=e182]:
                    - heading "14.1-inch Laptop" [level=2] [ref=e183]:
                      - link "14.1-inch Laptop" [ref=e184] [cursor=pointer]:
                        - /url: /141-inch-laptop
                    - generic "1648 review(s)" [ref=e185]
                    - generic [ref=e188]:
                      - generic [ref=e190]: "1590.00"
                      - button "Add to cart" [ref=e192] [cursor=pointer]
    - generic [ref=e193]:
      - generic [ref=e194]:
        - generic [ref=e195]:
          - heading "Information" [level=3] [ref=e196]
          - list [ref=e197]:
            - listitem [ref=e198]:
              - link "Sitemap" [ref=e199] [cursor=pointer]:
                - /url: /sitemap
            - listitem [ref=e200]:
              - link "Shipping & Returns" [ref=e201] [cursor=pointer]:
                - /url: /shipping-returns
            - listitem [ref=e202]:
              - link "Privacy Notice" [ref=e203] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e204]:
              - link "Conditions of Use" [ref=e205] [cursor=pointer]:
                - /url: /conditions-of-use
            - listitem [ref=e206]:
              - link "About us" [ref=e207] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e208]:
              - link "Contact us" [ref=e209] [cursor=pointer]:
                - /url: /contactus
        - generic [ref=e210]:
          - heading "Customer service" [level=3] [ref=e211]
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link "Search" [ref=e214] [cursor=pointer]:
                - /url: /search
            - listitem [ref=e215]:
              - link "News" [ref=e216] [cursor=pointer]:
                - /url: /news
            - listitem [ref=e217]:
              - link "Blog" [ref=e218] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e219]:
              - link "Recently viewed products" [ref=e220] [cursor=pointer]:
                - /url: /recentlyviewedproducts
            - listitem [ref=e221]:
              - link "Compare products list" [ref=e222] [cursor=pointer]:
                - /url: /compareproducts
            - listitem [ref=e223]:
              - link "New products" [ref=e224] [cursor=pointer]:
                - /url: /newproducts
        - generic [ref=e225]:
          - heading "My account" [level=3] [ref=e226]
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link "My account" [ref=e229] [cursor=pointer]:
                - /url: /customer/info
            - listitem [ref=e230]:
              - link "Orders" [ref=e231] [cursor=pointer]:
                - /url: /customer/orders
            - listitem [ref=e232]:
              - link "Addresses" [ref=e233] [cursor=pointer]:
                - /url: /customer/addresses
            - listitem [ref=e234]:
              - link "Shopping cart" [ref=e235] [cursor=pointer]:
                - /url: /cart
            - listitem [ref=e236]:
              - link "Wishlist" [ref=e237] [cursor=pointer]:
                - /url: /wishlist
        - generic [ref=e238]:
          - heading "Follow us" [level=3] [ref=e239]
          - list [ref=e240]:
            - listitem [ref=e241]:
              - link "Facebook" [ref=e242] [cursor=pointer]:
                - /url: http://www.facebook.com/nopCommerce
            - listitem [ref=e243]:
              - link "Twitter" [ref=e244] [cursor=pointer]:
                - /url: https://twitter.com/nopCommerce
            - listitem [ref=e245]:
              - link "RSS" [ref=e246] [cursor=pointer]:
                - /url: /news/rss/1
            - listitem [ref=e247]:
              - link "YouTube" [ref=e248] [cursor=pointer]:
                - /url: http://www.youtube.com/user/nopCommerce
            - listitem [ref=e249]:
              - link "Google+" [ref=e250] [cursor=pointer]:
                - /url: https://plus.google.com/+nopcommerce
      - generic [ref=e251]:
        - text: Powered by
        - link "nopCommerce" [ref=e252] [cursor=pointer]:
          - /url: http://www.nopcommerce.com/
      - generic [ref=e253]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  53 |         await expect(this.page.getByText('Blue Jeans').first()).toBeVisible();
  54 |         const jeansPrice = await this.page.locator('.actual-price').first().textContent();
  55 |         expect (parseFloat(jeansPrice!)).toBe(1.00);
  56 |     }
  57 | 
  58 |     async addToCart() {
  59 |         await this.page.goto('https://demowebshop.tricentis.com/apparel-shoes');
  60 |         await this.page.locator('[data-productid="36"]').click();
  61 |         await this.page.locator('#add-to-cart-button-36').click();
  62 |         // await this.page.locator('.cart-label').hover();
  63 |         await this.page.locator('.cart-qty').waitFor();
  64 |         const cartQty = await this.page.locator('.cart-qty').innerText();
> 65 |         expect (cartQty).toBe('(1)');
     |                          ^ Error: expect(received).toBe(expected) // Object.is equality
  66 |         console.log('Shopping cart qnty:',cartQty);
  67 |     }
  68 | }
  69 | 
  70 | 
```