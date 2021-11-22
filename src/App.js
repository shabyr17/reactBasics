import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fruits:
        [
          {
            text: "apple",
            id: 1,
            clicked: 0
          },
          {
            text: "mango",
            id: 2,
            clicked: 0
          },
          {
            text: "grapes",
            id: 3,
            clicked: 0
          },
          {
            text: "banana",
            id: 4,
            clicked: 0
          },
          {
            text: "orange",
            id: 5,
            clicked: 0
          }
        ]
    }
  }

  render() {
    const handleClick = (id) => {
      this.setState({
        fruits: this.state.fruits.map((fruit) => {
          let obj = fruit
          if (fruit.id === id && fruit.text === fruit.text.toLowerCase()) {
            obj.text = fruit.text.toUpperCase()
            obj.clicked = fruit.clicked + 1
          } else if (fruit.id === id && fruit.text === fruit.text.toUpperCase()) {
            obj.text = fruit.text.toLowerCase()
            obj.clicked = fruit.clicked + 1
          }
          return obj
        })
      })
    }

    return (<>

      <h1>
        Fruits Name
      </h1>
      <ul>
        {
          this.state.fruits.map((fruit) => {
            return (
              <li key={fruit.id} onClick={() => { handleClick(fruit.id) }}>
                {fruit.text} {fruit.clicked}
              </li>
            )
          })
        }
      </ul>
    </>);
  }
}

export default App;
