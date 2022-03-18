import http from 'k6/http';
import {check, sleep, fail} from 'k6';

export default function smoke_testing(){

    const options = {
        vus: 1, // 1 user looping for 1 minute
        duration: '1m',

        thresholds: {
            http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
            http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        },
    };

    const get_lists = http.get("http://localhost:4000/6232f77b924befb4780bf4dc");

    if(!check(get_lists, { 'status code should be 200': (r) => r.status === 200},
        { 'should return a an object': (obj) => obj.length > 0 })){
        fail('status code was *not* 200');
    }

    sleep(1);
}