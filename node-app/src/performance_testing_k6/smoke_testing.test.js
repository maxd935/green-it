import http from 'k6/http';
import {check, sleep, fail} from 'k6';

export default function smoke_testing(){

    const options = {
        vus: 1, // 1 user looping for 1 minute
        duration: '1m',

        thresholds: {
            http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s,
        }
    };

    const BASE_URL = "http://localhost:8800/api"

    //Résout le problème du http_req_failed (par rapport au requete qui ont échouées)
    const response_callback = http.setResponseCallback(http.expectedStatuses({ min: 200, max: 399 }));

    const results = http.get(`${BASE_URL}/75007`,{responseCallback : response_callback});
    if(!check(results, { 'status code should be 200': (r) => r.status === 200},
        { 'should return a an object': (obj) => obj.length >= 0 })){
        fail('status code was *not* 200');
    }

    sleep(1);
}