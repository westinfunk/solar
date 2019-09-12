import React from 'react';
import Table from '../components/Table';


const Header = (props) => (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-5 border-bottom">
        <h1>{props.title}</h1>
    </div>
)

const headers = ["#", "Header", "Header", "Header", "Header"]

class DataPiece {
    constructor(pound, header1, header2, header3, header4) {
        this.pound = pound;
        this.header1 = header1;
        this.header2 = header2;
        this.header3 =  header3;
        this.header4 = header4;
    }
}

const data = [
    new DataPiece("1,001", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,002", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,003", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,004", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,005", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,006", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,007", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,008", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,009", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,010", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,011", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,012", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,013", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,014", "Lorem", "ipsum", "dolor", "sit"),
    new DataPiece("1,015", "Lorem", "ipsum", "dolor", "sit"),
    
]

const renderRow = (data) => (
    <tr>
        <td>{data.pound}</td>
        <td>{data.header1}</td>
        <td>{data.header2}</td>
        <td>{data.header3}</td>
        <td>{data.header4}</td>
    </tr>
)
 

class Main extends React.Component {
    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <Header title={"Accounts"} />
                    <Table headers={headers} data={data} renderRow={renderRow} />
            </main>
        )
    }
}

export default Main;