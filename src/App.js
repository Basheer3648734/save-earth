import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from './pages/Home/Home' 
import Oath from './pages/oath/oath'
function App() {
  const [load,setLoad]=useState(true);
  return (
    <div className="app">
      <Router>
       <Switch>
         <Route path="/oath" exact>
           <Oath/>
         </Route>
         <Route path="/">
          <Home load={load} setLoad={setLoad}/>
         </Route>
       </Switch>
        </Router>      
    </div>
  );
}

export default App;
