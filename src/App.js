import './App.css';
import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurTeam from './Components/People/OurTeam';
import Students from './Components/People/Students';
import Publication from './Components/Research/Publication';
import Project from './Components/Research/Project';
import Material from './Components/Resources/Material';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = 'ourteam' element={<OurTeam />} />
        <Route path = 'students' element={<Students />}/>
        <Route path = 'publication' element={<Publication />}/>
        <Route path = 'project' element={<Project />}/>
        <Route path = 'material' element={<Material />}/>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
