import React,{useState} from "react";

import { useDispatch,useSelector} from "react-redux";
import { toast } from "react-toastify";
import { useHistory } from "react-router";



const AddPost = () => {



const [title, setTitle] = useState("");
const [body, setBody] = useState("");



const posts = useSelector((state) => state);





const dispatch = useDispatch();
const history = useHistory();

const handleSubmit = (e) => {
	e.preventDefault();
	
	
	if(!title || !body )
	{
		return toast.warning("Please fill in all fileds");
	}
	const get_id = posts.slice(0,1);


	var next_id ="";
	if(get_id.length !=0 )
	{
		next_id =get_id[0].id+1;
	}
	const data = {
	id:next_id,
	title,
	body	
	};

dispatch({type:"ADD_POSTS",payload:data});
	toast.success("Post added successfully!!");
	history.push("/");

	


}


	
  return (
    <div className="container">
	<div className="row">
		<h1 className="display-3 text-center">
			Add Post
		</h1>




	
<div className="col-md-6 shadow mx-auto">
	<form onSubmit={handleSubmit}>
		<div className="form-group">
			
			<input type="text" 
			placeholder="Title" 
			className="form-control"
			value={title} 
			onChange={(e)=> setTitle(e.target.value)} 
			/>
			
		</div>			

		<div className="form-group">
			
			<input type="text" 
			placeholder="Body" 
			className="form-control"
			value={body} 
			onChange={(e)=> setBody(e.target.value)}
			
			/>
		
		
		</div>			


	
	
		
		<div className="form-group">
<input type="submit" value="Add Post"
className="btn btn-block btn-dark"
/>
		</div>			


	</form>	
</div>
</div>
</div>
  );
};

export default AddPost;