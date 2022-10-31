import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {

const posts = useSelector((state1) => state1);	

var sorting = posts.sort((a, b) => (b.id - a.id));


const dispatch = useDispatch();


const deletePost = (id) => {
dispatch({type:"DELETE_POST",payload:id});
//toast.success("Delete post successfully");
};






	
	
  return (
    <div className="container">
	<div className="row">
		<div className="col-md-12 my-5 text-right">
			<Link to="/add" className="btn btn-outline-dark">
				Add POSTS

			</Link>					
		</div>


		<div className="col-md-6 mx-auto">
		
		
		 <table className="table table-hover">
            <thead className="table-header  text-center">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
			
			<tbody>
			{
                sorting.map((post, id) => (
                  <tr key={id}>
                    <td>{id+1}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                   
					 <td>
                      <Link
                        to={`/edit/${post.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
					  
									 
<button type="button"  
onClick={() => deletePost(post.id)}

className="btn btn-sm btn-danger">
                        Delete
                      </button>
					  
					  


					  
					 </td> 
					 </tr> 
					
					))
			  }	
             </tbody>
</table>
		</div>
	</div>
    </div>
  );
};

export default Home;