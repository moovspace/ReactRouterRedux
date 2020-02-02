import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import './App.css';

// Import components
import Home from './components/Home'
import About from './components/About'

// const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then((res) => res.json()).then((posts) => posts)

// store.subscribe(() => {
//   console.log("Store subscriber!");
//   console.log(store.getState());
// });

// // Run action on reducer and change the state
// store.dispatch(fetchPosts);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">

          <header className="header">
            <NavLink exact to="/" className="link" activeClassName="link-active"> Home </NavLink>
            <NavLink to="/about" className="link" activeClassName="link-active"> About </NavLink>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
