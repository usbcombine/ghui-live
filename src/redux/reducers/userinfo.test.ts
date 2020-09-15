import reducer from "./userinfo";
import * as types from "../actionTypes";

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};
const payload = { message: "here is response from the server" };

describe("userinfo reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "", payload: payload })).toEqual(
      initialState
    );
  });

  it("should handle FETCH_USERINFO", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_USERINFO,
        payload: payload,
      })
    ).toEqual({
      data: null,
      isFetching: true,
      error: null,
    });
  });

  it("should handle FETCH_USERINFO_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_USERINFO_SUCCESS,
        payload: payload,
      })
    ).toEqual({
      data: payload,
      isFetching: false,
      error: null,
    });
  });

  it("should handle FETCH_USERINFO_FAILURE", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_USERINFO_FAILURE,
        payload: payload,
      })
    ).toEqual({
      data: null,
      isFetching: false,
      error: payload,
    });
  });
});
