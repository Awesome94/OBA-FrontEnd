export function authHeader() {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    return { Token: token };
  }
  return {};
}

export function removeUserSession() {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

export function issignedIn() {
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    return true;
  }
  return false;
}
