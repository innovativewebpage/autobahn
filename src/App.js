import React,{useEffect,useState} from 'react';

import axios from "axios";
import { useDispatch } from 'react-redux';
import { Route,Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";






const App = () => {
	
	const[datas,setData] = useState([]);	
	const[loading, setLoading] = useState(false);
	
	const dispatch = useDispatch(); 
	
	 useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	  const data = res.data.sort((a, b) => a - b).reverse();
	  setData(data.slice(0,10));
      setLoading(false);
    };

    fetchPosts();
	
  }, []);
  dispatch({type:"GET_ALL_DATA",payload:datas});
  
  
	
  return (
     <div className="App">
      <ToastContainer />
      <Navbar />
	  
	  <Switch>
	<Route exact path="/" component={()=><Home/>} /> 
	<Route exact path="/add" component={()=><AddPost/>} /> 
	<Route exact path="/edit/:id" component={()=><EditPost/>} /> 
	 
	 
	</Switch>
      </div>
	
	
  );
}

export default App;
