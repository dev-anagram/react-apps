import { useState } from "react"

export default function Todo(){
    interface todoItem {
        id: number;
        isCompleted: boolean;
        content: string;
    };

    const [list, setList] = useState<todoItem[]>([]);

    const addTodo = (content: string) => {
        if(content != ""){
            const newTodo: todoItem = {
                id: Date.now(),
                isCompleted: false,
                content,
            };

            setList((prev) => [...prev, newTodo]);
        }
    };

    const removeTodo = (id: number) => {
        setList((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setList((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    const renderList = () => {
        return list.map((val: todoItem) => (
            <tr key={val.id}>
                <td><button onClick={() => toggleTodo(val.id)}>{val.isCompleted ? "✅" : "❌"}</button></td>
                <td>{val.content}</td>
                <td><button onClick={() => removeTodo(val.id)}>usuń</button></td>
            </tr>
        ))
    };

    const [newTodoContent, setNewTodoContent] = useState('');

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Is Completed</th>
                        <th>Content</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
            <form>
                <input type="text" onChange={(e) => setNewTodoContent(e.target.value)}></input>
                <button type="button" onClick={() => addTodo(newTodoContent)}>dodaj</button>
            </form>
        </div>
    );
}
