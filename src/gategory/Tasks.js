import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Functions } from '../Functions';

export default function	Task({id, title, content, isComplete})
{
	let	style_button_icons = "rounded-full border-2 cursor-pointer w-12 h-12 bg-amber-100 hover:bg-amber-200";
	const	functions = useContext(Functions);

	return (
		<div className="my-4 flex flex-col ">
			<div className="bg-[#8b0000] h-16 rounded-md flex">
				<div className="flex flex-col justify-center p-4">
					<h3 className="font-bold text-xl text-amber-200">{title}</h3>
					<p className="text-white">{content}</p>
				</div>
				<div className="flex flex-2 gap-4 justify-end items-center p-4">
					<button onClick={() => (functions.edit_task(id))} className={`${style_button_icons} text-blue-500`}>
						<FontAwesomeIcon icon={faPenToSquare} />
					</button>
					<button onClick={() => (functions.complete_task(id))} className={`${style_button_icons} text-green-600 ${isComplete ? "bg-green-800 hover:bg-green-900" : ""}`}>
						<FontAwesomeIcon icon={faCheck} />
					</button>
					<button onClick={() => (functions.delete_task(id))} className={`${style_button_icons} text-red-600`}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
				</div>
			</div>
		</div>
	);
}
