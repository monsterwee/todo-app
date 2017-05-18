import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ShowTodo from './components/ShowTodo'
import EditTodo from './components/EditTodo'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo/1">Todo 1</Link></li>
            <li><Link to="/todo/2">Todo 2</Link></li>
          </ul>
          <hr/>

           <Route exact path="/" component={Home}/>
           <Route path="/todo/:topicId/edit" component={EditTodo}/>
           <Route path="/todo/:topicId" exact component={ShowTodo}/>
        </div>
      </Router>
    );
  }
}

export default App;
