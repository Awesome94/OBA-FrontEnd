import { userConstants } from '../_constants';

export function uploadCsv(state = {}, action) {
  switch (action.type) {
    case userConstants.UPLOAD_REQUEST:
      return { uploading: true };
    case userConstants.UPLOAD_SUCCESS:
      return {
        items: action.graphData,
      };
    case userConstants.UPLOAD_FAILURE:
      return {};
    default:
      return state;
  }
}
