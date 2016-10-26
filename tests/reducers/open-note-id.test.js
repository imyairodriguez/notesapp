import test from 'tape';
import * as reducers from '../../app/reducers/application';
import * as actions from '../../app/actions/application';
import { getMockState } from '../../app/store/testUtils';

test('reducer | openNoteId :: Handle “openNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withNoNotes();
    const actualNextState = reducers.openNoteId(
      state.openNoteId,
      actions.openNote('id-123')
    );
    const expectedNextState = 'id-123';

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);

test('reducer | openNoteId :: Handle “addNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withNoNotes();
    const actualNextState = reducers.openNoteId(
      state.openNoteId,
      actions.addNote('Hi', 'id-125')
    );
    const expectedNextState = 'id-125';

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);

test('reducer | openNoteId :: Handle “closeNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withOneNote();
    const actualNextState = reducers.openNoteId(
      state.openNoteId,
      actions.closeNote('id-123')
    );
    const expectedNextState = null;

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);

test('reducer | openNoteId :: Handle “removeNote” action',
  ({ deepEqual, end }) => {

    const state = getMockState.withOneNote();
    const actualNextState = reducers.openNoteId(
      state.openNoteId,
      actions.removeNote('id-123')
    );
    const expectedNextState = null;

    deepEqual(actualNextState, expectedNextState);
    end();
  }
);
