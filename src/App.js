import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Home from './components/Home';

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
        <h1>I'm a homepage</h1>
        <NavBar posts = {this.state.posts} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/posts/:id' render = {routerProps => this.renderPosts(routerProps)} />
          <Route component = {NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
