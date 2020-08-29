import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const PostPreview = ({ post }) => (
  <Link
    href={post.fields.path}
    css={tw`max-w-sm rounded overflow-hidden shadow hover:shadow-2xl `}
  >
    <img
      css={tw`w-full`}
      src={post.frontmatter.featureImage.childImageSharp.fixed.src}
      alt="Sunset in the mountains"
    />
    <div css={tw`px-6 py-4`}>
      <div css={tw`font-bold text-xl mb-2`}>{post.frontmatter.title}</div>
      <p css={tw`text-gray-700 text-base`}>{post.frontmatter.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2"></div>
  </Link>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`

export const PostPreviewList = ({ posts }) => (
  <Container>
    {posts.map(post => (
      <PostPreview post={post} />
    ))}
  </Container>
)
