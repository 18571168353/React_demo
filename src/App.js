import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/" element={<Layout />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
