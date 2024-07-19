import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [todos, setTodos]= useState([])

fetch({})
.then((response)=>{response.json()})
.then((data)=>{})
.then((err)=>{err})


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TodoS</h1>
			<button className="btn btn-success" onClick={()=>{}}
			{todos.map((todo, imdex, array)=>{
				todos.length > 0? 
				<p>{todos.label}</p> : <p> Cargando...</p>
			})
		</div>
	);
};

export default Home;
