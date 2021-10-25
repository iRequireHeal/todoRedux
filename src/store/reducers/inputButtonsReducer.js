import {actionTypes} from "../action-types/task";
const {ADD_TASK, DELETE_TASK, TOGGLE_TASK} = actionTypes

const initialState = [ {id: 1, taskName: "rerere", isReady: false}]

const inputButtonsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state,
                payload.task
            ]
        case DELETE_TASK:
            return state.filter(task => task.id !== payload.id)
        case TOGGLE_TASK:
            return state.map(task => task.id === payload.id ? {...task, isReady:!task.isReady} :  task)
        default:
            return state
    }
}

export default inputButtonsReducer;