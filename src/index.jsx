import React from "react";
import ReactDOM from "react-dom";
import { newHistory } from "redux-undo";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import "./index.css";
import App from "./containers/App";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import { persistState } from "redux-devtools";

import DevTools from "./containers/DevTools.jsx";
const isProd = process.env.NODE_ENV === "production";
let storeEnhancer = compose(DevTools.instrument(), persistState());
var store;
var restoredState = localStorage.getItem("state");
if (!restoredState) {
  restoredState = {};
} else {
  restoredState = JSON.parse(restoredState);
}
if (isProd) {
  store = createStore(reducers, restoredState);
} else {
  store = createStore(reducers, restoredState, storeEnhancer);
  if (module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(require("./reducers"))
    );
  }
}

function handlePersist() {
  var state = store.getState();
  const present = state.present;
  // Trim the past and future so that local storage doesn't get ridiculously long
  const past =
    state.past && state.past.slice(Math.max(state.past.length - 15, 0));
  const future =
    state.future && state.future.slice(Math.max(state.future.length - 15, 0));
  const history = newHistory(past, present, future);
  localStorage.setItem("state", JSON.stringify(history));
}

store.subscribe(handlePersist);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {isProd ? "" : <DevTools />}
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
