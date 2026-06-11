import {test, expect, request} from '@playwright/test';
import users  from '../TestData/users.json';
import { generateEmail } from '../utilities/randomData';

let sharedEmail: string;

test('Register user', async ({request}) => {
// calling get request to url
    const getResponse = await request.get('https://demowebshop.tricentis.com/register');
    expect(getResponse.status()).toBe(200);

// convertering response to html
    const html = await getResponse.text();

// Fetching token from html 
    const tokenMatch = html.match(/name="__RequestVerificationToken"[^>]*value="([^"]+)"/);

// Matching token 
    const token = tokenMatch ? tokenMatch[1] : '';

    const sharedEmail = generateEmail();

// Do post call to fill reqister form
    const postRegister = await request.post('https://demowebshop.tricentis.com/register', {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        form: {
        __RequestVerificationToken: token,
        Gender: 'F',
        FirstName: users[0].firstname, 
        LastName: users[0].lastname,
        Email: sharedEmail,
        Password: users[0].password,
        ConfirmPassword: users[0].password,
        'register-button': 'Register',
        }
    })
// Verify post request response
    console.log('Response is: ', postRegister.status());
    expect(postRegister.status()).toBe(200);

    const responseBody = await postRegister.text();
    console.log('Response contains register:',responseBody);

    console.log('User registered successfully');
    console.log('User email', sharedEmail);
})

test('POST-Login user',async ({request}) => {
    // get call to fetch the token
    const getLoginRes = await request.get('https://demowebshop.tricentis.com/login');

    const html = await getLoginRes.text();

    console.log('HTML snippet:', html.substring(0, 2000));

    const tokenMatch = html.match(/name="__RequestVerificationToken"[^>]*value="([^"]+)"/);

    const token = tokenMatch ? tokenMatch[1] : '';
    console.log('Token:', token);
    expect(token).toBeTruthy();

    const sharedEmail = generateEmail();

    // post call to login
    const postLoginRes  = await request.post('https://demowebshop.tricentis.com/login',{
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        __RequestVerificationToken: token,
        Email: sharedEmail,
        Password: users[0].password,
        'login-button': 'Login',
      }
    });
    expect (postLoginRes.status()).toBe(200);
    console.log('Logged in successfully');

    // Get call --list books
    const getBooksList = await request.get('https://demowebshop.tricentis.com/books?orderby=5');
    expect(getBooksList.status()).toBe(200);

    const bookshtml = await getBooksList.text();
    console.log('Books list:', bookshtml.includes('Books'))
})

test('GET - Books list A-Z', async ({request}) => {

  const getBooksList = await request.get(
    'https://demowebshop.tricentis.com/books?orderby=5'
  );

  expect(getBooksList.status()).toBe(200);

  const booksHtml = await getBooksList.text();

  // Verify books page loaded
  console.log('HTML snippet:', booksHtml.substring(0, 3000));

});

