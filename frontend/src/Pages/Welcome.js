import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
//import Card from '../Components/card'

const Welcome = () => {
	// const history = useHistory()
	// const [user, setUser] = useState('User')

	// useEffect(() => {
	// 	const token = localStorage.getItem('token')
	// 	if (token) {
	// 		const authUser = jwt.decode(token)
	// 		if (!authUser) {
	// 			localStorage.removeItem('token')
	// 			history.replace('/login')
	// 		} else {
	// 			setUser(authUser)
	// 		}
	// 	} else {
	// 		alert('Please Login')
	// 		history.replace('/login')
	// 	}
	// }, [])

	// const logoutUser = () => {
	// 	alert('Logged Out')
	// 	localStorage.removeItem('token')
	// 	history.replace('/login')
	// }
	//called post
		// constructor(props){
		//super(props);
		// super(props);
		// this.state={
		// 	posts:[]
		//};
		//}
	// componentDidMount=()=>{
	// 	this.retrivePosts();
	// }	
	
	//get request
	// const retrivePosts =() =>{
	// 	axios.get("http://localhost:5000/posts").then(res =>{
	// 		if(res.data.success){
	// 			this.useState({
	// 				posts:res.data.existingPosts
	// 			});
	// 			console.log(this.state.posts)
	// 		}
	// 	});
	// }
	return (
		<div>
			<div>
			<h1>Prabha Fashion </h1>
			<h2>Choose your baby clothes, sleepers , Bath Items ,Grooming/First Aid Tools,
				Bedding and Sleep Needs </h2>
				
			{/* <h3>Welcome {user.name}</h3> */}
			
			</div>
			<div>
				<h5>Find your Items....</h5>
			</div>
			{
			// Start Customer part
			}
			
			<div className='card-container'>
				
				<table class="table">
					<thead>
						<tr>
							<th scope="col">Id</th>	
							<th scope="col">Item Topic</th>	
							<th scope="col">Description</th>	
							<th scope="col">Category</th>	
							<th scope="col">price</th>	
							<th scope="col">Action</th>
						</tr>
					</thead>
						<body>
						{/* {this.state.posts.map(posts,index =>{ */}
							<tr>
								<td>Dummy</td>
								<td>Dummy</td>
								<td>Dummy</td>
								<td>Dummy</td>
								<td>Dummy</td>
								{/* <td scope="row">{index+1}</td>
								<td scope="row">{posts.topic}</td>
								<td scope="row">{posts.description}</td>
								<td scope="row">{posts.category}</td>
								<td scope="row">{posts.price}</td> */}
								<td>
									<a className="btn btn-warning" href="#">
										Edit
									</a>
									<a className="btn btn-danger" href="#">
										Delete
									</a>
								</td>
							</tr>
						{/* })} */}
						</body>
					
				</table>
				
				
				<input 
					
					type="submit"
					value='order'
				/>
			</div>
			<div>
				<p>Registered Customers</p>
			</div>
			
			<input 
				type="submit" 
				value="Logout" 
				// onClick={logoutUser} 
			/>
			
		</div>
	)
}

export default Welcome
