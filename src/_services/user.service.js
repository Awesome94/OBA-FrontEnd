// import config from 'config';
import { authHeader } from '../helpers/auth-header';

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
  viewBusinessChart,
  delete: _delete,
};

function login(email, password) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/login`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ email, password }),
  };
  return fetch(apiUrl, requestOptions)
    .then(handleResponse)
    .then((res) => {
      localStorage.setItem('token', JSON.stringify(res.access_token));
      return res.access_token;
    });
}

function logout() {
  localStorage.removeItem('token');
}

function register(user) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/register`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(user),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function registerBusiness(business) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business/register`;
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(business),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function updateBusinessDetails(data, id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business/${id}`;
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function UploadCsvFile(file, id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business/${id}/upload`;
  const formData = new FormData();
  formData.append('file', file);
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader() },
    body: formData,
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getAllBusinesses() {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/businesses/all`;
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getTopByQuantity(id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business/${id}/quantity`;
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getTopByValue(id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business/${id}/value`;
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function getChartData(id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business/${id}/charts/data/90`;
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function viewBusinessChart(id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/transactions/${id}`;
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(apiUrl, requestOptions).then(handleResponse);
}

function _delete(id) {
  const apiUrl = `${process.env.REACT_APP_SERVER_BASE_URL}/business`;
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };
  return fetch(`${apiUrl}/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
