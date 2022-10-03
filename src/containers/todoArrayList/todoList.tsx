import React from 'react';

export const TodoArrayList = () => {
    return (
        <section className="todoListSection">
            <section className="todoListSection_element element_Done">
                <span className="element_span">TodoList Element</span>
                <button className="element_redButton">Undo</button>
                <button className="element_redButton">Delete</button>
            </section>
            <section className="todoListSection_element">
                <span className="element_span">TodoList Element</span>
                <button className="element_doButton">Do</button>
                <button className="element_redButton">Delete</button>
            </section>
            <section className="todoListSection_element">
                <span className="element_span">TodoList Element</span>
                <button className="element_doButton">Do</button>
                <button className="element_redButton">Delete</button>
            </section>
            <section className="todoListSection_element">
                <span className="element_span">TodoList Element</span>
                <button className="element_doButton">Do</button>
                <button className="element_redButton">Delete</button>
            </section>
        </section>
    );
}