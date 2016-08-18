import axios from 'axios';
export const FETCH_POSTS="FETCH_POSTS";

export function fetchPosts(){
    let promise=axios.get("https://app.innocellence.com/internal/api/v1/topics?accesstoken=62044d84-aed1-4769-be35-144648a6c4a0")
    return {
        type:FETCH_POSTS,
        payload:promise
    }
}