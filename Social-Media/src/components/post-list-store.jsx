import { createContext } from "react";
import { useRedcer } from "react";

export const PostList = createContext(
    {
        postList: [],
        addPost: () => {},          
        deletePost: () => {} 
    }
);

const PostListReducer = (currPostlist, action) => {
        
    return currPostlist;

}

const PostListProvider = ({children}) => {

     const [postList , dispatchPostList] = useRedcer(
        PostListReducer , 
        DEFAULT_POST_LIST
    );

    const addPost = ()=>{

    }

    const deletePost = ()=>{

    }
     
     return <PostList.Provider value={
        {
        postList , addPost , deletePost
        }
     }>{children}</PostList.Provider>
}
const DEFAULT_POST_LIST =[
    {
    id: '1',
    title: "going to mumbai",
    body: "Hello i m going to Mumbai for my vacations.",
    reactions : 56,
    userId : 'user_1',
    tags : ['vacations', 'mumbai' , 'travel'], 
},
{
    id: '2',
    title: "going to delhi",
    body: "Hello i m going to Delhi for my vacations.",
    reactions : 12,
    userId : 'user_2',
    tags : ['vacations', 'delhi' , 'travel'],

}
]

export default PostListProvider;
