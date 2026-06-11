import {test,expect, request} from '@playwright/test';
import { generateEmail } from '../utilities/randomData';

test.describe('API Testing', () => {
  test('POST- Register form', async ({request}) => {
    
    // Step 1: open registration page and check status

    const getResponse = await request.get('https://demowebshop.tricentis.com/register');

    expect(getResponse.status()).toBe(200);

    // Step 2: Extract the token from HTML response
    const html = await getResponse.text();
    const tokenMatch = html.match(/name="__RequestVerificationToken"[^>]*value="([^"]+)"/);
    const token = tokenMatch ? tokenMatch[1] : '';
    console.log('Extracted token:',token);
    expect (token).toBeTruthy();

    // Step 3: Generate unique Email
    const uniqueEmail = `testuser_${Date.now()}@gmail.com`;

    // POST registration form with token
    const postResponse = await request.post('https://demowebshop.tricentis.com/register',{
        headers : {
            'Content-type': 'application/x-www-form-urlencoded',
        }, 
        form: {
        __RequestVerificationToken: token,
        FirstName: 'Test',
        LastName: 'User',
        Email: uniqueEmail,
        Password: 'Test@12345',
        ConfirmPassword: 'Test@12345',
        'register-button': 'Register'
      }
    })

    // Verify Response
    console.log('Status Code:', postResponse.status());
    const responseBody = await postResponse.text();
    console.log('Response contains register:', 
      responseBody.includes('register'));

    expect(postResponse.status()).toBe(200);
    console.log('✅ User registered successfully via API!');
    console.log('📧 Registered Email:', uniqueEmail);
  });

  test('POST-Login user',async ({request}) => {
    const getLoginRes = await request.get('https://demowebshop.tricentis.com/login');

    const html = await getLoginRes.text();

    const tokenMatch = html.match(/name="__RequestVerificationToken"[^>]*value="([^"]+)"/);

    const token = tokenMatch ? tokenMatch[1] : '';
    console.log('Token:', token);
    expect(token).toBeTruthy();

    const email = generateEmail();

    // get call to get list of books
    const postLoginRes  = await request.post('https://demowebshop.tricentis.com/books',{
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: {
        __RequestVerificationToken: token,
        Email: email, // 👈 use your registered email
        Password: users[0].password,
      }

    }
    )

    


  })
})