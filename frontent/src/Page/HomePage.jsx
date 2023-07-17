import React, { useRef, memo, useEffect } from "react";
import PostCard from "../Component/PostCard";
import AddPostModal from "../Component/AddPostModal";
import RefreshPostBtn from "../Component/RefreshPostBtn";
import PostCardSkeleton from "../Component/PostCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import EditPostModal from "../Component/EditPostModal";
import { getPosts } from "../store/slices/postsSlice";
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
              }) :  <div class="container">
              <div class="alert alert-info mt-4" role="alert">
                <div class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                  <div>
                    <h4 class="alert-heading ms-3">No Scheduled Posts</h4>
                  </div>
                </div>
                <hr/>
                <p class="mb-0">Please refresh to check back </p>
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default memo(HomePage);
