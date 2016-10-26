import test from 'tape';
import * as reducers from '../../app/reducers/application';
import * as actions from '../../app/actions/application';
import { getMockState } from '../../app/store/testUtils';

test('reducer | byId :: Handle “addNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withNoNotes();
    const actualNextState = reducers.byId(state.byId, actions.addNote('Hello World', 'id-125', 1));
    const expectedNextState = {
      'id-125': {
        id: 'id-125',
        content: 'Hello World',
        timestamp: 1,
      },
    };

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);

test('reducer | byId :: Handle “updateNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withOneNote();
    const actualNextState = reducers.byId(
      state.byId,
      actions.updateNote('Hi there', 'id-123', 2)
    );
    const expectedNextState = {
      'id-123': {
        id: 'id-123',
        content: 'Hi there',
        timestamp: 2,
      },
    };

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);

test('reducer | byId :: Handle “removeNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withOneNote();
    const actualNextState = reducers.byId(
      state.byId,
      actions.removeNote('id-123')
    );
    const expectedNextState = {};

    deepEqual(actualNextState, expectedNextState);
    end();
  });
