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

let storeEnhancer = compose(DevTools.instrument(), persistState());

let store = createStore(reducers, {}, storeEnhancer);
if (module.hot) {
  module.hot.accept("./reducers", () =>
    store.replaceReducer(
      require("./reducers") /*.default if you use Babel 6+ */
    )
  );
}
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
