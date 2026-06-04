import {test,expect} from '@playwright/test';
import { userRegistration } from '../pages/registrationTest.page'
import users from '../testData/users.json';
import { generateEmail } from '../utilities/randomData';
import { login } from '../pages/loginTest.page';
import { allBooks } from '../pages/books.page';

test.beforeEach(async({page}) =>{
    await page.goto('/');
})

test.describe('Demo Work shop testcases', () => {
test('@smoke Registration functionality', async ({page}) => {

    const registration = new userRegistration(page);
    await registration.navigateToRegister();
    await registration.register(
        users[0].firstname,
        users[0].lastname,
        generateEmail(),
        users[0].password
    );
});

test('Login functionality', async ({page}) => {

    const loginFunction = new login(page)
    await loginFunction.navigateLogin();
    await loginFunction.loginFunc(
        generateEmail(),
        users[0].password
    );
});

test('Assertions', async ({page}) => {

   const booksCategory = new allBooks(page)
   await booksCategory.navigateBooksCategory();
   await booksCategory.selectBooksCategory();
});
});