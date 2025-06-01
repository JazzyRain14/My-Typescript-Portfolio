
import { useState, useEffect } from "react"

interface MyTodoAPP {
    id: number;
    todo: string;
    time: string;
    isCompleted: boolean;
}

export default function Todo() {
    const [todoData, setTodoData] = useState<MyTodoAPP[]>(() => {
        const stored = localStorage.getItem("my-todos");
        return stored ? JSON.parse(stored) : [];
    });

    const [myTodo, setMyTodo] = useState("");
    const [myTodoTime, setMyTodoTime] = useState("");

    useEffect(() => {
        localStorage.setItem('my-todos', JSON.stringify(todoData))
    }, [todoData])


    const addTodo = () => {
        if (myTodo.trim() === "" || myTodoTime.trim() === "") return;

        const newTodo: MyTodoAPP = {
            id: Date.now(),
            todo: myTodo.trim(),
            time: myTodoTime,
            isCompleted: false,
        }

        setTodoData([...todoData, newTodo])
        setMyTodo("")
        setMyTodoTime("")
    };

    const deleteTodo = (id: number) => {
        setTodoData((prev) => prev.filter((todoData) => todoData.id !== id));
    }





    return (
        <>
            <div className=" min-w-full flex flex-col items-center justify-center gap-5">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4  w-full md:max-w-[600px]">
                    <legend className="fieldset-legend text-lg">Todo App</legend>

                    <form action="" onSubmit={addTodo}>
                        <label className="label">What I need to do ...</label>
                        <input
                            value={myTodo}
                            onChange={(e) => setMyTodo(e.target.value)}
                            type="text"
                            className="input w-full"
                            placeholder="eg: I need to wash my clothes..." />

                        <label className="label mt-4">The time I need to do this ...</label>
                        <input
                            value={myTodoTime}
                            onChange={(e) => setMyTodoTime(e.target.value)}
                            type="time"
                            className="input w-full" />

                        <button type="submit" className="btn btn-neutral mt-4">Add Todo</button>
                    </form>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 w-full md:max-w-[600px]">
                    <legend className="fieldset-legend text-lg">My Todo List</legend>
                    <div>
                        {todoData.length == 0 ? (<p>Nothing in your todo</p>) : (
                            <ul>
                                {todoData.map((todo) => (
                                    <li
                                        key={todo.id}
                                        className="flex justify-between items-center p-2 border-b border-gray-50/20">
                                        <div className="flex flex-col gap-2">
                                            <span className="font-semibold text-base">{todo.todo}</span>
                                            <span className="font-semibold">At: {todo.time}</span>
                                        </div>
                                        <button
                                            onClick={() => deleteTodo(todo.id)}
                                            className="btn btn-sm btn-error">Delete</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </fieldset>
            </div>
        </>
    )
}
