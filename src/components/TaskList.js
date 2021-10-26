import {useSelector} from "react-redux";
import {getTaskList} from "../selectors/tasks";
import '../styles/taskList.css'

import {getFilter} from "../selectors/filter";
import {InputButtons} from "./InputButtons";
import {FilterButtons} from "./FilterButtons";
import {Task} from "./Task";
export const TaskList = () => {
    let tasks = useSelector(getTaskList);
    let currentFilter = useSelector(getFilter);

    if (currentFilter.filter === "SHOW_ALL") {
        tasks= tasks
    }
    if (currentFilter.filter === "SHOW_ACTIVE") {
        tasks = tasks.filter(task => task.isReady === false)
    }
    if (currentFilter.filter === "SHOW_READY") {
        tasks = tasks.filter(task => task.isReady === true)
    }

    return (
        <div>
            <InputButtons/>
            <FilterButtons/>
            <div className=
                     {"list"}>{tasks.map((task) => (<Task isReady={task.isReady} taskName={task.taskName} id={task.id}/>))}
            </div>
        </div>
    );
};