import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Counter from './pages/Counter.tsx'
import Calculator from './pages/Calculator.tsx'
import Home from './pages/Home.tsx'
import Todo from './pages/Todo.tsx'
import Weather from './pages/Weather.tsx'

function App() {
  return (
    <>
      <div className='grid grid-cols-1 min-w-lg items-center justify-center'>
        <Router>
          <nav className='font-bold text-xl bg-gray-800 px-5 py-2 flex gap-3 mb-5 justify-center rounded-2xl'>
            <Link to = "/" className="nav-item">Home</Link>
            <Link to = "/counter" className="nav-item">Counter</Link>
            <Link to = "/calculator" className="nav-item">Calculator</Link>
            <Link to = "/todo" className='nav-item'>Todo</Link>
            <Link to = "/weather" className='nav-item'>Weather</Link>
          </nav>

          <div className='flex min-h-screen justify-center'>
            <Routes>
              <Route path = "*" element = {<Home />} />
              <Route path = "/counter" element = {<Counter />} />
              <Route path = "/calculator" element = {<Calculator />} />
              <Route path = "/todo" element = {<Todo />}></Route>
              <Route path = "/weather" element = {<Weather />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
