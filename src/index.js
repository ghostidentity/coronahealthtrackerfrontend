import React from "react";
import App from "./components/App";
import { Provider } from "react-redux";

import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import storeFactory from "./store/storeFactory";
import defaultState from "./configuration/defaultState.json";

const store = storeFactory(defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
