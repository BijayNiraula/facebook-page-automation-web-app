import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
function SideBar(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.auth.data)
  const currentYear = new Date().getFullYear();
  const handleLogout = () => {
    dispatch(logout())
  };
  return (
    <div className="mt-4  d-flex flex-column justify-content-between " style={{ height: "80%" }}>
      <div className=" ">

        <a href={`https://www.facebook.com/profile.php?id=${data.page_id}`} target="_blank" className=" text-decoration-none d-flex  flex-column align-items-center justify-content-center profile-pic">
          <img
            className="img-fluid"
            width={150}
            height={150}
            src={data.picture}
            alt=""
          />
          <p className=" mt-2 fs-4 text-center px-1 ">
            {" "}
            {data.name}{" "}
            <span className="page-sign ms-sm-3 ms-2 px-2">page</span>{" "}
          </p>
        </a>
        <div className="align-items-center flex-column d-flex">
          <ul className="mt-4">
            <li>
              <Link to="/" className="links  " onClick={() => props.controlSideBar(false)} >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-house-door me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                </svg>
                Home
              </Link>
            </li>

            <br />
            <li>
              <Link to="/contact" className="links " onClick={() => props.controlSideBar(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-person-lines-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
                Contact
              </Link>
            </li>

            <br />
            <li>
              <Link to="/faq" className="links " onClick={() => props.controlSideBar(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-info-circle me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="align-items-center d-flex mt-3 justify-content-center">
          <button
            onClick={() => handleLogout()}
            className="btn btn-danger  px-3 fw-bold"
          >
            <img
              width="25"
              height="25"
              src="https://th.bing.com/th/id/R.a27d1eaeeb70c4c2f320a436dbc9c9b1?rik=GL61xBOVO2xv4w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_119401.png&ehk=G%2fF6pPW7yPa9MI0PPWUYkNm1dyEkxAjDB0qvMqGEc0E%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <span className="ms-2 text-light">Logout</span>
          </button>
        </div>
      </div>
      <div className="copyrigh text-center  text-white  px-3 ">
        <span>© {currentYear} All rights reserved by <a href="https://bijay-niraula.com.np/" target="_blank" className=" fw-bold ">bijay niraula</a> .</span>
      </div>
    </div>
  );
}

export default memo(SideBar);
