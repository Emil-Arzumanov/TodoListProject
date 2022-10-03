import React from 'react';
import './App.scss';
import {TodoInput} from "./containers/todoInput/todoInput";
import {TodoListFilter} from "./containers/todoListFilter/todoListFilter";
import {TodoArrayList} from "./containers/todoArrayList/todoList";

function App() {
  return (
    <main className="App">
        <section className="mainSection">
            <TodoInput/>
            <TodoListFilter/>
            <TodoArrayList/>
        </section>
    </main>
  );
}

export default App;
