import { Link } from "react-router-dom";
import React from 'react'
const Header = () => {
    return (
        <Header>
            <main>
            <nav>
                <Link to="/post">Post</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/checkout">Check out</Link>
            </nav>
            </main>
        </Header>

    )
}

export default Header