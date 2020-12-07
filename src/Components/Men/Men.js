import React, {Component} from 'react';
import ManComponent from "./ManComponent";
import './menStyle.css'

class Men extends Component {
  men = [
    {
      id: 5,
      name: 'Dmitry',
      surname: 'Petrov'
    },
    {
      id: 2,
      name: 'Oleg',
      surname: 'Ivanov'
    },
    {
      id: 4,
      name: 'Artem',
      surname: 'Morozov'
    },
    {
      id: 3,
      name: 'Anton',
      surname: 'Ivin'
    },
    {
      id: 1,
      name: 'Ivan',
      surname: 'Shevchuk'
    }
  ]



  render() {
    return (
      <div className={'menClass'}>
        <h3>Men</h3>
        {
        this.men.map((value) =>
          <ManComponent item={value} key={value.id}/>)
      }

      </div>
    );
  }
}

export default Men;