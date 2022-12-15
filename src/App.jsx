import { useState, useEffect } from 'react'
import Button from './components/Button/Button'
import Bulb from './components/Bulb/Bulb'
import Person from './components/Person/Person'

function App() {
	const [isOn, setIsOn] = useState(true)
	const [count2, setCount2] = useState(3)


	const handleClickButton = () => {
		setIsOn(!isOn)
	}

	useEffect(() => {
		console.log('First time');
	}, [])

	useEffect(() => {
		console.log('count changed');
	}, [isOn])

	useEffect(() => {
		console.log('something changed');
	})

	const students = [
		{ name: 'John', age: 25 },
		{ name: 'Peter', age: 24 },
		{ name: 'Yaya', age: 22 },
		{ name: 'Yoyo', age: 252 },
		{ name: 'YiYi', age: 22 },
		{ name: 'Nana', age: 24 },
		{ name: 'OhOh', age: 27 },
		{ name: 'Jeff', age: 2 },
		{ name: 'Jiff', age: 23 },

	]

	return (
		<div>
			<Button onClick={handleClickButton} />
			{students.map((student) => <Person name={student.name} age={student.age} />)}
		</div>
	)
}

export default App