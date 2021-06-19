import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import entryReducer from './entries/entries-reducer';
import { filterReducer } from './filter/filter-reducer';
import authReducer from './auth/auth-reducer';
import storage from 'redux-persist/lib/storage';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const contactsReducer = combineReducers({
    items: entryReducer,
    filter: filterReducer,
})

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
})


const store = configureStore({ reducer: rootReducer }, middleware);

const persistor = persistStore(store);

export default { store, persistor };