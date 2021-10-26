import {addTaskAC} from "../store/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getTaskList} from "../selectors/tasks";
import "../styles/inputButtons.css"

export const InputButtons = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(getTaskList)
    const[inputValue, setInputValue] = useState("")
    const addTask = () => {
        dispatch(addTaskAC({id:tasks.length+1, taskName:inputValue, isReady: false}))
        setInputValue("")
    }

    const changeInputValue = (e) =>{
        if(inputValue.trim().length < 20)
        setInputValue(e.target.value)
    }

    return (
        <div className="inputCont">
            <input className="inputText" type="text" value={inputValue} onChange={(e) => changeInputValue(e)}/>
            <button className="addBTN" onClick={()=> addTask()}>add</button>
        </div>
    )
}