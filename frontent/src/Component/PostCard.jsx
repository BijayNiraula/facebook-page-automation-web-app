import React from "react";
import { memo } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { openModal } from "../store/slices/editPostModalSlice";
import { deletePost } from "../store/slices/postsSlice";
function PostCard(props) {
 
  const dispatch=useDispatch();
  const loadingBtn = useRef();
  const deleteBtn = useRef();
  const handleOpenEditPostModal=()=>{
          dispatch(openModal(props.post))
  }
  const handleDeletePost=async()=>{
    if (window.confirm("Do you want to delete this Post")) {
      loadingBtn.current.style.display = "block";
      deleteBtn.current.style.display = "none";
      await dispatch(deletePost(props.post._id));
      loadingBtn.current.style.display = "none";
      deleteBtn.current.style.display = "block";
    }
  }

 
  console.log("post card rerender");
  return (
    <div className=" row p-0 m-0 post-card px-sm-3 px-1 pt-3  text-dark  mb-5  ">
      
      <div className="col-sm-5 col-lg-3 col-5 ">
        <img
          src={props.post.img}
          alt=""
          className=" border-2 p-1 bg-white border border-secondary img-fluid w-100"
          height={50}
          width={100}
        />
      </div>
      <div className="col-sm-7 col-lg-8 col-7">
        <div className=" p-0 m-0">
          <p className="">
            {" "}
            <strong>Text :</strong> {props.post.text}
          </p>
        </div>
        <div className="d-flex justify-content-around">
        <button
          className="btn-success btn  "
          onClick={() => handleOpenEditPostModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil-fill "
            viewBox="0 0 16 16"
            
          >
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
          </svg>{" "}
        </button>
        <button
          ref={deleteBtn}
          onClick={(e) => handleDeletePost()}
          className="btn-danger btn  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill  "
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </button>
        <button
          className="btn  btn-danger px-3 "
          style={{ display: "none" }}
          ref={loadingBtn}
          disabled
        >
          <RotatingLines
            strokeColor="#ffff"
            strokeWidth="5"
            animationDuration="1.12"
            width="16"
            visible={true}
          />
        </button>
        </div>
      </div>
       
      <p className="text-muted small p-0 mt-2  text-end px-2 ">
        {" "}
        publish on : <span className="fw-bold">
          {props.post.publish_date.replace("T", " - ")}
        </span>{" "}
        <strong> {} </strong>
      </p>
    </div>
  );
}

export default memo(PostCard);
