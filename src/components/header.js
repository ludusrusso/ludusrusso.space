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
  color: #2f855a;
  text-decoration: none;
  margin: 0;
  padding: 0;
`

const _Header = styled.header`
  padding: 20px 0;
  margin-bottom: 1rem;
  background: #e2e8f0;
  color: white;
  & > div {
    color: red;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: auto;
    box-sizing: border-box;
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
      <span className="spacer"></span>
      <_Link to="/mentoring">
        mentoring{" "}
        <span role="img" aria-label="mentoring">
          👨‍💻
        </span>
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
