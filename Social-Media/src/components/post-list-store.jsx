import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext(
    {
        postList: [],
        addPost: () => {},          
        deletePost: () => {} 
    }
);

const PostListReducer = (currPostlist, action) => {
    let newPostList = currPostlist;

        if(action.type === 'DELETE_POST'){
             newPostList = currPostlist.filter((post) => post.id !== action.payload.postid);
           
        }
    return newPostList;

}

const PostListProvider = ({children}) => {

     const [postList , dispatchPostList] = useReducer(
        PostListReducer , 
        DEFAULT_POST_LIST
    );

    const addPost = ()=>{

    }

    const deletePost = (postid)=>{
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postid,

            },

        })
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
    title: "Going to Mumbai",
    body: "Hello i m going to Mumbai for my vacations,it has a great weather and food , expecting a great time there.",
    reactions : 56,
    userId : 'user_1',
    tags : ['vacations ', ' mumbai ' , ' travel '], 
},
{
    id: '2',
    title: "Going to Delhi",
    body: "Hello i m going to Delhi for my vacations , it is a great place to visit, especially in winters.",
    reactions : 12,
    userId : 'user_2',
    tags : ['vacations', 'delhi' , 'travel'],

}
]

export default PostListProvider;
