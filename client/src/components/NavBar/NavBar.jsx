import React from 'react'
import "./navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <nav class="navbar  navbar-light bg-light">
                <div class="navText navbar-text">
                   <h1>New York Times Scraper</h1>
                   <h3>Search for articles of interest</h3>
                </div>
            </nav>
        )
    }
}

export default NavBar;