import React from 'react';

export const TodoInput = () => {
    return (
        <section className="todoInputSection">
            <input className="todoInputSection_input" type="text" placeholder="New TODO"/>
            <button className="todoInputSection_button">Add new task</button>
        </section>
    );
}