import test from 'tape';
import { updateNote } from '../../app/actions/application';
import ActionTypes from '../../app/constants/actionTypes';

test('action creator | updateNote :: Update correct action',
  ({ deepEqual, end }) => {

    const actualAction = updateNote('Hello', 'id-123', 2);
    const expectedAction = {
      type: ActionTypes.APP_UPDATE_NOTE,
      payload: {
        id: 'id-123',
        content: 'Hello',
        timestamp: 2
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);
