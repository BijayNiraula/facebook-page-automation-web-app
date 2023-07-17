import React from "react";
import { memo } from "react";
import { useRef } from "react";
import { RotatingLines } from "react-loader-spinner";
import { warningToast } from "../module/toast";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/slices/editPostModalSlice";
import { editPosts } from "../store/slices/postsSlice";

function EditPostModal(props) {
  const dispatch = useDispatch();
  const PreviewImg = useRef();
  const loadingBtn = useRef();
  const uploadFileInput = useRef();
  const uploadBtn = useRef();
  const { open, data } = useSelector((state) => state.editPostModal)
  if (!open) {
    return (<></>)
  }
  const handleClosePostModal = () => {
    dispatch(closeModal())
  }



  const loadImg = (d) => {
    const files = d.target.files[0];
    if (files.size >= 4194304 - 800) {
      warningToast("file size must be less than 4 mb");
      uploadFileInput.current.value = "";
      PreviewImg.current.src = "";
      return;
    }
    if (files.type == "image/jpeg" || files.type == "image/png") {
      PreviewImg.current.src = URL.createObjectURL(files);
    } else {
      uploadFileInput.current.value = "";
      PreviewImg.current.src = "";
      warningToast("Only jpg and png type image are supported");
    }
  };


  const validateDate = (e) => {
    if (Date.now() > new Date(e.target.value).getTime()) {
      warningToast("please provide the future date");
      e.target.value = ""
    }
  }



  const handleEditPosts = async (e) => {
    e.preventDefault();
    loadingBtn.current.style.display = "block";
    uploadBtn.current.style.display = "none";
    const result = await dispatch(editPosts(e, data._id))
    loadingBtn.current.style.display = "none";
    uploadBtn.current.style.display = "block";
    if (result) {
      handleClosePostModal()
    }
  };
  console.log("edit post modal rerender")
  return (
    <div className="PostModal row p-0 m-0 d-flex justify-content-center align-items-center">
      <div className="body col-sm-4 col-11 ">
        <div className="d-flex   justify-content-end ">
          <button
            onClick={() => handleClosePostModal()}
            className="btn-danger btn m-2 mb-0 p-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <h3 className="text-secondary text-center fs-2  fw-bold ">Edit Post</h3>

        <form className="mt-3" onSubmit={handleEditPosts}>
          <div className="d-flex  justify-content-center row p-0 m-0">
            <img
              ref={PreviewImg}
              className="img-fluid   col-7 p-2 border border-info bg-light"
              width="200px"
              height="100px"
              src={data.img}
              alt=""
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              ref={uploadFileInput}
              type="file"
              onChange={loadImg}
              className="d-none"
              name=""
              id="updateImg"
            />
            <button type="button" className="mt-2">
              <label htmlFor="updateImg" className="">
                change
              </label>
            </button>
          </div>
          <div className=" d-flex flex-column mb-4 mt-3 ">
            <label htmlFor=" mt-2 fw-bold ">Text : </label>
            <input
              type="text"
              className="px-2 py-1 border border-dark   "
              defaultValue={data.text}
              name=""
              id="txt"
            />
            <label for="date" className=" mt-3 fw-bold">
              Publishd On :{" "}
            </label>
            <input
              onChange={validateDate}
              required
              type="datetime-local"
              id="date"
              className="mb-2 px-2 py-1"
              name="date"
            />
            <button
              className="btn  btn-success px-4 mt-3"
              ref={loadingBtn}
              style={{ display: "none" }}
            >
              <RotatingLines
                strokeColor="#ffff"
                strokeWidth="5"
                animationDuration="1.12"
                width="20"
                visible={true}
              />
              <span className="ms-2">saving</span>
            </button>
            {/* : */}
            <button className="btn btn-success px-4 mt-3" ref={uploadBtn}>
              save
            </button>

            {/* } */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(EditPostModal);
