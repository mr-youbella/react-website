import Task from './Tasks';

export default function	All({tasks})
{
	return (
		<>
			{tasks.map((value, index) => (<Task key={index} id={value.id} title={value.title} content={value.content} isComplete={value.isComplete}/>))}
		</>
	);
}
