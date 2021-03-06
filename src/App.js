import './App.css';
import LandingPage from './components/landing-page/LandingPage';
import DesignerProfile from './components/designer-profile/DesignerProfile';
import BusinessProfile from './components/business-profile/BusinessProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/disigner/profile' element={<DesignerProfile/>}/>
           <Route path='/business/profile' element={<BusinessProfile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
