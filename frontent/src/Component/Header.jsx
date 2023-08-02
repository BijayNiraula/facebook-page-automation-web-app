import React, { useRef } from "react";
import { memo } from "react";
import logo from "../assets/logo.jpg"
function Header(props) {
  const sideBarCloseBtn = useRef();
  const sideBarOpenBtn = useRef();

      
    const controlSideBar = (action) => {
      if (action) {
        props.sidebar.current.style.left = "0px";
        sideBarCloseBtn.current.style.display = "block"
        sideBarOpenBtn.current.style.display = "none"
      } else {
        props.sidebar.current.style.left = "-500px";
        sideBarCloseBtn.current.style.display = "none"
        sideBarOpenBtn.current.style.display = "block"
      }
    };
  
  console.log("header rerender")
  return (
    <header className="bg-dark pt-2  ">
      <div className="  d-flex justify-content-between">
        <img src={logo} height={60} className="ms-sm-5 ms-2" alt="" />

        <button
          ref={sideBarOpenBtn}
          onClick={(e) => controlSideBar(true)}
          className="btn btn-dark d-sm-none  me-2"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <button
          style={{ display: "none" }}
          ref={sideBarCloseBtn}
          onClick={(e) => controlSideBar(false)}
          className="btn btn-dark  d-sm-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-x me-2"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>

      </div>
      <hr className=" m-0 p-0 text-white mt-2  " />
    </header>
  );
}

export default memo(Header);
