import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  text-align: center;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 100px;
  text-align: left;
  width: 100%;
`

export const PageTemplate = ({ children }) => {
  return (
    <Layout>
      <Container>
        <SEO title="ludusrusso" />
        {children}
      </Container>
    </Layout>
  )
}
