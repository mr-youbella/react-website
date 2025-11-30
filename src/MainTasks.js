import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { Functions } from './Functions';
import { useState } from 'react';
import All from './gategory/All';
import Complete from './gategory/Complete';
import UnComplete from './gategory/UnComplete';
import { useGategory } from './useReducer'

export default function	MainTasks()
{
	let			arr = [];
	const		style_button = "rounded-2xl font-bold p-2 border-2 border-black cursor-pointer transition-[background-color] duration-500 hover:text-white";
	const		style_button_active = "rounded-2xl font-bold p-2 border-2 border-black cursor-pointer bg-blue-600 font-bold text-white hover:bg-blue-700 transition-[background-color] duration-500 hover:text-white w-100";
	const		style_button_unactive = "rounded-2xl font-bold p-2 border-2 border-black cursor-not-allowed bg-gray-500 font-bold text-white w-100";
	const		[gategory_type, dispatch] = useGategory();
	const		[tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
	const		[input_task, setInputTask] = useState("");
	let			deleteTask = (id) => 
	{
		arr = tasks.filter((value) => (value.id !== id));
		setTasks(arr);
		localStorage.setItem("todoList", JSON.stringify(arr));
	};
	let			completeTask = (id) =>
	{
		arr = tasks.map((value) => (value.id === id ? {...value, isComplete: !value.isComplete} : value));
		setTasks(arr)
		localStorage.setItem("todoList", JSON.stringify(arr));
	};
	async function editTask(id)
	{
		let	title, content;
		
		let promise = await Swal.fire
		({
			title: "Hello",
			text: "Change title task:",
			input: "text",
			confirmButtonText: "Change", 
			confirmButtonColor: "green",
			showCancelButton: true,
			cancelButtonText: "Cancel",
			cancelButtonColor: "red"
		});
		if (promise.isConfirmed && promise.value)
		{
			toast.success("Title is changed...");
			title = promise.value;
		}
		else
			toast.error("Title is not changed...");
		promise = await Swal.fire
		({
			title: "Hello",
			text: "Change content task:",
			input: "text",
			confirmButtonText: "Change", 
			confirmButtonColor: "green",
			showCancelButton: true,
			cancelButtonText: "Cancel",
			cancelButtonColor: "red"
		});
		if (promise.isConfirmed && promise.value)
		{
			toast.success("Content is changed...");
			content = promise.value;
		}
		else
			toast.error("Content is not changed...");
		if (title)
		{
			arr = tasks.map((value) => (value.id === id ? {...value, title: title} : value));
			setTasks(arr);
			localStorage.setItem("todoList", JSON.stringify(arr));
		}
		if (content)
		{
			arr = tasks.map((value) => (value.id === id ? {...value, content: content} : value));
			setTasks(arr);
			localStorage.setItem("todoList", JSON.stringify(arr));
		}
	}

	return (
		<div className="rounded-4xl mb-13">
			<div className="bg-gray-100 px-10 p-4">
				<div>
					<h1 className="text-3xl font-bold text-center p-2">Todo List</h1>
				</div>
				<hr />
				<div className="flex p-2 justify-center gap-2">
					<button onClick={() => (dispatch("All"))} className={`${style_button} hover:bg-gray-500 w-20 ${gategory_type === "All" ? "bg-gray-500" : "bg-gray-300"}`}>All</button>
					<button onClick={() => (dispatch("Completed"))} className={`${style_button} hover:bg-green-500 ${gategory_type === "Completed" ? "bg-green-500" : "bg-green-300"}`}>Completed</button>
					<button onClick={() => (dispatch("UnCompleted"))} className={`${style_button} hover:bg-red-500 ${gategory_type === "UnCompleted" ? "bg-red-500" : "bg-red-300"}`}>UnCompleted</button>
				</div>
				<hr />
				<Functions.Provider value={{complete_task: completeTask, delete_task: deleteTask, edit_task: editTask}}>
					{gategory_type === "All" ? <All tasks={tasks}/> : gategory_type === "Completed" ? <Complete tasks={tasks}/> : gategory_type === "UnCompleted" ? <UnComplete tasks={tasks}/> : <></>}
				</Functions.Provider>
				<ToastContainer />
			</div>
			<form onSubmit={(event) => (event.preventDefault())} className="flex bottom-2 p-4 fixed w-full gap-2 bg-black rounded-2xl">
				<input value={input_task} onChange={(event) => (setInputTask(event.target.value))} className="border-2 border-gray-400 p-2 rounded-3xl font-bold placeholder:text-gray-500 flex-1 text-amber-50" placeholder="Enter task" type="text"></input>
				<button onClick={() =>
				{
				if (input_task && input_task.trim().length)
					{
						arr = [...tasks, {id: tasks.length + 1, title: input_task, isComplete: false}];
						setTasks(arr);
						localStorage.setItem("todoList", JSON.stringify(arr));
						setInputTask("");
					}
				}} className={`${input_task && input_task.trim().length ? style_button_active : style_button_unactive}`}>Add</button>
			</form>
		</div>
	);
}
