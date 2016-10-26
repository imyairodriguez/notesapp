import test from 'tape';
import { removeNote } from '../../app/actions/application';
import ActionTypes from '../../app/constants/actionTypes';

test('action creator | removeNote :: Remove correct action',
  ({ deepEqual, end }) => {

    const actualAction = removeNote('id-123');
    const expectedAction = {
      type: ActionTypes.APP_REMOVE_NOTE,
      payload: {
        id: 'id-123'
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);
