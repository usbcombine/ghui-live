import {
  FETCH_USERINFO,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE,
} from "../actionTypes";

interface UserinfoResponseAction {
  type: string;
  payload: object;
}

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export default function (state = initialState, action: UserinfoResponseAction) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERINFO: {
      return {
        ...state,
        data: null,
        isFetching: true,
        error: null,
      };
    }
    case FETCH_USERINFO_SUCCESS: {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    }
    case FETCH_USERINFO_FAILURE: {
      return {
        ...state,
        data: null,
        isFetching: false,
        error: payload,
      };
    }
    default:
      return state;
  }
}
