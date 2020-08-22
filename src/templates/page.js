import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MyLink = styled(Link)`
  color: red;
  text-decoration: none;
  border: 2px solid rgba(0, 0, 0, 0);
  &:hover {
    border: 2px dashed #ccc;
  }
`

const Cnt = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 10px;
  width: 90vw;
  max-width: 800px;
  margin: auto;
  margin-bottom: 100px;
  font-size: 16pt;
  text-align: justify;
`

const getRandomGratings = () => {
  const greatingsEmoji = ["🖖", "🤙", "🛩", "🚀"]
  const idx = Math.trunc(Math.random() * greatingsEmoji.length)
  return greatingsEmoji[idx]
}

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
