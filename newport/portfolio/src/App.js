// Style Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
// Service Imports
import { Route, Routes } from 'react-router-dom';
// Page / Component Imports
import Main from './pages/Main';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
