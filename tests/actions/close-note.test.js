import test from 'tape';
import { closeNote } from '../../app/actions/application';
import ActionTypes from '../../app/constants/actionTypes';

test('action creator | closeNote :: Close correct action',
  ({ deepEqual, end }) => {

    const actualAction = closeNote();
    const expectedAction = {
      type: ActionTypes.APP_CLOSE_NOTE
    };

    deepEqual(actualAction, expectedAction);
    end();
  }
);
