import { all } from "redux-saga/effects";

import { userSaga } from "./user";
import { companySaga } from "./company";

export default function* rootSaga() {
  yield all([userSaga(), companySaga()]);
}
