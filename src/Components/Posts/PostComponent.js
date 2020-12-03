import React, {Component} from 'react';

class PostComponent extends Component {
  render() {
    let {item, selectPost} = this.props
    return (
      <div>
          Post No {item.id}. Title: {item.title}  <button onClick={() => {selectPost(item.id)}}> View post </button>
      </div>
    );
  }
}

export default PostComponent;