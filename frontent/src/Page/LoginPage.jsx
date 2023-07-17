import React from "react";
import { memo } from "react";
import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyLoginDetails } from "../store/slices/authSlice";
function LoginPage(props) {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.auth.status)
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(verifyLoginDetails(e))
  }
  console.log("login reredner");
  return (
    <section className="vh-100 bgrk " style={{ backgroundColor: "#e6f2ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card   "
              style={{
                backgroundColor: "#3b5998",
                color: "#dfe3ee",
                borderRadius: "1rem",
                height: "40%",
              }}
            >
              <div className="card-body pt-5 px-3 px-sm-5 pb-2 text-center">
                <form className="" onSubmit={(e) => handleLogin(e)}>
                  <h2 className="fw-bold  text-uppercase">Login</h2>
                  <p className="text-white-50">
                    Please enter your page id and page access token
                  </p>
                  <div className="form-outline form-white mb-2">
                    <input
                      type="text"
                      id="typeEmailX"
                      className="form-control "
                    />
                    <label className="form-label" for="typeEmailX">
                      Page Id
                    </label>
                  </div>
                  <div className="form-outline form-white ">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control"
                    />
                    <label className="form-label" for="typePasswordX">
                      Page Access Token
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="form1Example3"
                    />
                    <label
                      className="form-check-label ms-2"
                      for="form1Example3"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  {status == "LOADING" ? (
                    <button
                      disabled
                      type="button"
                      className="btn btn-light mt-4 px-5 "
                    >
                      {" "}
                      <PulseLoader
                        color={"black"}
                        loading={true}
                        cssOverride={""}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />{" "}
                    </button>
                  ) : (
                    <button className="btn btn-light mt-4 px-5" type="submit">
                      Login
                    </button>
                  )}
                  <p className="text-end  pt-4 ">
                    {" "}
                    <Link to="/faq" className="text-light ">
                      FAQ ?
                    </Link>{" "}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(LoginPage);
