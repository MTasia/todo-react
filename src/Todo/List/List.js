import React from "react";
import style from "./List.module.css";
import Item from "../Item/Item";

const List = ({list, checkItem, trashItem, editTodo, click, clickEvent}) => {
    return (
        <div className={style.list}>
            {list.map((elem) => <Item item={elem} key={elem.id} checkItem={checkItem} trashItem={trashItem}
                                      editTodo={editTodo} click={click} clickEvent={clickEvent}/>)}
        </div>
    )
}

export default List