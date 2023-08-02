import React, { useRef, memo, useEffect } from "react";
import PostCard from "../Component/PostCard";
import AddPostModal from "../Component/AddPostModal";
import RefreshPostBtn from "../Component/RefreshPostBtn";
import PostCardSkeleton from "../Component/PostCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import EditPostModal from "../Component/EditPostModal";
import { getPosts } from "../store/slices/postsSlice";
import SideBar from "../Component/SideBar";
import NoPostNotice from "../Component/NoPostNotice";
function HomePage(props) {
  const dispatch = useDispatch();
  const { posts, status } = useSelector(state => state.posts)
  const addPostModal = useRef();

  console.log("hoem rerender");

  const controlAddPostModal = (action) => {
    if (action) {
      addPostModal.current.style.display = "block";
    } else {
      addPostModal.current.style.display = "none";
    }
  };
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="home">
      <EditPostModal />
      <div ref={addPostModal} style={{ display: "none" }}>
        <AddPostModal controlAddPostModal={controlAddPostModal} />
      </div>
      <div className="d-flex justify-content-between my-2 px-4">
        <RefreshPostBtn />
        <button
          onClick={() => controlAddPostModal(true)}
          className="btn btn-success fw-bold  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
          <span className="ms-2 text-light">Add</span>
        </button>
      </div>
      <div
        className="row  border bordre-info border-2  p-0 m-0 d-flex justify-content-center  "
        style={{ overflowY: "scroll", height: "85vh" }}
      >
        <div className="col-sm-10 col-lg-8 col-11 mt-3">
          {status == "LOADING"
            ? <>
              <PostCardSkeleton />
              <PostCardSkeleton />
              <PostCardSkeleton />
            </>
            : posts.length ?
              posts.map((post) => {
                return <PostCard post={post} key={post._id} />;
              }) :  <NoPostNotice/>
          }

        </div>
      </div>
    </div>
  );
}

export default memo(HomePage);
