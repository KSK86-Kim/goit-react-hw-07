import axios from 'axios';

import {
    addEntryRequest,
    addEntrySuccess,
    addEntryError,
    deleteEntryRequest,
    deleteEntrySuccess,
    deleteEntryError,
    fetchEntriesRequest,
    fetchEntriesSuccess,
    fetchEntriesError,
} from './entries-actions';

export const fetchEntries = () => dispatch => {
    dispatch(fetchEntriesRequest());
    axios.get('/contacts')
        .then(responce => dispatch(fetchEntriesSuccess(responce.data)))
        .catch(error => dispatch(fetchEntriesError(error.message)))
}

export const addEntry = entry => dispatch => {

    dispatch(addEntryRequest());
    axios.post('/contacts', entry)
        .then(responce => responce.data)
        .then(data => dispatch(addEntrySuccess(data)))
        .catch(error => { dispatch(addEntryError(error.message)) })
}

export const deleteEntry = id => dispatch => {

    dispatch(deleteEntryRequest());
    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(deleteEntrySuccess(id)))
        .catch(error => dispatch(deleteEntryError(error.message)))
}


