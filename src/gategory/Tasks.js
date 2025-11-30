import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Functions } from '../Functions';
import Swal from 'sweetalert2';

export default function	Task({id, title, content, isComplete})
{
	let	style_button_icons = "rounded-full border-2 cursor-pointer w-12 h-12 bg-amber-100 hover:bg-amber-200";
	const	functions = useContext(Functions);

	return (
		<div className="my-4 flex flex-col">
			<div className="bg-[#8b0000] h-16 rounded-md flex">
				<div onClick={() =>
				{
					Swal.fire
					({
						title: title,
						text: content,
						theme: "dark",
					})
				}} className="flex flex-col justify-center p-4 cursor-pointer overflow-hidden overflow-x-auto">
					<h3 className="font-bold text-xl text-amber-200">{title.length >= 10 ? title.substr(0, 10) + "..." : title}</h3>
					<p className="text-white">{content ? (content.length >= 10 ? content.substr(0, 10).trim() + "..." : content) : ""}</p>
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
