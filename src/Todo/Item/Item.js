import React, {useState, useRef, useEffect} from 'react'
import style from './Item.module.css'
import classNames from "classnames";

function outsideClick(ref, click) {
     if (ref.current && null){}
}

const Item = ({item, checkItem, trashItem, editTodo, click, clickEvent}) => {

    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(item.todo)

    const ENTER_KEY = 13;
    const ESC_KEY = 27;

    useEffect(() => {
        if (click && inputRef.current && !inputRef.current.contains(clickEvent.target)) {
            clickEvent.preventDefault();
            editTodo(item.id, value)
            setEdit(false)
        }
    })

    const focusTodo = () => {
        setEdit(true)
    }

    const change = (e) => {
        setValue(e.currentTarget.value)
    }

    const submit = (e) => {
        e.preventDefault();
        editTodo(item.id, value)
        setEdit(false)
    }

    const keyDown = (event) => {
        if ((event.keyCode === ENTER_KEY) || (event.keyCode === ESC_KEY)){
            event.preventDefault();
            editTodo(item.id, value)
            setEdit(false)
        }
    }

    const inputRef = useRef(null)
    outsideClick(inputRef, click)

    return (
        <li className={item.visibility ? style.item : style.hidden}>
            <div onClick={() => checkItem(item.id)}
                 className={classNames(item.completed ? style.checkButtonCompleted : style.checkButton, edit? style.hidden: style.checkButton)}/>
            {edit ? <form onSubmit={submit}>
                <input type="text" defaultValue={item.todo} ref={inputRef} onChange={change} onKeyDown={(e) => keyDown(e)} className={style.input}/>
            </form> : <div onDoubleClick={focusTodo}
                                    className={item.completed ? style.completed : style.text}>{item.todo}</div>}

            <button onClick={() => trashItem(item.id)} className={edit? style.hidden : style.trashButton}>&times;</button>
        </li>
    )
}

export default Item