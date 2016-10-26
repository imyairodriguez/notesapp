import test from 'tape';
import { addNote } from '../../app/actions/application';
import ActionTypes from '../../app/constants/actionTypes';

test('action creator | addNote :: Create correct action',
  ({ deepEqual, end }) => {

    const actualAction = addNote('Hi', 'id-123', 1);
    const expectedAction = {
      type: ActionTypes.APP_ADD_NOTE,
      payload: {
        id: 'id-123',
        content: 'Hi',
        timestamp: 1
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);
