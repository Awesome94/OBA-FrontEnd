import {userConstants} from '../_constants'

export function chartData(state ={}, action){
    switch (action.type){
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
            case userConstants.GETALL_SUCCESS:
                return{
                    items: action.chartData
                };
            case userConstants.GETALL_FAILURE:
                return {
                    error: action.error
                };
                default:
                    return state
    }
}