import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Title = styled.span`
  font-size: 14pt;
  font-weight: bold;
  font-family: sans-serif;
`

const _Header = styled.header`
  background: #222;
  padding: 20px 0;
  margin-bottom: 1rem;
  & > div {
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
  }
`

const Header = ({ siteTitle }) => (
  <_Header>
    <div>
      <Title style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Title>
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
