import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
  const middelwares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middelwares)) // 배포용일때는 연결 안하기 (히스토리 남아서 보안 취약)
      : composeWithDevTools(applyMiddleware(...middelwares)); // 개발용
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});
export default wrapper;
