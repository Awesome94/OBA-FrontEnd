// import config from 'config';
import {authHeader} from '../helpers/auth-header';

export const userService = {
    login,
    logout,
    registerBusiness,
    register,
    getAllBusinesses,
    UploadCsvFile,
    getTopByQuantity,
    getTopByValue,
    updateBusinessDetails,
    getChartData,
    delete:_delete
};

function login(email, password) {
    const apiUrl = "http://127.0.0.1:5000/login"
    const requestOptions = {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify({ email, password })
    };
    
    return fetch(apiUrl, requestOptions)
        .then(handleResponse)
        .then(res=>{
            localStorage.setItem('token', JSON.stringify(res.access_token));
            return res.access_token;
    });
}

function logout(){
    localStorage.removeItem('token');
}

function getById(id){
    const apiUrl = "http://127.0.0.1:5000/users"
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(apiUrl/{id}, requestOptions).then(handleResponse);
}


function register(user){
    const apiUrl = "http://127.0.0.1:5000/register"
    const requestOptions = {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify(user)
    };
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function registerBusiness(business){
    const apiUrl = "http://127.0.0.1:5000/business/register"
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), "Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify(business)
    };
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function updateBusinessDetails(data){
    const apiUrl = "http://127.0.0.1:5000/business/<id>"
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), "Content-type": "application/json; charset=UTF-8"}, 
        body: JSON.stringify(data)
    };
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function UploadCsvFile(file){
    const apiUrl =`http://127.0.0.1:5000/business/1/upload`
    const formData = new FormData()
    formData.append('file', file)
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader()}, 
        body: formData
    };
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getAllBusinesses(){
    const apiUrl = "http://127.0.0.1:5000/businesses/all"
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getTopByQuantity(id){
    const apiUrl = `http://127.0.0.1:5000/business/2/quantity`
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getTopByValue(id){
    const apiUrl = `http://127.0.0.1:5000/business/2/value`
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getChartData(id){
    const apiUrl = `http://127.0.0.1:5000/business/2/charts/data/90`
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(apiUrl, requestOptions).then(handleResponse);
}

function _delete(id){
    const apiUrl = "http://127.0.0.1:5000/business"
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    }
    return fetch(`${apiUrl}/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response){
    return response.text().then(text=>{
        const data = text && JSON.parse(text);
        if (!response.ok){
            if(response.status === 401){
                logout();
                window.location.reload(true);
            }
            const error = (data && data.message)  || response.statusText;
            return Promise.reject(error)
        }
        return data;
    });
}

