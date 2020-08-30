import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "emotion-theming"

const theme = {
  colors: {
    primary: "red",
  },
  maxWidth: "960px",
}

const Container = styled.div``

const InnerContainer = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.maxWidth};
  box-sizing: border-box;
  max-width: 100vw;
  padding: 0 10px;
}`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <Header siteTitle={title} />
        <InnerContainer>
          <main>{children}</main>
        </InnerContainer>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
