import Post from './Post';
import { useContext, useEffect } from "react";
import React, { useState } from 'react';
import { PostList as PostListData} from './post-list-store';
import LoadingSpinner from './LoadingSpinner';
import WelcomeMessage from './WelcomeMsg';  

const PostList = () => {
 const {postList , addInitialPost} = useContext(PostListData)
 const [fetching , setFetching] = useState(false);

 useEffect(()=>{
  setFetching(true);

   fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then(data =>{
  addInitialPost(data.posts);
  setFetching(false);

});
 }, []);


 const handleGetPostClick = () => {

 }
  return (
     <>
     {fetching && <LoadingSpinner/>}
    {!fetching && postList.length === 0 && <WelcomeMessage onGetPostClick={handleGetPostClick} />}
      {!fetching && postList.map((post) =>
         <Post key={post.id} post={post} />)}
     
    </>
  );
};

export default PostList;
