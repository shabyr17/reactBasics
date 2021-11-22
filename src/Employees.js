import React, { useState, useEffect } from 'react';
import TableDemo from './components/TableDemo';

function Employees() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Employee List',
                columns: [
                    {
                        Header: 'Id',
                        accessor: 'id',
                    },
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Email',
                        accessor: 'email',
                    },
                    {
                        Header: 'Gender',
                        accessor: 'gender',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    }
                ]
            }
        ],
        []
    )

    const [employees, setEmployees] = useState([])
    const [errorFetchingApiData, setErrorFetchingApiData] = useState(false)

    const getEmployeeList = async () => {
        try {
            const employeeListArr = await fetch("https://gorest.co.in/public/v1/users")
            const responseJson = await employeeListArr.json()
            setEmployees(responseJson.data)
        } catch (error) {
            setErrorFetchingApiData(true)
        }
    }

    useEffect(() => {
        getEmployeeList()
    }, [])

    return TableDemo(columns, employees, errorFetchingApiData)

}

export default Employees;
