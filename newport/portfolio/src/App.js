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
import ProjectDetail from './components/ProjectDetail'
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:fav' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
