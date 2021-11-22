import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';

function EmployeeList() {


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

    const getEmployeeList = () => {
        fetch("https://gorest.co.in/public/v1/users")
            .then(response => response.json())
            .then(employees => {
                setEmployees(employees.data)
            })
            .catch((response) => {
                console.log("response from API", response)
            })
    }

    useEffect(() => {
        getEmployeeList()
    }, [])

    const data = employees
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <>

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}
                                    style={{
                                        borderBottom: 'solid 3px blue',
                                        background: 'green',
                                        color: 'white',
                                        fontWeight: 'bold',
                                      }}
                                    >{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export default EmployeeList;