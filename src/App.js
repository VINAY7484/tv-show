import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ShowDetails from './components/ShowDetails';
import ShowList from './components/ShowList';
// import axios from 'axios';




const App = () => {
  return (
      <Router>
      <Routes>
          <Route path="/" element={<ShowList/>} />
          
          <Route path="/shows/:id" component={<ShowDetails/>} />
      </Routes>
      </Router>

 
  );
};

export default App;
