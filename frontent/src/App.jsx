import React from "react";
import AppRoutes from "./AppRoutes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
  
     <BrowserRouter>
      <ToastContainer />
        <AppRoutes />
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
