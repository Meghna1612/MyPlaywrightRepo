// 1. Go to computers section
// 2. Select desktops from dropdown
// 3. Select any computer 
// 4. Get list of the computers present with prices


import { test, expect, request } from '@playwright/test';
import { computerSection } from '../pages/api&UI.page';

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


    })
})
