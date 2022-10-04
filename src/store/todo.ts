import {makeAutoObservable} from "mobx";

interface TodoInArray {
    id: number,
    title: string,
    completed: boolean
}

class Todo {
    todoArr: TodoInArray[] = [
        {id: 1, title: "Do the test task", completed: true},
        {id: 2, title: "Do the test task", completed: false},
        {id: 3, title: "Do the test task", completed: false}
    ]
    newTodo: string = ""
    currentFilter = "all"

    constructor() {
        makeAutoObservable(this);
    }

    addTodo() {
        this.todoArr.push({id:this.todoArr.length+1, title:this.newTodo, completed: false});
        this.newTodo = "";
    }

    removeTodo(id: number) {
        this.todoArr = this.todoArr.filter(todo => todo.id !== id);
    }

    updateNewTodo(todo:string) {
        this.newTodo = todo;
    }

    updateTodo(id:number) {
        this.todoArr.forEach((todo,index) => {
            if(todo.id === id) this.todoArr[index].completed = !this.todoArr[index].completed;
        });
    }

    updateFilter(filter:string) {
        this.currentFilter = filter;
    }
}

const Store = new Todo();
export default Store;