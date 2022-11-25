// Wrte the sample javascript
//to hit google nad check the performance of google
//1000 call and check the performance

import http from 'k6/http'


// main function where user will spread

//virtual users
export const options = {
  vus: 10,
  duration: '5m',
}


//Ram up

//increase the load after certain petiod
export const options1 = {

  stages: [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 3 }
  ]
}
export default function () {

  http.get("https://www.google.com/")


}
