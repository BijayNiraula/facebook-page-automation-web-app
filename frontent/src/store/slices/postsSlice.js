import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../../module/fetchData";
import { successToast, errorToast, warningToast } from "../../module/toast";



// logic for add posts
export const addPosts = (e) => {
  return (async function addPostThunk(dispatch, getState) {
    try {
      const img = e.target[0].files[0];
      const text = e.target[2].value;
      const publish_date = e.target[3].value;
      if (Date.now() > new Date(publish_date).getTime()) {
        warningToast("please provide the future date");
        return;
      }
      const formdata = new FormData();
      if (img) {
        formdata.append("img", img);
      }
      if (text) {
        formdata.append("text", text);
      }
      formdata.append("publish_date", publish_date);
      formdata.append("auth", JSON.parse(sessionStorage.getItem("auth")).token);
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/page/addPost?api_access_token=${import.meta.env.VITE_API_ACCESS_TOKEN}`,
        {
          method: "POST",
          body: formdata,
        }
      );
      const result = await res.json();
      if (result.success) {
        console.log(result)
        dispatch(add(result.data));
        successToast(result.success);
        return true;
      } else {
        errorToast(result.error);
      }
    } catch (e) {
      console.log(e)
      errorToast("could not connect to the server");
    }
    return false;
  })
};


// logic for get posts
export const getPosts = () => {
  return (async function getPostThunk(dispatch, getState) {
    dispatch(setStatus("LOADING"))
    const result = await fetchData(`/api/page/getPost`, {});
    if (result.success) {
      dispatch(setPosts(result.data));
    } else {
      errorToast(result.error);
    }
    dispatch(setStatus("IDLE"))
  })
};


// logic for delete post
export const deletePost = (_id) => {
  return (async function deletePostThunk(dispatch, getState) {
    if (_id) {
      console.log(_id)
      const result = await fetchData(`/api/page/deletePost`, { _id: _id });
      if (result.success) {
        dispatch(remove(_id));
        successToast(result.success);
        return true;
      } else {
        warningToast(result.error);
      }
    }
  })
}


// logic for edit posts
export const editPosts = (e, _id) => {
  return (async function editPostsThunks(dispatch, getState) {
    try {
      const img = e.target[0].files[0];
      const text = e.target[2].value;
      const publish_date = e.target[3].value;
      const formdata = new FormData();
      if (img) {
        formdata.append("img", img);
      }
      formdata.append("text", text);
      formdata.append("_id", _id);
      formdata.append("publish_date", publish_date);
      formdata.append("auth", JSON.parse(sessionStorage.getItem("auth")).token);
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/page/editPost?api_access_token=${import.meta.env.VITE_API_ACCESS_TOKEN}`,
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await res.json();
      if (data.success) {
        console.log(data)
        dispatch(update(data.data))
        successToast(data.success);
        return true;
      } else {
        errorToast(data.error);
      }
    } catch (e) {
      errorToast("could not connect to the server");
    }
    return false;

  })
}




const initialState = {
  posts: [],
  status: "LOADING",
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    add: (state, action) => {
      console.log(action)
      state.posts.push(action.payload)

    },
    update: (state, action) => {
      let indexOfTargetPost = state.posts.findIndex(d => d._id === action.payload._id)
      state.posts[indexOfTargetPost] = action.payload

    },
    remove: (state, action) => {
      const filterdPost = state.posts.filter(d => d._id != action.payload);
      state.posts = filterdPost

    },
    setStatus: (state, action) => {
      state.status = action.payload

    }

  }
})


export default postsSlice.reducer
export const { setPosts, update, add, remove, setStatus } = postsSlice.actions


