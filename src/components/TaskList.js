import {useDispatch, useSelector} from "react-redux";
import {getTaskList} from "../selectors/tasks";
import '../styles/taskList.css'

import {getFilter} from "../selectors/filter";
import {InputButtons} from "./InputButtons";
import {FilterButtons} from "./FilterButtons";
import {Task} from "./Task";
export const TaskList = () => {

    let tasks = useSelector(getTaskList);
    const currentFilter = useSelector(getFilter);

    if (currentFilter === 'SHOW_ACTIVE') {
        tasks = tasks.filter((task) => task.isReady === false);
    } else if (currentFilter === 'SHOW_DONE') {
        tasks = tasks.filter((task) => task.isReady === true);
    }


    return (
        <div>
            <InputButtons/>
            <FilterButtons/>
            <div className={"list"}>{tasks.map((task) => (<Task isReady={task.isReady} taskName={task.taskName} id={task.id}/>))}</div>
        </div>
    );
};