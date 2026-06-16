# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: repeat.spec.ts >> POST-Login user
- Location: tests\repeat.spec.ts:50:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: ""
```

# Test source

```ts
  1   | import {test, expect, request} from '@playwright/test';
  2   | import users  from '../TestData/users.json';
  3   | import { generateEmail } from '../utilities/randomData';
  4   | 
  5   | let sharedEmail: string;
  6   | 
  7   | test('Register user', async ({request}) => {
  8   | // calling get request to url
  9   |     const getResponse = await request.get('https://demowebshop.tricentis.com/register');
  10  |     expect(getResponse.status()).toBe(200);
  11  | 
  12  | // convertering response to html
  13  |     const html = await getResponse.text();
  14  | 
  15  | // Fetching token from html 
  16  |     const tokenMatch = html.match(/name="__RequestVerificationToken"[^>]*value="([^"]+)"/);
  17  | 
  18  | // Matching token 
  19  |     const token = tokenMatch ? tokenMatch[1] : '';
  20  | 
  21  |     const sharedEmail = generateEmail();
  22  | 
  23  | // Do post call to fill reqister form
  24  |     const postRegister = await request.post('https://demowebshop.tricentis.com/register', {
  25  |         headers : {
  26  |             'Content-Type': 'application/x-www-form-urlencoded',
  27  |         },
  28  |         form: {
  29  |         __RequestVerificationToken: token,
  30  |         Gender: 'F',
  31  |         FirstName: users[0].firstname, 
  32  |         LastName: users[0].lastname,
  33  |         Email: sharedEmail,
  34  |         Password: users[0].password,
  35  |         ConfirmPassword: users[0].password,
  36  |         'register-button': 'Register',
  37  |         }
  38  |     })
  39  | // Verify post request response
  40  |     console.log('Response is: ', postRegister.status());
  41  |     expect(postRegister.status()).toBe(200);
  42  | 
  43  |     const responseBody = await postRegister.text();
  44  |     console.log('Response contains register:',responseBody);
  45  | 
  46  |     console.log('User registered successfully');
  47  |     console.log('User email', sharedEmail);
  48  | })
  49  | 
  50  | test('POST-Login user',async ({request}) => {
  51  |     // get call to fetch the token
  52  |     const getLoginRes = await request.get('https://demowebshop.tricentis.com/login');
  53  | 
  54  |     const html = await getLoginRes.text();
  55  | 
  56  |     // Search specifically for the token field
  57  | const tokenSnippet = html.substring(html.indexOf('RequestVerification'), html.indexOf('RequestVerification') + 200);
  58  | console.log('Token area:', tokenSnippet);
  59  | 
  60  |     console.log('HTML snippet:', html.substring(0, 2000));
  61  | 
  62  |     const tokenMatch = html.match(/name="__RequestVerificationToken"[^>]*value="([^"]+)"/);
  63  | 
  64  |     const token = tokenMatch ? tokenMatch[1] : '';
  65  |     console.log('Token:', token);
> 66  |     expect(token).toBeTruthy();
      |                   ^ Error: expect(received).toBeTruthy()
  67  | 
  68  |     const sharedEmail = generateEmail();
  69  | 
  70  |     // post call to login
  71  |     const postLoginRes  = await request.post('https://demowebshop.tricentis.com/login',{
  72  |       headers : {
  73  |         'Content-Type': 'application/x-www-form-urlencoded',
  74  |       },
  75  |       form: {
  76  |         __RequestVerificationToken: token,
  77  |         Email: sharedEmail,
  78  |         Password: users[0].password,
  79  |         'login-button': 'Login',
  80  |       }
  81  |     });
  82  |     expect (postLoginRes.status()).toBe(200);
  83  |     console.log('Logged in successfully');
  84  | 
  85  |     // Get call --list books
  86  |     const getBooksList = await request.get('https://demowebshop.tricentis.com/books?orderby=5');
  87  |     expect(getBooksList.status()).toBe(200);
  88  | 
  89  |     const bookshtml = await getBooksList.text();
  90  |     console.log('Books list:', bookshtml.includes('Books'))
  91  | })
  92  | 
  93  | test('GET - Books list A-Z', async ({request}) => {
  94  | 
  95  |   const getBooksList = await request.get(
  96  |     'https://demowebshop.tricentis.com/books?orderby=5'
  97  |   );
  98  | 
  99  |   expect(getBooksList.status()).toBe(200);
  100 | 
  101 |   const booksHtml = await getBooksList.text();
  102 | 
  103 |   // Verify books page loaded
  104 |   console.log('HTML snippet:', booksHtml.substring(0, 3000));
  105 | 
  106 | });
  107 | 
  108 | 
```