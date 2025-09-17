import { useState } from "react"

export default function Todo(){
    interface todoItem {
        id: number;
        isCompleted: boolean;
        title: string;
        content: string;
    };

    const [list, setList] = useState<todoItem[]>([]);

    const addTodo = (title: string, content: string) => {
        if(content != "" && title != ""){
            const newTodo: todoItem = {
                id: Date.now(),
                isCompleted: false,
                title,
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
            <div className="grid grid-cols-1 max-w-xl bg-gray-800 p-4 rounded-lg mb-2 text-pretty" key={val.id}>
                <div className={val.isCompleted ? "line-through text-gray-400" : ""}>
                    <p className="font-extrabold text-2xl whitespace-normal break-words">{val.title}</p>
                    <p className="font-medium text-l whitespace-normal break-words">{val.content}</p>
                </div>
                <div className="flex justify-around">
                    <button className="button-reset" onClick={() => toggleTodo(val.id)}>{val.isCompleted ? "✅" : "❌"}</button>
                    <button className="button-remove" onClick={() => removeTodo(val.id)}>usuń</button>
                </div>
            </div>
        ))
    };

    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [newTodoContent, setNewTodoContent] = useState('');

    return(
        <div className="flex-col">
            <div>
                {renderList()}
            </div>
            <form className="content-start">
                <label className="font-bold text-xl" htmlFor="title">Title</label>
                <p><input className="todo-add" type="text" maxLength={50} name="title" onChange={(e) => setNewTodoTitle(e.target.value)} /></p>
                <label className="font-bold text-md" htmlFor="content">Content</label>
                <p><input className="todo-add" type="text" maxLength={500} name="content" onChange={(e) => setNewTodoContent(e.target.value)} /></p>
                <button className="button-add mt-2" type="button" onClick={() => addTodo(newTodoTitle, newTodoContent)}>Add</button>
            </form>
        </div>
    );
}
