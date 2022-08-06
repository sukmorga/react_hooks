import axios from "axios";
import { useState } from "react";
import Hover from "./components/Hover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import useInput from "./hooks/useInput";
import useRequest from "./hooks/useRequest";


function App() {
    const [todos, loading, error] = useRequest(fetchTodos);


    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>Произошла ошибка при загрузке</h1>
    }


    return (
        <div>
            {todos && todos.map(todo =>
                <div key={todo.id} style={{ padding: 10 }}>{todo.id}. {todo.title}</div>
            )}
        </div>
    );
}

export default App;
