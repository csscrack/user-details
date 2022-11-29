
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import AddUser from './components/add-user/AddUser';
import UpdateUser from './components/update-user/UpdateUser';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/add-user" component={AddUser}/>
       <Route exact path="/users/:id"  component={UpdateUser}/> 
     </Switch>
      
    </Router>

    </div>
  );
}

export default App;
