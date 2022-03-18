import http from 'k6/http';
import {check, sleep, fail} from 'k6';

export const options = {
    stages: [
        { duration: '5m', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.
        { duration: '10m', target: 200 }, // stay at 200 users for 10 minutes
        { duration: '5m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};


export default function load_testing(){
    const get_lists = http.get("http://localhost:4000/6232f77b924befb4780bf4dc");

    if(!check(get_lists, { 'status code should be 200': (r) => r.status === 200},
        { 'should return a an object': (obj) => obj.length > 0 && obj.length == 1})){
        fail('status code was *not* 200');
    }

    sleep(1);
}