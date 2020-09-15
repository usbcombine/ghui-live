import { Dispatch } from "redux";
import { GraphQLClient, gql } from "graphql-request";

import {
  FETCH_USERINFO,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE,
  SET_SELECTED_USER,
} from "./actionTypes";

import { GRAPHQL_ENDPOINT, GITHUB_PA_TOKEN } from "../config";

export function fetchUserinfo(username: string) {
  const queryParams = {
    username: username,
  };

  const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: {
      authorization: `Bearer ${GITHUB_PA_TOKEN}`,
    },
  });

  const query = gql`
    query getUsers($username: String = "") {
      search(first: 5, query: $username, type: USER) {
        userCount
        nodes {
          ... on User {
            id
            name
            login
            avatarUrl
            url
            repositories(first: 7) {
              totalCount
              nodes {
                id
                name
                url
                updatedAt
                primaryLanguage {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  return (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_USERINFO,
    });

    graphQLClient
      .request(query, queryParams)
      .then((response) =>
        dispatch({
          type: FETCH_USERINFO_SUCCESS,
          payload: response,
        })
      )
      .catch((error) =>
        dispatch({
          type: FETCH_USERINFO_FAILURE,
          payload: error.message,
        })
      );
  };
}

export function setSelectedUser(user: Object) {
  return (dispatch: Dispatch) => {
    dispatch({ type: SET_SELECTED_USER, payload: user });
  };
}
