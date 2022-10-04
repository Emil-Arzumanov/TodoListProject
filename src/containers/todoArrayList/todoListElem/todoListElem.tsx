import React from 'react';
import Store from '../../../store/todo';
import {observer} from "mobx-react-lite";

const TodoListElem = () => {
    return (
        <>
            {
                Store.todoArr.map(todo => {
                    return (
                        <section
                            className={todo.completed ? "todoListSection_element element_Done" : "todoListSection_element"}
                            key={todo.id}
                        >
                            <span className="element_span">{todo.title}</span>
                            {
                                todo.completed
                                    ? <button
                                        className="element_doButton element_redButton"
                                        onClick={() => {Store.updateTodo(todo.id)}}
                                    >Undo</button>
                                    : <button
                                        className="element_doButton"
                                        onClick={() => {Store.updateTodo(todo.id)}}
                                    >Do</button>
                            }
                            <button
                                className="element_redButton"
                                onClick={() => {Store.removeTodo(todo.id)}}
                            >Delete</button>
                        </section>
                    );
                })
            }
        </>
    );
}

export default observer(TodoListElem)