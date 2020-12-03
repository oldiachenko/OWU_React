import React, {Component} from 'react';

class SelectedPost extends Component {
  render() {
    let {item} = this.props
    return (
      <div>
        Post No {item.id}. Title: {item.title}
        <p>{item.body}</p>
      </div>
    );
  }
}

export default SelectedPost;