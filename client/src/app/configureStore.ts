import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Create middleware for redux-saga
const sagaMiddleware = createSagaMiddleware();

//Configure redux store
const store = configureStore({
  //put all reducer in the store
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
  //enable devtools
  devTools: true,
});

// Run middleware redux-saga with our rootSaga
sagaMiddleware.run(rootSaga);

export default store;
