import Task from './Tasks';

export default function	UnComplete({tasks})
{
	return (
		<>
			{tasks.map((value, index) => (!value.isComplete ? <Task key={index} id={value.id} title={value.title} content={value.content} isComplete={value.isComplete}/> : <></>))}
		</>
	);
}
