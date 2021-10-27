import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { ThroughProvider } from "react-through";
import thunk from "redux-thunk";
import myReducer from "./reducers";
import reportWebVitals from "./reportWebVitals";

const store = createStore(myReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThroughProvider>
        <App />
      </ThroughProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
