import http from 'k6/http';
import {check, sleep, fail, group} from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 400 }, // ramp up to 400 users
        { duration: '1h30m', target: 400 }, // stay at 400 for ~4 hours
        { duration: '2m', target: 0 }, // scale down. (optional)
    ],
};

export default function stress_testing(){

    const BASE_URL = "http://localhost:4000/"

    let requestHeaders = {
        'User-Agent': 'k6',
        'Content-Type': 'application/json',
    };

    let responses = http.batch([
        { method: 'GET', url: `${BASE_URL}6232f77b924befb4780bf4dc`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}62344e6703d839472707011f`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}62344e6803d8394727070123`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}6232f77b924befb4780bf4dc`, params: { headers: requestHeaders } },
    ]);

    /*if(!check(responses, { 'status code should be 200': (r) => r.status === 200})){
        fail('status code was *not* 200');
    }*/

    sleep(1);
}