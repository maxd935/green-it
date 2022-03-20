import http from 'k6/http';
import {sleep, group} from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 100 }, // below normal load
        { duration: '5m', target: 100 },
        { duration: '2m', target: 200 }, // normal load
        { duration: '5m', target: 200 },
        { duration: '2m', target: 300 }, // around the breaking point
        { duration: '5m', target: 300 },
        { duration: '2m', target: 400 }, // beyond the breaking point
        { duration: '5m', target: 400 },
        { duration: '10m', target: 0 }, // scale down. Recovery stage.
    ],
    thresholds: {
        'group_duration{group:::firstWaveRequests}': ['p(99)<1500'],
        'group_duration{group:::secondWaveRequests}': ['p(99)<1500'],
      },
};

export default function stress_testing(){

    const BASE_URL = "https://green-it-front.herokuapp.com/"

    let requestHeaders = {
        'User-Agent': 'k6',
        'Content-Type': 'application/json',
    };

    group('firstWaveRequests',()=>{
        http.batch([
            { method: 'GET', url: `${BASE_URL}94190`, params: { headers: requestHeaders } },
            { method: 'GET', url: `${BASE_URL}1400`, params: { headers: requestHeaders } },
            { method: 'GET', url: `${BASE_URL}75007`, params: { headers: requestHeaders } },
            { method: 'GET', url: `${BASE_URL}75003`, params: { headers: requestHeaders } }
        ]);
    })

    group('secondWaveRequests',()=>{
        http.batch([
            { method: 'GET', url: `${BASE_URL}33000`, params: { headers: requestHeaders } },
            { method: 'GET', url: `${BASE_URL}77185`, params: { headers: requestHeaders } },
            { method: 'GET', url: `${BASE_URL}94600`, params: { headers: requestHeaders } },
            { method: 'GET', url: `${BASE_URL}75012`, params: { headers: requestHeaders } }
        ]);
    })

    sleep(1);
}