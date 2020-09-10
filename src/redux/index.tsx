import React from 'react';
import { createStore } from 'redux';
import AppReducers from './reducers/index'

 const store = createStore(AppReducers)

 export default store