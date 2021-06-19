
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    fetchEntriesRequest,
    fetchEntriesSuccess,
    fetchEntriesError,
    addEntryRequest,
    addEntrySuccess,
    addEntryError,
    deleteEntryRequest,
    deleteEntrySuccess,
    deleteEntryError,
} from './entries-actions';

const entries = createReducer([], {
    [fetchEntriesSuccess]: (_, { payload }) => payload,
    [addEntrySuccess]: (state, { payload }) => [...state, { name: payload.name, number: payload.number, id: payload.id }],
    [deleteEntrySuccess]: (state, { payload }) => state.filter(entry => entry.id !== payload),
});

const error = createReducer('', {
    [fetchEntriesError]: (_, { payload }) => { alert(`Error : ${payload}`); return payload },
    [addEntryError]: (_, { payload }) => { alert(`Error : ${payload}`); return payload },
    [deleteEntryError]: (_, { payload }) => { alert(`Error : ${payload}`); return payload },
})

const loading = createReducer(false, {
    [fetchEntriesRequest]: () => true,
    [fetchEntriesSuccess]: () => false,
    [addEntryRequest]: () => true,
    [addEntrySuccess]: () => false,
    [addEntryError]: () => false,
    [deleteEntryRequest]: () => true,
    [deleteEntrySuccess]: () => false,
    [deleteEntryError]: () => false,
})

export default combineReducers({
    entries,
    loading,
    error,
})
