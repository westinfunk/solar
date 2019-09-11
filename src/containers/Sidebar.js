import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer, faAd, faAddressCard } from '@fortawesome/free-solid-svg-icons';

class NavLink {
    constructor(name, isActive, link, icon) {
        this.name = name;
        this.isActive = isActive;
        this.link = link;
        this.icon = icon;
    }
}

const navLinks = [
    new NavLink("Projects", true, "#", faHammer), 
    new NavLink("Accounts", false, "pots", faAddressCard), 
    new NavLink("Inactive", false, "#", faAd)
];

const NavLinkItem = function(navLink) {
    let linkClass = navLink.isActive ? "nav-link active" : "nav-link";
    return (
        <li className="nav-item">
        <a className={linkClass} href={navLink.link}>
            <FontAwesomeIcon icon={navLink.icon}/>{" " + navLink.name}</a>
        </li>
    )
}

class Sidebar extends React.Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        {navLinks.map((navLink, index) => NavLinkItem(navLink))}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Sidebar;