import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creator
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data});
};

export const fetchUser = () => async dispatch => {
    const response = await jsonPlaceholder.get('/users/');
    dispatch({type: 'FETCH_USER', payload: response.data});
};
    


