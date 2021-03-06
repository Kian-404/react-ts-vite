import React from 'react';
import { collapsed,fixheader, sidebar,sidebartheme } from './models'
import { createReduxStore } from "@redux-model/react";

const store = createReduxStore({
  persist: {
    version: 0,
    key: "redux-persist",
    storage: "local",
    allowlist: {
      collapsed,
      fixheader,
      sidebar,
      sidebartheme
    }
  },
  middleware: [
    // Logger will slows down the program
    // Don't use it in production
    // createLogger({
    //   collapsed: true,
    //   diff: true,
    //   duration: true
    // })
  ],
  compose: process.env.NODE_ENV === 'production' ? 'default' : 'redux-devtools',
});
 export default store