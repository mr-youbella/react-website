import { useReducer } from "react";

const	updateGategory = (preValue, action) => {return (action)};
export		function useGategory()
{
	const	setGategory = useReducer(updateGategory, "All");
	return (setGategory);
}
