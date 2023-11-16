import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorite from './pages/Favorite';
import NotFound from './pages/NotFound';
import Result from './pages/Result';

function App() {

  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Details />} />
          <Route path="/projects" element={<Favorite />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/result" element={<Result />} />
        </Routes>


      </Router>
    </>
  )
}

export default App
