// Wrte the sample javascript
//to hit google nad check the performance of google
//1000 call and check the performance

import http from 'k6/http'

// main function where user will spread
export const options = {
    vus: 10,
    duration: '5m',
  }
export default function () {

    http.get("https://www.google.com/")


}


