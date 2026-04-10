import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <Router>
            <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <Link to="/" style={{ margin: '10px' }}>Inicio</Link>
                <Link to="/about" style={{ margin: '10px' }}>Acerca de</Link>
            </nav>

            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;