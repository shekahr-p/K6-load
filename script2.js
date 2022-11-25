import http from 'k6/http'

import {check} from 'k6'



export const options={

    stages :[
        {duration :'2m',target :'20'},
        {duration :'3m', target : '100'}
    ]
}
export default function(){


    let response = http.get("https://www.saucedemo.com/")

    check (response,{

        'check response code is 200' :(r)=>r.status===200
    })
}