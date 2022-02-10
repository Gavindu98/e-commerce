import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'
import '../App.css'
import Card from '../Components/card'

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
				<Card/>
				<input 
					
					type="submit"
					value='order'
				/>
			</div>
			<div>
				<p>Registered Customers</p>
			</div>
			{
				//End Customer
			}
			{
				//Start Admin
			}

			{
				//End Admin
			}
			<input 
				type="submit" 
				value="Logout" 
				// onClick={logoutUser} 
			/>
			
		</div>
	)
}

export default Welcome
