import { userConstants } from '../_constants';
import {userService } from '../_services';
import {alertActions} from './';
import { history } from "../helpers";


export const userActions = {
    login,
    logout,
    register,
    registerBusiness
};

function login(email, password){
    return dispatch => {
        dispatch(request({email}));
        userService.login(email, password)
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
    function request(user){ return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user){ return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error){ return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(){
    userService.logout();
    history.push('/auth');
    return {type: userConstants.LOGOUT};
}

function register(user){
    return dispatch=>{
        dispatch(request(user));

        userService.register(user)
            .then(
                user=>{
                    dispatch(success());
                    dispatch(alertActions.success('Registration Successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(user){ return {type: userConstants.REGISTER_REQUEST, user}}
    function success(user){ return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error){ return { type: userConstants.REGISTER_FAILURE, error } }
}

function registerBusiness(business){
    return dispatch=>{
        dispatch(request(business));

        userService.registerBusiness(business)
            .then(
                business=>{
                    dispatch(success());
                    dispatch(alertActions.success('Business Registered Successfully'));
                    history.push("/")
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(business){ return {type: userConstants.REGISTER_REQUEST, business}}
    function success(business){ return { type: userConstants.REGISTER_SUCCESS, business } }
    function failure(error){ return { type: userConstants.REGISTER_FAILURE, error } }
}