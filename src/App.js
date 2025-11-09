import './App.css';
import Swal from 'sweetalert2';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { useState } from 'react';

function App()
{
	let [data, setData] = useState({name: "", phoneNumber: "", age: "", check: false, salary: "500$"});
	let styleInput = "rounded-2xl font-bold bg-gray-100 p-1 mt-1 ";
	let styleLable = "font-bold text-white";
	let activeButton = "bg-blue-600 rounded-4xl mt-3 p-1 text-amber-50 font-bold text-xl cursor-pointer hover:bg-blue-900 duration-300";
	let inactiveButton = "bg-gray-600 rounded-4xl mt-3 p-1 text-amber-50 font-bold text-xl hover:bg-gray-700 duration-300";
	
	function ft_submit(event)
	{
		let fakePromise = new Promise((solved, reject) =>
		{
			setTimeout(() =>
			{
				if (data.phoneNumber.length < 10 || data.age < 18 || data.age > 80)
				{
					reject("bad send");
					Swal.fire
					({
						title: 'error!',
						text: 'phone number or age not correcr.',
						icon: 'error',
					});
				}
				else
				{
					solved("Send data done");
					Swal.fire
					({
						title: "succes",
						text: `hey ${data.name}, Your in bank now + ${data.salary}`,
						icon: "success",
					});
					setData({name: "", phoneNumber: "", age: "", check: false, salary: "500$"});
				}
			}, 2000);
		});
		event.preventDefault();
		toast.promise(fakePromise,
		{
			pending: "Wait a minute...",
			success: "Done Send Data",
			error: "try again",
		});
	}

	function handleInput(event, dataType_index)
	{
		let dataTypes = ["name", "phoneNumber", "age", "check", "salary"];
		for (let i = 0; i <= dataType_index; i++)
		{
			if (i === dataType_index)
			{
				if (i === 3)
					setData({...data, [dataTypes[i]]: event.target.checked});
				else
					setData({...data, [dataTypes[i]]: event.target.value});
				break ;
			}
		}
	}

	function checkData()
	{
		if (!data.name || data.name === "")
			return (false);
		if (!data.phoneNumber || data.phoneNumber === "")
			return (false);
		if (!data.age || data.age === "")
			return (false);
		return (true);
	}

	return (
		<div>
			<div className="flex items-center justify-center h-screen p-2">
				<form onSubmit={ft_submit} className='flex flex-col bg-green-700 rounded-2xl p-4 w-100'>
					<h2 className="p-4 text-center font-bold text-white text-xl">Take money</h2>
					<hr className="mb-2"/>
					<label className={styleLable}>Name</label>
					<input onChange={(event) => handleInput(event, 0)} value={data.name} className={styleInput} />
					<label className={styleLable}>Phone number</label>
					<input onChange={(event) => handleInput(event, 1)} value={data.phoneNumber} className={styleInput} type="number"/>
					<label className={styleLable}>Age</label>
					<input onChange={(event) => handleInput(event, 2)} value={data.age} className={styleInput} type="number"/>
					<label className={styleLable}>Are you salary!?</label>
					<input onChange={(event) => handleInput(event, 3)} checked={data.check} className="w-6 h-6 mx-auto mt-1 accent-blue-600" type="checkbox"/>
					<label className={styleLable}>Salary</label>
					<select value={data.salary} onChange={(event) => handleInput(event, 4)} className={styleInput}>
						<option>500$</option>
						<option>1000$</option>
						<option>10000$</option>
					</select>
					<input className={checkData() ? activeButton : inactiveButton} type="submit"/>
				</form>
			</div>
			<ToastContainer theme="dark" transition={Zoom}/>
		</div>
	);
}

export default App;
