import './App.css'

import { Link, Route, useLocation } from "wouter";
import Home from './pages/Home';
import { Menubar } from 'primereact/menubar';

function App() {
  const [location, setLocation] = useLocation();
 
  const items = [
    {
      label:'Home',
      icon:'pi pi-fw pi-home',
       command:() =>  setLocation("/"),
   },
    {
       label:'Projects',
       icon:'pi pi-fw pi-book',
        command:() =>  setLocation("/Projects"),
    }
 ];
 
  
  return (
   
      <div className="App">
     
      <div className="main-container" >
        <Route path="/">
          {(params) => <Home></Home>}
        </Route>

        <Route path="/Projects">
          {(params) => <h1>??</h1>}
      </Route>
      </div>
    </div>
    
  )
}

export default App
