import { userConstants } from '../_constants';
import {userService } from '../_services';
import {alertActions} from './';
import { history } from "../helpers";


export consst userActions = {
    login,
    logout,
    register,
};

const login = ()=>{
    return dispatch => {
        dispatch(request({username}));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    const request=(user)=>{ return { type: userConstants.LOGIN_REQUEST, user } }
    const success=(user)=>{ return { type: userConstants.LOGIN_SUCCESS, user } }
    const failure=(error)=>{ return { type: userConstants.LOGIN_FAILURE, error } }
}

cosnt logout=()=>{
    userService.logout();
    return {type: userConstants.LOGOUT};
}

const register=user=>{
    return dispatch=>{
        dispatch(request(user));

        userService.register(user)
            .then(
                user=>{
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration Successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    const request=(user)=>{ return {type: userConstants.REGISTER_REQUEST, user}}
    const success=(user)=>{ return { type: userConstants.REGISTER_SUCCESS, user } }
    const failure=(error)=>{ return { type: userConstants.REGISTER_FAILURE, error } }
}