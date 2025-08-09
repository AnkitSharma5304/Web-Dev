import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostlist, action) => {
  let newPostList = currPostlist;

  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist];

  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title:  postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags:tags,
      },
    });
  };
    const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
       posts,
      },
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        addInitialPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
