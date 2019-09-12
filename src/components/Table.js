import React from 'react';

const Table = (props) => (
    <div className="table-responsive">
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    {props.headers.map(header  => (
                        <th>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data.map(dataElement => props.renderRow(dataElement))}
            </tbody>
        </table>
    </div>
)

export default Table;