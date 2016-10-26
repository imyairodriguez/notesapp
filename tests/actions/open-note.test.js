import test from 'tape';
import { openNote } from '../../app/actions/application';
import ActionTypes from '../../app/constants/actionTypes';

test('action creator | openNote :: Open correct action',
  ({ deepEqual, end }) => {

    const actualAction = openNote('id-123');
    const expectedAction = {
      type: ActionTypes.APP_OPEN_NOTE,
      payload: {
        id: 'id-123'
      },
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);
