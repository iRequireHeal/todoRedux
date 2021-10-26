import {deleteTaskAC, toggleTaskAC} from "../store/actions/actions";
import {useDispatch} from "react-redux";
import  '../styles/task.css'

export const Task = ({id, isReady, taskName}) => {
    const dispatch = useDispatch();
    const toggleClick = () => {
        dispatch(toggleTaskAC(id));
    };

    const deleteTask = () => {
        dispatch(deleteTaskAC(id));
    };

    return (
        <div className="taskItem">
            <p className="inputButton">{taskName} </p>
            <div>
                <input className="toggleBTN"  type="checkbox" value={isReady} onClick={toggleClick}/>
                <button className="deleteBTN" onClick={()=>deleteTask()}>delete</button>
            </div>
        </div>
    )
}