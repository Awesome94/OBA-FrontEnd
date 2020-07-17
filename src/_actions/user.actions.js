/* eslint-disable no-use-before-define */
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../helpers';
import { business } from '../_reducers/business.reducer';

export const userActions = {
  login,
  logout,
  register,
  registerBusiness,
  getAllBusinesses,
  UploadCsvFile,
  getTopByValue,
  getTopByQuantity,
  updateBusinessDetails,
  delete: _delete,
  setEditBusiness,
  setRegisterBusiness,
  viewBusinessChart,
};

function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }));
    userService.login(email, password)
      .then(
        (user) => {
          dispatch(success(user));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };
  function request(user) { return { type: userConstants.LOGIN_REQUEST, user }; }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }; }
  function failure(error) { localStorage.setItem('error', error); }
}

function logout() {
  userService.logout();
  history.push('/auth');
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user)
      .then(
        (user) => {
          dispatch(success(user));
          dispatch(alertActions.success('Registration Successful'));
          history.push('/');
        },
        (error) => {
          localStorage.setItem('error', error);
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };
  function request(user) { return { type: userConstants.REGISTER_REQUEST, user }; }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }
}

function getAllBusinesses() {
  return (dispatch) => {
    dispatch(request());

    userService.getAllBusinesses()
      .then(
        (business) => dispatch(success(business)),
        (error) => dispatch(failure(error.toString())),
      );
  };

  function request(business) { return { type: userConstants.GETALL_REQUEST }; }
  function success(business) { return { type: userConstants.GETALL_SUCCESS, business }; }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error }; }
}
function getTopByQuantity() {
  return (dispatch) => {
    dispatch(request());

    userService.getTopByQuantity()
      .then(
        (business) => dispatch(success(business)),
        (error) => dispatch(failure(error.toString())),
      );
  };

  function request(items) { return { type: userConstants.GETALL_REQUEST }; }
  function success(items) { return { type: userConstants.GETALL_SUCCESS, items }; }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error }; }
}

function getTopByValue() {
  return (dispatch) => {
    dispatch(request());

    userService.getTopByValue()
      .then(
        (business) => dispatch(success(business)),
        (error) => dispatch(failure(error.toString())),
      );
  };

  function request(items) { return { type: userConstants.GETALL_REQUEST }; }
  function success(items) { return { type: userConstants.GETALL_SUCCESS, items }; }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error }; }
}

function registerBusiness(business) {
  return (dispatch) => {
    dispatch(request(business));

    userService.registerBusiness(business)
      .then(
        (business) => {
          dispatch(success(business));
          dispatch(alertActions.success('Business Registered Successfully'));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };
  function request(business) { return { type: userConstants.REGISTER_REQUEST, business }; }
  function success(business) { return { type: userConstants.REGISTER_SUCCESS, business }; }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }; }
}

function setEditBusiness(data) {
  history.push('/register');
  return { type: userConstants.SET_EDIT_BUSINESS, data };
}

function viewBusinessChart(id) {
  return (dispatch) => {
    dispatch(request(id));
    userService.viewBusinessChart(id)
      .then(
        (transaction) => {
          localStorage.setItem('graphData', JSON.stringify(transaction));
          dispatch(success(transaction));
          dispatch(alertActions.success('Data retrieved Successfully'));
          history.push('/dashboard');
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          history.push('/');
        },
      );
  };
  function request(id) { return { type: userConstants.BUSINESS_TRANSACTIONS_REQUEST, id }; }
  function success(transaction) { return { type: userConstants.SHOW_BUSINESS_TRANSACTIONS_SUCCESS, transaction }; }
  function failure(error) { return { type: userConstants.SHOW_BUSINESS_TRANSACTIONS_FAILURE, error }; }
}

function setRegisterBusiness() {
  return { type: userConstants.SET_REGISTER_BUSINESS };
}

function updateBusinessDetails(business, id) {
  return (dispatch) => {
    dispatch(request(business));

    userService.updateBusinessDetails(business, id)
      .then(
        () => {
          dispatch(success());
          dispatch(alertActions.success('Data Updated Successfully'));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      );
  };
  function request(business) { return { type: userConstants.UPDATE_REQUEST, business }; }
  function success() { return { type: userConstants.UPDATE_SUCCESS }; }
  function failure(error) { return { type: userConstants.UPDATE_FAILURE, error }; }
}

function UploadCsvFile(file, id) {
  return (dispatch) => {
    dispatch(request(file));
    userService.UploadCsvFile(file, id)
      .then(
        (fileData) => {
          const graphData = getGraphData(fileData);
          localStorage.setItem('graphData', JSON.stringify(graphData));

          dispatch(success(graphData));
          dispatch(alertActions.success('File Uploaded Successfully'));
          history.push('/dashboard');
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
          history.push('/');
        },
      );
  };
  function request(file) { return { type: userConstants.UPLOAD_REQUEST, file }; }
  function success(graphData) { return { type: userConstants.UPLOAD_SUCCESS, graphData }; }
  function failure(error) { return { type: userConstants.UPLOAD_FAILURE, error }; }
}

// eslint-disable-next-line no-underscore-dangle
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));
    userService.delete(id)
      .then(() => {
        dispatch(success(id));
        dispatch(getAllBusinesses());
      });
    history.push('/');
  };

  function request(id) { return { type: userConstants.DELETE_REQUEST, id }; }
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id }; }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error }; }
}

function getGraphData(data) {
  const sortableUnits = [];
  const sortableQty = [];
  const topValue = [];
  const topQuantity = [];
  const topValueItems = {};
  const topQuantityItems = {};
  const {
    unit_amount: unitAmount, quantity, total_transaction_amount: amount, item,
  } = data;
  const OrderKey = Object.keys(data.transaction).filter((keys) => data.transaction[keys] === 'Order');
  const orders = OrderKey.map((key) => amount[key]).reduce((current, next) => current + next);
  const OrderPaymentKey = Object.keys(data.transaction).filter((keys) => data.transaction[keys] === 'Order payements');
  const ordersPayements = OrderPaymentKey.map((key) => amount[key])
    .reduce((current, next) => current + next, 0);
  const incoming = orders - ordersPayements;

  const billKey = Object.keys(data.transaction).filter((keys) => data.transaction[keys] === 'Bill');
  const bills = billKey.map((key) => amount[key]).reduce((current, next) => current + next);
  const billPayementsKey = Object.keys(data.transaction).filter((keys) => data.transaction[keys] === 'Bill payements');
  const billPayements = billPayementsKey.map((key) => amount[key]).reduce((current, next) => current + next, 0);
  const outgoing = bills - billPayements;
  Object.keys(unitAmount).forEach((key) => sortableUnits.push([key, unitAmount[key]]));

  sortableUnits.sort((a, b) => b[1] - a[1]);
  const unitAmountKeys = sortableUnits;

  // eslint-disable-next-line no-return-assign

  for (let i = 0; i < unitAmountKeys.length; i++) {
    const key = unitAmountKeys[i];
    const itemName = item[key[0]];
    if (!(itemName in topValueItems) && topValue.length < 6) {
      topValueItems[item[key[0]]] = 1;
      topValue.push({ Item: item[key[0]], Value: unitAmount[key[0]] });
    }
  }

  Object.keys(quantity).forEach((key) => sortableQty.push([key, quantity[key]]));
  sortableQty.sort((a, b) => b[1] - a[1]);

  const quantityKeys = sortableQty;

  // eslint-disable-next-line no-return-assign
  for (let i = 0; i < quantityKeys.length; i++) {
    const key = quantityKeys[i];
    const itemName = item[key[0]];
    if (!(itemName in topQuantityItems) && topQuantity.length < 6) {
      topQuantityItems[item[key[0]]] = 1;
      topQuantity.push({ Item: item[key[0]], Quantity: quantity[key[0]] });
    }
  }

  return {
    topValue,
    incoming,
    topQuantity,
    outgoing,
  };
}
