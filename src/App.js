import './App.css';
import Swal from 'sweetalert2';
import { Functions } from './Functions';
import { useState } from 'react';
import All from './gategory/All';
import Complete from './gategory/Complete';
import UnComplete from './gategory/UnComplete';

function	App()
{
	let			style_button = "rounded-2xl font-bold p-2 border-2 border-black cursor-pointer transition-[background-color] duration-500 hover:text-white";
	const		[category_type, setGategoryType] = useState("All");
	const		[tasks, setTasks] = useState([]);
	const		[input_task, setInputTask] = useState("");
	let			deleteTask = (id) => (setTasks(tasks.filter((value) => (value.id !== id))));
	let			completeTask = (id) => (setTasks(tasks.map((value) => (value.id === id ? {...value, isComplete: !value.isComplete} : value))));
	function editTask(id)
	{
	  
	}
	

	return (
		<div className="h-screen mx-auto flex justify-center items-center">
			<div className="bg-gray-100 rounded-4xl px-10 p-4">
				<div>
					<h1 className="text-3xl font-bold text-center p-2">Todo List</h1>
				</div>
				<hr />
				<div className="flex p-2 justify-center gap-2">
					<button onClick={() => (setGategoryType("All"))} className={`${style_button} hover:bg-gray-500 w-20 ${category_type === "All" ? "bg-gray-500" : "bg-gray-300"}`}>All</button>
					<button onClick={() => (setGategoryType("Completed"))} className={`${style_button} hover:bg-green-500 ${category_type === "Completed" ? "bg-green-500" : "bg-green-300"}`}>Completed</button>
					<button onClick={() => (setGategoryType("UnCompleted"))} className={`${style_button} hover:bg-red-500 ${category_type === "UnCompleted" ? "bg-red-500" : "bg-red-300"}`}>UnCompleted</button>
				</div>
				<hr />
				<Functions.Provider value={{complete_task: completeTask, delete_task: deleteTask, edit_task: editTask}}>
					{category_type === "All" ? <All tasks={tasks}/> : category_type === "Completed" ? <Complete tasks={tasks}/> : category_type === "UnCompleted" ? <UnComplete tasks={tasks}/> : <></>}
				</Functions.Provider>
				<form onSubmit={(event) => (event.preventDefault())} className="mt-4 flex gap-2">
					<input value={input_task} onChange={(event) => (setInputTask(event.target.value))} className="border-2 border-gray-400 p-2 rounded-3xl font-bold placeholder:text-gray-500" placeholder="Enter task" type="text"></input>
					<button onClick={() =>
					{
						if (input_task)
							setTasks([...tasks, {id: tasks.length + 1, title: input_task, content: "NULL", isComplete: false}]);
						setInputTask("");
					}} className={`${style_button} bg-blue-600 font-bold text-white hover:bg-blue-700 flex-1`}>Add</button>
				</form>
			</div>
		</div>
	);
}

export default App;
