import React from 'react';


const BrandButton = (props) => (
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Smythe</a>
)

const SearchField = (props) => (
    <input ClassName="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
)

const SignOutButton = (props) => (
    <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign Out</a>
        </li>
    </ul>
)



class Topbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <BrandButton />
                <SearchField />
                <SignOutButton />
            </nav>
        )
    }
}

export default Topbar;