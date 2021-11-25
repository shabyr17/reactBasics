import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import Header from './components/header/header.component';

class App extends Component {

  constructor() {
    super()
    this.state = {
      employees: [],
      searchFilterText: "",
      apiResult: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          return Promise.reject('error 404')
        } else {
          return Promise.reject('some other error: ' + response.status)
        }
      })
      .then(response => {
        this.setState({ employees: response, apiResult: true }, () => {
          this.setState({
            employees: this.state.employees.map((emp) => {
              let obj = emp
              obj.image = `https://robohash.org/${Math.floor(Math.random() * 50)}?set=set2`
              return obj
            })
          })
        })
      })
      .catch(response => { console.log("Error retrieving data") })
  }

  render() {
    const handleSearchInput = (e) => {
      this.setState({ searchFilterText: e.target.value })
    }

    const { employees, searchFilterText } = this.state
    const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().includes(searchFilterText.toLowerCase()))

    return (
      <div className='App'>
        <Header />
        <SearchBar onChange={handleSearchInput} />
        {this.state.apiResult === true ? <CardList employees={filteredEmployees} /> : <div> API not working </div>}
      </div>
    )

  }

}

export default App;