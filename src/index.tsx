import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import 'antd/dist/antd.min.css';
import { AppContext } from "./context/AppContext";

import Router from "./router";
import i18n from "./translation";

const App = () => {
  const [ contextData, setContextData ] = useState({ inViewId: "intro" });
  return <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <AppContext.Provider value={{ contextData, setContextData }}>
      	<Router />
      </AppContext.Provider>
    </I18nextProvider>
  </BrowserRouter>
}

ReactDOM.render(<App />, document.getElementById("root"));
