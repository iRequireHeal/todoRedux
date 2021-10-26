import { actionTypes } from '../action-types/task'


const { SET_FILTER, SHOW_ALL } = actionTypes;

const initialState = {
    filter: SHOW_ALL,
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return { ...state, filter: action.payload };
        default:
            return state;
    }
}
