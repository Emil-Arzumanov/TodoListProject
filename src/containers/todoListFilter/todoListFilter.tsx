import React from 'react';
import {observer} from "mobx-react-lite";

const TodoListFilter = () => {
    return (
        <section className="todoFilterSection">
            <button className="all selectedFilter">All</button>
            <button className="todo">TODO</button>
            <button className="done">DONE</button>
        </section>
    );
}

export default observer(TodoListFilter);