import React from "react";
import style from './Filtres.module.css'
import FiltersNav from "./FiltersNav";

const Filters = ({ clearCompleted, filtered, itemsLeft, countItems }) => {

    return (
        <div className={countItems > 0? style.none : style.hidden}>
            <div className={style.filtersWrapper}>
                <div className={style.itemLeft}>{itemsLeft} items left</div>
                <FiltersNav filtered={filtered}/>
                <div onClick={() => clearCompleted()} className={style.clearCompleted}>Clear completed</div>
            </div>
            <div className={style.filtersAfter1}/>
            <div className={style.filtersAfter2}/>
        </div>
    )
}

export default Filters