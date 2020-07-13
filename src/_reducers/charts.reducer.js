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
            case userConstants.DELETE_REQUEST:
                return {
                    ...state,
                    items: state.items.map(chartData => 
                        chartData.id === action.id
                        ?{...userConstants, deleting:true}
                        : chartData
                        )
                };
            case userConstants.DELETE_SUCCESS:
                // remove deleted chartData from state
                return {
                    items: state.items.filter(chartData => chartData.id !== action.id)
                };
            case userConstants.DELETE_FAILURE:
                // remove 'deleting:true' property and add 'deleteError:[error]' property to chartData 
                return {
                    ...state,
                    items: state.items.map(chartData => {
                    if (chartData.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const { deleting, ...chartDataCopy } = chartData;
                        // return copy of user with 'deleteError:[error]' property
                        return { ...chartDataCopy, deleteError: action.error };
                    }
            
                    return chartData;
                    })
                };
                default:
                    return state
    }
}