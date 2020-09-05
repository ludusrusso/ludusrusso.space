import React from "react"
import { graphql, Link } from "gatsby"
import { RandomEmoji } from "../utils"
import { PostPreviewList } from "../components/post-preview"
import Layout from "../components/layout"

export const emojis = ["🖖", "🤙", "🛩", "🚀"]

const P = ({ children }) => {
  return <p className="text-xl mt-5">{children}</p>
}

const A = ({ children, href }) => (
  <a
    href={href}
    className="border-b-2 border-green-500 text-green-900 font-semibold hover:bg-green-200"
  >
     {children}
  </a>
)

const IndexPage = props => {
  return (
    <Layout>
      <div className="max-w-xl mx-auto text-gray-900">
        <h1 className="text-4xl text-center mt-10 font-bold">
          I am <span className="text-green-600"> Ludovico </span>{" "}
          <RandomEmoji emojis={emojis} />
        </h1>

        <P>
          I'm a cloud architect ☁️ and a full stack developer 🚀 independent
          consultant based in Italy (Milano) with a background in Cloud Robotics
          🤖 and Computer Vision 📷!
        </P>

        <img src="/svg/dev.svg" className="w-full my-10" alt="ludusrusso" />

        <P>
          I'm passionate on learning new techs, mainly on web and cloud
          computing, making and robotics!
        </P>

        <h2 className="text-4xl text-center mt-20 font-bold">
          I like to <span className="text-green-600">share knowledge</span>! 🤝
        </h2>

        <P>
          I'm a co-organizer of
          <A href="https://www.youtube.com/channel/UCs2Lulo9cfYrI5RHuDCQehQ">
            GDG Cloud Milano
          </A>{" "}
          and I like to speak at tech events and I'm a co-founder of
          <A href="http://www.hackability.it">Hackability</A>, an Italian non
          profit organization that help designers, makers and people with
          disability to work together on Open Source and Open Hardware assistive
          technologies!
        </P>

        <div className="mt-10 max-w-md m-auto shadow">
          <img
            src={props.data.mentoringImg.childImageSharp.fixed.src}
            alt="Mentoring"
          />
          <div className="p-4">
            <h3 className="font-semibold text-xl">
              I offer <span className="text-green-600">Free mentoring</span>
            </h3>
            <p className="text-grey-800 mt-1">
              I offer free one-2-one mentoring sessions on my main interest!
            </p>

            <p className="mt-1">
              <Link className="font-bold text-green-800" to="/mentoring">
                Learn more...
              </Link>
            </p>

            <a
              className="inline-block mt-4 bg-green-600 px-4 py-2 rounded text-white font-bold hover:bg-green-800"
              href="https://calendly.com/ludusrusso/one2one"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a session
            </a>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-4xl text-center mt-20 font-bold">
          I have a <span className="text-green-600">blog</span>! 📖
        </h2>
        <PostPreviewList posts={props.data.allMdx.edges.map(e => e.node)} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query LastBlogPost {
    mentoringImg: file(name: { eq: "mentoring" }) {
      childImageSharp {
        fixed(width: 800) {
          src
        }
      }
    }
    allMdx(
      limit: 10
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { public: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            path
          }
          timeToRead
          frontmatter {
            date(fromNow: false, formatString: "yyyy-MM-DD")
            description
            title
            featureImage {
              childImageSharp {
                fixed(width: 400) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
