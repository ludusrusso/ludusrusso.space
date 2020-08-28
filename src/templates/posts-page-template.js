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
import styled from "@emotion/styled"
import SEO from "../components/seo"

import tw from "tailwind.macro"

const CodeCnt = styled.div`
  margin: 0 -20px;
`

const Code = ({ children, className }) => {
  const language = className?.replace(/language-/, "") ?? ""

  return (
    <CodeCnt>
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
    </CodeCnt>
  )
}

const components = {
  code: Code,
  Link,
  p: tw.p`text-gray-700 text-base mb-4 text-xl`,
}

const BlogContainer = styled.div`
  border: 2px solid #eee;
  border-radius: 10px;
  padding 0 20px;
`

const Title = tw.h1`
font-bold text-4xl mb-2
text-center
`

const ImageCnt = styled.div`
  padding: 40px;
`

const Image = styled.img`
  width: 100%;
`

export default function PageTemplate({ data: { mdx, site } }) {
  const imgSrc = mdx.frontmatter.featureImage.childImageSharp.fixed.src

  const disqusConfig = {
    url: site.siteMetadata.domain + mdx.fields.path,
    identifier: mdx.id,
    title: mdx.title,
  }
  return (
    <Template>
      <Title>{mdx.frontmatter.title}</Title>
      <ImageCnt>
        <Image src={imgSrc} alt={mdx.frontmatter.title} />
      </ImageCnt>

      <SEO
        description={mdx.frontmatter.description}
        title={mdx.frontmatter.title}
        image={imgSrc}
      ></SEO>
      <BlogContainer>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </BlogContainer>

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
        description
        featureImage {
          childImageSharp {
            fixed(width: 960) {
              src
            }
          }
        }
      }
      fields {
        path
      }
    }
  }
`
