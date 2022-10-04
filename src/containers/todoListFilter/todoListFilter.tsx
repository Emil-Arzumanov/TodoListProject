import React from 'react';
import {observer} from "mobx-react-lite";
import Store from "../../store/todo";

const TodoListFilter = () => {
    return (
        <section className="todoFilterSection">
            <button className={Store.currentFilter === "all" ? "all selectedFilter" : "all"}
                    onClick={() => {Store.updateFilter("all")}}
            >All</button>
            <button className={Store.currentFilter === "todo" ? "todo selectedFilter" : "todo"}
                    onClick={() => {Store.updateFilter("todo")}}
            >TODO</button>
            <button className={Store.currentFilter === "done" ? "done selectedFilter" : "done"}
                    onClick={() => {Store.updateFilter("done")}}
            >DONE</button>
        </section>
    );
}

export default observer(TodoListFilter);