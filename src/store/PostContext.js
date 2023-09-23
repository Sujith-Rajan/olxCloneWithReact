import { createContext, useState,useContext } from "react";

export const PostContext = createContext(null)

  function View({children}){
    const[postDetails,setPostDetails]=useState()
    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default View

export function usePostDetails() {
    return useContext(PostContext);
  }