import React from "react";
import ReactDOM from "react-dom";
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
if (isProd) {
  store = createStore(reducers);
} else {
  store = createStore(reducers, {}, storeEnhancer);
  if (module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(require("./reducers"))
    );
  }
}

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
