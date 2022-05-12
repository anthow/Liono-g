import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar/navbar";


const Header = ({ siteTitle }) => (
  <header className="w-full py-4 bg-secondary-color     m-auto">
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
