import http from 'k6/http';
import {check, sleep, fail, group} from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 100 }, // below normal load
        { duration: '1m', target: 100 },
        { duration: '10s', target: 1400 }, // spike to 1400 users
        { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
        { duration: '10s', target: 100 }, // scale down. Recovery stage.
        { duration: '3m', target: 100 },
        { duration: '10s', target: 0 },
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