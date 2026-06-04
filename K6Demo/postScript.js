import http from 'k6/http';
import {check, sleep} from 'k6';

export default function(){

    const url = 'https://reqres.in/api/login';

    const payload = JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
    });

    const params = { headers : 
        {'Content-Type': 'application/json'}
    };

    const response = http.post(url, payload, params);

    console.log(response.body);

    check(response, {'status is 200':
        (r) => r.status === 200
    });
}