// 1. Go to computers section
// 2. Select desktops from dropdown
// 3. Select any computer 
// 4. Get list of the computers present with prices


import {test,expect,request} from '@playwright/test';
import { computerSection } from '../pages/api&UI.page';

test('Computers API + UI', async ({page}) =>  {

    const sectionComputer= new computerSection(page);
    await sectionComputer.navigateComputers();
    await sectionComputer.computerDropdown();
    await sectionComputer.computerChoice();
    await sectionComputer.selectOptions();
    console.log('name off the computer:', await sectionComputer.getComputerName());
})

test('API testing for the same', async ({request}) => {

    const getCompRes = await request.get('https://demowebshop.tricentis.com/desktops');
    expect(getCompRes.status()).toBe(200);

    const html = await getCompRes.text();

    const products = [
        ...html.matchAll(/<h2 class="product-title">[\s\S]*?<a[^>]*>(.*?)<\/a>/g)
    ];

    products.forEach(product => {
        console.log(product[1].trim());
    });

    // request.get()     → fetch page
    // response.text()   → get HTML
    // matchAll()        → find all matching product names
    // forEach()         → loop through each product
    // console.log()     → print product name

  
})
