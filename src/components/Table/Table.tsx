import React from 'react'

export interface TableProps {
    columns: string[]
    rows: string[][]
}

const Table: React.FC<TableProps> = ({ columns, rows }): JSX.Element => {
    const ths = columns.map((column) => <th>{column}</th>)
    const tds = rows.map((row) => (
        <tr>
            {row.map((r) => (
                <td>{r}</td>
            ))}
        </tr>
    ))
    return (
        <table>
            <thead>
                <tr>{ths}</tr>
            </thead>
            <tbody>{tds}</tbody>
        </table>
    )
}

export default Table
