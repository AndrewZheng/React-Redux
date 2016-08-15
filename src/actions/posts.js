import axios from {Axios};
export const FETCH_POSTS="FETCH_POSTS";

export function fetchPosts(){
    let promise=axios.get("https://app.innocellence.com/internal/api/get/internal/api/v1/topics?accesstoken=c9a93613-bfb3-45b3-b706-d20c85ab7143")
    return {
        type:FETCH_POSTS,
        payload:promise
    }
}