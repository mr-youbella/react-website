	import { useContext } from "react";
	import { PostsData } from "./Posts";
	import { useParams } from "react-router-dom";

	export default function ShowPosts()
	{
		let Posts = useContext(PostsData);
		let id = useParams();
		let post = Posts.find((value) => (value.id === +id.postId));
		let style;
		switch (+id.postId)
		{
			case 1: style = "bg-green-300"; break;
			case 2: style = "bg-green-400"; break;
			case 3: style = "bg-green-500"; break;
			case 4: style = "bg-green-600"; break;
			default: style = "bg-gray-300";
		}

			if (post)
			{
				return (
					<div className={style.concat(" p-4 text-4xl text-white m-4 text-center selection:text-amber-200 selection:bg-black")}>
						<h2>{post.title}</h2>
						<p>{post.content}</p>
					</div>
				);
			}
			return (<h1>no post</h1>);
		
	}
