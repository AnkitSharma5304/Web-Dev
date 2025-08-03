const CreatePost = () => {
  return (
    <div className = "create-post"> 
     <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
        User_id
        </label>
        <input
          type="userId"
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
          type="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to the post ?"
        />
      </div>

      <button type="button" class="btn btn-primary">Submit</button>
    </div>
  );
};

export default CreatePost;
