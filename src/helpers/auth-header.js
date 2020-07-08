export function authHeader(){
        debugger
        let token = JSON.parse(sessionStorage.getItem('token'));
        if (token) {
            return {
                'Authorization':'Bearer' + token};
            }else{
                return {};
            }
        }

export function removeUserSession(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
