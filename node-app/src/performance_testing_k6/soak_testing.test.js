import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 400 }, // ramp up to 400 users
        { duration: '1h00m', target: 400 }, // stay at 400 for ~1 hour
        { duration: '2m', target: 0 }, // scale down. (optional)
    ],
};

export default function soak_testing(){

    const BASE_URL = "https://green-it-front.herokuapp.com/"

    let requestHeaders = {
        'User-Agent': 'k6',
        'Content-Type': 'application/json',
    };

    let responses = http.batch([
        { method: 'GET', url: `${BASE_URL}33000`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}77185`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}94600`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}75012`, params: { headers: requestHeaders } }
    ]);
    
    sleep(1);
}