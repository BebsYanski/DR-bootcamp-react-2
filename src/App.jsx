import { useState, useEffect } from 'react'
import Mainbar from './components/Mainbar/Mainbar'
import Middlebar from './components/Middlebar/Middlebar'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
	return (
		<div>
			<Navbar />
			<Middlebar text="React renders HTML to the web page by using a function" />
			<Middlebar text=" In the render() method, we can read" />
			<div style={{ display: 'flex' }}>
				<Sidebar />
				<Mainbar />
			</div>
		</div>
	)
}

export default App