import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import rootSaga from "./sagas";
import userReducer from "./slice/user";
import companyReducer from "./slice/company";

const reducer = combineReducers({
  user: userReducer,
  company: companyReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export default store;
