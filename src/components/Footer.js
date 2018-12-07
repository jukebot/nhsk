import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <p className="copyright">&copy; National Health Solutions Kenya </p><br />
    <p>Designed by: <a href="https:tumblr.com/daviesdavie/">M. Davis </a>. Built for: <a href="https://www.nhsk.or.ke/">NHS(K)</a></p>     
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
