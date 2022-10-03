import React from 'react';

export const TodoListFilter = () => {
    return (
        <section className="todoFilterSection">
            <button className="all selectedFilter">All</button>
            <button className="todo">TODO</button>
            <button className="done">DONE</button>
        </section>
    );
}