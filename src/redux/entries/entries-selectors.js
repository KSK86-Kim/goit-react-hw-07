import { createSelector } from 'reselect';

const getAllEntries = state => state.contacts.items.entries;
const getFilterState = state => state.contacts.filter;
export const getLoadingState = state => state.contacts.items.loading;

export const getFilteredContacts = createSelector(
    [getAllEntries, getFilterState],
    (entries, filterValue) => entries.filter((entry) => entry.name.includes(filterValue))
)
