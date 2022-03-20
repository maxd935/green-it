import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 100 }, // below normal load
        { duration: '1m', target: 100 },
        { duration: '10s', target: 1400 }, // spike to 1400 users
        { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
        { duration: '10s', target: 100 }, // scale down. Recovery stage.
        { duration: '3m', target: 100 },
        { duration: '10s', target: 0 },
      ]
};

export default function spike_testing(){

    const BASE_URL = "https://green-it-back.herokuapp.com/api"

    let requestHeaders = {
        'User-Agent': 'k6',
        'Content-Type': 'application/json',
    };

    let responses = http.batch([
        { method: 'GET', url: `${BASE_URL}94190`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}1400`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}75007`, params: { headers: requestHeaders } },
        { method: 'GET', url: `${BASE_URL}75003`, params: { headers: requestHeaders } }
    ]);

    sleep(1);
}