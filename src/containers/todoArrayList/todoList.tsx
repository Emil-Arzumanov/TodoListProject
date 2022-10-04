import React from 'react';
import {observer} from "mobx-react-lite";
import TodoListElem from "./todoListElem/todoListElem";

export const TodoArrayList = () => {
    return (
        <section className="todoListSection">
            <TodoListElem/>
        </section>
    );
}

export default observer(TodoArrayList)