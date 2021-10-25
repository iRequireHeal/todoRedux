import {actionTypes} from "../action-types/task";

const {
    ADD_TASK, TOGGLE_TASK, DELETE_TASK, SET_FILTER,
} = actionTypes;

export const addTaskAC = (task) => {
    return {
        type: ADD_TASK,
        payload: {
            task
        }
    }
}

export const deleteTaskAC = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
}

export const toggleTaskAC = (id) => {
    return{
        type: TOGGLE_TASK,
        payload: {
            id
        }
    }
}

export const showAllAC = () => ({
    type: SET_FILTER,
    payload: 'SHOW_ALL',
});

export const showActiveAC = () => ({
    type: SET_FILTER,
    payload: 'SHOW_ACTIVE',
});

export const showReadyAC = () => ({
    type: SET_FILTER,
    payload: 'SHOW_READY',
});
