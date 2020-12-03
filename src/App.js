import React, {Component} from 'react';
// import AllUsersComponent from "./Components/AllUsers/AllUsersComponent";
import AllPostsComponent from "./Components/Posts/AllPostsComponent";


class App extends Component {


    render() {

        return (
          <div>
                {/*<AllUsersComponent/>*/}
                <AllPostsComponent/>
          </div>
        );
    }
}

export default App;