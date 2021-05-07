import React, {useState} from 'react'
import style from "./Filtres.module.css";

const FiltersNav = ({filtered}) => {

    const [allSelected, setAllSelected] = useState(true)
    const [activeSelected, setActiveSelected] = useState(false)
    const [completedSelected, setCompletedSelected] = useState(false)

    const setAll = () => {
        setAllSelected(true);
        setActiveSelected(false);
        setCompletedSelected(false);
        filtered('all');
    }

    const setActive = () => {
        setAllSelected(false);
        setActiveSelected(true);
        setCompletedSelected(false);
        filtered('active');
    }

    const setCompleted = () => {
        setAllSelected(false);
        setActiveSelected(false);
        setCompletedSelected(true);
        filtered('completed');
    }

    return (
        <nav className={style.filters}>
            <div className={style.item}>
                <a className={allSelected? style.active : style.none} onClick={setAll} href='#all'>All</a>
            </div>
            <div className={style.item}>
                <a className={activeSelected? style.active : style.none} onClick={setActive} href='#active'>Active</a>
            </div>
            <div className={style.item}>
                <a className={completedSelected? style.active : style.none} onClick={setCompleted} href='#completed'>Completed</a>
            </div>
        </nav>
    )
}

export default FiltersNav