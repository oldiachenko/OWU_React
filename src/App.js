import React, {Component} from 'react';
import Men from "./Components/Men/Men";
import Women from "./Components/Women/Women";
import './App.css'
import MarriedCouples from "./Components/Married/MarriedCouples";


class App extends Component {


    render() {

        return (
          <div className={'appClass'}>
              <Men/>
              <Women/>
              <MarriedCouples/>
          </div>
        );
    }
}

export default App;


// Створити масив man. { id, name, age, wife_id }
// Створити масив woman. { id, name, age, husband_id }
//
// Поділити сторінку на 3 колонки, в 1 вивести чоловіків, в 2 жінок.
//   В третю колонку ми виводимо пару ( чоловік + жінка, відповідно до id)
//
// Компоненти - Mans, Man, Womens, Woman, MarriedCouples, MarriedCouple