
import { onChangeFilter } from './filter-actions';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('',
    {
        [onChangeFilter]: (_, action) => action.payload
    });