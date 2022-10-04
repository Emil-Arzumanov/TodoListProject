import React from 'react';
import Store from '../../../store/todo';
import {observer} from "mobx-react-lite";

interface propsInterface {
    sectionClassName:string,
    id:number,
    title:string,
    buttonClassName:string,
    completed:boolean
}

const TodoListElem = (props:propsInterface) => {
    return (
        <section className={props.sectionClassName}>
            <span className="element_span">{props.title}</span>
            <button className={props.buttonClassName}
                    onClick={() => {
                        Store.updateTodo(props.id)
                    }}
            >{props.completed ? "Undo" : "Do"}
            </button>
            <button className="element_redButton"
                    onClick={() => {
                        Store.removeTodo(props.id);
                        console.log(Store.todoArr);
                    }}
            >Delete
            </button>
        </section>

    );
}

export default observer(TodoListElem);