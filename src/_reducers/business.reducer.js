import {userConstants} from '../_constants'

export function business(state ={}, action){
    switch (action.type){
        case userConstants.GETALL_REQUEST:
            return {
                loading: true
            };
            case userConstants.GETALL_SUCCESS:
                return{
                    items: action.business
                };
            case userConstants.GETALL_FAILURE:
                return {
                    error: action.error
                };
            case userConstants.DELETE_REQUEST:
                return {
                    ...state,
                    items: state.items.map(business => 
                        business.id === action.id
                        ?{...userConstants, deleting:true}
                        : business
                        )
                };
            case userConstants.DELETE_SUCCESS:
                // remove deleted business from state
                return {
                    items: state.items.filter(business => business.id !== action.id)
                };
            case userConstants.DELETE_FAILURE:
                // remove 'deleting:true' property and add 'deleteError:[error]' property to business 
                return {
                    ...state,
                    items: state.items.map(business => {
                    if (business.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...businessCopy } = business;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...businessCopy, deleteError: action.error };
                    }
            
                    return business;
                    })
                };
                default:
                    return state
    }
}