import React from 'react';
import {observer} from "mobx-react-lite";
import TodoListElem from "./todoListElem/todoListElem";
import Store from "../../store/todo";

const TodoArrayList = () => {
    return (
        <section className="todoListSection">
            {
                Store.todoArr.map(todo => {
                    if(Store.currentFilter === "done" && !todo.completed) return "";
                    if(Store.currentFilter === "todo" && todo.completed) return "";
                    let sectionClassName = todo.completed ? "todoListSection_element element_Done" : "todoListSection_element";
                    let buttonClassName = todo.completed ? "element_doButton element_redButton" : "element_doButton";
                    return (
                        <TodoListElem sectionClassName={sectionClassName}
                                      buttonClassName={buttonClassName}
                                      id={todo.id}
                                      title={todo.title}
                                      completed={todo.completed}
                                      key={todo.id}
                        />
                    );
                })
            }
        </section>
    );
}

export default observer(TodoArrayList)