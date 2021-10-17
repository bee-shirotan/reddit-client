import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

    renderNavLinks = () => {
        const postLinks = this.props.posts.map(post => <NavLink id='topButtons' to = {`/posts/${post.id}`}> Post {post.id} </NavLink> );
        return postLinks;
    }

    render (){
        return (
            <div id='topBar'>
                <NavLink id='topButtons' to = '/'> Home </NavLink>
                {this.renderNavLinks()}
            </div>
        );
    }
}

export default NavBar;