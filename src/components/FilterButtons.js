import '../styles/filterButtons.css'
import {useDispatch, useSelector} from "react-redux";
import {setFilterAC} from "../store/actions/actions";

import {actionTypes} from "../store/action-types/task";

export const FilterButtons = () => {
    const {SHOW_ALL, SHOW_READY, SHOW_ACTIVE} = actionTypes
    const dispatch = useDispatch()

    const setFilter = (filter) => {
        dispatch(setFilterAC(filter))
    }
    return (
        <div className = "conteiner">
            <button className="filterButton" onClick={() => setFilter(SHOW_ALL)}>All</button>
            <button className="filterButton" onClick={() => setFilter(SHOW_ACTIVE)}>Active</button>
            <button className="filterButton" onClick={() => setFilter(SHOW_READY)}>Ready</button>
        </div>
    )
}
