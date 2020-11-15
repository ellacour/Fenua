import React from 'react'

/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/Fenuaproject" target="_blank" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/Fenuaproject" target="_blank" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/fenua_project/" target="_blank" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/ellacour/Fenua" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                {/* <li><a href="#" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li> */}
            </ul>
            <ul className="copyright">
                <li>&copy; Fenua project</li><li>Design: <a href="#">Fenua project</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
