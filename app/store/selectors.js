export const getNotes = state =>
  state.ids.map(id => state.byId[id]);

export const getOpenNoteId = state => state.openNoteId;

export const getNote = (state, id) =>
  state.byId[id] || null;
