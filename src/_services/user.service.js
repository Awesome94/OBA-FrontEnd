import config from 'config';
import {authHeader} from '../helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    const apiUrl = "http://127.0.0.1:5000/login"
    const requestOptions = {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify({ username, password })
    };
    fetch(apiUrl, requestOptions)
    .then(handleResponse)
    .then(user=>{
        localStorage.setItem('token', JSON.stringify(token));
        return token;
    });
}

function logout(){
    localStorage.removeItem('token');
}

function getById(id){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}


const handleResponse=response=>{
    return response.text().then(text=>{
        const data = text && JSON.parse(text);
        if (!response.ok){
            if response.status === 401){
                logout();
                location.reload(true);
            }
            const error = (data && data.message)  || response.statusText;
            return Promise.reject(error)
        }
        return data;
    });
}