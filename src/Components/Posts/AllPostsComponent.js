import React, {Component} from 'react';
import PostComponent from "./PostComponent";
import SelectedPost from "./SelectedPost";

class AllPostsComponent extends Component {

  state = {posts: [], selectedPost:null}

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (value => value.json())
    .then (postsFromAPI => this.setState({posts:postsFromAPI}))

}

selectPost = (id) => {
    let selectedPost = this.state.posts.find(post => post.id===id)
    this.setState({selectedPost})
}

  render() {
    let {posts, selectedPost} =this.state
    return (
      <div>
        <h2> All Posts </h2>
        {posts.map(post => (<PostComponent
          item={post}
          key={post.id}
          selectPost={this.selectPost}/>))}
     <hr/>
        {
          selectedPost && <SelectedPost item={selectedPost}/>
        }
      </div>
    );
  }
}

export default AllPostsComponent;