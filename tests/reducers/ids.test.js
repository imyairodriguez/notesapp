import test from 'tape';
import * as reducers from '../../app/reducers/application';
import * as actions from '../../app/actions/application';
import { getMockState } from '../../app/store/testUtils';

test('reducer | ids :: Handle “addNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withNoNotes();
    const actualNextState = reducers.ids(
      state.ids,
      actions.addNote('Hi', 'id-123')
    );
    const expectedNextState = ['id-123'];

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);

test('reducer | ids :: Handle “removeNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withOneNote();
    const actualNextState = reducers.ids(
      state.ids,
      actions.removeNote('id-123')
    );
    const expectedNextState = [];

    deepEqual(actualNextState, expectedNextState);
    end();
  });
