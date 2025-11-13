import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import ShowPosts from './ShowPosts';
import { PostsData } from './Posts'

let p =
[
	{ id: 1, title: "Title1", content: "Hello World how are you younes" },
	{ id: 2, title: "Title2", content: "Hello World how are you wissal" },
	{ id: 3, title: "Title3", content: "Hello World how are you youbella" },
	{ id: 4, title: "Title4", content: "Hello World how are you wkannouf" },
];

function App()
{
	return (
			<PostsData.Provider value={p}>
					<div className="flex justify-center bg-red-500 w-[90%] mx-auto rounded-2xl mt-4 p-4">
						<Link to="/"><button className="rounded-4xl bg-green-700 text-white font-bold p-2 mr-4 cursor-pointer hover:bg-green-800 duration-700">Home</button></Link>
						{p.map((value, index) => (<Link key={index} to={"/ShowPosts/" + value.id}><button className="rounded-4xl bg-green-700 text-white font-bold p-2 mr-4 cursor-pointer hover:bg-green-800 duration-700">Post {value.id}</button></Link>))}
					</div>
					<Routes>
						<Route path="/ShowPosts/:postId" element={<ShowPosts />} />
						<Route path="*" element={<h3>404 Page Found</h3>} />
					</Routes>
			</PostsData.Provider>
	);
}

export default App;
