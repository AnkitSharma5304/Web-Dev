import { useRef } from "react";
import { useContext } from "react";
import { PostList } from "./post-list-store";
const CreatePost = () => {
  const {addPost} = useContext(PostList);
   const userIdElement = useRef();
   const postTitleElement = useRef();
   const postBodyElement = useRef();
   const ReactionsElement = useRef();
   const TagsElement= useRef();
   const handleSubmit = (e) => {
       e.preventDefault();
       const userId = userIdElement.current.value;
       const postTitle = postTitleElement.current.value;    
        const postBody = postBodyElement.current.value;
        const Reactions = ReactionsElement.current.value;
        const Tags = TagsElement.current.value.split(" ");

        addPost(userId, postTitle, postBody, Reactions, Tags); 

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        ReactionsElement.current.value = "";
        TagsElement.current.value = "";
   };



  return (
    <form className = "create-post" onSubmit={handleSubmit}> 
     <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
        User_id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="user_id"
          placeholder="Enter your user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
        Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
         Body
        </label>
        <textarea
         type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          rows="3"
          placeholder="Your experience, thoughts, or ideas"
        ></textarea>
      </div>
       <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
        Reactions
        </label>
        <input
          type="text"
          ref={ReactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to the post ?"
        />
      </div>
       <div className="mb-3">
        <label htmlFor="tags" className="form-label">
        Tags
        </label>
        <input
          type="text"
          ref={TagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags related to the post"
        />
      </div>

      <button type="Submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatePost;
