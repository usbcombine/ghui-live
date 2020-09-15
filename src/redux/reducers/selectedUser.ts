import {
  FETCH_USERINFO,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE,
  SET_SELECTED_USER,
} from "../actionTypes";

interface ResponseAction {
  type: string;
  payload: object;
}

const initialState = {
  id: null,
};

export default function (state = initialState, action: ResponseAction) {
  const { type, payload } = action;

  switch (type) {
    case SET_SELECTED_USER: {
      return {
        ...state,
        ...payload,
      };
    }

    case FETCH_USERINFO:
    case FETCH_USERINFO_SUCCESS:
    case FETCH_USERINFO_FAILURE: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}
