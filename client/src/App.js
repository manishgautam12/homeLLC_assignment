import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Forgetpassword from './components/Forgetpassword';
import Combinedhome from './components/home/Combinedhome';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
          <Route path="/home" element={<Combinedhome />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
