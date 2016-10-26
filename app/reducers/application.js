import { combineReducers } from 'redux';
import ActionTypes from '../constants/actionTypes';
import {
  merge,
  dissoc,
  prepend,
  without } from 'ramda';

export const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.APP_ADD_NOTE:
    case ActionTypes.APP_UPDATE_NOTE:
      return merge(state, { [payload.id]: payload });
      // return {
      //   ...state,
      //   [payload.id]: payload
      // }
    case ActionTypes.APP_REMOVE_NOTE:
      return dissoc(payload.id, state);
    default:
      return state;
  }
};

export const ids = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.APP_ADD_NOTE:
      return prepend(payload.id, state);
    case ActionTypes.APP_REMOVE_NOTE:
      return without(payload.id, state);
    default:
      return state;
  }
};

export const openNoteId = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.APP_OPEN_NOTE:
    case ActionTypes.APP_ADD_NOTE:
      return payload.id;
    case ActionTypes.APP_REMOVE_NOTE:
    case ActionTypes.APP_CLOSE_NOTE:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  ids,
  openNoteId,
});
