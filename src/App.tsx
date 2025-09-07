import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Counter from './pages/Counter.tsx'
import Calculator from './pages/Calculator.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <>
      <Router>
        <nav className='bg-gray-800 p-4 flex gap-4 w-2xl mb-5 text-white justify-center rounded-2xl'>
          <Link to = "/" className="hover:bg-gray-700 px-3 py-1 rounded">Home</Link>
          <Link to = "/counter" className="hover:bg-gray-700 px-3 py-1 rounded">Counter</Link>
          <Link to = "/calculator" className="hover:bg-gray-700 px-3 py-1 rounded">Calculator</Link>
        </nav>

        <div className='flex min-h-screen justify-center'>
          <Routes>
            <Route path = "*" element = {<Home />} />
            <Route path = "/counter" element = {<Counter />} />
            <Route path = "/calculator" element = {<Calculator />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
