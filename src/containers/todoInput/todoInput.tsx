import React from 'react';
import {observer} from "mobx-react-lite";
import Store from "../../store/todo";

const TodoInput = () => {
    return (
        <section className="todoInputSection">
            <input className="todoInputSection_input"
                   type="text"
                   placeholder="New TODO"
                   onChange={(event) => {Store.updateNewTodo(event.target.value)}}
                   value={Store.newTodo}
            />
            <button className="todoInputSection_button"
                    onClick={() => {Store.addTodo()}}
            >Add new task</button>
        </section>
    );
};

export default observer(TodoInput)