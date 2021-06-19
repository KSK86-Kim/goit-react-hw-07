import { createAction } from '@reduxjs/toolkit';

export const addEntryRequest = createAction('entry/addEntryRequest');
export const addEntrySuccess = createAction('entry/addEntrySuccess');
export const addEntryError = createAction('entry/addEntryError');

export const deleteEntryRequest = createAction('entry/deleteEntryRequest');
export const deleteEntrySuccess = createAction('entry/deleteEntrySuccess');
export const deleteEntryError = createAction('entry/deleteEntryError');

export const fetchEntriesRequest = createAction('entry/fetchEntriesRequest');
export const fetchEntriesSuccess = createAction('entry/fetchEntriesSuccess');
export const fetchEntriesError = createAction('entry/fetchEntriesError');

