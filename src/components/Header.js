import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/* eslint-disable jsx-a11y/anchor-is-valid, no-script-url, jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content */

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo fenua">Fenua</Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;"></a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
