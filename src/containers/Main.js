import React from 'react';

const Header = (props) => (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 mt-5 border-bottom">
        <h1>{props.title}</h1>
    </div>
)

class Main extends React.Component {
    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <Header title={"Accounts"} />
            </main>
        )
    }
}

export default Main;