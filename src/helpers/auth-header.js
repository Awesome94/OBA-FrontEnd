export const authHeader = () => {
        let token = JSON.parse(sessionStorage.getItem('token'));
        if (token) {
            return {
                'Authorization':'Bearer' +token};
            }else{
                return {}
            }
        }

export const removeUserSession =() =>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}
