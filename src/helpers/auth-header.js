export function authHeader(){
        let token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            return {
                'Token':token};
            }else{
                return {};
            }
        }

export function removeUserSession(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
