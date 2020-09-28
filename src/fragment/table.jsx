import React from 'react'
import Column from './column'

class Table extends React.Component
{
    render(){
        return(
            <table>
                <thead>
                    <tr><Column></Column></tr>
                </thead>
            </table>
        )
    }
}

export default Table;