import { FETCH_POSTS, NEW_POST, DEL_POST } from './types'

// thunk middleware ES6 async
export const fetchPosts = () => dispatch => {
    console.log("fetching posts data ...");

    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => res.json())
    .then((posts) => dispatch({
        type: FETCH_POSTS,
        data: posts
    }))
};

export const createPost = (postData) => dispatch => {
    console.log("Adding post data ...", postData);

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Contetn-Type' : 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then((res) => res.json())
    .then((post) => dispatch({
        type: NEW_POST,
        data: post
    }))
};

export const delPost = (id) => dispatch => {
    // console.log("!!! Deleting post ", id);

    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    .then((res) => res.json())
    .then((post) => {
        console.log("Delete post ", post, id);
        dispatch({
            type: DEL_POST,
            data: post
        })
    })
};

// thunk middleware
// export function fetchPosts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
//         .then((res) => res.json())
//         .then((posts) => dispatch({
//             type: FETCH_POSTS,
//             data: posts
//         }))
//     }
// }

// Sample middleware
export function addPost(){
    return function(dispatch){
    }
}