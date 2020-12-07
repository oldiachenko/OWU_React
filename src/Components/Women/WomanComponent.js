import React, {Component} from 'react';

class WomanComponent extends Component {

  render() {
    let {item} = this.props
    return (
      <div>
        {item.name} {item.surname} 
      </div>
    );
  }
}

export default WomanComponent;