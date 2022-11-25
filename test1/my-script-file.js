// Wrte the sample javascript
//to hit google nad check the performance of google
//1000 call and check the performance

import http from 'k6/http'

// main function where user will spread
// export const options = {
//     vus: 10,
//     duration: '5m',
//   }
  export const options1 = {
//stages array
    stages: [
      { duration: '10s', target: 5 },
      { duration: '20s', target: 3 }
    ]
    , vus: 10,
    duration: '1m',
  }

  
export default function () {

    http.get("https://www.google.com/")
    check(res,{
      'is status 200' :(r) =>r.status === 200,
    });

}


