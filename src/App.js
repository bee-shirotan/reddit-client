import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Reddit from './components/Reddit';


class App extends React.Component {

  state = {
    posts: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5}
    ]
  };

  renderPosts = (routerProps) => {
    let postId = parseInt(routerProps.match.params.id);
    let foundPost = this.state.posts.find(post => post.id === postId);
    return (foundPost ? <Post post={foundPost} /> : <NotFound />);
  }

  render () {
    return (
      <div className="App">
        {/* <div id="topBar">
          <button type="button" class="topButtons"> home page switch pannel needs to go here</button>
          <button type="button" class="topButtons"> next page go here</button>
          <button type="button" class="topButtons"> more switch go here but i don't know how</button>
        </div> */}
        <div> {/*just to help, below is is the switch port thing */}
        <NavBar posts = {this.state.posts} />
        <h1>I'm a homepage</h1>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/posts/:id' render = {routerProps => this.renderPosts(routerProps)} />
          <Route component = {NotFound} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
