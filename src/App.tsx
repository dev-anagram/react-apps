import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Counter from './pages/Counter.tsx'
import Calculator from './pages/Calculator.tsx'
import Home from './pages/Home.tsx'

function App() {
  return (
    <>
      <div className='grid grid-cols-1'>
        <Router>
          <nav className='font-bold text-xl bg-gray-800 px-5 py-2 flex gap-6 w-min mb-5 justify-center rounded-2xl'>
            <Link to = "/" className="nav-item">Home</Link>
            <Link to = "/counter" className="nav-item">Counter</Link>
            <Link to = "/calculator" className="nav-item">Calculator</Link>
          </nav>

          <div className='flex min-h-screen justify-center'>
            <Routes>
              <Route path = "*" element = {<Home />} />
              <Route path = "/counter" element = {<Counter />} />
              <Route path = "/calculator" element = {<Calculator />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
