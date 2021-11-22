import './App.css';
import React from 'react';
import EmployeeList from './components/EmployeeList';



class Employees extends React.Component {

    // lifecycle methods are those which are invoked when components are rendered
    render() {
        return (<><EmployeeList /></>);

    }
}

export default Employees;
