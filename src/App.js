import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';






/*
<Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
*/
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/sign' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
