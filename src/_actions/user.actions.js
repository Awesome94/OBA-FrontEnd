import { userConstants } from '../_constants';
import {userService } from '../_services';
import {alertActions} from './';
import { history } from "../helpers";
import { business } from '../_reducers/business.reducer';


export const userActions = {
    login,
    logout,
    register,
    registerBusiness,
    getAllBusinesses,
    UploadCsvFile,
    getAllTopQuality,
    getAllTopQuantity,
    getChartData,
    updateBusinessDetails,
    delete:_delete
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

function getAllBusinesses() {
    return dispatch => {
        dispatch(request());

        userService.getAllBusinesses()
            .then(
                business => dispatch(success(business)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(business) { return { type: userConstants.GETALL_REQUEST } }
    function success(business) { return { type: userConstants.GETALL_SUCCESS, business } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}
function getAllTopQuantity() {
    return dispatch => {
        dispatch(request());

        userService.getAllTopQuantity()
            .then(
                business => dispatch(success(business)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(items) { return { type: userConstants.GETALL_REQUEST } }
    function success(items) { return { type: userConstants.GETALL_SUCCESS, items } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getAllTopQuality() {
    return dispatch => {
        dispatch(request());

        userService.getAllTopQuality()
            .then(
                business => dispatch(success(business)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(items) { return { type: userConstants.GETALL_REQUEST } }
    function success(items) { return { type: userConstants.GETALL_SUCCESS, items } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getChartData() {
    return dispatch => {
        dispatch(request());

        userService.getChartData()
            .then(
                business => dispatch(success(business)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(items) { return { type: userConstants.GETALL_REQUEST } }
    function success(items) { return { type: userConstants.GETALL_SUCCESS, items } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
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

function updateBusinessDetails(business){
    history.push("/edit")
    return dispatch=>{
        dispatch(request(business));

        userService.updateBusinessDetails(business)
            .then(
                business=>{
                    dispatch(success());
                    dispatch(alertActions.success('Data Updated Successfully'));
                    history.push("/")
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
    function request(business){ return {type: userConstants.UPDATE_REQUEST, business}}
    function success(business){ return { type: userConstants.UPDATE_SUCCESS, business } }
    function failure(error){ return { type: userConstants.UPDATE_FAILURE, error } }
}

function UploadCsvFile(file){
    return dispatch=>{
        dispatch(request(file));
        userService.UploadCsvFile(file)
            .then(
                file=>{
                    dispatch(success(file));
                    dispatch(alertActions.success('File Uploaded Successfully'));
                    history.push("/dashboard")
                },
                error =>{
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    }
    function request(file){return{type: userConstants.UPLOAD_REQUEST, file}}
    function success(file){return{type: userConstants.UPLOAD_SUCCESS, file}}
    function failure(error){return {type: userConstants.UPLOAD_FAILURE, error}}
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
                );
                history.push("/")
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}