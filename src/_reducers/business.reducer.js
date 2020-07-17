import { userConstants } from '../_constants';

const initialState = {
  businessData: {
    name: '',
    entity: '',
    accounting_software: '',
    country: '',
    countries: '',
    company_address: '',
    annual_sales_revenue: '',
    abbreviation: '',
  },
};

export function business(state = initialState, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.business,
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((business) => (business.id === action.id
          ? { ...userConstants, deleting: true }
          : business)),
      };
    case userConstants.SET_EDIT_BUSINESS:
      return {
        ...state,
        businessData: action.data,
      };
    case userConstants.BUSINESS_TRANSACTIONS_REQUEST:
      return {
        loading: true,
      };
    case userConstants.SHOW_BUSINESS_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        items: action.transactions,
      };
    case userConstants.SHOW_BUSINESS_TRANSACTIONS_FAIL:
      return {
        error: action.error,
      };
    case userConstants.SET_REGISTER_BUSINESS:
      return {
        ...state,
      };
    case userConstants.RENDER_ACTION:
      return {
        ...state,
      };
    case userConstants.UPDATE_REQUEST:
      return {
        loading: true,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state,
      };
    case userConstants.UPDATE_FAILURE:
      return {
        error: action.error,
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted business from state
      return {
        items: state.items.filter((business) => business.id !== action.id),
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to business
      return {
        ...state,
        items: state.items.map((business) => {
          if (business.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...businessCopy } = business;
            // return copy of user with 'deleteError:[error]' property
            return { ...businessCopy, deleteError: action.error };
          }

          return business;
        }),
      };
    default:
      return state;
  }
}
