import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import NavBar from './components/NavBar';
import MainTable from './pages/Main';
import AddInfo from './pages/AddInfo';
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';

// // function to guard the component for private access
// const authGuard = (Component) => () => {
//   return localStorage.getItem("token") ? (
//     <Component />
//   ) : (
//     <Redirect to="/" />
//   );
// };

function App(props) {
  return (
     <Router {...props}>
       <div>
         <NavBar />
         <Switch>
           <Route path='/' exact component={Login} />
           <Route path='/main' exact component={MainTable} />
           <Route path='/add' exact component={AddInfo} />
           <Route path='*' exact component={NotFound} />
         </Switch>
       </div>
     </Router>
  );
}

export default App;