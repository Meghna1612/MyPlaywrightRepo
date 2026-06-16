// 1. Go to computers section
// 2. Select desktops from dropdown
// 3. Select any computer 
// 4. Get list of the computers present with prices


import { test, expect, request } from '@playwright/test';
import { computerSection, appearlSection } from '../pages/api&UI.page';
import { userRegistration } from '../pages/registrationTest.page';
import users from '../TestData/users.json';
import { generateEmail } from '../utilities/randomData';

const desktopURL = 'https://demowebshop.tricentis.com/desktops';

test.describe('Computer section testcases', () => {

    test('Computers API + UI', async ({ page }) => {

        const sectionComputer = new computerSection(page);
        await sectionComputer.navigateComputers();
        await sectionComputer.computerDropdown();
        await sectionComputer.computerChoice();
        await sectionComputer.selectOptions();
        console.log('name off the computer:', await sectionComputer.getComputerName());
    })

    test('API testing for the same', async ({ request }) => {

        const getCompRes = await request.get(desktopURL);
        expect(getCompRes.status()).toBe(200);

        const html = await getCompRes.text();

        const products = [
            ...html.matchAll(/<h2 class="product-title">[\s\S]*?<a[^>]*>(.*?)<\/a>/g)
        ];

        expect(products.length).toBeGreaterThan(0);

        products.forEach(product => {
            console.log(product[1].trim());
        });

        const productPrice = [...html.matchAll(/<span class="price actual-price">(.*?)<\/span>/g)];

        expect(productPrice.length).toBeGreaterThan(0);

        productPrice.forEach(price => {
            console.log(price[1].trim());
        });

        // request.get()     → fetch page
        // response.text()   → get HTML
        // matchAll()        → find all matching product names
        // forEach()         → loop through each product
        // console.log()     → print product name

        for (let i = 0; i < products.length; i++) {
            console.log(
                `${products[i][1].trim()} - ${productPrice[i][1].trim()}`
            );
        }

        products.forEach((product, index) => {
            console.log(
                product[1].trim(),
                '-',
                productPrice[index][1].trim()
            );
        });
    });

    test('Negative scenario', async ({ request }) => {

        const negRes = await request.get('https://demowebshop.tricentis.com/invalidpage123');
        expect(negRes.status()).toBe(404);
        console.log('status is:', negRes.status());
    });

    test('UI + API validation', async ({ page, request }) => {

        const apiURL = await request.get(desktopURL);

        const HTML = await apiURL.text();

        const resMatch = [...HTML.matchAll(/<h2 class="product-title">[\s\S]*?<a[^>]*>(.*?)<\/a>/g)];
        console.log(resMatch.length)

        const productSearch = resMatch.map(match => match[1].trim());

        await page.goto(desktopURL);

        for (const name of productSearch) {
            await expect(page.getByText(name)).toBeVisible();
        }

        // await expect(page.getByText(productSearch!)).toBeVisible();
        console.log('Names of desktops:', productSearch);
    });

    // Type "Blue Jeans" in the search bar
    // Click Search button
    // Assert that "Blue Jeans" appears in the results
    // Assert the price is 1.00

    test('Blue jeans sorting', async ({ page }) => {

        const ApperalSection = new appearlSection(page);
        await ApperalSection.navigateJeans();
    });


    test('Add jeans to cart and verify count', async ({ page }) => {
        // Go to Apparel & Shoes page
        // Click "Add to cart" on Blue Jeans
        // Assert the cart count in the top right increases by 1

        const AppearlSection = new appearlSection(page);
        await AppearlSection.addToCart();
    })

    test('Task — Remove item from cart', async ({page}) => {
        // Go to cart page directly (/cart)
        // Assert Blue Jeans is present in cart
        // Check the remove checkbox next to Blue Jeans
        // Click "Update shopping cart"
        // Assert cart is now empty

        const AppearlSection = new appearlSection(page);
        await AppearlSection.addToCart();
        await AppearlSection.verifyCart();
    })

    test('Task — Checkout flow', async ({page}) => {
        
        const UserInvite = new userRegistration(page);
        const AppearlSection = new appearlSection(page);

        await UserInvite. users[0].firstname,
        users[0].lastname,
        generateEmail(),
        users[0].password
        await AppearlSection.addToCart();
        await AppearlSection.checkoutFlow();
    })
})
