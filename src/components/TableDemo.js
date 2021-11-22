import { useTable } from 'react-table';

function TableDemo(props) {
    const columns = props.columns
    const data= props.data
    const errorFetchingApiData = props.errorFetchingApiData
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (errorFetchingApiData ? (<div>Error occured while fetching API data</div>) :
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

export default TableDemo;