import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { PageTemplate as Template } from "./page"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import { Pre } from "./styles"
import { Disqus } from "gatsby-plugin-disqus"

const Code = ({ children, className }) => {
  const language = className?.replace(/language-/, "") ?? ""

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}

const components = {
  code: Code,
  Link,
}

export default function PageTemplate({ data: { mdx, site } }) {
  const disqusConfig = {
    url: site.siteMetadata.domain + mdx.fields.path,
    identifier: mdx.id,
    title: mdx.title,
  }
  console.log(disqusConfig)
  return (
    <Template>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>

      <Disqus config={disqusConfig} />
    </Template>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        domain
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        path
      }
    }
  }
`
