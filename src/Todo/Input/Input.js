import React, {useState} from "react";
import style from './Input.module.css'

const Input = ({addTodo, allCompleted}) => {

    const [userInput, setUserInput] = useState('')
    const [active, setActive] = useState(false)

    const change = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const submit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput('')
    }

    const checkCompleted = () => {
        setActive(!active);
        allCompleted(active);
    }

    return (
        <form onSubmit={submit}>
            <label onClick={checkCompleted} className={style.label}>❯</label>
            <input
                type="text"
                placeholder="What needs to be done?"
                className={style.input}
                value={userInput}
                onChange={change}
            />
        </form>
    )
}

export default Input