import {useSelector} from "react-redux";
import {getTaskList} from "../selectors/tasks";
import '../styles/taskList.css'
import {actionTypes} from '../store/action-types/task'

import {getFilter} from "../selectors/filter";
import {InputButtons} from "./InputButtons";
import {FilterButtons} from "./FilterButtons";
import {Task} from "./Task";
export const TaskList = () => {
    const {SHOW_ALL, SHOW_ACTIVE, SHOW_READY} = actionTypes;
    let tasks = useSelector(getTaskList);
    let currentFilter = useSelector(getFilter);

    alert(currentFilter)

    if (currentFilter === SHOW_ALL) {
        tasks = tasks.filter(task => task.id === 1)
    }
    else if (currentFilter === SHOW_ACTIVE) {
        tasks = tasks.filter(task => task.isReady === false)
    }
    else if (currentFilter === SHOW_READY) {
        tasks = tasks.filter(task => task.isReady === true)
    }

    debugger
    return (
        <div>
            <InputButtons/>
            <FilterButtons/>
            <div className={"list"}>{tasks.map((task) => (<Task isReady={task.isReady} taskName={task.taskName} id={task.id}/>))}</div>
        </div>
    );
};