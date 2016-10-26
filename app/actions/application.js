import { v4 } from 'uuid';
import ActionTypes from '../constants/actionTypes';

export const addNote = (content = '', id = v4(), timestamp = Date.now()) => ({
  type: ActionTypes.APP_ADD_NOTE,
  payload: {
    id,
    content,
    timestamp
  },
});

export const updateNote = (content, id, timestamp = Date.now()) => ({
  type: ActionTypes.APP_UPDATE_NOTE,
  payload: {
    id,
    content,
    timestamp
  },
});

export const removeNote = id => ({
  type: ActionTypes.APP_REMOVE_NOTE,
  payload: { id }
});

export const openNote = id => ({
  type: ActionTypes.APP_OPEN_NOTE,
  payload: { id }
});

export const closeNote = () => ({
  type: ActionTypes.APP_CLOSE_NOTE
});
