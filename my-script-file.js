// Wrte the sample javascript
//to hit google nad check the performance of google
//1000 call and check the performance

import http from 'k6/http'
import {check} from 'k6'

// main function where user will spread
// export const options = {
//     vus: 10,
//     duration: '5m',
//   }
  export const options = {
//stages array
    stages: [
      { duration: '10s', target: 2 },
      { duration: '20s', target: 2 },
      {duration :'4m', target:6}
    ]
    , vus: 10

  }

  
export default function () {

    let response =http.get("https://www.google.com/")
    check(response,{

      'is response 200 ' :(r)=>r.status  === 200,
    })

}


