import React, {Component} from 'react';
import './coupleStyle.css'

class MarriedCouples extends Component {

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

  women = [
    {
      id: 3,
      name: 'Olga',
      surname: 'Kussul'
    },
    {
      id: 1,
      name: 'Marianna',
      surname: 'Petruk'
    },
    {
      id: 4,
      name: 'Irina',
      surname: 'Potanina'
    },
    {
      id: 2,
      name: 'Anna',
      surname: 'Samoilova'
    },
    {
      id: 5,
      name: 'Elena',
      surname: 'Feschuk'
    },
  ]



  render() {
    return (
      <div className={'couple'}>
        <h3> Married Couple </h3>


      </div>
    );
  }
}

export default MarriedCouples;