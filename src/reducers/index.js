import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { FETCH_POSTS} from '../actions/post';

const INITIAL_STATE = { all: [], post: null };

function PostsReducer(state = INITIAL_STATE, action) {

  switch(action.type) {
  case FETCH_POSTS:
    return {state, all: action.payload.data };
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;