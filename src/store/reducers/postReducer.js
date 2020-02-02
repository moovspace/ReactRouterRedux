import { FETCH_POSTS, NEW_POST, DEL_POST } from '../actions/types'

// Initial state
const initState = {
    posts: [
        {id: 11, title: "Redux jest dla ułomnych ;)"},
        {id: 12, title: "Redux robi to co react tylko na około :)"},
        {id: 13, title: "Redux to zło wcielone :D"},
        {id: 14, title: "Prościej przekazać funkcje z App.js do komponentów: <Item doSomething={this.props.doSomething} />  in component --> <button onClick={this.props.doSomethingbind(this,id)} />"}
    ],
    post: {},
    post_id: 0
}

// postReducer
export default function(state = initState, action) {
    console.log("Post reducer: ", state, action);

    switch (action.type)
    {
        case FETCH_POSTS:
            console.log("Reducer fetching data ...");
            return {
                // Set current state
                ...state,
                // Update state
                posts: [...state.posts, ...action.data] // Params from actions/postActions fetchPosts actions [type, data]
            };

        case NEW_POST:
            return {
                // Set current state
                ...state,
                // Update posts
                // posts: [...state.posts, action.data],
                // Update post
                post: action.data
            };

        case DEL_POST:
            console.log("Del action data: ", action.data);
            return {
                // Set current state
                ...state,
                // Update state
                posts: [...state.posts.filter((post) => post.id !==  action.data.id)],
                post_id: action.data.id
            };

        default:
            return state;
    }
}