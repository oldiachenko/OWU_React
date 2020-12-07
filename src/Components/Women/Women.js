import React, {Component} from 'react';
import WomanComponent from "./WomanComponent";
import './womenStyle.css'

class Women extends Component {

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
      <div className={'womenClass'}>
        <h3> Women </h3>
        {
          this.women.map(value =>
            <WomanComponent item={value} key={value.id}/>)
        }
      </div>
    );
  }
}

export default Women;