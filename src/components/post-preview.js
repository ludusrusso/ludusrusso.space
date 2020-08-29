import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export const PostPreview = ({ post }) => {
  const featureImage = post.frontmatter.featureImage.childImageSharp.fixed.src
  const { title, description, date } = post.frontmatter
  const { timeToRead } = post
  const { path } = post.fields
  return (
    <Link to={path} class="max-w-sm m-auto mt-12 hover:opacity-75">
      <div class="relative shadow">
        <img src={featureImage} alt={title} class="rounded" />
      </div>
      <div class="relative py-4 px-6 w-11/12 m-auto -mt-10 bg-gray-100 rounded z-20 shadow-lg">
        <div class="flex items-center">
          <img
            class="w-12 h-12 rounded-full"
            src="https://ludusrusso.cc/assets/images/profile.jpg"
            alt="Ludovico Russo"
          />
          <div class="ml-3">
            <h4 class="text font-semibold text-green-700">Ludovico Russo</h4>
            <p class="text-xs uppercase tracking-wide text-gray-700 ">{date}</p>
            <p class="text-xs uppercase tracking-wide text-gray-700 ">
              read in {timeToRead} min
            </p>
          </div>
        </div>
        <h3 class="text-lg text-gray-800 mt-3 font-semibold leading-tight">
          {title}
        </h3>
        <p class="text-gray-700 text-sm mt-2">{description}</p>

        <Link
          to={path}
          class="px-4 py-2 rounded text-white inline-block mt-3 border-b-2 bg-green-600 hover:bg-green-700"
        >
          Read more...
        </Link>
      </div>
    </Link>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`

export const PostPreviewList = ({ posts }) => (
  <Container>
    {posts.map(post => (
      <PostPreview post={post} />
    ))}
  </Container>
)
