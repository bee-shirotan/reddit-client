import React from 'react';

class Post extends React.Component {
    render () {
        return (
            <div>
                <h1> 
                    i'm post id: {this.props.post.id} 
                </h1>
            </div>
        );
    }
}

export default Post;