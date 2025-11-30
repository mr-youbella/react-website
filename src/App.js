import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MainTasks from './MainTasks';

window.addEventListener("storage", (event) => (localStorage.setItem(event.key, event.oldValue)));

function ButtonStart()
{
	return (
		<div className="h-screen flex justify-center items-center relative">
			<Link to="/MainTasks"><h2 className="bg-green-500 rounded-2xl border-amber-100 text-amber-100 font-bold text-2xl p-4 cursor-pointer duration-150 hover:bg-green-600 hover:text-gray-600">Go to your Tasks</h2></Link>
		</div>
	);
}

function	App()
{
	return (
		<div>
			<div className="bg-amber-50 w-full flex p-4 mb-3">
				<Link to="/"><h1 className="text-2xl font-bold">Todo List</h1></Link>
				<h2 className="text-xl text-amber-700 font-bold flex flex-1 justify-end"><a href="https://www.instagram.com/master_youbella/" target="_blank" rel="noreferrer">Master Youbella</a></h2>
			</div>
			<Routes>
				<Route path="*" element={<ButtonStart />} />
				<Route path="/MainTasks" element={<MainTasks />} />
			</Routes>
		</div>
	);
}

export default App;
