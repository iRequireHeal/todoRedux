import '../styles/filterButtons.css'

export const FilterButtons = () => {
    return (
        <div className = "conteiner">
            <button className="filterButton">All</button>
            <button className="filterButton">Active</button>
            <button className="filterButton">Ready</button>
        </div>
    )
}
