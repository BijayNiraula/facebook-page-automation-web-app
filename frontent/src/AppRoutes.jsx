import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage";
import Contact from "./Page/Contact";
import { Route, Routes, Link } from "react-router-dom";
import { memo, useEffect, useRef } from "react";
import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import { login } from "./store/slices/authSlice";
import FAQ from "./Page/FAQ";
import { useDispatch, useSelector } from "react-redux";
function AppRoutes() {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state.auth)
  const sidebar = useRef();





  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      dispatch(login(JSON.parse(sessionStorage.getItem("auth")).data));
    } else if (localStorage.getItem("auth") && !sessionStorage.getItem("auth")) {
      sessionStorage.setItem("auth", localStorage.getItem("auth"));
      dispatch(login(JSON.parse(sessionStorage.getItem("auth")).data));
    } else {
    }
  }, [])


  if (auth) {
    return (
      <>
        {/* header */}
        <Header sidebar={sidebar} />
        <div className="row">
          {/* sidebar */}
          <div className="col-sm-4 col-md-3 sidebar bg-dark" ref={sidebar}>
            <SideBar />
          </div>
          <div className="col-sm-8  col-md-9">
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }


  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default memo(AppRoutes);
