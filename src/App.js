import React, {useEffect, useState} from 'react'
import Filters from './Todo/Filters/Filters'
import Header from "./Todo/Header/Header";
import Footer from "./Todo/Footer/Footer";
import List from "./Todo/List/List";
import Input from "./Todo/Input/Input";

const App = (props) => {

    function getClick(event) {
        setClick(true)
        setClickEvent(event)
    }

    const ACTIVE = 'active'
    const ALL = 'all'
    const COMPLETED = 'completed'

    const [list, setList] = useState(props.state)
    const [itemsLeft, setItemsLeft] = useState(list.length)
    const [click, setClick] = useState(false)
    const [clickEvent, setClickEvent] = useState()

    const addTodo = (value) => {
        if (value !== "") {
            let newList = [...list, {id: list.length + 1, todo: value, completed: false, visibility: true}]
            setList(newList)
            setItemsLeft(itemsLeft + 1)
        }
    }

    const allCompleted = (active) => {
        if (active) {
            let newList = list.map(elem => {
                return {...elem, completed: true}
            })
            setList(newList)
            setItemsLeft(0)
        } else {
            let newList = list.map(elem => {
                return {...elem, completed: false}
            })
            setList(newList)
            setItemsLeft(list.length)
        }
    }

    const checkItem = (id) => {
        let newList = list.map((elem) => elem.id === id ? (setItemsLeft(elem.completed ? itemsLeft + 1 : itemsLeft - 1), {
            ...elem,
            completed: !elem.completed
        }) : {...elem});
        setList(newList)
    }

    const editTodo = (id, value) => {
        let newList = list.map((elem) => elem.id === id ? {...elem, todo: value} : {...elem})
        setList(newList)
    }

    const trashItem = (id) => {
        let newList = list.filter((elem) => elem.id !== id);
        setList(newList)
        setItemsLeft(itemsLeft - 1)
    }

    const clearCompleted = () => {
        let newList = list.filter(elem => !elem.completed);
        setList(newList)
    }


    const filtered = (f) => {
        if (f === ALL) {
            let newList = list.map((elem) => {
                return {...elem, visibility: true}
            })
            setList(newList)
        } else if (f === ACTIVE) {
            let newList = list.map((elem) => {
                return elem.completed ? {...elem, visibility: false} : {...elem, visibility: true}
            })
            setList(newList)
        } else if (f === COMPLETED) {
            let newList = list.map((elem) => {
                return elem.completed ? {...elem, visibility: true} : {...elem, visibility: false}
            })
            setList(newList)
        }
    }

    useEffect(() => {
        setClick(false)
    })

    return (
        <div className='body' onClick={getClick}>
        <div className='wrapper'>
            <Header/>
            <Input addTodo={addTodo} allCompleted={allCompleted}/>
            <List list={list} checkItem={checkItem} trashItem={trashItem} editTodo={editTodo} click={click}
                  clickEvent={clickEvent}/>
            <Filters clearCompleted={clearCompleted} filtered={filtered} itemsLeft={itemsLeft}
                     countItems={list.length}/>
            <Footer/>
        </div>
        </div>


    );
}

export default App;
