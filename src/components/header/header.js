import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Navbar from "./navbar/navbar";


const Header = ({ siteTitle }) => (
  <header className="w-full py-4 sticky top-0 z-50 bg-white     m-auto">
    <Navbar />
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
