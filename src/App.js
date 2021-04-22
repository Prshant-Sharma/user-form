import './App.css';
import UserForm1 from './Components/UserForm1'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserForm2 from './Components/UserForm2';
import UserDetails from './Components/UserDetails';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={UserForm1}></Route>
          <Route exact path='/user-personal-details' component={UserForm2}></Route>
          <Route exact path='/user-details' component={UserDetails}></Route>
          <Route exact path='/edit-user/:id' component={EditUser}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
