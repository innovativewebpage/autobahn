import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link,useParams,useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const EditPost = () => {

const [title, setTitle] = useState("");
const [body, setBody] = useState("");

	
	const {id} = useParams();
	
	
	
	
const contacts = useSelector((state) => state);
const dispatch = useDispatch();
const history = useHistory();

const currentContact = contacts.find(
contact => contact.id === parseInt(id));


console.log('currentContact==',currentContact)

	useEffect(() => {
    setTitle(currentContact.title);
    setBody(currentContact.body);
  
  }, [currentContact]);



const handleSubmit = (e) => {
	e.preventDefault();
	

if(!title || !body )
	{
		return toast.warning("Please fill in all fileds");
	}


const data = {
	id:parseInt(id),
	title,
	body
};

dispatch({type:"UPDATE_CONTACT",payload:data});
	toast.success("Student updated successfully!!");
	history.push("/");

}

	
  return (
    <div className="container">
	
	

	<div className="row">
		<h1 className="display-3 text-center">
			Edit Contact {id}
		</h1>

	
<div className="col-md-6 shadow mx-auto">






{currentContact ? (
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
<input type="submit" value="Update Student"
className="btn btn-block btn-dark"
/>

<Link to ="/" className="btn btn-danger">Cancel</Link>


		</div>			


	</form>	
	) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
	
</div>
</div>
</div>
  );
};

export default EditPost;