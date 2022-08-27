import requests from './requests'


export function login(data) {
    return requests({
        url: 'login',
        method:'post',
        data
    })
}