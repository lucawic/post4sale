import { applyMiddleware } from "redux"

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dipatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({type: 'UPDATE', payload: data});
    } catch(error) {
        console.log(error);
    }
}