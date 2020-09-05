import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const PageTemplate = ({ children, data }) => {
  return (
    <Layout>
      <SEO title="ludusrusso" />
      <div className="max-w-2xl m-auto text-gray-900 mb-10 ">{children}</div>
    </Layout>
  )
}
