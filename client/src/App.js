import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import MainTable from './pages/Main';
import Login from './pages/Login/Login';
import AddInfo from './pages/AddInfo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
     <Router>
       <div>
         <NavBar />
         <Switch>
           <Route path='/' exact component={Login} />
           <Route path='/main' exact component={MainTable} />
           <Route path='/add' exact component={AddInfo} />
         </Switch>
       </div>
     </Router>
  );
}

export default App;