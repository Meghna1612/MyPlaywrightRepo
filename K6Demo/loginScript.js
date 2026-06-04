// K6 code for registration and login, take login token 

import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function () {

    const USERNAME = `meghna_${Math.floor(Math.random() * 10000)}`;

    const BASE_URL = 'https://quickpizza.grafana.com/';

    const params = {
        headers:
            { 'Content-Type': 'application/json' }
    }

    let registeredUser = false;
    group('Register user', function () {

        const payload = JSON.stringify({
            username: USERNAME,
            password: 'PASSWORD',
        });

        const response = http.post(`${BASE_URL}/api/users`, payload, params);

        console.log(response.status);
        console.log(response.body);

        const registeredUser = check(response, {
            'User is registered':
                (r) => r.status === 201
        });

        if (!registeredUser) {
            console.log(`User Registration Failed ${response.status} - ${response.body}`)
        }
        sleep(1);
    });

    group('login user', function () {

        const payload = JSON.stringify({
            username: USERNAME,
            password: 'PASSWORD',
        });

        const response = http.post(`${BASE_URL}/api/users/token/login`, payload, params);

        console.log(response.status);

        const responseJson = JSON.parse(response.body);

        const token = responseJson.token;

        console.log("token is :", token);

        const authenticatedUser = check(response, {
            'User logged in successfully':
                (r) => r.status === 200,
            'Response should contain token': (r) => r.json('token') !== undefined,
            'token should have': (r) => r.json('token').length > 4
        });

        if (authenticatedUser){
            const authToken = responseJson.token;
            console.log(`User authenticated successfully: ${USERNAME}`);
        }
        else{
            console.log(`User authenticated failed: ${USERNAME}`);
        }
    });

    sleep(1);

}
