import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Title = styled.span`
  font-size: 14pt;
  font-weight: bold;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
`

const _Link = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0;
  padding: 0;
`

const _Header = styled.header`
  background: #222;
  padding: 20px 0;
  margin-bottom: 1rem;
  color: white;
  & > div {
    display: flex;
    align-items: center;
    width: 100vw;
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
  }
  .spacer {
    flex-grow: 1;
  }
`

const Header = ({ siteTitle }) => (
  <_Header>
    <div>
      <Title>
        <_Link to="/">{siteTitle}</_Link>
      </Title>
      <span class="spacer"></span>
      <_Link to="/mentoring">
        mentoring <span>👨‍💻</span>
      </_Link>
    </div>
  </_Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
