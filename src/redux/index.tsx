import React from 'react';
import { collapsed } from './models'
import { createReduxStore } from "@redux-model/react";

const store = createReduxStore({
  persist: {
    version: 0,
    key: "redux-persist",
    storage: "local",
    allowlist: {
      collapsed
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
  ]
});
 export default store