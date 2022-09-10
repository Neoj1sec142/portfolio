// Style Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
// Service Imports
import { Route, Routes } from 'react-router-dom';
// Page / Component Imports
import Main from './pages/Main';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
