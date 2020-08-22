import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Cnt = styled.div`
  text-align: center;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 100px;
  font-size: 16pt;
  width: 100%;
`

export const PageTemplate = ({ children }) => {
  return (
    <Layout>
      <Cnt>
        <SEO title="ludusrusso" />
        {children}
      </Cnt>
    </Layout>
  )
}
